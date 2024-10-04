import { produtos } from "@/core"

export default function PaginaProduto(props: any) {
    const id = +props.params.id // Convertion to number
    const produto :any = produtos.find((produto) => produto.id === id)
    return (
        <div>
            <h1>Produto: {produto.nome}</h1>
        </div>
    )
}