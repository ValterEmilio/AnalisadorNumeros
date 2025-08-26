let num = document.querySelector("input#caixa")
let cx = document.querySelector("select#numeros")
let res = document.querySelector("div#resultado")
let valores = []

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}
function inLista(n, l){
    return l.includes(Number(n));

}
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        cx.appendChild(item)

    } else {
        window.alert("Digite um numero valido!")
    }
    num.value = ''
    num.focus()
    
}
function analisar() {
    if (valores.length == 0) {
        window.alert('Adicione valores!')
    } else {
        let total = valores.length

        res.innerHTML = ''
        res.innerHTML    =       
    }

}      