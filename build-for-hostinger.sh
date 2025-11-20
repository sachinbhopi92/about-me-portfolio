#!/bin/bash

# Clean up previous builds
echo "🧹 Cleaning up previous builds..."
rm -rf .next out dist

# Install dependencies
echo "📦 Installing dependencies..."
yarn install

# Build the project
echo "🔨 Building the project..."
yarn build

# Create a dist directory for Hostinger
echo "📁 Creating dist directory for Hostinger..."
mkdir -p dist

# Copy all files from out directory to dist
echo "📋 Copying files to dist directory..."
cp -r out/* dist/

# Copy .htaccess to dist
echo "🔒 Adding .htaccess file..."
cp .htaccess dist/

# Create a zip file for easy upload
echo "📦 Creating zip file for upload..."
cd dist
zip -r ../hostinger-deploy.zip *
cd ..

echo "✅ Build complete! Upload the contents of the 'dist' folder or the 'hostinger-deploy.zip' file to your Hostinger account."
echo "📂 Files are ready in the 'dist' directory"
echo "📁 Zip file is available at 'hostinger-deploy.zip'"
