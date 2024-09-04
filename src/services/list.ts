export const getList = async () => {
    try {
        const responce = await fetch(`https://a912654b4478639c.mokky.dev/blog-notes`)

        const data = await responce.json()

        console.log(data)

        return data
    } catch (error) {
        throw new Error()
    }
}


export const addItemToList = async (item: any) => {
    try {
        const responce = await fetch(`https://a912654b4478639c.mokky.dev/blog-notes`, {
            method: 'POST',
            headers: {

            },
            body: JSON.stringify(item)
        })

        // const data = responce.json()

        console.log(responce)

        // return data
    } catch (error) {
        throw new Error()
    }
}

