export interface Auth {
  email: string;
  password: string;
}

export interface AuthToken {
  token: string;
  expires_in: number
  token_type: string;
}
