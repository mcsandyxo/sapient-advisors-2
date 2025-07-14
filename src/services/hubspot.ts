import { HUBSPOT_CONFIG, HubSpotFormData, HubSpotFormField, HubSpotSubmissionResponse } from '../config/hubspot';

/**
 * HubSpot API Service
 * Handles form submissions and contact creation
 */
export class HubSpotService {
  private static instance: HubSpotService;
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = `https://api.hubapi.com`;
  }

  public static getInstance(): HubSpotService {
    if (!HubSpotService.instance) {
      HubSpotService.instance = new HubSpotService();
    }
    return HubSpotService.instance;
  }

  /**
   * Submit form data to HubSpot using Forms API
   * This method uses the HubSpot Forms API which doesn't require authentication
   */
  async submitForm(formData: HubSpotFormData): Promise<HubSpotSubmissionResponse> {
    try {
      const { portalId, formId } = HUBSPOT_CONFIG;
      
      // Validate configuration
      if (!portalId || portalId === 'your_portal_id_here') {
        throw new Error('HubSpot Portal ID not configured');
      }
      
      if (!formId || formId === 'your_form_id_here') {
        throw new Error('HubSpot Form ID not configured');
      }

      // Convert form data to HubSpot format
      const fields: HubSpotFormField[] = [
        { name: 'firstname', value: formData.firstName },
        { name: 'lastname', value: formData.lastName },
        { name: 'email', value: formData.email },
        { name: 'company', value: formData.company },
      ];

      // Add optional fields
      if (formData.phone) {
        fields.push({ name: 'phone', value: formData.phone });
      }
      
      if (formData.message) {
        fields.push({ name: 'message', value: formData.message });
      }

      // Prepare submission data
      const submissionData = {
        fields,
        context: {
          pageUri: window.location.href,
          pageName: document.title,
          hutk: this.getHubSpotTrackingCookie(),
        },
      };

      // Submit to HubSpot Forms API
      const response = await fetch(
        `${this.baseUrl}/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      
      return {
        success: true,
        message: 'Form submitted successfully',
      };

    } catch (error) {
      console.error('HubSpot form submission error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  /**
   * Create or update contact using Contacts API
   * This method requires API key authentication
   */
  async createContact(formData: HubSpotFormData): Promise<HubSpotSubmissionResponse> {
    try {
      const { apiKey } = HUBSPOT_CONFIG;
      
      if (!apiKey || apiKey === 'your_api_key_here') {
        throw new Error('HubSpot API Key not configured');
      }

      const contactData = {
        properties: {
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || '',
          message: formData.message || '',
        },
      };

      const response = await fetch(`${this.baseUrl}/crm/v3/objects/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      
      return {
        success: true,
        message: 'Contact created successfully',
      };

    } catch (error) {
      console.error('HubSpot contact creation error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  /**
   * Get HubSpot tracking cookie for better tracking
   */
  private getHubSpotTrackingCookie(): string | undefined {
    const name = 'hubspotutk';
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift();
    }
    return undefined;
  }

  /**
   * Load HubSpot tracking script
   */
  static loadTrackingScript(): void {
    const { portalId } = HUBSPOT_CONFIG;
    
    if (!portalId || portalId === 'your_portal_id_here') {
      console.warn('HubSpot Portal ID not configured - tracking script not loaded');
      return;
    }

    // Check if script already exists
    if (document.getElementById('hubspot-tracking-script')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'hubspot-tracking-script';
    script.src = `//js.hs-scripts.com/${portalId}.js`;
    script.async = true;
    script.defer = true;
    
    document.head.appendChild(script);
  }
}

// Export singleton instance
export const hubSpotService = HubSpotService.getInstance(); 