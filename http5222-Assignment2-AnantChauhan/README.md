# WeatherMusic

WeatherMusic is a Node.js web application that suggests Spotify playlists based on the current weather conditions in a specified city. Enter a city name, and WeatherMusic will provide you with the current weather information and a playlist that matches the weather condition!

## Features

- **Weather-based Playlist Suggestions**: Enter a city and get a Spotify playlist recommendation based on the current weather.
- **Integration with WeatherAPI**: Uses WeatherAPI to fetch the current weather data for the specified city.
- **Integration with Spotify API**: Searches for and retrieves the suggested playlist from Spotify.


## Installation

1. Clone the repository:
2. Install the required dependencies:

    ```sh
    npm i
    ```

3. Create a `.env` file in the root directory and add your environment variables.
   
4. Run the app

    ```sh
    npm run dev
    ```
      
## Usage

1. Start the application:

    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter the name of a city and submit the form to get the current weather information and a playlist recommendation.

## Environment Variables

Create a `.env` file in the root directory of your project and add the following variables:

```plaintext
WEATHER_API_KEY=your_weatherapi_key
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
PORT=3000
```

## How to use

1. Enter a City Name:
   On the home page, there is an input field where you can type the name of a city. For example, you can enter "Toronto", "New York", or any other city.

2. Submit the Form:
   After entering the city name, click the "Get Weather" button to send the city name to the server. The server will process your request using the WeatherAPI to get the current weather data.

3. Wait for Processing:
   The application will take a moment to process the weather data and find the best playlist for you using the Spotify API.

4. Enjoy the Recommended Playlist:
   Once the playlist is found, it will be displayed on a new screen with the playlist name, description, and an embedded Spotify player for you to listen to the tracks.

## API

-WeatherAPI: Used for fetching the current weather data for the specified city. Learn more at https://www.weatherapi.com/.
-Spotify API: Used for searching and retrieving playlists based on the current weather. Learn more at https://developer.spotify.com/documentation/web-api.
