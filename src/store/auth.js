import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'
 
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);


export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: undefined, 
    }),
  actions: {
    // async fetchUser () {
    //   const user = await supabase.auth.user();
    //   this.user = user
    // },
    async register (email, password) {
      const result = await supabase.auth.signUp({
        email,
        password
      });
      if (error) throw error; 
      if (user) {
      this.user = user;
      console.log(this.user); 
      }
    },
    async login (email, password) {
        console.log(email, password)
      const response = await supabase.auth.signInWithPassword({
        email,
        password
        
      });
      console.log(response)
      if (response.error) throw error;
      if (response.data.user) {
        this.user = response.data.user;
        console.log(this.user); 
        }
    },
    async logout () {
      const resp = await supabase.auth.signOut();
      if (error) throw error;
      console.log (error);
    },
    persist: {
      enabled: true, 
      strategies: [
        {
          key: 'user',
          storage: localStorage
        },
      ],
    },
  },
  });