function Flatten_Array(arr)
{
    let result =[];
    let j=0;
    for(let i=0; i<arr.length; i++)
    {
       if(typeof(arr[i])== "number")
       {
        result[j++]= arr[i];
       }else
       {
         for(let x=0; x<arr[i].length; x++)
         {
            result[j++]= arr[i][x];
         }
       }
    }
    console.log(result);

}

let input = [1,2,[5,4],3,[5],[93,8,2]]
Flatten_Array(input)