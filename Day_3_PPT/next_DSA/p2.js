
function Rearrange_Array(arr)
{
    let neg = [];
    let pos = [];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]<0)
        {
            neg.push(arr[i]);
        }else{
            pos.push(arr[i])
        }
    }

    let ans= [];
    let j=0;
    for(let i=0; i<pos.length; i++)
    {

        ans[2*i]=pos[i];
    }
    for(let i=0; i<neg.length; i++)
    {
        ans[2*i+1] = neg[i];
    }
    return ans;
}

let arr = [-3,-1,-2,-5,2,-4];
let final = []
for(let i=0; i<arr.length; i++)
{

    if(!(arr[i]=="<1 empty item>"))
    {
        final.push(arr[i])
        // console.log(arr[i])
    }
}
// console.log(Rearrange_Array(arr))
console.log(final)