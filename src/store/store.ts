import { makeAutoObservable } from "mobx"

type Note = {
    id: string,
    title: string,
    body: string
}

class Store {
    list:Note[] = [];
    
    constructor() {
      makeAutoObservable(this)
    }

    addNote(title:string, body: string) {
        this.list.push({
            id: new Date().toISOString(),
            title: title,
            body: body
        })
    }
}

export const listStore = new Store()