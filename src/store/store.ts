import { getList } from "@/services/list";
import { action, makeAutoObservable, observable } from "mobx"

type Note = {
    id: string,
    title: string,
    body: string,
    userName: string | null | undefined, 
    userEmail: string | null | undefined
}

class Store {
    list:Note[] = [];

    lister:Note[] = []
    
    constructor() {
      makeAutoObservable(this, {
        lister: observable,
        loadLister: action
      })
    }

    async loadLister() {
        const lister = await getList()

        this.lister = lister
    }

    addNote(title:string, body: string, userName: string | null | undefined, userEmail: string | null | undefined) {
        this.list.push({
            id: new Date().toISOString(),
            title: title,
            body: body,
            userName: userName,
            userEmail: userEmail
        })

        console.log(this.list)
    }
}

export const listStore = new Store()