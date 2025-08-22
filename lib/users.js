import bcrypt from "bcrypt";

const hashedPassword = bcrypt.hashSync("123456", 10);

export const users = [
  {
    id: "1",
    name: "Test User",
    email: "test@example.com",
    password: hashedPassword, // hashed password
  },
];

export function findUserByEmail(email) {
  return users.find((u) => u.email === email);
}
