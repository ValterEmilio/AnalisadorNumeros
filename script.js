function tabuada(){
    //declaração de variaveis
    let numero = document.getElementById('numero');
    let gerar = document.getElementById('criaTabuada');
    //verifica se o campo esta vazio
    if ( numero.value.length == 0) {
        window.alert('ERROR digite um numero!');
    } else {
        let n = Number(numero.value);
        let contador = 1
        gerar.innerHTML = '' //limpa o select antes de mostrar outra tabuada
        while ( contador <= 10) {
            let item = document.createElement('option')//cria um elemento dentro do select no html
            item.text = `${n} X ${contador} = ${n*contador}`//cria a tabuada enquanto contador for verdadeiro
            item.value = `gerar${contador}`
            gerar.appendChild(item)
           
            contador++
        }
        numero.value = ''
    }
}