import axios from 'axios';

const url = process.env.REACT_APP_API;

export const fetchAllTasks = async () => {
  try {
    const data = await axios.get(`${url}/task`);
    
    return data;
  } catch (error) {
    console.log(error);
  }
}