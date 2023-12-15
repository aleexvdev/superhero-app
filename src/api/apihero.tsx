import axios, { AxiosResponse } from 'axios';
import { TypeFetchAppResponse, TypeHeroApp } from '../types/TypeHero';

const BASE_URL = 'https://superheroapi.com/api.php';
const TOKEN = '1024982038525332';

/* export const getHeroData2 =async (id: string): Promise<TypeFetchAppResponse> => {
  try {
    const url = `${BASE_URL}/${TOKEN}/${id}`;
    const response: AxiosResponse<TypeHeroApp> = await axios.get(url);
    return {
      data: response.data,
      message: 'Data fetched successfully',
      status: 200
    }
  } catch (error) {
    return {
      data: [],
      message: 'Failed to fetch data',
      status: 500
    }
  }
} */

export const getHeroData = async (id: string): Promise<TypeFetchAppResponse> => {
  const url = `${BASE_URL}/${TOKEN}/${id}`;
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
