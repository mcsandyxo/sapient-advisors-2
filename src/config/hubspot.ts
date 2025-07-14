// HubSpot Configuration
// Update these values with your actual HubSpot credentials
export const HUBSPOT_CONFIG = {
  portalId: import.meta.env.VITE_HUBSPOT_PORTAL_ID || 'your_portal_id_here',
  formId: import.meta.env.VITE_HUBSPOT_FORM_ID || 'your_form_id_here',
  apiKey: import.meta.env.VITE_HUBSPOT_API_KEY || 'your_api_key_here',
  region: 'na1', // Change to your HubSpot region if different (na1, eu1, etc.)
};

// HubSpot Form Submission Types
export interface HubSpotFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
}

export interface HubSpotFormField {
  name: string;
  value: string;
}

export interface HubSpotSubmissionResponse {
  success: boolean;
  message?: string;
  error?: string;
} 