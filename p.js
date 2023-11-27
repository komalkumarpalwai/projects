let random=Math.random()

let a=prompt("enter value of a");
let b=prompt("enter value of a");
let c=prompt("enter operation want");
let obj=
{
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"**",
}
if (random>10)
{
   alert(`the result is ${eval(`${a}${c}${b}`)} `)
}
else
{
    c=obj[c]
    alert(`the result is ${eval(`${a}${c}${b}`)} `)
}