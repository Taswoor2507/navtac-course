import { createContext, useState } from "react";

const AuthContext = createContext(null);

// provider

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  // handle login
  async function handleLogin(email, password) {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:7070/api/v1/owner/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Add this to handle cookies
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setUser(data.data.user);
      setIsLogin(true);
      return response; // Return the response for the component
    } catch (err) {
      console.error(err);
      throw err; // Re-throw to handle in the component
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ handleLogin, isLogin, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };