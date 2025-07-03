// src/utils/whatsappUtils.js

// Your business WhatsApp number (replace with your actual number)
const BUSINESS_PHONE = "+27698061824"; // Replace with your WhatsApp number

/**
 * Opens WhatsApp with a pre-filled message
 * @param {string} message - The message to send
 * @param {string} phoneNumber - Optional phone number (uses business number by default)
 */
export const openWhatsApp = (message, phoneNumber = BUSINESS_PHONE) => {
  // Clean phone number (remove any non-digit characters except +)
  const cleanPhone = phoneNumber.replace(/[^\d+]/g, '');
  
  // Create WhatsApp URL with pre-filled message
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  
  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank');
};

/**
 * Predefined messages for different button types
 */
export const WhatsAppMessages = {
  BOOK_SESSION: "I want to book a session",
  GENERAL_INQUIRY: "Hello! I'm interested in your services.",
  APPOINTMENT: "Hi! I'd like to book an appointment.",
  CONSULTATION: "I would like to schedule a consultation.",
  SERVICES_INFO: "Can you tell me more about your services?",
  PRICING: "I'd like to know about your pricing.",
  AVAILABILITY: "What are your available time slots?",
  BOOK_General_Health: "I want to book a General Health & Consultation session",
  IMMUNIZATIONS: "I want to book a Immunizations / Well-Baby Clinic session",
  FAMILY_PLANNING: "I want to book Family Planning & Sexual Reproductive Health",
  ANTENATAL_SERVICE: "I want to book an Antenatal Care service",
  PREP_TREATMENT: "I want to book a PREP Treatment session",
  VITAMIN_DRIP: " I want to get Vitamin Drip"
};

/**
 * Quick functions for common actions
 */
export const whatsappActions = {
  bookSession: () => openWhatsApp(WhatsAppMessages.BOOK_SESSION),
  generalInquiry: () => openWhatsApp(WhatsAppMessages.GENERAL_INQUIRY),
  bookAppointment: () => openWhatsApp(WhatsAppMessages.APPOINTMENT),
  requestConsultation: () => openWhatsApp(WhatsAppMessages.CONSULTATION),
  askAboutServices: () => openWhatsApp(WhatsAppMessages.SERVICES_INFO),
  askAboutPricing: () => openWhatsApp(WhatsAppMessages.PRICING),
  checkAvailability: () => openWhatsApp(WhatsAppMessages.AVAILABILITY),
  generalHealth: () => openWhatsApp(WhatsAppMessages.BOOK_General_Health),
  immunizations: () => openWhatsApp(WhatsAppMessages.IMMUNIZATIONS),
  familyPlanning: () => openWhatsApp(WhatsAppMessages.FAMILY_PLANNING),
  antenatalService: () => openWhatsApp(WhatsAppMessages.ANTENATAL_SERVICE),
  prepTreatment: () => openWhatsApp(WhatsAppMessages.PREP_TREATMENT),
  vitaminDrip: () => openWhatsApp(WhatsAppMessages.VITAMIN_DRIP),
};

export default {
  openWhatsApp,
  WhatsAppMessages,
  whatsappActions
};