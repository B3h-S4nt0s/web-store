import Link from "next/link";
import Image from "next/image";
import { Produto } from "@/core";

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props

    return <Link href={`/produto/${props.produto.id}`}
    className="flex flex-col bg-violet-dark border border-y-white">
    <div className="w-full h-48 relative">
        <Image
        src={produto.imagem} fill className="object-contain" alt="Imagem do Produto"/>
    </div> {produto.nome}
    </Link>

}