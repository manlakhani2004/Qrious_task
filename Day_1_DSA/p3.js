function Rotate_Vowels(str)
{
    let contain_vowels = [];
    let vowels = ['a','e','i','u','A','E','I','O','U'];
    for(let char of str)
    {
        if(vowels.includes(char))
        {
            contain_vowels.push(char);
        }
    }
    return contain_vowels;
}

let str = "IceCreAm";
const all_vowels = Rotate_Vowels(str);

let n = all_vowels.length;
for(let i=0; i<=n/2; i++)
{
    let start = str.indexOf(all_vowels[i]);
    let end = str.indexOf(all_vowels[n-i-1])

    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
}
console.log(str);