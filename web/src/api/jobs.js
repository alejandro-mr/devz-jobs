import axios from 'axios';

import { getCompany } from './companies';

const RESOURCE_URL = `${process.env.API_URL}/jobs`;

export const getJobs = async () => {
  const jobs = await axios.get(RESOURCE_URL);
  const jobsWithCompany = await Promise.all(
    jobs.data.map(async (job) => {
      const companyData = await getCompany(job.company);
      return {
        ...job,
        company: {
          ...companyData.data,
        },
      };
    }),
  );

  return jobsWithCompany;
};

export const getJob = async (id) => {
  const job = await axios.get(`${RESOURCE_URL}/${id}`);
  const { data } = await getCompany(job.data.company);

  return {
    ...job.data,
    company: {
      ...data,
    },
  };
};
