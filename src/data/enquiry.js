/* ============================================================
   Official Vedanjay Power service-enquiry destination.
   Single source of truth — every service-enquiry CTA points here.
   forms.gle short links do not accept entry.* prefill params, and
   the form's entry IDs are not available, so no prefill is used
   (per instruction: never fabricate Google Form entry IDs).
   ============================================================ */
export const ENQUIRY_FORM_URL = 'https://forms.gle/hj4z8xhhR8C3LahR9';

// Service-specific CTA labels (destination is the same official form).
export const ENQUIRY_LABELS = {
  home: 'Discuss Your Requirement',
  services: 'Enquire About This Service',
  contact: 'Send a Service Enquiry',
  'qca-forecasting-scheduling': 'Discuss QCA Requirements',
  'open-access-power': 'Discuss Power Requirements',
  'abt-metering-telemetry': 'Enquire About This Service',
  'electrical-infrastructure-transmission': 'Discuss Infrastructure Requirements',
  'grid-studies-consultancy': 'Discuss Grid Requirements',
};
