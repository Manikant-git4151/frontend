var a = number( prompt("enter number 1 : "));
var b =  number(prompt("enter number 2 : "));
var c =  number(prompt("enter number 3 : "));
var op= number(prompt("enter the operation to be performed + ,- ,* ,/ : "));

if( op == "+" )
{
    return sum();
}

else if (op =="-") 
{
    return sub() ;    
} 

else if (op == "*") 
{
    return mul();    
}

else if (op == "/") 
{
    return div();    
}

else 
{
    alert("invalid")
}

function sum(a,b,c)
{
    a+b+c;
}

function sub(a,b,c)
{
    a-b-c;
}

function mul(a,b,c)
{
    a*b*c;
}

function div(a,b,c)
{
    (a/b)/c;
}
