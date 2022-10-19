import { defineStore } from "pinia"
import { supabase } from "../supabase"
import { useAuthStore } from "./auth"

export const useTaskStore = defineStore("task", {
    state: () => ({
        task: null,
    }),
    actions: {
        async fetchTasks() {
            const { data: task } = await supabase
                .from("task")
                .select("*")
                .order("is_complete")
                .order("id", { ascending: false })

            this.task = task
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

        // MARK AS COMPLETED
        async taskComplete(id, is_complete) {
            try {
                const { data, error } = await supabase.from("task")
                    .update({ is_complete: !is_complete })
                    .match({ id: id })
            } catch (error) {
                console.log("this is my error", error)
            }
        },
        // ADD TASK
        async addTask(title, description) {
            console.log(useAuthStore().user.id)
            const { data, error } = await supabase.from("task").insert([
                {
                    user_id: useAuthStore().user.user_id,
                    title: title,
                    is_complete: false,
                    description: description,
                    date: new Date()

                },
            ])
            console.log(data, error)

        },
    },
})
