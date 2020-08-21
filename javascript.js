var Fahrenheit_Temperature = 356;
var Celsius_Temperature_clac = ((Fahrenheit_Temperature - 32)*5)/9;
var Celsius_Temperature = 180;
var Fahrenheit_Temperature_clac = ((Celsius_Temperature/5)*9)+32;
document.getElementById("demo-one").innerHTML =
 +Celsius_Temperature+' \xB0'+"C is "+Fahrenheit_Temperature_clac+' \xB0'+'F.';

 document.getElementById("demo-two").innerHTML =
 +Fahrenheit_Temperature+' \xB0'+"F is "+Celsius_Temperature_clac+' \xB0'+'C.';