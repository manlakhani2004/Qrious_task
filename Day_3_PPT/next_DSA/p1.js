

function two_sum(arr,target)
{
    let ans = [];
    for(let i=0; i<arr.length; i++)
    {
        for(let j=i+1; j<arr.length; j++)
        {
            if(arr[i]+arr[j]==target)
            {
                ans.push(i);
                ans.push(j);
            }
        }
    }
    return ans;
}
let input =[2,7,11,15]
let target = 9
console.log(two_sum(input,target))