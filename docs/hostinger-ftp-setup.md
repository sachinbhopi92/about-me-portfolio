# Setting Up FTP Deployment for Hostinger

This guide will help you set up FTP credentials for automated deployments from GitHub Actions to your Hostinger account.

## 1. Get Your Hostinger FTP Credentials

1. Log in to your Hostinger control panel
2. Navigate to "Files" > "FTP Accounts" or similar section
3. You'll need the following information:
   - FTP hostname/server (e.g., `ftp.yourdomain.com` or an IP address)
   - FTP username (usually starts with your domain name)
   - FTP password
   - FTP port (usually 21)

If you don't have an FTP account set up yet:

1. Click "Create FTP Account" or similar option
2. Follow the instructions to create a new FTP user
3. Make note of all credentials provided

## 2. Test Your FTP Connection

Before proceeding, test your FTP connection to ensure it works:

1. Use an FTP client like FileZilla:

   - Host: Your FTP hostname
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (or as specified)

2. Try connecting and uploading a test file to verify your credentials work correctly

## 3. Add FTP Credentials to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `FTP_HOST`: Your FTP hostname/server
   - `FTP_USERNAME`: Your FTP username
   - `FTP_PASSWORD`: Your FTP password
   - `FTP_PORT`: Your FTP port (usually 21)

## 4. Important Security Notes

- Never commit your FTP credentials to your repository
- Consider creating a specific FTP user just for deployments with limited permissions
- Regularly rotate your FTP password for better security
- If possible, restrict FTP access to specific IP addresses

## 5. Understanding the Deployment Process

The GitHub Actions workflow will:

1. Check out your code
2. Install dependencies
3. Build your project
4. Copy the `.htaccess` file to the output directory
5. Upload all files from the `out` directory to your Hostinger hosting via FTP
6. By default, it will clean the destination directory before uploading (this can be changed in the workflow file)

## 6. Troubleshooting

If you encounter issues with the FTP deployment:

- Check that your FTP credentials are correct
- Verify that the FTP user has write permissions to the target directory
- Check if your hosting has any FTP restrictions (like IP restrictions)
- Look at the GitHub Actions logs for detailed error messages
