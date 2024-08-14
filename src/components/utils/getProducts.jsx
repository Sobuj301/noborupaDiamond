export const getProducts = async(category)=>{
    try {
     const res = await fetch(`http://localhost:5000/products/${category}`,{
        cache:"no-cache"
     })
     if(res.ok){
         return res.json()
     }
     else{
         throw new Error('fetching fail')
     }
     
    } catch (error) {
     console.log(error)
    }
 }