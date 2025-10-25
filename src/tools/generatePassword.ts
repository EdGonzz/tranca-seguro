import { CHARACTERS } from "astro:env/client";
import { NUMBERS } from "astro:env/client";
import { SYMBOLS } from "astro:env/client";

export function generatePassword(
  passwordLength: number,
  useNumbers: boolean,
  useSymbols: boolean
) {
  let availableCharacters = [...CHARACTERS.split("")];
  let password = "";

  if (useNumbers) {
    availableCharacters = availableCharacters.concat(NUMBERS.split(""));
  }
  if (useSymbols) {
    availableCharacters = availableCharacters.concat(SYMBOLS.split(""));
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }
  return password;
}
