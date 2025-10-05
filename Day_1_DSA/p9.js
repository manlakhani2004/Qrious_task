function shape(obj)
{
    switch(obj.shape)
    {
        case "circle":
                    if(!obj.radius)
                    {
                        console.log("Please add radius in object");
                    }
                    obj.value = 3.14*obj.radius*obj.radius
                    // console.log("Area of circle is:",3.14*obj.radius*obj.radius)
                    break;
        case "square":
                    if(!obj.num)
                    {
                        console.log("Please enter number for find square");
                    }
                    obj.value =obj.num*obj.num
                    // console.log("Square is:",obj.num*obj.num);
                    break;
        case "rectangle":
                if(!obj.length || !obj.breath)
                    {
                        console.log("Please enter length and breath for rectangle");
                    }
                    obj.value = obj.length*obj.breath
                    // console.log("Square is:",obj.length*obj.breath);
                    break;
        case "triangle":
                    if(!obj.side1 || !obj.side2 || !obj.side3)
                    {
                        console.log("Please enter all side for calculate triangle");
                    } 
                    let s = (obj.side1 + obj.side2 + obj.side3) / 2;
                    area = Math. sqrt(s * ((s - obj.side1) * (s - obj.side2) * (s - obj.side3)))
                    // console.log("area of triangle is:",area);
                    obj.value = area;
                    break;
    }
    return obj;
}

console.log(shape({shape:"circle",value:"area",radius:10}))
console.log(shape({shape:"square",value:"area",num:5}))
console.log(shape({shape:"rectangle",value:"area",length:5,breath:6}))
console.log(shape({shape:"triangle",value:"area",side1:5,side2:6,side3:7}))