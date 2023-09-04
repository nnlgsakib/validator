import axios from 'axios';


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


export let fakeApiData;


fetchDataFromAPI()
  .then((data) => {
    fakeApiData = data;
    console.log('Fetched data from API:', fakeApiData);
  })
  .catch((error) => {
    console.error('Failed to fetch data:', error);
  });