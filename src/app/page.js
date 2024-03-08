"use client"

import Image from 'next/image'
import { useForm } from "react-hook-form"

import Button from '@/components/button'
import InputText from '@/components/input-text'
import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { toast } from 'react-hot-toast'

export default function Home() {
  const { push } = useRouter()
  const { register, handleSubmit } = useForm()
  const { login } = useContext(AuthContext)

  const onSubmit = async (data) => {
    const resp = await login(data.email, data.senha)
    
    if (resp?.error) {
      toast.error(resp.error)
      return
    }

    push("/dashboard")

  }

  return (
    <>
    <div className='h-screen flex' > 
      <aside className='hidden lg:flex'>
        <Image className='h-auto w-auto object-cover' src={login} />
      </aside>
      
      <main className="flex mt-10 mx-auto rounded p-4">
        <h2>Money Wrench</h2>
        <form className='flex flex-col gap-4 p-4 m-auto' onSubmit={handleSubmit(onSubmit)}>
          <InputText label="email" register={register} name="email" />
          <InputText label="senha" register={register} name="senha" type="password" />
          <Button type='button'>entrar</Button>
        </form>
      </main>
    </div>


    </>
  )
} 