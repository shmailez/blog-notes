import { revalidatePath } from "next/cache"

export const getList = async () => {
    try {
        const responce = await fetch(`https://a912654b4478639c.mokky.dev/blog-notes`, { cache: 'no-store' })

        const data = await await responce.json()

        // console.log(data)

        return data
    } catch (error) {
        throw new Error()
    }
}

export const getArticle = async (id: any) => {
    try {
        const responce = await fetch(`https://a912654b4478639c.mokky.dev/blog-notes/${id}`, { cache: 'no-store' })

        const data = await await responce.json()

        // console.log(data)

        return data
    } catch (error) {
        throw new Error()
    }
}


export const addItemToList = async (item: any) => {

    // console.log('item', item)
    const article = item

    try {
        const responce = await fetch(`https://a912654b4478639c.mokky.dev/blog-notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        })

        // const data = responce.json()

        // console.log(responce)

        // return data
    } catch (error) {
        throw new Error()
    }
}

