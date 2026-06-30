let saldo = 500.00;
//let saldo_novo = Number( document.getElementById( "inputValue" ).value );

function atualizarTela() {
    document.getElementById("txtSaldo").innerText = `R$ ${saldo.toFixed(2)}`;
}

function depositar(){
    let deposito = Number( document.getElementById( "inputValue" ).value );
   
    console.log(deposito);
    
    console.log(saldo);

    if (deposito >= 0){
        alert("Deposito efetuado com sucesso!");
    }else{
        alert("O deposito não pode menor ou igual a 0");
        return deposito;
    }

    saldo = deposito + saldo;
    
    atualizarTela(saldo + deposito);

    document.getElementById("inputValue").value = 0;
}

function sacar(){
    let saque = Number( document.getElementById( "inputValue" ).value );
   // let saldo = Number( document.getElementById( "inputValue" ).value );
    console.log(saque);

    if (saque >= 0){
        //alert("Saque efetuado com sucesso!");
    }else{
        alert("O saque não pode menor ou igual a 0");
        return saque;
    }
    console.log(saldo);

    if (saque <= saldo){
        alert("Saque efetuado com sucesso!");
    }else{
        alert("O saldo é insuficiente");
        return saldo;
    }

    saldo = saldo - saque;

    atualizarTela(saldo + saque);

    document.getElementById("inputValue").value = 0;


}