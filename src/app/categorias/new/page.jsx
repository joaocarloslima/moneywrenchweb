"use client"

import { create } from "@/actions/categorias";
import Button from "@/components/button";
import ComboBoxIconeCategoria from "@/components/combobox-icone-categoria";
import InputText from "@/components/input-text";
import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CategoriaNew() {
    const { push } = useRouter()
    const [messages, setMessages] = useState([])
    
    async function onSubmit(formData){
        const resp = await create(formData)

        if (resp?.error) {
            toast.error(resp.error)
            setMessages(resp.messages)
            return
        }

        push("/categorias")
    }

    return (
        <>
            <NavBar />

            <main className="container bg-slate-900 mt-10 mx-auto rounded p-10 max-w-xl">
                <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>

                <form action={onSubmit} className="flex flex-col items-start gap-2 mt-2">
                    <ComboBoxIconeCategoria />
                   
                    <InputText name="nome" label="nome" />
                    <span className="text-red-400">{messages.find(m => m.field === "nome")?.message}</span>
                    <Button type="button">salvar</Button>

                </form>



            </main>
        </>
    )
}