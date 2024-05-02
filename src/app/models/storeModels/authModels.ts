export interface AuthData {
  token: string;
  message: string;
  role: string;
}

export interface AuthState {
  loading: boolean;
  loaded: boolean;
  jwt: string;
  serverError: string;
  authData: AuthData;
  fullName: string;
  email: string;
  password: string;
  role: string;
}
