drinks = [

{name: "lemonade", price: 50},
{name: "lime", price: 10},
{name: "Mocktail", price: 30},
{name:"Iced tea",price:20}
]

function sort_price(drinks)
{
    for(let i=drinks.length-1; i>=0; i--)
    {
        for(let j=0; j<i; j++)
        {
            if(drinks[j].price > drinks[j+1].price)
            {
                let temp = drinks[j];
                drinks[j] = drinks[j+1]
                drinks[j+1] = temp;
            }
        }
    }
    console.log(drinks);
}

sort_price(drinks);