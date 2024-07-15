export interface LoginResponse {
  success: boolean;
  message: string;
  userName: string;
}

export interface LoginRequest {
  userName: string;
  password: string;
}
