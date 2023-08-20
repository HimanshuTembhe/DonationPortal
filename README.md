# Alumni Donation Portal

Welcome to the Alumni Donation Portal, developed by SAIL (Students' Alumni Interaction and Learning) and Coding Club at IITG (Indian Institute of Technology Guwahati). This platform serves as a dedicated space for our esteemed alumni to contribute financially towards various projects and festivals organized by different clubs at the institute.

## Features

- User Authentication: The portal features a secure user authentication system powered by Node.js and JSON Web Tokens (jsonwebtoken).
- Efficient Backend: The backend of the portal ensures smooth handling of user authentication, donation processing, and campaign management using technologies like Node.js and MongoDB with Mongoose.
- Campaign Management: The portal enables the management of donation campaigns, allowing clubs to organize and monitor fundraising efforts effectively.


## Installation

Follow these steps to set up the Alumni Donation Portal on your local machine.

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

### Steps

1. **Clone the Repository:**

   Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/alumni-donation-portal.git
   ```

   Replace `your-username` with your GitHub username.

2. **Install Dependencies:**

   Navigate to the project directory and install both server-side and client-side dependencies:

   ```bash
   cd alumni-donation-portal
   npm install     # Install server-side dependencies
   cd client
   npm install     # Install client-side dependencies
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory of the project and configure the necessary environment variables. Here's an example of what your `.env` file might look like:

   ```env
   # Server-side .env
   PORT=3000
   MONGODB_URI=mongodb://localhost/alumni-donation
   JWT_SECRET=mysecretkey

   # Client-side .env
   REACT_APP_API_URL=http://localhost:3000/api
   ```

4. **Start the Server:**

   In the root directory of the project, start the Node.js server:

   ```bash
   npm start
   ```

   This will start the backend server on the specified port (default is 3000).

5. **Start the Client:**

   In another terminal, navigate to the `client` directory and start the React client:

   ```bash
   cd client
   npm start
   ```

   This will launch the React development server and open the client application in your default web browser.

6. **Access the Application:**

   Once the server and client are running, you can access the Alumni Donation Portal by visiting `http://localhost:3000` in your web browser.

## Dependencies

### Server Side

The server side of the Alumni Donation Portal relies on the following dependencies:

- [bcrypt](https://www.npmjs.com/package/bcrypt) (v5.1.0): Library for hashing and salting passwords.
- [express](https://www.npmjs.com/package/express) (v4.18.2): Fast and minimalist web framework for Node.js.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (v9.0.0): Implementation of JSON Web Tokens for user authentication.
- [mongoose](https://www.npmjs.com/package/mongoose) (v7.0.2): Elegant MongoDB object modeling for Node.js.
- [nodemailer](https://www.npmjs.com/package/nodemailer) (v6.9.1): Library to send emails from Node.js applications.

### Client Side

The client side of the portal utilizes the following dependencies:

- [axios](https://www.npmjs.com/package/axios) (v1.3.4): Promise-based HTTP client for making API requests.
- [react](https://reactjs.org/) (v18.2.0): JavaScript library for building user interfaces.
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2) (v5.2.0): React wrapper for Chart.js to create interactive charts.
- [react-data-table](https://www.npmjs.com/package/react-data-table) (v0.1.0): Lightweight table component for displaying data.
- [react-dom](https://reactjs.org/docs/react-dom.html) (v18.2.0): Entry point for working with the DOM.
- [react-google-charts](https://www.npmjs.com/package/react-google-charts) (v4.0.0): Wrapper for Google Charts library in React.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) (v5.3.3): DOM bindings for React Router for navigation.
- [styled-components](https://www.npmjs.com/package/styled-components) (v5.3.6): Library for styling React components with CSS.
- [web-vitals](https://www.npmjs.com/package/web-vitals) (v2.1.4): Library for measuring and reporting on web vitals.

## Contributing

We welcome contributions to improve the Alumni Donation Portal! If you find any issues or have suggestions for enhancements, feel free to create GitHub issues or submit pull requests.

## License

This project is licensed under the MIT License. You can find the full license text in the [LICENSE](LICENSE) file.

---

Now you're all set up to run the Alumni Donation Portal on your local machine. If you encounter any issues during installation or have any questions, please don't hesitate to reach out for assistance.
