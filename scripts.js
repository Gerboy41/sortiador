function generateNumber(){
    const inpat1 = Math.ceil(document.querySelector(".inpat-1").value)
    const inpat2 = Math.floor(document.querySelector(".inpat-2").value)

if(inpat1 >= inpat2){
    alert("valorminimoa menor que valor maximo")
   
} else{
    const result = Math.floor(Math.random() * inpat1 - inpat2 + 1) + inpat2;

    alert(result) 
}

 
}