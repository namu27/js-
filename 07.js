

function main()
{
    let p,r,t,si;
    console.log("Enter the principal, rate and time:");
    p=prompt('Enter the Principal'); //20
    r=prompt('Enter the Rate ');     //30
    t=prompt('Enter the Duration');  //20 
    si=(p*r*t)/100;                  // 20+30+20 =1200   12000/3= 120
    document.write("simple intrest=" +si) // 120
}

main();

//output:-   120