function saludar(name)
{
    console.log("Hola " + name);
}
saludar("Abdallah");
saludar("Francisco");

function mayor(num1, num2)
{
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(mayor(25, 50));