import api from "../plugin/api";

class ApiAuth {
  async login({email, password}) {
    try {
      const response = await api.post(`/auth/login`, {email, password});
      return response.data;
    } catch (error) {
      throw error;
    }
  }

   async register({email, password}) {
     try {
       const response = await api.post(`/auth/registration`, {email, password});
       return response.data;
     } catch (error) {
       throw error;
     }
   }
}
const apiAuth = new ApiAuth()

export default apiAuth

