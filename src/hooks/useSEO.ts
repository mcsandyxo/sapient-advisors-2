import { useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Update meta description
    updateMetaTag('description', seoData.description);

    // Update keywords if provided
    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords);
    }

    // Update canonical URL
    if (seoData.canonicalUrl) {
      updateCanonicalLink(seoData.canonicalUrl);
    }

    // Update Open Graph tags
    updateMetaProperty('og:title', seoData.title);
    updateMetaProperty('og:description', seoData.description);
    updateMetaProperty('og:url', seoData.canonicalUrl || window.location.href);
    updateMetaProperty('og:type', seoData.ogType || 'website');
    
    if (seoData.ogImage) {
      updateMetaProperty('og:image', seoData.ogImage);
    }

    // Update Twitter Card tags
    updateMetaName('twitter:title', seoData.title);
    updateMetaName('twitter:description', seoData.description);
    updateMetaName('twitter:card', seoData.twitterCard || 'summary_large_image');
    
    if (seoData.ogImage) {
      updateMetaName('twitter:image', seoData.ogImage);
    }

    // Update structured data if provided
    if (seoData.structuredData) {
      updateStructuredData(seoData.structuredData);
    }

    // Cleanup function
    return () => {
      // Reset to default title when component unmounts
      document.title = 'Sapient Advisors | AI & Data Strategy Consultancy for Financial Services';
    };
  }, [seoData]);
};

// Helper functions
const updateMetaTag = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateMetaProperty = (property: string, content: string) => {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateMetaName = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateCanonicalLink = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
};

const updateStructuredData = (data: object) => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"][data-page-specific="true"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-page-specific', 'true');
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// SEO data for each page
export const SEO_DATA = {
  home: {
    title: 'Sapient Advisors | AI & Data Strategy Consultancy for Financial Services',
    description: 'Transform your financial services business with AI-enabled solutions in weeks, not quarters. Expert data strategy, product development, and monetization for mid-market firms.',
    keywords: 'AI consultancy, data strategy, financial services, machine learning, product development, digital transformation, fintech, data monetization, AI implementation',
    canonicalUrl: 'https://www.sapientadvisors.com',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Sapient Advisors - AI & Data Strategy Consultancy",
      "description": "Transform your financial services business with AI-enabled solutions in weeks, not quarters.",
      "url": "https://www.sapientadvisors.com",
      "about": {
        "@type": "Organization",
        "name": "Sapient Advisors",
        "description": "AI and data strategy consultancy specializing in financial services transformation."
      }
    }
  },
  about: {
    title: 'About Us | Sapient Advisors - AI & Data Strategy Experts',
    description: 'Meet our team of AI and data strategy experts. Learn about our mission to empower financial services organizations with battle-tested AI solutions and proven methodologies.',
    keywords: 'about sapient advisors, AI experts, data strategy team, financial services consultants, AI implementation specialists',
    canonicalUrl: 'https://www.sapientadvisors.com/about',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Sapient Advisors",
      "description": "Learn about our team of AI and data strategy experts specializing in financial services transformation.",
      "url": "https://www.sapientadvisors.com/about",
      "mainEntity": {
        "@type": "Organization",
        "name": "Sapient Advisors",
        "foundingDate": "2020",
        "founder": {
          "@type": "Person",
          "name": "Maribeth Martorana"
        }
      }
    }
  },
  services: {
    title: 'AI & Data Services | Sapient Advisors - Financial Services Solutions',
    description: 'Comprehensive AI and data services including Blueprint Sprints, Data Lifecycle Strategy, MLOps, Product Development, and Engineering Architecture for financial services.',
    keywords: 'AI services, data lifecycle strategy, MLOps, product development, engineering architecture, financial services solutions, AI blueprint sprint',
    canonicalUrl: 'https://www.sapientadvisors.com/services',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI & Data Strategy Services",
      "description": "Comprehensive AI and data services for financial services organizations.",
      "provider": {
        "@type": "Organization",
        "name": "Sapient Advisors"
      },
      "serviceType": [
        "AI Blueprint Sprint",
        "Data Lifecycle Strategy", 
        "MLOps & AI Readiness",
        "Product Development",
        "Engineering Architecture"
      ]
    }
  },
  caseStudies: {
    title: 'Case Studies | Sapient Advisors - Proven AI & Data Success Stories',
    description: 'Explore our proven track record with real-world AI and data transformation case studies across financial services, legal, and technology sectors.',
    keywords: 'AI case studies, data transformation success stories, financial services projects, AI implementation results, client success stories',
    canonicalUrl: 'https://www.sapientadvisors.com/case-studies',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Sapient Advisors Case Studies",
      "description": "Real-world AI and data transformation success stories and case studies.",
      "url": "https://www.sapientadvisors.com/case-studies"
    }
  },
  news: {
    title: 'Insights & News | Sapient Advisors - AI & Data Thought Leadership',
    description: 'Stay updated with the latest insights on AI, data strategy, and financial services transformation. Expert thought leadership and industry analysis.',
    keywords: 'AI insights, data strategy news, financial services trends, AI thought leadership, machine learning insights, fintech news',
    canonicalUrl: 'https://www.sapientadvisors.com/news',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Sapient Advisors Insights",
      "description": "Expert insights on AI, data strategy, and financial services transformation.",
      "url": "https://www.sapientadvisors.com/news"
    }
  },
  contact: {
    title: 'Contact Us | Sapient Advisors - Get Started with AI & Data Strategy',
    description: 'Ready to transform your business with AI? Contact Sapient Advisors for expert consultation on data strategy, AI implementation, and digital transformation.',
    keywords: 'contact sapient advisors, AI consultation, data strategy consultation, book consultation, Miami AI consultancy, financial services consulting',
    canonicalUrl: 'https://www.sapientadvisors.com/contact',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Sapient Advisors",
      "description": "Get in touch with our AI and data strategy experts for consultation.",
      "url": "https://www.sapientadvisors.com/contact"
    }
  }
};