# HubSpot Integration Setup Guide

This guide explains how to configure HubSpot integration for the Sapient Advisors website.

## Prerequisites

1. A HubSpot account with Forms and Contacts access
2. A HubSpot form created for lead capture
3. (Optional) A HubSpot API key for direct contact creation

## Configuration Steps

### Step 1: Get Your HubSpot Credentials

1. **Portal ID**: 
   - Go to HubSpot Settings → Account & Billing → Account Information
   - Copy your Hub ID (Portal ID)

2. **Form ID**:
   - Go to Marketing → Lead Capture → Forms
   - Find your form and copy the Form ID from the URL or form settings

3. **API Key (Optional)**:
   - Go to Settings → Integrations → API Key
   - Create a new API key if you don't have one

### Step 2: Configure the Application

Update the file `src/config/hubspot.ts` with your credentials:

```typescript
export const HUBSPOT_CONFIG = {
  portalId: 'YOUR_PORTAL_ID_HERE',
  formId: 'YOUR_FORM_ID_HERE', 
  apiKey: 'YOUR_API_KEY_HERE', // Optional
  region: 'na1', // Change if your HubSpot is in a different region
};
```

### Step 3: Environment Variables (Alternative)

Alternatively, you can use environment variables by creating a `.env.local` file:

```bash
VITE_HUBSPOT_PORTAL_ID=your_portal_id_here
VITE_HUBSPOT_FORM_ID=your_form_id_here
VITE_HUBSPOT_API_KEY=your_api_key_here
```

## HubSpot Form Setup

Make sure your HubSpot form has these fields:

- **firstname** (First Name)
- **lastname** (Last Name)
- **email** (Email)
- **company** (Company)
- **phone** (Phone) - Optional
- **message** (Message) - Optional

## Integration Methods

### Method 1: Forms API (Recommended)
Uses HubSpot's Forms API which doesn't require authentication:
```typescript
const { submitForm } = useHubSpot();
await submitForm(formData);
```

### Method 2: Contacts API
Uses HubSpot's Contacts API which requires an API key:
```typescript
const { createContact } = useHubSpot();
await createContact(formData);
```

## Usage in Components

```typescript
import useHubSpot from '../hooks/useHubSpot';

const MyComponent = () => {
  const { isSubmitting, isSuccess, error, submitForm } = useHubSpot();

  const handleSubmit = async (formData) => {
    await submitForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      company: 'Acme Corp',
      phone: '+1234567890', // Optional
      message: 'Contact request' // Optional
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {isSuccess && <p>Success!</p>}
      {error && <p>Error: {error}</p>}
    </form>
  );
};
```

## Testing

1. Make sure your HubSpot form is published and active
2. Submit a test form on your website
3. Check HubSpot Contacts or Form submissions to verify data is received
4. Check browser console for any errors

## Troubleshooting

### Common Issues:

1. **"HubSpot Portal ID not configured"**
   - Make sure you've updated the Portal ID in the config file

2. **"HubSpot Form ID not configured"**
   - Verify your Form ID is correct and the form is published

3. **CORS Errors**
   - HubSpot Forms API should not have CORS issues
   - If using Contacts API, make sure your domain is whitelisted

4. **Form not submitting**
   - Check browser console for errors
   - Verify all required fields are included
   - Make sure form field names match HubSpot form configuration

## Security Notes

- Never commit API keys to version control
- Use environment variables for sensitive information
- The Forms API is safer as it doesn't require authentication
- Consider using HubSpot's tracking script for better analytics

## Support

For HubSpot API documentation, visit:
- [HubSpot Forms API](https://developers.hubspot.com/docs/api/marketing/forms)
- [HubSpot Contacts API](https://developers.hubspot.com/docs/api/crm/contacts) 