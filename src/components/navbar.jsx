"use client"

import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";

export default function NavBar() {
    const { user, login, logout } = useContext(AuthContext)
    return (
        <nav className="flex items-center justify-between bg-slate-900 p-6">
            <ul className="flex items-end gap-14 text-slate-500">
                <li>
                    <Link href="/">
                        <h1 className="text-2xl text-slate-100">Money Wrench</h1>
                    </Link>
                </li>
                <li>
                    <Link href="#">dashboard</Link>
                </li>
                <li>
                    <Link href="/categorias" className="text-slate-300">categorias</Link>
                </li>
                <li><Link href="/movimentacoes">movimentações</Link></li>
            </ul>

            <div>
                <button onClick={() => login("joao@fiap.com.br", "12345678")}>login</button>
                <button onClick={() => logout()}>logout</button>
                {user?.name}
                <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img src="https://github.com/joaocarloslima.png" alt="avatar do usuário" />
                </div>
            </div>
        </nav>

    )
}