import axios from 'axios';

const RESOURCE_URL = `${process.env.API_URL}/companies`;

export const getCompanies = () => axios.get(RESOURCE_URL);

export const getCompany = id => axios.get(`${RESOURCE_URL}/${id}`);
