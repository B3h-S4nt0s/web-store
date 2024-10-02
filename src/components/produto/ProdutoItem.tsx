import Link from "next/link";
import Image from "next/image";
import { IconShoppingCartPlus } from "@tabler/icons-react"; 
import { Moeda, Produto } from "@/core";

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props

    return <Link href={`/produto/${props.produto.id}`}
    className="flex flex-col bg-violet-dark border border-white/10">
    <div className="w-full h-48 relative">
        <Image
        src={produto.imagem} fill className="object-contain" alt="Imagem do Produto"/>
    </div>
    <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
        <span className="text-lg font-semibold">{props.produto.nome}</span>
        <div className="self-start text-sm border-b border-dashed">{produto.especificacoes.destaque}</div>
        <div className="flex flex-col">
            <span className="text-sm text-gray-400 line-through">
                De {Moeda.formatar(props.produto.precoBase)}
            </span>
            <span className="text-xl font-semibold text-emerald-400">
                Por {Moeda.formatar(props.produto.precoPromocional)}
            </span>
            {/* <span className="text-zinc-400 text-xs">
                Até {parcelamento.qtdParcelas} x de {' '} {Moeda.formatar(parcelamento.valorParcela)}
            </span> */}
        
        </div>
        <button className="flex justify-center items-center gap-2 h-8 bg-violet-700 hover:border-2 border-emerald-500">
            <IconShoppingCartPlus size = {30}/>
            <span>Adicionai</span>

        </button>
    </div>
    </Link>

}