import axios from 'axios';

//  https://random.imagecdn.app/v1/docs

export async function getRandomImage() {
  const BASE_URL = 'https://random.imagecdn.app/v1';
  const END_POINT = '/image';
  const url = `${BASE_URL}${END_POINT}`;

  const res = await axios.get(url);
  return res;
}
