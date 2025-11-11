import fs from 'fs';
import path from 'path';

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

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Get all content
    const data = readData();
    return res.status(200).json(data);
  } else if (req.method === 'PUT') {
    // For now, we'll just return an error for PUT requests since we don't want to allow public updates
    return res.status(401).json({ error: 'Unauthorized' });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}