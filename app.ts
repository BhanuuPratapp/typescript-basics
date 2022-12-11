var num1element = document.getElementById('num1') as HTMLInputElement
var num2element = document.getElementById('num2') as HTMLInputElement
var buttonelement = document.querySelector('button') as HTMLButtonElement

const numberarray: number[] = [];
const stringarray: string[] = [];
type numorstr = number | string 
type obj = {val: number, timestamp:Date}
function add(num1: numorstr, num2: numorstr)
{
    if(typeof num1 === 'number' && typeof num2 === 'number')
    {
    return num1 + num2;
    }
    else if(typeof num1 === 'string'  && typeof num2 === 'string' )
    {
        return num1 + ' '+ num2
    }
    else{
        return +num1 + +num2
    }
}
function object(resultobj:obj)
{
    console.log(resultobj.val)
}

console.log(add(1,6))

buttonelement.addEventListener('click' , () =>{
const num3 = num1element.value;
const num4 = num2element.value;
const stringresult = add(num3 , num4)
stringarray.push(stringresult as string)
const result  = add(+num3 ,+num4)
numberarray.push(result as number)
console.log(result)
console.log(stringresult)
object({val: result as number,timestamp: new Date()})
}
)