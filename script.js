const calculateButton = document.querySelector(".calculate-button")

function calculateValues(){
   
    const kmIncialValue = document.querySelector("#km-inicial").value //pega valor km inicial
    const kmFinalValue = document.querySelector("#km-final").value // pega valor km final
    const entregaValue = document.querySelector("#entrega").value // pega valor entrega
    const ganhoValue = document.querySelector("#ganho").value // valor dinheiro

    const kmTotalFinalValue = document.querySelector(".km-total-final") //mapeado para colocar valor do KM total
    const ganhoTotal = document.querySelector("#total-1") //mapeado para colocar valor em dinheiro
    const kmPorEntrega = document.querySelector("#ganho-por-km") //mapeado para colocar valor ganho por km
    const porEntregaValue = document.querySelector("#por-entrega") // mapeado para colocar valor r$ por tele


    const kmTotal = kmFinalValue - kmIncialValue //variavel calculo do KM total
    const ganhoPorKM = (ganhoValue / (kmFinalValue - kmIncialValue)) //variavel calcula de Ganho por KM
    const ganhoTotalPorEntrega = ganhoValue / entregaValue //variavel calculo de R$ por entrega


    kmTotalFinalValue.innerHTML = kmTotal
    ganhoTotal.innerHTML = ganhoValue
    kmPorEntrega.innerHTML = ganhoPorKM
    porEntregaValue.innerHTML = ganhoTotalPorEntrega
    
}

calculateButton.addEventListener("click", calculateValues)