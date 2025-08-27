#!/bin/bash

# DNS Migration Commands for sapient-advisors.com → Vercel
# Current site: https://www.sapient-advisors.com/ (Wix)
# Target: https://sapient-advisors-2.vercel.app/ (Vercel)
# Execute AFTER changing DNS settings in Wix panel

echo "🌐 Starting DNS migration from Wix to Vercel..."
echo "📊 Current config: www.sapient-advisors.com → Wix (34.149.87.45)"
echo "🎯 Target config: www.sapient-advisors.com → Vercel"

# Step 1: Add domain to Vercel
echo "📝 Adding domain to Vercel..."
vercel domains add sapient-advisors.com sapient-advisors-2

# Step 2: Add www subdomain
echo "📝 Adding www subdomain..."
vercel domains add www.sapient-advisors.com sapient-advisors-2

# Step 3: Set up DNS records (if using Vercel nameservers)
echo "🔧 Setting up DNS records..."
vercel dns add sapient-advisors.com '@' A 76.76.19.61
vercel dns add sapient-advisors.com www CNAME cname.vercel-dns.com

# Step 4: Create aliases for both domains
echo "🔗 Creating domain aliases..."
vercel alias sapient-advisors-2.vercel.app sapient-advisors.com
vercel alias sapient-advisors-2.vercel.app www.sapient-advisors.com

# Step 5: Verify configuration
echo "✅ Verifying configuration..."
vercel domains ls
echo "🔍 Checking DNS propagation..."
dig +short sapient-advisors.com
dig +short www.sapient-advisors.com

echo "🎉 Migration commands completed!"
echo "🌐 Your site should be available at:"
echo "   - https://sapient-advisors.com"
echo "   - https://www.sapient-advisors.com"
echo "⏱️  DNS propagation may take up to 24-48 hours"
