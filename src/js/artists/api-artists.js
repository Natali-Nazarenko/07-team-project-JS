import axios from 'axios';
const BASE_URL = 'https://sound-wave.b.goit.study/api';
export async function getArtists() {
    try {
        const { data } = await axios.get(`${BASE_URL}/artists?limit=8`);
        return data;
    } catch (error) {
        console.log(error);
    }
}