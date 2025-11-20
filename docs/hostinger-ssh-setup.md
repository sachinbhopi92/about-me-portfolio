# Setting Up SSH Access for Hostinger

This guide will help you set up SSH access to your Hostinger account for automated deployments from GitHub Actions.

## 1. Generate SSH Key Pair

First, you need to generate an SSH key pair on your local machine:

```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com" -f ~/.ssh/hostinger_deploy_key
```

This will create two files:

- `~/.ssh/hostinger_deploy_key` (private key)
- `~/.ssh/hostinger_deploy_key.pub` (public key)

## 2. Add Public Key to Hostinger

1. Log in to your Hostinger control panel
2. Navigate to "SSH Access" or "SSH Keys" section
3. Click "Add SSH Key" or similar option
4. Give your key a name (e.g., "GitHub Actions Deployment")
5. Copy the contents of your public key file:
   ```bash
   cat ~/.ssh/hostinger_deploy_key.pub
   ```
6. Paste the public key into the provided field
7. Save the key

## 3. Test SSH Connection

Test your SSH connection to ensure it's working:

```bash
ssh -i ~/.ssh/hostinger_deploy_key your-username@your-hostinger-hostname
```

Replace `your-username` and `your-hostinger-hostname` with your actual Hostinger SSH username and hostname.

## 4. Get Known Hosts Information

To securely connect to your Hostinger server, you need to add its fingerprint to known_hosts:

```bash
ssh-keyscan -H your-hostinger-hostname > known_hosts.txt
```

The content of this file will be used as a GitHub secret.

## 5. Add SSH Private Key and Known Hosts to GitHub Secrets

1. Copy your private key:

   ```bash
   cat ~/.ssh/hostinger_deploy_key
   ```

2. Go to your GitHub repository
3. Navigate to Settings > Secrets and variables > Actions
4. Add the following secrets:
   - `HOSTINGER_SSH_PRIVATE_KEY`: Your private key (entire contents)
   - `HOSTINGER_KNOWN_HOSTS`: Contents of the known_hosts.txt file
   - `HOSTINGER_USERNAME`: Your Hostinger SSH username
   - `HOSTINGER_HOST`: Your Hostinger hostname (e.g., `123.123.123.123`)
   - `HOSTINGER_PATH`: Path to your website directory (e.g., `/public_html`)

## 6. Important Security Notes

- Never commit your private key to your repository
- Make sure your private key has restricted permissions:
  ```bash
  chmod 600 ~/.ssh/hostinger_deploy_key
  ```
- Consider using a deployment key with limited access
- Regularly rotate your SSH keys for better security
