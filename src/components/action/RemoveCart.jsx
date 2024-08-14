'use client'
import { useRouter } from "next/navigation";
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";

const RemoveCart = ({ id }) => {

    // const router = useRouter()
    const router = useRouter()

    const handleDeleteCart = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`http://localhost:5000/cart/${id}`,{
                        method:'DELETE'
                    })
                    if (res.ok) {
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your Cart has been deleted.",
                            icon: "success"
                          });
                          router.refresh()
                    }else{
                        throw new Error('delete failed')
                    }
                } catch (error) {
                    console.log(error)
                }

            }
        });


    }
    return (
        <div>
            <button onClick={handleDeleteCart} ><MdAutoDelete size={40} color="red" /></button>
        </div>
    );
};

export default RemoveCart;