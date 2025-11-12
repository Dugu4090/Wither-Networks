import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password } = req.body;
  
  // Updated authentication with admin credentials
  if (username === 'admin' && password === 'admin') {
    const SECRET_KEY = process.env.SECRET_KEY || 'wither_networks_secret_key';
    const token = jwt.sign({ username: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }
  
  res.status(401).json({ error: 'Invalid credentials' });
}