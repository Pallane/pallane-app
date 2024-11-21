import { z } from 'zod';

// Liste des domaines email interdits
const FORBIDDEN_DOMAINS = [
  'gmail.com',
  'outlook.com',
  'hotmail.com',
  'yahoo.com',
  'proton.com'
];

// Validation du mot de passe
export const passwordSchema = z
  .string()
  .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
  .regex(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule')
  .regex(/[a-z]/, 'Le mot de passe doit contenir au moins une minuscule')
  .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
  .regex(
    /[^A-Za-z0-9]/,
    'Le mot de passe doit contenir au moins un caractère spécial'
  );

// Validation de l'email
export const emailSchema = z
  .string()
  .email('Adresse email invalide')
  .refine((email) => {
    const domain = email.split('@')[1];
    return !FORBIDDEN_DOMAINS.includes(domain);
  }, 'Veuillez utiliser une adresse email professionnelle');

// Schéma de validation pour l'inscription
export const signUpSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  companyName: z.string().min(2, 'Le nom de l\'entreprise est requis')
});

// Schéma de validation pour la connexion
export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Le mot de passe est requis')
});