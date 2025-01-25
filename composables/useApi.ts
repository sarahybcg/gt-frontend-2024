export const useApi = ()=>{
  return useState('api', () => 'http://192.168.1.3:4000/api');
} 