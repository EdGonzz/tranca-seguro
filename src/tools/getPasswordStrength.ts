export const getPasswordStrength = (
  length: number,
  useNumbers: boolean,
  useSymbols: boolean
) => {
  let score = 0;

  if (length >= 12) score++;
  if (useNumbers) score++;
  if (useSymbols) score++;

  if (score === 1) return "Débil";
  if (score === 2) return "Medio";
  if (score === 3) return "Fuerte";
};
