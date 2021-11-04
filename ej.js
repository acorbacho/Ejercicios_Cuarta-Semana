/*Crear un programa que reciba por parámetros dos números que haya
introducido el usuario y devuelva si son múltiplos o no con un booleano true o
false y muéstralo por pantalla.
Pista: Para saber si un número es múltiplo de otro, el módulo entre ambos
debe de ser 0.*/

function ejercicio_1(){
    var numero1 = parseInt(prompt("Introduce un número"), 10)
    var numero2 = parseInt(prompt("Introduce un número"), 10)

    if(numero1>=numero2){
        alert(numero1%numero2==0)
    }
    else{
        alert(numero2%numero1==0)
    }
}

/*Crea un programa que reciba por parámetro un número introducido por el
usuario y compruebe, si no es mayor que 100, si es primo o no, devolviendo
un valor booleano true o false y muéstralo por pantalla.
Pista: Son número primos aquellos que solo tiene como divisor la unidad (1) y
el mismo, como por ejemplo el número 3.*/

function ejercicio_2(){
    var numero = parseInt(prompt("Introduce un número"), 10)
    var contador = 0
    
    if(numero<=100){
        for(var i = numero; i > 0; i--){
            if(numero%i==0){
                contador++;
            }
        }
    alert(contador<=2)
    }
    else{
        alert("El número es mayor que 100")
    }
}

/*Crea un programa que reciba por parámetro una cadena de caracteres
introducida por el usuario y que muestre por pantalla cada caracter de
forma individual.
Ej:
> Hola
H
o
l
a
Pista: Las cadenas de caracteres tienen una función conocida como
charAt(índice).*/

function ejercicio_3(){
    var palabra = prompt("Introduce una palabra")

    for (var i = 0; i < palabra.length; i++) {
        alert(palabra.charAt(i));
      }  
}

/*Crea un programa que reciba por parámetro un nombre y una cantidad de
un alimento y cree un objeto con esas propiedades. Muestra por pantalla sus
atributos.*/

function ejercicio_4(){
    var nombre = prompt("Introduce nombre del alimento")
    var cantidad = prompt("Introduce la cantidad en Kg")

        var Alimento = function(){
            this.nombre = ""
            this.cantidad = ""
            this.ticket = function(){
                alert(this.cantidad+" Kg de "+this.nombre)
            }
        }
        
    var alimento = new Alimento()
    alimento.nombre = nombre
    alimento.cantidad = cantidad
    alimento.ticket()
}

/*Crea un programa que reciba por parámetro lado y altura y cree un objeto
Cuadrilátero con estas propiedades. Haz que tenga una función llamada
calculoArea() que muestre por pantalla el resultado.*/

function ejercicio_5(){
    var lado = prompt("Introduce el lado del cuadrilátero")
    var altura = prompt("Introduce la altura del cuadrilátero")
    
        var Cuadrilatero = function(){
            this.lado = ""
            this.altura = ""
            this.calculoArea = function(){
                alert(`El área del cudrilátero es ${this.lado * this.altura}`)
            }
        }
        
    var cuadrilatero = new Cuadrilatero()
    cuadrilatero.lado = lado
    cuadrilatero.altura = altura
    cuadrilatero.calculoArea()
}

/*Crea un programa que calcule la media acumulada de 10 números que
introduzca el usuario y muestre por pantalla cual es la media en cada
momento.
Pista: La media aritmética es igual a (N1+...+Nm) / m , es decir, la suma de
todos los factores dividido por la cantidad total de factores.*/

function ejercicio_6(){
    var contador = 1
    var total = 0
    while (contador<=10){
        var numero = parseInt(prompt("Introduce un número"), 10)
        if (isNaN(numero)){
            alert(total/contador)
            contador++
        }
        else{
            total = total+numero
            alert(total/contador)
            contador++
        }  
    }
}

/*Crea un programa que cree 4 objetos del tipo Aventurero con los atributos
de clase, nivel y raza. Muestra por pantalla cada uno y sus atributos.*/

function ejercicio_7(){
    var Aventurero = function(){
        this.nombre = ""
        this.clase = ""
        this.nivel = ""
        this.raza = ""
        this.atributos = function(){
            alert(`Nombre: ${this.nombre} - Clase: ${this.clase} - Nivel: ${this.nivel} - Raza: ${this.raza}`)
        }
    }    
    
    for (i = 0; i < 4; i++){
        var nombre = prompt("Introduce el nombre de tu aventurero")
        var clase = prompt("Introduce la clase de de tu aventurero")
        var nivel = prompt("Introduce el nivel de tu aventurero")
        var raza = prompt("Introduce la raza de tu aventurero")
        var aventurero = new Aventurero()
        aventurero.nombre = nombre
        aventurero.clase = clase
        aventurero.nivel = nivel
        aventurero.raza = raza
        aventurero.atributos()
    }
}

/*Crea un programa que permita usar una calculadora simple. Debe ofrecer al
usuario la posibilidad de hacer sumas, restas, multiplicaciones y divisiones. El
programa debe continuar hasta que el usuario decida terminar.*/

function ejercicio_8(){
    function calcula(){
        var operacion = ""
        while (operacion != "salir"){
            var operacion = prompt("Introduce el símbolo de la operación (+ - * /).\nPara salir escriba 'salir'.")
            if (operacion == "+" | operacion == "-" | operacion == "*" | operacion == "/"){
                var operando1 = prompt("Introduce el primer operando")
                var operando2 = prompt("Introduce el segundo operando")
                var result = eval(operando1 + operacion + operando2)
                alert(result)
            }
            else if (operacion == "salir"){
                break
            }
            else
                alert("No es válido")
        }
        alert ("¡Hasta luego!")
    }
calcula()
}

/*Crea un programa que aúne todos los ejercicios anteriores. Hazlo en un
bucle, como un menú, para poder reproducir cada uno de forma individual
y que se termine cuando decida el usuario.*/

function ejercicio_9(){
    eleccion = ""
    while (eleccion != "salir"){
        var eleccion = prompt("Escribe un número del 1 al 8 para ejecutar el respectivo ejercicio.\nEscribe 'salir' para salir.")
        switch (eleccion) {
            case '1':
                ejercicio_1()
            break;
            case '2':
                ejercicio_2()
            break;
            case '3':
                ejercicio_3()
            break;
            case '4':
                ejercicio_4()
            break;
            case '5':
                ejercicio_5()
            break;
            case '6':
                ejercicio_6()
            break;
            case '7':
                ejercicio_7()
            break;
            case '8':
                ejercicio_8()
            break;
            case 'salir':
                alert("¡Hasta luego!")
            break;
            default:
            alert("No disponible");
            break;
        }
    }
}

ejercicio_9()