"use client"

import Image from 'next/image'
import { useForm } from "react-hook-form"

import login from '../assets/login.png'
import InputText from '@/components/input-text'
import Button from '@/components/button'

export default function Home() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
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