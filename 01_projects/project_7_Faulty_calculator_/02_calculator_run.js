// Faulty calculator
// Math.random() is used to get random numbers 
if(Math.random()<=0.1){
    function sum(x,y){
        return x-y
    }
    function sub(x,y){
        return x/y
    }
    function div(x,y){
        return x**y
    }
    function mul(x,y){
        return x+y
    }
}else{
    function sum(x,y){
        return x+y
    }
    function sub(x,y){
        return x-y
    }
    function div(x,y){
        return x/y
    }
    function mul(x,y){
        return x*y
    }
}
result = sum(5,3)
result2 = sub(5,3)
result3 = div(5,3)
result4 = mul(5,3)
console.log("Addition is: ",result)
console.log("Substraction is: ",result2)
console.log("Division is: ",result3)
console.log("Multliplication is: ",result4)