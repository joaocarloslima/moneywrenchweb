import Button from "@/components/button";
import NavBar from "@/components/navbar";

import { PlusIcon } from '@heroicons/react/24/solid'
import DataRow from "./datarow";
import { carregarDados } from "@/actions/categorias";

export default async function PageCategorias() {
  
  const categorias = await carregarDados()

  return (
    <>
      <NavBar />

      <main className="container bg-slate-900 mt-10 mx-auto rounded p-4 max-w-xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Categorias</h2>
          <Button href="/categorias/new" icon={<PlusIcon className="h-6 w-6" />}>
            criar categoria
          </Button>
        </div>

        <div className="space-y-2">
          {categorias.map(categoria => <DataRow key={categoria.id} categoria={categoria} />)}
        </div>
      </main>
    </>
  )
} 