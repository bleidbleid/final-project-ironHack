import { defineStore } from "pinia"
import { supabase } from "../supabase"
import { useUserStore } from "./user"

export const useTaskStore = defineStore("tasks", {
    state: () => ({
        tasks: null,
    }),
    actions: {
        async fetchTasks() {
            const { data: tasks } = await supabase
                .from("tasks")
                .select("*")
                .order("is_complete")
                .order("id", { ascending: false })

            this.tasks = tasks
            return this.tasks
        },


        // EDIT TASK
        async editTask(title, description, id) {
            try {
                const { data, error } = await supabase.from("tasks")
                    .update({ title: title, description: description })
                    .match({ id: id })
            } catch (error) {
                console.log("this is my error", error)
            }
        },

        // MARK AS COMPLETED
        async taskComplete(id, is_complete) {
            try {
                const { data, error } = await supabase.from("tasks")
                    .update({ is_complete: !is_complete })
                    .match({ id: id })
            } catch (error) {
                console.log("this is my error", error)
            }
        },
        // ADD TASK
        async addTask(title, description) {
            console.log(useUserStore().user.id)
            const { data, error } = await supabase.from("tasks").insert([
                {
                    user_id: useUserStore().user.id,
                    title: title,
                    is_complete: false,
                    description: description,
                },
            ])
        },
    },
})