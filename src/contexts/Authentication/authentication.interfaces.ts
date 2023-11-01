import { SignInFormValues } from "../../pages/SignIn/signIn.types";


export interface AuthenticationProviderProps {
  children: React.ReactNode;
}

export interface AuthenticationInterfaces {
  isAuthenticated: boolean;
  token: string;
  loading: boolean;
  decodedToken: any;
  errorMessage: string;
  error: boolean;
  handleLogin: (body: SignInFormValues) => Promise<void>;
  handleLogout: () => void;
  handleCloseError: () => void;
}
