import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin): Promise<any> => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (response.ok) {
      return await response.json();
    }

    // Parse error details if available in the response
    const errorDetails = await response.json().catch(() => null);
    return {
      error: errorDetails?.message || "Invalid username or password",
    };
  } catch (error) {
    // Ensure the error message is meaningful
    return {
      error: error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};

export { login };

