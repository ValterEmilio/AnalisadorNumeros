let num = document.querySelector("input#caixa")
let cx = document.querySelector("select#numeros")
let res = document.querySelector("div#resultado")
let valores = []

function isNumero(n) {
    //return Number(n) >= 1 && Number(n) <= 100;
    return n >= 1 && n <= 100
}
function inLista(n, l){
    //return l.includes(Number(n));
    return l.includes(n)

}
function adicionar(){
    let n = Number(num.value)

    if (isNumero(n) && !inLista(n , valores)){

        valores.push(n)
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        cx.appendChild(item)
        res.innerHTML = ''

    } else {
        alert("Digite um numero valido!")
    }
    num.value = ''
    num.focus()
    
}
function analisar() {
    if (valores.length == 0) {
        window.alert('Adicione valores!')
    } else {
        let total = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = valores.reduce((a, b) => a + b, 0)
        let media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p> ${total} valores adicionados </p> ` 
        res.innerHTML += `<p> ${maior} é o maior numero</p>`
        res.innerHTML += `<p> ${menor} é o menor numero</p>`
        res.innerHTML += `<p> a Soma dos valores é ${soma}</p>`
        res.innerHTML += `<p> A media dos valores é ${media}</p>`       
    }

}      