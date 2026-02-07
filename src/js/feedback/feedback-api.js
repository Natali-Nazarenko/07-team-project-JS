import axios from 'axios';

const BASE_URL = 'https://sound-wave.b.goit.study/api';
const END_POINT = '/feedbacks';
const url = `${BASE_URL}${END_POINT}`;
const option = { params: { limit: 10 } };

export async function fetchFeedbacks() {
  try {
    const {
      data: { data: feedbacks },
    } = await axios.get(url, option);
    return Array.isArray(feedbacks) ? feedbacks : [];
  } catch (error) {
    console.log('Error loading feedbacks:', error); // Потрібно змінити на пуш повідомлення
    return [];
  }
}
