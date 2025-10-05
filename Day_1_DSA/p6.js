
function hamming_Distance(n1, n2)
{
    let xbinary = n1.toString(2);
    let ybinary = n2.toString(2);

    let max_length = Math.max(xbinary.length,ybinary.length);

    let count=0;
    for(let i=0; i<max_length; i++)
    {
        if(xbinary[i]!=ybinary[i])
        {
            count++;
        }
    }

    return count;
}


    let x = 3, y = 1;
    console.log(hamming_Distance(x, y));
