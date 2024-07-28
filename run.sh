#!/bin/bash

# Install Node
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y nodejs

# Initialize project
mkdir myapp
cd myapp
npm init -y

# Install Express
npm install express

# Start the server
node app.js