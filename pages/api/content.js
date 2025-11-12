import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';

// Helper function to read data from db.json
const readData = () => {
  try {
    const DB_FILE = path.join(process.cwd(), 'db.json');
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
        { name: "Survival", description: "Classic survival gameplay", status: "LIVE" },
        { name: "Creative", description: "Unleash your creativity", status: "SOON!" },
        { name: "PvP", description: "Player versus player combat", status: "LIVE" }
      ],
      ranks: [
        { name: "Bronze", description: "Starting rank for new players", price: "$2.99" },
        { name: "Silver", description: "For experienced players", price: "$7.99" },
        { name: "Gold", description: "Elite player rank", price: "$14.99" }
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
    const DB_FILE = path.join(process.cwd(), 'db.json');
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
};

// Helper function to verify JWT token
const verifyToken = (token) => {
  try {
    const SECRET_KEY = process.env.SECRET_KEY || 'wither_networks_secret_key';
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    return null;
  }
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Get all content
    const data = readData();
    return res.status(200).json(data);
  } else if (req.method === 'PUT') {
    // Check for authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Missing or invalid authorization header' });
    }
    
    // Extract token
    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    // Verify token
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
    
    // Update content
    const success = writeData(req.body);
    if (success) {
      return res.status(200).json({ message: 'Content updated successfully' });
    } else {
      return res.status(500).json({ error: 'Failed to update content' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}