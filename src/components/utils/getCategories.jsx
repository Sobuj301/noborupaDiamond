export const getCategories = async() =>{
    try {
        const res = await fetch('http://localhost:5000/categories',{
            next:{
                revalidate:10
            }
        })
        if(res.ok){
            return res.json()
        }
        else{
            throw new Error('categories fetching failed')
        }
    } catch (error) {
        console.log(error)
    }
}