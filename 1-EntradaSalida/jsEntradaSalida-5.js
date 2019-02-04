/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
    var nombre;

    nombre = document.getElementById("elNombre").value;
    nombre = document.getElementById("laEdad").value;
    
    alert("Usted se llama " + nombre "y tiene" + nombre);
    
}

