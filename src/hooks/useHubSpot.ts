import { useState, useEffect } from 'react';
import { hubSpotService, HubSpotService } from '../services/hubspot';
import { HubSpotFormData, HubSpotSubmissionResponse } from '../config/hubspot';

interface UseHubSpotReturn {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  submitForm: (formData: HubSpotFormData) => Promise<void>;
  createContact: (formData: HubSpotFormData) => Promise<void>;
  reset: () => void;
}

/**
 * Custom hook for HubSpot integration
 * Provides form submission functionality with loading states and error handling
 */
export const useHubSpot = (): UseHubSpotReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load HubSpot tracking script on mount
  useEffect(() => {
    HubSpotService.loadTrackingScript();
  }, []);

  /**
   * Submit form using HubSpot Forms API
   * This is the recommended approach as it doesn't require API key authentication
   */
  const submitForm = async (formData: HubSpotFormData): Promise<void> => {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      const result: HubSpotSubmissionResponse = await hubSpotService.submitForm(formData);
      
      if (result.success) {
        setIsSuccess(true);
      } else {
        setError(result.error || 'Form submission failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Create contact using HubSpot Contacts API
   * This method requires API key authentication
   */
  const createContact = async (formData: HubSpotFormData): Promise<void> => {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      const result: HubSpotSubmissionResponse = await hubSpotService.createContact(formData);
      
      if (result.success) {
        setIsSuccess(true);
      } else {
        setError(result.error || 'Contact creation failed');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Reset the hook state
   */
  const reset = (): void => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
  };

  return {
    isSubmitting,
    isSuccess,
    error,
    submitForm,
    createContact,
    reset,
  };
};

export default useHubSpot; 