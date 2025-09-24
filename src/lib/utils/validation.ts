// lib/utils/validation.ts
export interface UsernameValidation {
  valid: boolean;
  error: string;
}

export function validateUsername(username: string): UsernameValidation {
  if (!username) {
    return { valid: false, error: "Username is required" };
  }

  // Length validation
  if (username.length < 5) {
    return {
      valid: false,
      error: "Username must be at least 5 characters long",
    };
  }

  if (username.length > 32) {
    return { valid: false, error: "Username must be 32 characters or less" };
  }

  // Must start with letter or number
  if (!/^[a-zA-Z0-9]/.test(username)) {
    return {
      valid: false,
      error: "Username must start with a letter or number",
    };
  }

  // Must end with letter or number (not dot)
  if (!/[a-zA-Z0-9]$/.test(username)) {
    return { valid: false, error: "Username cannot end with a dot" };
  }

  // Only alphanumeric and dots allowed
  if (!/^[a-zA-Z0-9.]+$/.test(username)) {
    return {
      valid: false,
      error: "Username can only contain letters, numbers, and dots",
    };
  }

  // No consecutive dots
  if (username.includes("..")) {
    return { valid: false, error: "Username cannot contain consecutive dots" };
  }

  // Reserved usernames
  const reserved = [
    "admin",
    "administrator",
    "root",
    "api",
    "www",
    "mail",
    "email",
    "support",
    "help",
    "info",
    "contact",
    "about",
    "privacy",
    "terms",
    "legal",
    "blog",
    "news",
    "fairdinkum",
    "fair",
    "dinkum",
    "moderator",
    "mod",
    "system",
    "official",
    "staff",
    "team",
    "null",
    "undefined",
    "test",
    "demo",
  ];

  if (reserved.includes(username.toLowerCase())) {
    return {
      valid: false,
      error: "This username is reserved. Please choose another one!",
    };
  }

  return { valid: true, error: "" };
}

export function calculateAge(dateOfBirth: string): number {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export function isAdult(dateOfBirth: string): boolean {
  return calculateAge(dateOfBirth) >= 18;
}

export function canViewNSFW(dateOfBirth: string): boolean {
  return calculateAge(dateOfBirth) >= 21;
}
