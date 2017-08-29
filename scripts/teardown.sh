#!/bin/bash 

echo "Setting up the chatbot enviornment"
echo "enabling port 3978 on the firewall"
sudo ufw delete allow 3978
sudo ufw reload

echo "done"
