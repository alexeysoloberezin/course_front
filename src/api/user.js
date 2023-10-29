import api from "../plugin/api";

class ApiUser {
  async getUsers() {
    try {
      const response = await api.get(`/users`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async createUser(email, pass) {
    try {
      const userData = { email, pass };
      const response = await api.post(`/users`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiUser();
