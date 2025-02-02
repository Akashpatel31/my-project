import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/health', (req, res) => {
  const isDocker = fs.existsSync("/.dockerenv") ? "Docker" : "Not Docker";
  res.json({ message: isDocker });
});

// Default route
app.get('/', (req, res) => {
  res.json({ message: "Hello from Node.js is dp and cp!" });
});

// Set the port for the backend
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
