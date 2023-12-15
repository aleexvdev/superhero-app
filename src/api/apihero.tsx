import axios, { AxiosResponse } from 'axios';
import { TypeFetchAppResponse, TypeHeroApp } from '../types/TypeHero';

const BASE_URL = 'https://superheroapi.com/api.php';
// const TOKEN = '1024982038525332';

export const getHeroData = async (id: string): Promise<TypeFetchAppResponse> => {
  const url = `${BASE_URL}/1024982038525332/${id}`;
  try {
    const response: AxiosResponse<TypeHeroApp> = await axios.get(url);
    return {
      data: response.data,
      message: 'Data fetched successfully',
      status: 200,
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      message: 'Failed to fetch data',
      status: 500,
    };
  }
};
