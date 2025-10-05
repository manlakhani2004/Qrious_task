function Check_Place_Flowers(flowerbed ,n,num)
{
    let one=0;

    for(let i=0; i<n; i++)
    {
        if(flowerbed[i]==1)
        {
            one++;
        }
    }
    //maximum we can add plant in this array
    let max_plant = Math.ceil(n/2);

    //if already 1 and num add sum is less than or equal maximum plant cand add then we can add new plant
    if((one+num) <= max_plant)
    {
        return true;
    }
    else{
        return false;
    }
    
}

let flowerbed = [1,0,0,0,1];
let n=2;
const output = Check_Place_Flowers(flowerbed,flowerbed.length,n);


console.log(output);