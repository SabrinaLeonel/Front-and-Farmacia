import {Link} from "react-router-dom"
import Categoria from "../../../model/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
            <header className="py-2 px-6 bg-yellow-400 text-white font-bold text-2xl">{categoria.nome}</header>
            <p className="p-8 text-3xl bg-white h-full">{categoria.descricao}</p>
            <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`} className="w-full text-white bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center py-2 font-semibold">
                <button>Editar</button>
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className="text-white bg-black hover:bg-gray-900 w-full flex items-center justify-center font-semibold">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategorias