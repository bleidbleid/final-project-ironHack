import { defineStore } from "pinia"
import { supabase } from "../supabase"
import { useAuthStore } from "./auth"


export const useTaskStore = defineStore("task", {
    state: () => ({
        task: [],
    }),
    actions: {
        //SHOW THIS USERS TASKS
        async getTasks() {
            const { data: task, error } = await supabase
                .from("task")
                .select("*")
                .order("is_complete")
                .order("id", { ascending: false })
            this.task = task
            console.log(task)
            return this.task
        },
       

        // EDIT TASK
        async editTask(title, description, id) {
            try {
                const { data, error } = await supabase.from("task")
                    .update({ title: title, description: description })
                    .match({ id: id })
            } catch (error) {
                console.log("this is my error", error)
            }
        },

       
        // ADD TASK
        async addTask(title, description) {
            // console.log(useAuthStore().user.id)
            const addedTask = await supabase.from("task").insert([
                {
                    user_id: useAuthStore().user.id,
                    title,
                    is_complete: false,
                    description,
                },
            ])
        },
         // MARK AS COMPLETED
         async completeTask(id, is_complete) {
            try {
                const { data, error } = await supabase.from("task")
                    .update({ is_complete: !is_complete })
                    .match({ id: id })
            } catch (error) {
                console.log("this is my error", error)
            }
        },

        //DELETE TASK
        async deleteTask (id) {
            const { data, error }  = await supabase
            .from('task')
            .delete()
            .eq('id', id)
          },
    },
    persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
})
