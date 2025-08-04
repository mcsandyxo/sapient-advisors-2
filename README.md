# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/8acfed5e-fc24-4be8-aae2-941a24c2f830

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/8acfed5e-fc24-4be8-aae2-941a24c2f830) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 🚀 Deployment & Staging

This project is configured for automatic deployment using **Vercel** and **GitHub Actions**:

### Environments
- **Staging**: Deploys automatically from `staging` branch
- **Production**: Deploys automatically from `main/master` branch or releases

### Quick Setup
1. **Set up environment variables:**
   ```bash
   cp env.template .env.local
   # Edit .env.local with your HubSpot credentials
   ```

2. **For full deployment setup**, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Available Scripts
```bash
npm run dev                    # Development server
npm run build:staging          # Build for staging
npm run build:prod             # Build for production
npm run lint                   # Run linter
npm run preview:staging        # Preview staging build
```

## How can I deploy this project?

### Option 1: Lovable (Simple)
Simply open [Lovable](https://lovable.dev/projects/8acfed5e-fc24-4be8-aae2-941a24c2f830) and click on Share → Publish.

### Option 2: Vercel + GitHub Actions (Recommended)
1. Follow the complete setup guide in [DEPLOYMENT.md](./DEPLOYMENT.md)
2. Push to `staging` branch for staging deployment
3. Push to `main` branch for production deployment

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 📁 Project Structure

```
sapient-advisors-2/
├── .github/workflows/     # GitHub Actions CI/CD
├── src/
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── config/          # Configuration files
│   └── services/        # API services
├── public/              # Static assets
├── vercel.json          # Vercel configuration
├── env.template         # Environment variables template
└── DEPLOYMENT.md        # Deployment guide
```
