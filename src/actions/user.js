"use server"

import { cookies } from 'next/headers'
const url = process.env.NEXT_PUBLIC_API_URL + "/login"

export async function apiLogin(email, senha){
    // fazer a requisição para /login
    const options = {
        method: "POST", 
        body: JSON.stringify({email, senha}),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)



    if (resp.status !== 200) {
        throw new Error("Falha no login")
    } 

    const json = await resp.json()


    //receber o JWT  

    cookies().set('moneywrench_jwt', json.token, {
        maxAge: 60 * 60 * 24 * 7 // 7 dias
    })
    
}

export async function apiLogout(){
    cookies().delete('moneywrench_jwt')

}