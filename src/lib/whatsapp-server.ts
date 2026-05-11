// Format quotation data into WhatsApp message
export function formatQuotationMessage(formData: {
  name: string;
  phone: string;
  email: string;
  location: string;
  grade: string;
  volume: string;
  notes: string;
}): string {
  return `*NEW QUOTATION REQUEST* 📋

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Site Location:* ${formData.location}
*Concrete Grade:* ${formData.grade}
*Volume:* ${formData.volume} m³
*Project Notes:* ${formData.notes || 'N/A'}

Please review and follow up with the client.`;
}

// Generate WhatsApp link with message
export function generateWhatsAppLink(message: string): string {
  return `https://wa.me/917698079478?text=${encodeURIComponent(message)}`;
}
