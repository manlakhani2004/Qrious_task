let nums = [1,1,2,2,4];

function remove_duplicates(arr)
{
    let i=0;
    let j=0;

    for(i=0; i<arr.length; i++)
    {
        if(arr[i]!=arr[j])
        {
            arr[++j]= arr[i];
        }
    
    }

    return j;
}

let k = remove_duplicates(nums);

// for(let i=0; i<=k; i++)
// {
//     console.log(nums[i]);
// }

for(let i=k+1; i<nums.length; i++)
{
    nums[i]= '_';
}
console.log(nums)