import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "@phosphor-icons/react";
import Logo from '../../assets/farmacia.png';

function NavBar() {
    return (
        <div className="w-full bg-yellow-400 text-black flex justify-center py-4">
            <div className="container flex justify-between text-lg items-center">
                <div className="flex gap-4 items-center">
                    <img src={Logo} alt="" className="w-8 h-8" />
                    <Link to="/home" className="text-xl font-oswald font-semibold">
                        GENPHARMA
                    </Link>
                </div>
                <input type="text" placeholder=" Pesquisar" className="rounded w-2/5 h-fit border border-black" />
                <div className="flex gap-4">
                    <div className="hover:underline font-semibold">Produtos</div> |
                    <Link to="/categorias" className="hover:underline font-semibold">Categorias</Link> |
                    <Link to="/cadastroCategoria" className="hover:underline font-semibold">Cadastrar Categoria</Link>
                    <div className="flex gap-2">
                        <User size={32} weight="bold" />
                        <ShoppingCart size={32} weight="bold" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
