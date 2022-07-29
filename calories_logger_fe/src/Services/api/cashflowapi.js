import { axiosPrivate } from './axios';
const cashFlowsApi = (description, date, type, category, amount) => {
  return axiosPrivate.post(
    '/cashflow/post',
    {
        description, date, type, category, amount
    }
  )
};

export default cashFlowsApi;