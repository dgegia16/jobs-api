import bcrypt from "bcrypt";

export async function hashPassowrd(passowrd) {
  const hashedPassword = await bcrypt.hash(passowrd, 10);
  return hashedPassword;
}

export async function comparePasswords(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}
