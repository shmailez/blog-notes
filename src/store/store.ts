import { makeAutoObservable } from "mobx"

type Note = {
    id: string,
    title: string,
    body: string
}

class Store {
    list:Note[] = [
        // {id: '1', title: 'li1', body: 'fsfsf'},
        // {id: '2', title: 'lidf', body: 'fsfsf'},
        // {id: '3', title: 'li2', body: 'fsfsf'},
        // {id: '4', title: 'lix9', body: 'fsfsf'},
        // {id: '5', title: 'lifsf', body: 'fsfsf'},
    ];
    
    constructor() {
      makeAutoObservable(this)
    }

    addNote(title:string, body: string) {
        console.log(title, body)
        this.list.push({
            id: new Date().toISOString(),
            title: title,
            body: body
        })

        console.log(this.list)
    }
}

export const listStore = new Store()