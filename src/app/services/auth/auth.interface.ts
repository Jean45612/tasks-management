export interface LoginResponse {
  success: boolean;
  message: string;
  userName: string;
}

export interface LoginRequest {
  user: string;
  password: string;
}
