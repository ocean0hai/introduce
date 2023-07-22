import axios from 'axios';
// const URL= 'http://101.35.251.18:3000/api'
const URL='http://localhost:3000'
import { message } from 'antd';
const api = axios.create({
  baseURL: URL,
  // baseURL:
  // 'https://www.fastmock.site/mock/897825cb4cc73f1ae23df5e97bdd3f66/api',
  timeout: 10000
});

api.interceptors.request.use(
  config => {
    if(localStorage.getItem('token'))
      config.headers.Authorization='Bearer '+ localStorage.getItem('token')
    return config
  }
);

api.interceptors.response.use((response: any) => {
  if(response.data.code===204 || response.data.code===200){
    return response.data
  }else{
    console.log(response);
    message.error(response.data.msg as string)
    return ;
  }
});

export { api };