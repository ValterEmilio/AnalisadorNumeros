function adicionar(){
    let cx = document.getElementById('caixa')
    let num = document.getElementById('numeros')
    if (cx.value.length === 0){
        window.alert('Digite um numero!')
    } else {
        num.value = ''
        let n = Number(cx.value)
        let item = document.createElement('option')//cria um elemento dentro do select no html
            item.text = `numero ${n} adicionado`//cria a tabuada enquanto contador for verdadeiro
            item.value = `gerar${cx}`
            num.appendChild(item) 
    }
    
}