document.addEventListener("DOMContentLoaded",()=>{
    console.log("worked")
    let buttonSubtract=document.getElementById('subtract')
    let inputNumber=document.getElementById('number')
    let textResult=document.getElementById('result')
    let buttonPluss=document.getElementById('plus')
    let sum=0
    
    buttonPluss.addEventListener('click',(event)=>{
        //to prevent the refresh the page
        event.preventDefault();
        console.log(inputNumber)
        sum=sum+ parseInt(inputNumber.value);
        textStyle()
        console.log(sum)
    })
    buttonSubtract.addEventListener('click',(e)=>{
        console.log(inputNumber)
        sum=sum-parseInt(inputNumber.value);
        textStyle()
        console.log(sum)

    })
    let textStyle=()=>{
        textResult.innerText=sum+""
        if(sum<0){

            textResult.style.color="red"
        }
    }
    buttonPluss.addEventListener("mouseover", ()=>{
        buttonPluss.style.backgroundColor="gray"
    });
})