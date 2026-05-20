// ============================================
// server.js - Entry Point
// ============================================
// Loads environment variables, connects to MongoDB,
// and starts the Express server.
// ============================================

import "dotenv/config"; // Environment variable loading (Node.js: Server Setup)
import app from "./src/app.js";
import connectDB from "./src/config/db.config.js";

const PORT = process.env.PORT || 5000;

// Using async/await pattern (JS Essentials: Async/Await)
const startServer = async () => {
  try {
    await connectDB(); // MongoDB connection (MongoDB: Database Connection)

    app.listen(PORT, () => { // Start Express server (Node.js: Server Setup)
      console.log(`\n Server is running on port ${PORT}`); // Template literal (JS Essentials: Template Literals)
      console.log(` Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(` URL: http://localhost:${PORT}\n`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

// server/server.js
// ... existing imports at the top ...
import cors from 'cors'; // ADD THIS IMPORT AT THE TOP

// ... rest of your startServer code ...

// ADD THIS AFTER YOUR startServer FUNCTION
const corsOptions = {
  origin: 'https://ai-resume-builder-frontend-cyan.vercel.app', // Ensure this is your correct live URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));
