# Sachin Bhopi - Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS, showcasing a unique dual-mode architecture: Single Page Application (SPA) and Route-based navigation.

## 🚀 Live Demo

[View Live Demo](https://sachin-bhopi-portfolio.vercel.app) (Replace with your actual deployment URL)

## 📋 Features

- **Dual Navigation Modes**:
  - **SPA Mode**: Smooth scrolling single-page experience
  - **Route-based Mode**: Traditional multi-page navigation with dedicated URLs
- **Micro-Frontend Architecture**:
  - Demonstrates advanced frontend architecture concepts
  - Seamlessly loads different technology implementations
- **Responsive Design**:
  - Mobile-first approach
  - Fully responsive across all device sizes
- **Dark Mode Support**:
  - Automatic theme detection
  - Manual theme toggle
- **Internationalization (i18n)**:
  - Multi-language support
  - Language detection and switching
- **Modern UI Components**:
  - Clean, professional design
  - Tailwind CSS for styling
  - Smooth animations and transitions

## 🛠️ Technology Stack

- **Frontend**:

  - Next.js 16.0.0
  - React 19.2.0
  - Tailwind CSS 4
  - TypeScript

- **Internationalization**:

  - i18next
  - react-i18next
  - i18next-browser-languagedetector

- **Development Tools**:
  - ESLint
  - TypeScript
  - Concurrently

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- Yarn or npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/about-me-website-sachin.git
   cd about-me-website-sachin
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open [http://localhost:9999](http://localhost:9999) in your browser to see the application.

## 🏗️ Project Structure

```
about-me-website-sachin/
├── public/                  # Static assets
│   ├── sachin.jpg           # Profile image
│   └── ...                  # Other static assets
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/             # API routes
│   │   │   └── download-resume/ # Resume download API
│   │   ├── providers/       # React context providers
│   │   ├── routes/          # Route-based pages
│   │   │   ├── about/       # About page
│   │   │   ├── experience/  # Experience page
│   │   │   ├── personal/    # Personal page
│   │   │   └── skills/      # Skills page
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page (SPA version)
│   ├── assets/              # Assets (PDF, etc.)
│   ├── components/          # Reusable components
│   │   ├── LanguageSwitcher.tsx # Language switcher component
│   │   ├── MicroFrontendLoader.tsx # Micro-frontend loader
│   │   ├── PackageShowcase.tsx # Package showcase component
│   │   └── ReactPortfolioWrapper.tsx # React SPA wrapper
│   └── lib/                 # Utility functions and libraries
│       └── i18n.ts          # i18n configuration
├── .eslintrc.json           # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🧩 Architecture Overview

### Dual Navigation Modes

This portfolio website features two distinct navigation modes:

1. **SPA Mode (Single Page Application)**

   - Default mode on the home page
   - Smooth scrolling between sections
   - All content loaded on a single page
   - Navigation handled by JavaScript scroll events

2. **Route-based Mode**
   - Traditional multi-page navigation
   - Each section has its own URL (e.g., `/routes/about`, `/routes/skills`)
   - Better for SEO and sharing specific sections
   - Accessible via the navigation menu

### Micro-Frontend Implementation

The project showcases a micro-frontend architecture that allows different technologies to coexist:

- **MicroFrontendLoader Component**: Dynamically loads different technology implementations
- **ReactPortfolioWrapper**: Encapsulates the React implementation of the portfolio
- **Technology Switching**: Allows users to experience the same content built with different frameworks

### i18n (Internationalization)

The website supports multiple languages through:

- **i18n.ts**: Configuration for language detection and translation
- **LanguageSwitcher Component**: UI for changing languages
- **Translation Files**: Organized by language code

## 📱 Responsive Design

The portfolio is fully responsive across all device sizes:

- **Mobile-first approach**: Designed for mobile devices first, then scaled up
- **Tailwind CSS**: Utility classes for responsive design
- **Flexible layouts**: Grid and flex layouts that adapt to screen size

## 🔄 State Management

- **React Hooks**: Used for component-level state management
- **Context API**: Used for theme and language preferences

## 🚀 Deployment

### Hostinger Deployment

To deploy this Next.js application on Hostinger:

1. Modify `next.config.ts` to enable static exports:

   ```typescript
   const nextConfig = {
     output: "export",
     images: {
       unoptimized: true,
     },
     // Keep any other existing configurations
   };

   export default nextConfig;
   ```

2. Build the application for static hosting:

   ```bash
   yarn build
   # or
   npm run build
   ```

3. Create a `.htaccess` file in the project root with the following content:

   ```
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. After building, the static files will be in the `out/` directory. Upload all contents of the `out/` directory to your Hostinger hosting account using FTP or the File Manager in Hostinger's control panel.

5. Important: Since we're using static export, server-side features like API routes (including the resume download API) won't work. You'll need to adjust the resume download functionality to use a direct file link instead.

6. Configure your domain in the Hostinger control panel to point to the directory where you uploaded the files.

### Node.js Hosting on Hostinger (Premium Plans)

If you have a Hostinger plan with Node.js support:

1. Build the application without static export:

   ```bash
   yarn build
   # or
   npm run build
   ```

2. Upload the entire project directory to your hosting account.

3. Set up Node.js environment in Hostinger's control panel.

4. Configure the start command to:

   ```bash
   npm start
   ```

5. Set environment variables as needed in the Hostinger control panel.

### Alternative Deployment Options

The application can also be deployed to any hosting service that supports Next.js:

1. Build the application:

   ```bash
   yarn build
   # or
   npm run build
   ```

2. Start the production server:
   ```bash
   yarn start
   # or
   npm start
   ```

### Vercel Deployment

For the easiest deployment experience, use Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure build settings if needed
4. Deploy

## 🚀 GitHub Deployment

### Manual Deployment

To manually deploy this project to GitHub and Hostinger:

1. Create a GitHub repository:

   ```bash
   # Initialize git if not already done
   git init

   # Add all files
   git add .

   # Commit changes
   git commit -m "Initial commit"

   # Add your GitHub repository as remote
   git remote add origin https://github.com/yourusername/about-me-website-sachin.git

   # Push to GitHub
   git push -u origin main
   ```

2. Build for Hostinger deployment:

   ```bash
   # Run the build script
   ./build-for-hostinger.sh
   ```

3. Upload to Hostinger:
   - Upload the contents of the `dist` directory to your Hostinger `public_html` folder
   - Or upload the `hostinger-deploy.zip` file and extract it in your `public_html` folder

### Automated CI/CD Deployment

This project is configured with GitHub Actions for continuous deployment to Hostinger. Whenever you push changes to the main branch, they will be automatically built and deployed to your Hostinger hosting account using FTP.

#### Setup Instructions

1. **Set up FTP access to your Hostinger account**:

   - Follow the detailed instructions in [docs/hostinger-ftp-setup.md](docs/hostinger-ftp-setup.md)

2. **Add required secrets to your GitHub repository**:

   - Go to your GitHub repository > Settings > Secrets and variables > Actions
   - Add the following secrets:
     - `FTP_HOST`: Your Hostinger FTP hostname/server
     - `FTP_USERNAME`: Your Hostinger FTP username
     - `FTP_PASSWORD`: Your Hostinger FTP password
     - `FTP_PORT`: Your Hostinger FTP port (usually 21)

3. **Push changes to trigger deployment**:

   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```

4. **Monitor deployment**:
   - Go to your GitHub repository > Actions tab
   - You'll see the workflow running and can check its status

With this setup, your website will be automatically deployed whenever you push changes to your GitHub repository, eliminating the need for manual uploads.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Sachin Bhopi - [sachin.bhopi92@gmail.com](mailto:sachin.bhopi92@gmail.com)

LinkedIn: [https://www.linkedin.com/in/sachin-bhopi-85377077/](https://www.linkedin.com/in/sachin-bhopi-85377077/)
