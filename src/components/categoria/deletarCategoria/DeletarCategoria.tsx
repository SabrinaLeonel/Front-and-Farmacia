import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Categoria from '../../../model/Categoria'
import { buscar, deletar } from '../../../service/Service'

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {})
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        await deletar(`/categorias/${id}`, {})

        alert('Categoria DELETADA com sucesso')

        retornar()
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4 text-slate-100'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4 text-slate-100'>A seguinte categoria será DELETADA:</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-yellow-500 text-white font-bold text-2xl'>{categoria.nome}</header>
                <p className='p-8 text-3xl bg-white h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-yellow-500 hover:bg-yellow-400 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-black hover:bg-gray-900 flex items-center justify-center' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria