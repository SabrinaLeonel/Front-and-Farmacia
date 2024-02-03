import { useEffect, useState } from "react";
import {Watch} from "react-loader-spinner";
import Categoria from "../../../model/Categoria";
import {buscar} from "../../../service/Service";
import CardCategorias from "../cardCategoria/CardCategoria";

function ListarCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias(){
        await buscar("/categorias", setCategorias, {})
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);
    return (
        <>
            {categorias.length === 0 && (
                <Watch
                visible={true}
                height="80"
                width="80"
                radius="48"
                color="#facc15"
                ariaLabel="watch-loading"
                wrapperStyle={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh', // Isso é opcional, apenas para centralizar verticalmente na tela inteira
                }}
                wrapperClass=""
            />            
            )}
            <div className="flex justify-center w-full py-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <>
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategorias