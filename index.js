
let dark=document.querySelector("button");
let body=document.querySelector("body")
let list=document.querySelector("ul")
let fullm=document.querySelector(".lifull")
let check=0
let a=document.querySelector(".a")
let th=document.querySelector("h2")
let td=document.querySelector("td")

dark.addEventListener("click",function()
{
        if(check==0)
        {
          
           dark.innerText="LIGHTMODE"
            body.style.background="black"
            list.style.color="WHITE"
           
           th.style.color="black"
            full.style.backgroundColor="white"
            full1.style.backgroundColor="white"
            full2.style.backgroundColor="white"
            full3.style.backgroundColor="white"
           
           
            check=1

        }
        else
        {
           
            dark.innerText="DARKMODE"
            body.style.background="white"
            list.style.color="black"
            th.style.color="white"
            full.style.backgroundColor="black"
            full1.style.backgroundColor="black"
            full2.style.backgroundColor="black"
            full3.style.backgroundColor="black"
          
            check=0

        }
})
let bbg=document.querySelector(".bg")
let f=0;
bbg.addEventListener("click",function()
{
    if(f==0)
    {
        bbg.style.opacity=10;
        f=1
    }
   else
   {
    bbg.style.opacity=0.4;
    f=0
   }
})
let ul=document.querySelector(".li")
let full=document.querySelector(".lifull")

 ul.addEventListener("mouseenter",function(){
     full.style.display="block"
    
     full.style.color="white"

    

})
ul.addEventListener("mouseleave",function(){
    full.style.display="none"
})
let li1=document.querySelector(".li1")

let full1=document.querySelector(".lifull1")
li1.addEventListener("mouseenter",function(){
     full1.style.display="block"

})
li1.addEventListener("mouseleave",function(){
    full1.style.display="none"
})
let li2=document.querySelector(".li2")

let full2=document.querySelector(".lifull2")
li2.addEventListener("mouseenter",function(){
     full2.style.display="block"

})
li2.addEventListener("mouseleave",function(){
    full2.style.display="none"
})
let li3=document.querySelector(".li3")

let full3=document.querySelector(".lifull3")
li3.addEventListener("mouseenter",function(){
     full3.style.display="block"

})
li3.addEventListener("mouseleave",function(){
    full3.style.display="none"
})

let img2=document.querySelector(".img2")
let img=document.querySelector("img")
img.addEventListener("mouseenter",function()
{
    img2.style.display="block"
    
})
img.addEventListener("mouseleave",function()
{
    img2.style.display="none"
})

let  product=document.querySelectorAll(".slide")
let  p2=document.querySelectorAll(".shoe")
let imgs=0

let flag=0
   product.addEventListener("click",function()
   {

    if(flag==0)
    {
        p2.style.display="block"
        flag=1
    }
    else
    {
        p2.style.display="none"
        flag=0
    }
   })

