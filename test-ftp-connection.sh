#!/bin/bash

# This script helps test FTP connection and find the correct FTP host

# Function to test FTP connection
test_ftp_connection() {
    local host="$1"
    local username="$2"
    local password="$3"
    local port="${4:-21}"
    
    echo "Testing connection to $host:$port with username $username..."
    
    # Create a temporary file for FTP commands
    temp_file=$(mktemp)
    echo "open $host $port" > "$temp_file"
    echo "user $username $password" >> "$temp_file"
    echo "quit" >> "$temp_file"
    
    # Try to connect using ftp command
    ftp -n < "$temp_file" > /dev/null 2>&1
    result=$?
    
    # Remove temporary file
    rm "$temp_file"
    
    if [ $result -eq 0 ]; then
        echo "✅ Connection successful to $host"
        return 0
    else
        echo "❌ Connection failed to $host"
        return 1
    fi
}

# Common Hostinger FTP hosts to try
echo "Let's find your correct Hostinger FTP host"
echo "----------------------------------------"

# Get your domain name
read -p "Enter your domain name (e.g., example.com): " domain

# Get your FTP username
read -p "Enter your FTP username: " username

# Get your FTP password (hidden input)
read -s -p "Enter your FTP password: " password
echo ""

# Try common Hostinger FTP hosts
hosts=(
    "ftp.$domain"
    "ftp.hostinger.com"
    "ftp.hostinger.web.com"
    "ftp1.hostinger.com"
    "ftp2.hostinger.com"
    "ftp3.hostinger.com"
    "$domain"
)

# Try each host
success=false
for host in "${hosts[@]}"; do
    if test_ftp_connection "$host" "$username" "$password"; then
        echo ""
        echo "✅ Found working FTP host: $host"
        echo ""
        echo "To update your GitHub secret:"
        echo "1. Go to your GitHub repository"
        echo "2. Navigate to Settings > Secrets and variables > Actions"
        echo "3. Update FTP_HOST with: $host"
        success=true
        break
    fi
done

if [ "$success" = false ]; then
    echo ""
    echo "❌ Could not find a working FTP host."
    echo "Please check your Hostinger control panel for the correct FTP hostname."
fi

# Try to ping the current FTP_HOST
echo ""
echo "Let's check if your current FTP_HOST is reachable:"
read -p "Enter your current FTP_HOST value from GitHub secrets: " current_host
ping -c 4 "$current_host"

echo ""
echo "If you're still having issues, please contact Hostinger support for the correct FTP details."
