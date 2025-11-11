import express from 'express';
import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;
const DB_FILE = path.join(process.cwd(), 'db.json');
const SECRET_KEY = 'wither_networks_secret_key'; // In production, use environment variables

// Middleware
app.use(cors({
  origin: ['http://localhost:8000', 'http://127.0.0.1:8000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(process.cwd(), 'dist');
  app.use(express.static(distPath));
  
  // Serve index.html for any unknown routes (client-side routing)
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Helper function to read data from db.json
const readData = () => {
  try {
    if (fs.existsSync(DB_FILE)) {
      const data = fs.readFileSync(DB_FILE, 'utf8');
      return JSON.parse(data);
    }
    // Return default data structure if file doesn't exist
    return {
      heroTitle: "Welcome to Wither Networks",
      heroSubtitle: "Experience the ultimate gaming platform",
      stats: [
        { value: "10K+", label: "Active Players" },
        { value: "50+", label: "Game Modes" },
        { value: "24/7", label: "Support" }
      ],
      features: [
        { title: "High Performance", description: "Optimized servers for the best gaming experience" },
        { title: "Secure", description: "Advanced security to protect your data" },
        { title: "24/7 Support", description: "Round-the-clock customer support" }
      ],
      gameModes: [
        { name: "Survival", description: "Classic survival gameplay" },
        { name: "Creative", description: "Unleash your creativity" },
        { name: "PvP", description: "Player versus player combat" }
      ],
      ranks: [
        { name: "Bronze", description: "Starting rank for new players" },
        { name: "Silver", description: "For experienced players" },
        { name: "Gold", description: "Elite player rank" }
      ]
    };
  } catch (error) {
    console.error('Error reading data:', error);
    return {};
  }
};

// Helper function to write data to db.json
const writeData = (data) => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
};

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  // Updated authentication with admin credentials
  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ username: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
  }
  
  res.status(401).json({ error: 'Invalid credentials' });
});

// Get all content
app.get('/api/content', (req, res) => {
  const data = readData();
  res.json(data);
});

// Update content (requires authentication)
app.put('/api/content', authenticateToken, (req, res) => {
  const updatedContent = req.body;
  const success = writeData(updatedContent);
  
  if (success) {
    res.json(updatedContent);
  } else {
    res.status(500).json({ error: 'Failed to update content' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});