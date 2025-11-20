#!/bin/bash

# Deploy script for Hostinger hosting
echo "🚀 Preparing deployment for Hostinger..."

# Ensure resume PDF is in public folder
echo "📄 Copying resume to public folder..."
cp src/assets/Sachin_Bhopi_Lead_UI_Developer_SDE3.pdf public/

# Uncomment static export config in next.config.ts
echo "⚙️ Configuring for static export..."
sed -i 's/\/\/ output: '\''export'\'',/output: '\''export'\'',/' next.config.ts
sed -i 's/\/\/ images: {/images: {/' next.config.ts
sed -i 's/\/\/   unoptimized: true,/  unoptimized: true,/' next.config.ts
sed -i 's/\/\/ },/},/' next.config.ts

# Build the project
echo "🔨 Building project..."
yarn build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Create a zip file of the out directory
    echo "📦 Creating deployment package..."
    zip -r hostinger-deploy.zip out .htaccess
    
    echo "🎉 Deployment package created: hostinger-deploy.zip"
    echo "📤 Upload this file to your Hostinger hosting account and extract it in your web root directory."
else
    echo "❌ Build failed. Please check the errors above."
fi

# Revert changes to next.config.ts
echo "🔄 Reverting configuration changes..."
sed -i 's/output: '\''export'\'',/\/\/ output: '\''export'\'',/' next.config.ts
sed -i 's/images: {/\/\/ images: {/' next.config.ts
sed -i 's/  unoptimized: true,/\/\/   unoptimized: true,/' next.config.ts
sed -i 's/},/\/\/ },/' next.config.ts

echo "✨ Done!"
