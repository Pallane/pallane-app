import { sanitize } from 'dompurify';
import { hash, compare } from 'bcryptjs';

// Sanitize HTML content
export const sanitizeHtml = (dirty: string): string => {
  return sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href']
  });
};

// Hash sensitive data
export const hashData = async (data: string): Promise<string> => {
  return hash(data, 12);
};

// Compare hashed data
export const compareHash = async (data: string, hashedData: string): Promise<boolean> => {
  return compare(data, hashedData);
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Generate secure random string
export const generateSecureToken = (length: number = 32): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};