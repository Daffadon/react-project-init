export interface userType {
  name: string;
  role: string;
  validated: boolean;
}

export interface UserContextValue {
  user: userType | null;
  token: string | null;
  setUser: (user: userType | null) => void;
  setTokenToLocal: (token: string) => void;
}
