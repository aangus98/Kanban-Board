# Kanban Board with Secure Login

A secure Kanban board application featuring user authentication with JSON Web Tokens (JWT). Users can log in, access a personalized Kanban board, and maintain secure sessions.

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

---

## Description
This application is a secure Kanban board system where users can:
- Log in using a username and password.
- Access their Kanban board upon successful authentication.
- Store a JWT securely in local storage for subsequent requests.
- Be automatically redirected to the login page if unauthenticated or upon session expiration.

### Key Features:
- **Authentication**: Secure login using JWT.
- **Session Management**: Expired sessions redirect users to the login page.
- **Error Handling**: Clear error messages for invalid credentials.
- **Routing Protection**: Unauthenticated users are prevented from accessing protected routes.

---

## Installation
Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/aangus98/kanban-board.git
   cd kanban-board
2. Install Dependencies
    ```bash
    npm install
3. Set up environment variables: Create a .env file in the root directory with the following:
    ```bash
    ACCESS_TOKEN_SECRET=your_secret_key
4. Start the development server:
    ```bash
    npm start
    ```

# Usage
## How it Works
1. Navigate to the login page.
2. Enter your valid username and password.
3. Upon successful login:
    - You are redirected to the Kanban board page.
    - A JWT is stored securely in local storage for authentication.
4. If invalid credentials are entered, an error message is displayed.
5. When logging out:
    - The JWT is removed from local storage.
    - You are redirected to the login page.
6. Inactivity for a set duration will expire your session, and you'll be redirected to the login page upon your next action.

# License
This project is licensed under the MIT License.

# Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-name).
5. Open a pull request.

This code was contributed with AI

# Tests
1. Install test dependencies
    ```bash
    npm install --save-dev
2. Run tests: 
    ```bash
    npm test
    ```

# Questions
If you have any questions, feel free to reach out:

- GitHub: aangus98
- Email: mrangus298@gmail.com