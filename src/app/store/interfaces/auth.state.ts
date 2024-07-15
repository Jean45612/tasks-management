export interface AuthState {
  userName: string | null;
  errorMessage: string | null;
  loading: boolean;
  isAuthenticated: boolean;
}
