import { generatePassword } from "./generatePassword";
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

export function updatePassword() {
  const password = generatePassword(
    parseInt($passwordLength.value),
    $includeNumbers.checked,
    $includeSpecial.checked
  );
  $generatedPassword.value = password;
}
