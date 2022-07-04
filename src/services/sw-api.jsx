import axios from 'axios';

async function fetchData() {
  try {
    let response = await axios.get('https://swapi.dev/api/starships');
    return response.data;
  } catch(e) {
    console.error(e);
  }
}

export default fetchData;