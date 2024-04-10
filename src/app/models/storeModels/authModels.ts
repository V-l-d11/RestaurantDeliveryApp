export interface AuthData {
  token: string;
  message: string;
  role: string;
}

export interface AuthState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  authData: AuthData | null;
}
