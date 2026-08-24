ACTIVIDAD 3:
var edadPersona = 78

if (edadPersona => 0){
    if(edadPersona < 18 ){
        console.log("esta persona es menor de edad")
    }
    else if (edadPersona < 65){
        console.log("esta persona es adulta")
    }
    else if (edadPersona < 85){
        console.log("esta persona es adulta mayor")
    }else{
        console.log("persona de años dorados")
    }
}
else{
    console.log("ingrese una edad valida")
}

ACTIVIDAD 4:
var n= 5
var inicio = 1
var lista =[]

for (var i = 0; i < n; i++){
    var resultado = inicio * 2
    lista.push(resultado)
    inicio = resultado
}
console.log(lista)

ACTIVIDAD 5:
 var nombre = "felipe"
 var apellido = "marchant"

function mostrarNombreCompleto(nombre, apellido){
    return console.log(nombre.toUpperCase() +' '+ apellido.toUpperCase())
}

mostrarNombreCompleto(nombre,apellido)

var sueldoActual = 1000000
var sueldoSemestreAnterior = 700000
var tieneCargas = true

function montoAPagar(sueldoSemestreAnterior){
    var a=16828
    var b=10327
    var c=3264
    var d=0
    if (sueldoSemestreAnterior <= 429899){
        return a
    }else if (sueldoSemestreAnterior > 429899 && sueldoSemestreAnterior <= 627913){
        return b
    }else if (sueldoSemestreAnterior > 627913 && sueldoSemestreAnterior < 979330){
        return c
    }else if (sueldoSemestreAnterior > 979330){
        return d
    }
    

}
console.log ("el monto a pagar es de "+ montoAPagar(sueldoSemestreAnterior))

function cargaFamiliar(tieneCargas){
    var cantidadDeCargas=3
    return console.log(cantidadDeCargas * montoAPagar(sueldoSemestreAnterior))
}

cargaFamiliar(tieneCargas)
ACTIVIDAD 6:
