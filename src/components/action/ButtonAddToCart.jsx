'use client'

import { AuthContext } from "@/provider/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Swal from "sweetalert2";

const ButtonAddToCart = ({product}) => {

    const router = useRouter()

    const {user} = useContext(AuthContext)
    const email = user.email;
    const {name,category,details,price} = product
    const cart = {email:email,name:name,category:category,details:details,price:price}

    const handleAddToCart = async() =>{
       
        try {
            const res = await fetch('http://localhost:5000/cart',{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(cart)
            })
            if(res.ok){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Add to Cart Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  router.push('/myCart')
                  router.refresh()
            }else{
                throw new Error('insert cart fail')
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <button onClick={handleAddToCart} className="btn">Add To Cart</button>
        </div>
    );
};

export default ButtonAddToCart;