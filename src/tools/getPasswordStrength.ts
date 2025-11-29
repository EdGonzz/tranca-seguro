const strengthSpan = document.getElementById(
  "strength-span"
) as HTMLSpanElement;
const passwordStrength = document.getElementById(
  "password-strength"
) as HTMLDivElement;

export const getPasswordStrength = (
  length: number,
  useNumbers: boolean,
  useSymbols: boolean
) => {
  let score = 0;

  if (length >= 12) score++;
  if (length >= 16) score++;
  if (useNumbers) score++;
  if (useSymbols) score++;

  if (score <= 1) {
    passwordStrength.classList.remove("password-strength-medium");
    passwordStrength.classList.remove("password-strength-strong");
    passwordStrength.classList.add("password-strength-weak");
    strengthSpan.style.color = "red";
    return "Débil";
  }
  if (score <= 3) {
    passwordStrength.classList.remove("password-strength-medium");
    passwordStrength.classList.remove("password-strength-strong");
    passwordStrength.classList.add("password-strength-medium");
    strengthSpan.style.color = "orange";
    return "Medio";
  } else {
    passwordStrength.classList.remove("password-strength-weak");
    passwordStrength.classList.remove("password-strength-medium");
    passwordStrength.classList.add("password-strength-strong");
    strengthSpan.style.color = "#28a745";
    return "Fuerte";
  }
};
