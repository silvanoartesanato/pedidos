import espessura from "./espessura.js"

const res = document.querySelector("#res")

document.querySelector("#portaretratobtn").addEventListener("click", () => {
    let comp = Number(document.querySelector("#comp").value) // Comprimento
    let larg = Number(document.querySelector("#larg").value) // Largura
    let largborda = Number(document.querySelector("#largborda").value)
    let espeg = document.getElementsByName("espessura") // get Espessura
    let espec // preço dependendo da espessura
    let espe // Espessura
    let fundog = document.getElementsByName("fundo")
    let fundo
    let quant = Number(document.querySelector("#quant").value) // Quantidade
    let quantc = 9// desconto dependendo da quantidade

    if (comp <= 0 || larg <= 0 || quant <= 0){ // Alerta caso o input estiver vazio ou <= 0
        alert("Preencha todas as entradas antes de calcular, usando apenas números maiores que 0 (zero).")
        res.innerHTML= 'Preencha todas as entradas.'
    } else {    
        for (let c in espeg){ // preço da madeira dependendo da espessura
        if (espeg[c].checked) {
            espe = Number(espeg[c].value)
            espec = espessura(espe)
        }}

        for (let i in fundog){
            if (fundog[i].checked) {
                fundo = Number(fundog[i].value)
            }
        }

        if (quant > 50){
            quantc = 7          // desconto a partir de 50 pecas
        } else if (quant > 9) {
            quantc = 8          // desconto a partir de 10 pecas
        } 
        
        let valor1 = ((comp * 2) + (larg * 2)) * largborda * espec

        let valor2 = fundo * (larg * comp * (espessura(3)))

        let valor3 = quant * ((valor1 + valor2) * quantc)

        


        res.innerHTML = `${quant} Porta Retrato(s): ${comp}m x ${larg}m de ${espe}mm<br>R$${valor3.toFixed(2)} (R$${(valor3/quant).toFixed(2)} p/ peça)`
        }
})