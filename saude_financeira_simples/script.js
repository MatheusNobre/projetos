function calcular() {
    var fsalario = document.getElementById('txtsal')
    var res = document.getElementById('res')

    if(fsalario.value.length == 0 || Number(fsalario.value) <= 0){
        window.alert("Verifque o salário inserido")
    }else{
        var fpoupar = document.getElementById('txtsal').value
        poupança = fpoupar * 0.1
    }
    res.innerHTML = `Você deve poupar R$${poupança} do seu salário`
}