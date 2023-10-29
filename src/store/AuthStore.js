import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const useAuthStore = create()(
  immer((set) => ({
    user: {
      id: '1',
      name: 'Leo',
      email: 'alexeysoloberezinsolo@gmail.com'
    },
    setUser: (user) => set(() => ({ user })),
  }))
)

export default useAuthStore