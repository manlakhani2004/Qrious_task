function longest_common_prefix(str)
{
    //take first array element for compare others
    let example = str[0];
    let result = "";

    for(let i=0; i<example.length; i++)
    {
        let flg=1;
        for(let j=0; j<str.length; j++)
        {
            if(!(example[i]==str[j][i]))
                {
                    flg=0;
                }   
        }

        //if all element of array match characters of exmple then add in result
        if(flg==1)
        {
            result += example[i];
        }
    }

    return result;

}

let strs = ["flower","flow","flight"];

let result =longest_common_prefix(strs);

if(result=="")
{
    console.log("Not match");
}else{
   console.log(result)
}