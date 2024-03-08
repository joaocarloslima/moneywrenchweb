"use server"

import { revalidatePath } from "next/cache"
import { cookies } from 'next/headers'

const url = process.env.NEXT_PUBLIC_API_URL + "/categorias"
const token = cookies().get('moneywrench_jwt')?.value

export async function create(data){

    const options = {
        method: "POST", 
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 201) {
        const messages = await resp.json()
        return {
            error: "erro ao cadastra",
            messages
        }
    } 

    revalidatePath("/categorias")
    
}

export async function destroy(id){
    const options = {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    
    const resp = await fetch(url + "/" + id, options)
    
    if (resp.status !== 204){
        return { error: "Erro ao apagar categoria" }
    }
    
    revalidatePath("/categorias")

}

export async function get(id){
    const options = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url + "/" + id, options)

    if (resp.status !== 200){
        return { error: "Categoria não encontrada"}
    }

    return await resp.json()
}

export async function update(categoria){
    const options = {
        method: "PUT", 
        body: JSON.stringify(categoria),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url + "/" + categoria.id, options)

    if (resp.status !== 200){
        return {error: "Erro ao alterar categoria"}
    }

    revalidatePath("/categorias")

}

export async function carregarDados(){
    const options = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url, options)
    
    if (resp.status !== 200) {
      throw new Error(`Falha ao carregar dados da categoria (${resp.status})`)
    } 
  
    return await resp.json()
  
  }

