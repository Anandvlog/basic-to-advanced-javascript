console.log("Anand chauhan");


const age = 18;
const doesDrive = false;
 
if (age==19){

    console.log('Age is 19')
}
else if(age==65){

    console.log('Age is 65')
}
else {
    console.log('Age is not  19')
}
if  (doesDrive || age>18)
{
    console.log('you can derive');
}

// ternary operator
console.log(age==45 ? 'Age is 45':'Age is not 45');


// switch case 


switch (age) {
    case 18:
        console.log("you are 18");
        break;
    case 28:
        console.log("you are 28");
        break;
    case 38:
        console.log("you are 38");
        break;

    default:
        console.log("you are unkonwn age")
        break;
}

// consol.log(this);

// function sum()
// {
//     var add = 2+2;
//     console.log("sum of two number is" +add);
//     console.log(this);
// }
// sum()

// object 
 const anand = {
     name : "anand chauhan",
     qualif : "BE",
    //  method use in this key-word
     sum: function()
     { 
        var add = 2+2;
        console.log("sum of two number is" +add);
        console.log(this);

     }
 }
    anand.sum();