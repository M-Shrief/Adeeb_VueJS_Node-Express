import axios from 'axios';

export default{ 
  async getPoems() {
    let poems = await axios.get("http://localhost:3000/api/poems")
    return poems;
  }
}