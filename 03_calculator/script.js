function solve()
{
    let n1=document.getElementById('result').value
    let n2=eval(n1);
    document.getElementById('result').value=n2;
}
function clr()
{
    document.getElementById('result').value='';

}
function dis(val)
{
    document.getElementById('result').value+=val;
}
