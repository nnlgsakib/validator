import axios from 'axios';

export let fakeApiData = null;

async function fetchDataFromAPI() {
  try {
    const response = await axios.get('http://localhost:3000/api/staking');

    if (response.status !== 200) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return null;
  }
}
function updateDataPeriodically() {
    setInterval(async () => {
      const newData = await fetchDataFromAPI();
      if (newData) {
        fakeApiData = newData;
        console.log('Updated data from API:', fakeApiData);
      }
    }, 1000); // Fetch data every 1 second (1000 milliseconds)
  }
  updateDataPeriodically();