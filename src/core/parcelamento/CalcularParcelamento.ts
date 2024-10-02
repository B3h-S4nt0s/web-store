import { QTD_MAX_PARCELAS, TAXA_JUROS_MENSAL } from "../constants"
import Parcelamento from "./Parcelamento"

export default class CalcularParcelamento {
    executar(
        valor: number, qtdParcelas: number = QTD_MAX_PARCELAS, taxaJuros: number = TAXA_JUROS_MENSAL
    ): Parcelamento {
        if (qtdParcelas < 1 || qtdParcelas > QTD_MAX_PARCELAS) {
            throw new Error(`Quantidade de parcelas deve ser de 1 à ${QTD_MAX_PARCELAS}`)
        }

        const totalComJuros = this.calcularJurosCompostos(valor, taxaJuros, qtdParcelas)

        return {
            valorParcela: this.comDuasCasasDecimais(totalComJuros / qtdParcelas),
            valorTotal: this.comDuasCasasDecimais(totalComJuros),
            qtdParcelas,
            taxaJuros,
        }
    }
    private calcularJurosCompostos(valorTotal: number, taxaMensal: number, qtdParcelas: number): number {
        return valorTotal * Math.pow(1 + taxaMensal, qtdParcelas)
    }

    private comDuasCasasDecimais(valor: number): number {
        return Math.round(valor * 100) /100
    }
}