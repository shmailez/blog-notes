import { addItemToList, getList } from "@/services/list";
import { action, makeAutoObservable, observable } from "mobx"

type Note = {
    id: string,
    title: string,
    body: string,
    userName: string | null | undefined, 
    userEmail: string | null | undefined
}

class Store {
    async loadLister() {
        const lister = await getList()

        this.lister = lister
    }

    list:Note[] = [];

    lister:Note[] = []
    
    constructor() {
      makeAutoObservable(this, {
        // lister: observable,
        // loadLister: action
      })
    }

    addToServerNote(title:string, body: string, userName: string | null | undefined, userEmail: string | null | undefined) {
        
        const id = new Date().toISOString()

        addItemToList({id, title, body, userName, userEmail})
        this.loadLister()
        console.log(this.list)
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