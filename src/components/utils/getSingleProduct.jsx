export const getSingleProduct = async(detailsId) =>{
   try {
      const res = await fetch(`http://localhost:5000/product/${detailsId}`,{
         cache:"no-store"
      })
      if(res.ok){
        return res.json()
      }
      else{
        throw new Error('single fetch failed')
      }
   } catch (error) {
      console.log(error)
   }
}