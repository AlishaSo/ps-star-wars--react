import axios from 'axios';

async function fetchData(pageNum) {
  try {
    let response = await axios.get(`https://swapi.dev/api/starships/?page=${pageNum}`);
    return response.data;
  } catch(e) {
    console.error(e);
  }
}

export default fetchData;