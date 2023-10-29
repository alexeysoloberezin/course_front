import axios from 'axios'
import toast from "react-hot-toast";

class ApiService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:2000', // Замените на ваш базовый URL
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken') || ''}`,
      },
    });

    // Перехватчик ответа для обработки ошибок авторизации или обновления токена при необходимости
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log('err', error)
        if (error.response && error.response.status === 400) {
          console.log(error.response)
          if(Array.isArray(error.response.data)){
            toast.error(error.response.data.join(',\n '))
          }else if(error.response.data?.message){
            toast.error(error.response.data?.message)
          }
        }
        if (error.response && error.response.status === 401) {
          // Здесь можно добавить логику обновления токена и повторной отправки запроса
          // Подходящий код обновления токена
          // const newToken = await refreshAuthToken();
          // if (newToken) {
          //   localStorage.setItem('authToken', newToken);
          //   error.config.headers['Authorization'] = `Bearer ${newToken}`;
          //   return this.axiosInstance(error.config);
          // }
        }
        return Promise.reject(error);
      }
    );
  }

  get(url, config) {
    return this.axiosInstance.get(url, config);
  }

  post(url, data, config) {
    return this.axiosInstance.post(url, data, config);
  }

  put(url, data, config) {
    return this.axiosInstance.put(url, data, config);
  }

  delete(url, config) {
    return this.axiosInstance.delete(url, config);
  }
}

const Api = new ApiService();

export default Api;
