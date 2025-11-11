#!/bin/bash

# Wither Networks Deployment Script
# This script helps deploy the website to a new VPS

echo "Wither Networks Deployment Script"
echo "================================="

# Check if running on a new VPS
if [ ! -d ".git" ]; then
    echo "Cloning repository..."
    git clone https://github.com/your-username/withernetworks.git .
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Create environment file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "Creating .env file..."
    cat > .env << EOF
NODE_ENV=production
PORT=3001
EOF
fi

# Build the frontend
echo "Building frontend..."
npm run build

# Start the services
echo "Starting services..."
npm run dev-server &
npm run preview &

echo "Deployment complete!"
echo "Frontend: http://your-server-ip:8000"
echo "Backend: http://your-server-ip:3001"