export function isValidInput(inputValue: string) {
  const pattern = /^(?!0).*$/;
  return pattern.test(inputValue);
}
