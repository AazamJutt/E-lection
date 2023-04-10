export function licenseValidtor(license: string): string {
  if (!license) return "License can't be empty";
  if (license.length < 17) return "License length must be 17.";
  const pattern = /^([A-Z]\d{3}-\d{3}-\d{2}-\d{3}-\d{1})$/;
  if (pattern.test(license)) {
    return "License is not valid";
  }
  return "";
}
