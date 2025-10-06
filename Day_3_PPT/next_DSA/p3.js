function jump_game(arr,jump)
{   
    if(jump>=arr.length)
    {
        return false;
    }

    let current_index = arr[jump];
    // console.log(current_index);
    // console.log(jump);
    let total_jump = jump+current_index;
    if(total_jump==arr.length-1)
        {
            return true;
        }    

    return false;

}

let arr = [2,3,1,1];
let jump = 1;

console.log(jump_game(arr,jump));