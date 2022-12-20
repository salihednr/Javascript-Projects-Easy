function submit()
{
    let n1=document.getElementById("num1").value
    let n2=document.getElementById("num2").value
    if(n2!=0)
        {
            document.getElementById("answer").innerHTML=parseInt(n1)/parseInt(n2)
        }
    else
        {
            window.alert("Division By Zero Is Not Possible")
        }
}
