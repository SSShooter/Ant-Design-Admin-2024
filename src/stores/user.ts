import { create } from 'zustand'

type State = {
  userName: string
  token: string
  role: string
}

type Actions = {
  setUserName: (userName: string) => void
  setToken: (token: string) => void
  setRole: (role: string) => void
  clearToken: () => void
}

const useUserStore = create<State & Actions>((set) => ({
  userName: '',
  token: '',
  role: '',
  setUserName: (userName) => set({ userName }),
  setToken: (token) => set({ token }),
  setRole: (role) => set({ role }),
  clearToken: () => set({ token: '' }),
}))

export default useUserStore
