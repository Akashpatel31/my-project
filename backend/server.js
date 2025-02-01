import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for all routes
app.use(cors());

// Your existing route
app.get('/', (req, res) => {
  res.json({ message: "Hello from Node.js backend!" });
});

// Set the port for the backend
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
