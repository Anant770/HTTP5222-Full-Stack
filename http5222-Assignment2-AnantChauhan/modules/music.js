// const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

let accessToken = null;

// Function to get Spotify access token
const getAccessToken = async () => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
    },
    body: new URLSearchParams({
      'grant_type': 'client_credentials'
    })
  });

  if (!response.ok) {
    throw new Error(`Error getting access token: ${response.statusText}`);
  }

  const data = await response.json();
  accessToken = data.access_token;
};

// Function to get a playlist based on the weather
const getMusic = async (weatherData) => {
  if (!accessToken) {
    await getAccessToken();
  }

  let mood = 'happy';
  if (weatherData.current.condition.text.includes('Rain')) {
    mood = 'rainy';
  } else if (weatherData.current.condition.text.includes('Snow')) {
    mood = 'snowy';
  } else if (weatherData.current.temp_c > 30) {
    mood = 'sunny';
  }

  try {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${mood} playlist&type=playlist&limit=1`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching music data: ${response.statusText}`);
    }

    const data = await response.json();
    return data.playlists.items[0];
  } catch (error) {
    console.error("Error fetching music data: ", error);
    throw error;
  }
};

module.exports = { getMusic };