import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json()); // Add this line to parse JSON requests
app.use(express.urlencoded({ extended: true }));

// Set up a route for proxying requests
app.post('/', async (req, res) => {
  const { url_text } = req.body; // Destructure the required field
  console.log('Received URL:', url_text);

  try {
    // Call the getHostname function with the provided URL
    const hostname = await getHostname(url_text);

    // Send the extracted hostname as the response
    res.send({ hostname });
  } catch (error) {
    console.error('Error:', error.message, url_text);
    res.status(500).send('Internal Server Error');
  }
});

async function getHostname(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.status);
      }
  
      // Parse the response as text
      const html = await response.text();
  
      // Use the URL module to extract the hostname
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;
  
      // Log or use the hostname as needed
      console.log('Hostname:', hostname);
  
      return hostname;
    } catch (error) {
      // Handle errors here
      console.error('Error in getHostname:', error.message);
      throw error;
    }
  }

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running at http://localhost:${PORT}`);
});