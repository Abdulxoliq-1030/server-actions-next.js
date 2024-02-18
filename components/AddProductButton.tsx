'use client'

import { addProductToDatabase } from "@/actions/serverActions"
import { useTransition } from "react"

const AddProductButton = () => {


    const formData = new FormData();
    formData.append("product", "Mackbook pro")
    formData.append("price", "2500")


    const [isPending, startTransition] = useTransition()
    return (
        <button className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48" onClick={() => startTransition(() => addProductToDatabase(formData))}>{isPending ? "Adding..." : "Add Mackbook pro"}</button>
    )
}

export default AddProductButton