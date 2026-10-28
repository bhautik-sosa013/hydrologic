// RFC 5322 email validation regex
export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// International phone validation (e.g., +91-XXXXXXXXXX)
export const PHONE_REGEX = /^\+?[1-9]\d{1,14}$|^\+\d{2}-\d{10}$/;

// Contact form payload type
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  project_details: string;
}

// Office contact information
export const OFFICE_INFO = {
  address: 'Hydrologic Innovation Pvt. Ltd.',
  street: 'PLOT NO 478/1, SECTOR 5-A',
  area: 'Sector Ring Road, Sector 5-A',
  city: 'Gandhinagar',
  state: 'Gujarat',
  pincode: '382006',
  country: 'India',
  email: 'info@hydrologic.in',
  phone: '+91-8866308738',
  workingHours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
};

export const BUSINESS_CREDENTIALS = [
  { label: 'MSME', value: 'UDHYAM-GJ-09-0059328' },
  { label: 'ISO', value: '9001:2015 Certified' },
  { label: 'GST', value: '24AASFH3268D1ZB' },
];

