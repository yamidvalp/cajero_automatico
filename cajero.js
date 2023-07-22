var cuentas = [
    {codigo:101,nombre:"persona 1", cuenta: "0-123", saldo: 200},
    {codigo:202,nombre:"persona 2", cuenta: "1-123", saldo: 290},
    {codigo:303,nombre:"persona 3", cuenta: "2-123", saldo: 67}
]
var credentials=[
    {codigo:101,password:"persona-1"},
    {codigo:202,password:"persona-2"},
    {codigo:303,password:"persona-3"}
]
var index
var $Select
var option
var sOption

function addSelect(){
   // remAcount()
    for(index=0;index< cuentas.length;index++){
        addAcount(index)
    }
}
function addAcount(index){
    $Select= document.getElementById("sAcount")
        option = document.createElement('option');
        option.value=cuentas[index].codigo
        option.text=cuentas[index].cuenta
        $Select.appendChild(option);
}
function valCta(){
    sOption = document.getElementById("sAcount").value;
    if (sOption==101||sOption==202||sOption==303) {
        document.getElementById("valPass").style.display="block";
        document.getElementById("btnSend").style.display="block";        
    } else {
        //window.alert("Favor seleccione una cuenta")
    }
}
function valPassw(){
    let sPassword        
    for ( var i = 0; i < credentials.length; i++) {        
        if (sOption==credentials[i].codigo) {
            sPassword=credentials[i].password
            console.log(credentials[i].password+"-"+credentials[i].codigo)            
        }
    }
    if (document.getElementById("valPass").value==sPassword) {
        document.getElementById("sMenuOption").style.display="block";        
        console.log("Pruebas exitosas")
    }else{
        window.alert("Contraseña  incorrecta, Favor validar")
    }
}

var isaldo
var iCta 
var iCount 
let etiqueta
let etiquetaBTN
let etiquetaST
let label
function valsMoption(){
    var opt = document.getElementById("sMoption").value    
    for ( var i = 0; i < cuentas.length; i++) {        
        if (sOption==cuentas[i].codigo) {
            isaldo= cuentas[i].saldo                 
            iCount=i        
        }
    }        
    //removeEventListener,pv etiqueta
        
    if (parseInt(opt)==1) {   
        label=document.createElement("label");
        label.innerHTML="Saldo Actual"
        document.body.appendChild(label);     
        etiqueta= document.createElement("input");
        etiqueta.value = isaldo        
        etiqueta.disabled=true
        document.body.appendChild(etiqueta);        
    } else if (parseInt(opt)==2||parseInt(opt)==3){        
        //$('#idSaldoM').remove();                  
        if(!etiqueta||!etiquetaBTN||!etiquetaST){
          //console.log("NO EXISTE!!! ")            
        }else{        
            etiqueta.remove()
            etiquetaBTN.remove()
            etiquetaST.remove()
            label.remove()
        }
        etiqueta= document.createElement("input");
            etiqueta.id ="idSaldoT"
            document.body.appendChild(etiqueta);                
            etiquetaBTN= document.createElement("button");
            etiquetaBTN.type="submit"
            etiquetaBTN.id="btnEnv"
            etiquetaBTN.textContent="Enviar"
        if(parseInt(opt)==2){
            etiquetaBTN.onclick=function CalcSal(){
            if((cuentas[iCount].saldo+parseInt(document.getElementById("idSaldoT").value))>=10
            && (cuentas[iCount].saldo+parseInt(document.getElementById("idSaldoT").value)<=990)){
                cuentas[iCount].saldo=cuentas[iCount].saldo+parseInt(document.getElementById("idSaldoT").value)
                label=document.createElement("label");
                label.innerHTML="Saldo Actual"
                document.body.appendChild(label);                    
                etiquetaST= document.createElement("input");
                etiquetaST.value = "$"+cuentas[iCount].saldo
                etiquetaST.disabled=true
                document.body.appendChild(etiquetaST);                    
                window.alert("El monto ingresado a la cuenta es: $"+document.getElementById("idSaldoT").value)
            }else{
                window.alert("No se puede continuar con la operación solicitada, tope máximo superado, Saldo mayor a $990")
            }
            };
        }else{
            etiquetaBTN.onclick=function CalcSal(){
            if((cuentas[iCount].saldo-parseInt(document.getElementById("idSaldoT").value))>=10
            && (cuentas[iCount].saldo-parseInt(document.getElementById("idSaldoT").value)<=990)){
                cuentas[iCount].saldo=cuentas[iCount].saldo-parseInt(document.getElementById("idSaldoT").value)
                label=document.createElement("label");
                label.innerHTML="Saldo Actual"
                document.body.appendChild(label);     
                etiquetaST= document.createElement("input");
                etiquetaST.value = "$"+cuentas[iCount].saldo
                etiquetaST.disabled=true
                document.body.appendChild(etiquetaST);                    
                window.alert("El monto retirado de la cuenta es: $"+document.getElementById("idSaldoT").value)
            }else{
                window.alert("No se puede continuar con la operación solicitada, tope mínimo superado, Saldo menor a $10")
            }
            };
        }
        document.body.appendChild(etiquetaBTN);            
    }else{
        console.log("Seleccione otra opcion")
    }

}