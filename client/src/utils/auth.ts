import { jwtDecode, JwtPayload } from 'jwt-decode';
import { redirect } from 'react-router-dom';

class AuthService {
  // Decode the token and return the payload
  getProfile() {
    const token = this.getToken();
    if (!token) {
      throw new Error("No token available to decode");
    }
    return jwtDecode<JwtPayload>(token);
  }

  // Check if the user is logged in by verifying if the token exists and is not expired
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Check if the token is expired
  isTokenExpired(token: string): boolean {
    try {
      const { exp } = jwtDecode<JwtPayload>(token) || {};
      if (!exp) {
        return true;
      }
      // `exp` is in seconds, convert to milliseconds and compare with current time
      return Date.now() >= exp * 1000;
    } catch (error) {
      return true; // Assume expired if there's an error
    }
  }

  // Retrieve the token from localStorage
  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  // Save the token to localStorage and redirect to the home page
  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    redirect('/');
  }

  // Remove the token from localStorage and redirect to the login page
  logout() {
    localStorage.removeItem('id_token');
    redirect('/login');
  }
}

export default new AuthService();