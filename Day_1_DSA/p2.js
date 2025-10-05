let nums = [1,2,3,4,5,6,7];
let k=3;

function rotate(nums,k,n)
{
    k = k%n;
    let temp = [];
    for(let i=n-k; i<n; i++)
    {
        temp.push(nums[i]);
    }
    // console.log(temp);
    for(let i=n-k-1; i>=0; i--)
    {
        nums[k+i] = nums[i];
    }
    // console.log(nums);
    for(let i=0; i<k; i++)
    {
        nums[i]= temp[i];
    }

    //output
     console.log("After rotate Right:",nums);
}


rotate(nums,k,nums.length)