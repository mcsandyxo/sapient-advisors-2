#!/bin/bash
cd /Users/federicocrespo/sapient-advisors-2

# Add changes and commit
git add .gitignore
git commit -m "Add .vercel to gitignore" || echo "Nothing to commit"

# Push to vercel remote
git push vercel staging --force

# Deploy to production
vercel --prod --yes