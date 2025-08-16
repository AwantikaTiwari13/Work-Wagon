
# Work Wagon - MERN Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT">
</p>

This is a full-stack Job Portal application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows companies to post job openings and enables job seekers to search for and view these opportunities. The project features user authentication using JSON Web Tokens (JWT) to ensure secure access to functionalities.

## Key Features

* **User Authentication**: Secure registration and login system for users (both job seekers and employers).
* **JWT-Based Authorization**: Protected routes and actions using JWT to ensure only authenticated users can perform certain actions like posting or managing jobs.
* **Job Posting (for Employers)**: Authenticated users can create new job listings with details like title, location, description, and company.
* **Job Listings**: A comprehensive list of all available jobs is displayed on the homepage for all users to see.
* **View Job Details**: Users can click on a job to view more detailed information about the position.
* **My Jobs (for Employers)**: Employers can view, update, or delete the jobs they have posted.
* **Responsive Design**: The user interface is designed to be responsive and accessible on various devices, including desktops, tablets, and mobile phones.

## Tech Stack

This project is built with a modern technology stack:

* **Frontend**:
    * [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
    * [React Router](https://reactrouter.com/): For client-side routing and navigation.
    * [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
    * [Axios](https://axios-http.com/): For making promise-based HTTP requests to the backend API.

* **Backend**:
    * [Node.js](https://nodejs.org/): A JavaScript runtime environment.
    * [Express.js](https://expressjs.com/): A minimal and flexible Node.js web application framework.
    * [MongoDB](https://www.mongodb.com/): A NoSQL database for storing application data.
    * [Mongoose](https://mongoosejs.com/): An Object Data Modeling (ODM) library for MongoDB and Node.js.

* **Authentication**:
    * [JSON Web Token (JWT)](https://jwt.io/): For creating access tokens to secure the API.
    * [Bcrypt.js](https://www.npmjs.com/package/bcrypt): For hashing user passwords before storing them in the database.

## Folder Structure

The repository is organized into a `frontend` directory and a `backend` directory.
```text
job-portal/
├── backend/
│   ├── controllers/       # Logic for handling API requests (userController.js, jobController.js)
│   ├── middleware/        # Custom middleware (e.g., authMiddleware for JWT verification)
│   ├── models/            # Mongoose schemas (User.js, Job.js)
│   ├── routes/            # API endpoint definitions (userRoutes.js, jobRoutes.js)
│   ├── .env               # Environment variables
│   ├── index.js           # Server entry point, database connection, and middleware setup
│   └── package.json
│
└── frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/    # Reusable React components (Navbar, Footer, JobCard, etc.)
│   ├── pages/         # Main pages of the application (Home, Login, Register, PostJob, etc.)
│   ├── router/        # React Router configuration
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Entry point for the React application
├── package.json
└── tailwind.config.js
```
## Workflow

1.  **User Registration**: A new user signs up. Their password is encrypted using `bcrypt` and stored in the MongoDB `users` collection.
2.  **User Login**: The user logs in with their credentials. The server validates the credentials and, if successful, generates a JWT.
3.  **Token Handling**: The JWT is sent to the client and stored. This token is included in the header of subsequent requests to protected API endpoints.
4.  **Backend Authorization**: The `authMiddleware` on the server intercepts requests to protected routes. It verifies the JWT to ensure the user is authenticated before allowing access.
5.  **Posting a Job**: An authenticated user (employer) fills out the "Post a Job" form. The data is sent to the `/api/jobs/post-job` endpoint, and the new job is saved to the `jobs` collection in MongoDB.
6.  **Viewing Jobs**: The frontend fetches job data from the `/api/jobs/all-jobs` endpoint and displays it on the homepage.
7.  **Managing Jobs**: An employer can view their posted jobs via the "My Jobs" page, which fetches data from a user-specific endpoint. They can then choose to update or delete these listings.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* [Node.js](https://nodejs.org/en/download/) installed on your machine.
* [MongoDB](https://www.mongodb.com/try/download/community) installed and running, or a MongoDB Atlas account.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/AwantikaTiwari13/job-portal.git](https://github.com/AwantikaTiwari13/job-portal.git)
    cd job-portal
    ```

2.  **Set up the Backend:**
    ```sh
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add the following variables:
    ```env
    PORT=8800
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET_KEY=your_super_secret_jwt_key
    ```
    Start the backend server:
    ```sh
    npm start
    ```

3.  **Set up the Frontend:**
    Open a new terminal. Navigate back to the root directory and then into the frontend folder.
    ```sh
    cd ../frontend
    npm install
    ```
    Start the frontend development server:
    ```sh
    npm run dev
    ```

4.  **Open the application:**
    Navigate to `http://localhost:5173` (or the port specified in your terminal) in your browser to see the application live.

## 👤 About Me

This project was developed by Awantika Tiwari. Connect with me:

* **GitHub**: [AwantikaTiwari13](https://github.com/AwantikaTiwari13)
* **LinkedIn**: [Awantika Tiwari](https://www.linkedin.com/in/awantika-tiwari-aa6b97263/)
