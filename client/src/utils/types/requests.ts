export type LoginRequest = {
  Email: string;
  Password: string;
};

export type IdActual = {
  IdActual: string;
};

export type UserInput = {
  Name: String;
  Email: String;
  Password: String;
  CPF: String;
};

export type User = {
  id: String;
  Name: String;
  Email: String;
  Password: String;
  CPF: String;
  isAdmin?: boolean;
  createdAt?: String;
  updatedAt?: String;
};
