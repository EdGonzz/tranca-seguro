import { generatePassword } from "./generatePassword";
import { getPasswordStrength } from "./getPasswordStrength";
const $generatedPassword = document.getElementById(
  "generated-password"
) as HTMLButtonElement;
const $passwordLength = document.getElementById(
  "password-length"
) as HTMLInputElement;
const $includeNumbers = document.getElementById(
  "include-numbers"
) as HTMLInputElement;
const $includeSpecial = document.getElementById(
  "include-special"
) as HTMLInputElement;
const $strengthSpan = document.getElementById(
  "strength-span"
) as HTMLSpanElement;

export function updatePassword() {
  const password = generatePassword({
    passwordLength: parseInt($passwordLength.value),
    useNumbers: $includeNumbers.checked,
    useSymbols: $includeSpecial.checked,
  });
  $generatedPassword.value = password;
  $strengthSpan.textContent = getPasswordStrength(
    parseInt($passwordLength.value),
    $includeNumbers.checked,
    $includeSpecial.checked
  ) as string;
}
