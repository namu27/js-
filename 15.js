
function main()
{
    let i=3,n=11,c=0;
    console.log("Enter an integer:");
    n=(11);
    for(i=1; i<=n; i++)
    {
        if(n%i==0)
        c++;
    }
       if(c==2)
       console.log("Prime Number:"+n);
       else
       console.log("Not a prime Number:"+n);
}

main();