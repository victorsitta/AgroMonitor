import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

// Usuário mock — sem depender do Supabase durante o desenvolvimento do design
type MockUser = {
  id: string;
  email: string;
};

type AuthContextType = {
  user: MockUser | null;
  loading: boolean;
  signInUser: (email: string, password: string) => Promise<{ error: string | null }>;
  signUpUser: (email: string, password: string) => Promise<{ error: string | null }>;
  signOutUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "agromonitor_mock_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Persiste sessão no localStorage para sobreviver a reload
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  async function signInUser(email: string, password: string): Promise<{ error: string | null }> {
    // Aceita qualquer email + senha com pelo menos 6 caracteres
    if (!email || !password) {
      return { error: "Preencha email e senha" };
    }
    if (password.length < 6) {
      return { error: "Senha deve ter pelo menos 6 caracteres" };
    }

    const mockUser: MockUser = { id: "mock-user-001", email };
    setUser(mockUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    return { error: null };
  }

  async function signUpUser(email: string, password: string): Promise<{ error: string | null }> {
    if (!email || !password) {
      return { error: "Preencha email e senha" };
    }
    if (password.length < 6) {
      return { error: "Senha deve ter pelo menos 6 caracteres" };
    }

    const mockUser: MockUser = { id: "mock-user-001", email };
    setUser(mockUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    return { error: null };
  }

  async function signOutUser() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <AuthContext.Provider value={{ user, loading, signInUser, signUpUser, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
