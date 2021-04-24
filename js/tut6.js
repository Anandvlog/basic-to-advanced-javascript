console.log("anand");
function  great(name,thanks="thank you" ) {

console.log(` ${name} Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14% of its shares and control 56% of the stockholder voting power through super-voting stock. Google was incorporated in California on September 4, 1998. Google was then reincorporated in Delaware on October 22, 2002 ${thanks}`);
 return 1;
    
}



let name = "anand";

let val= great(name, "thanks a lot" );
console.log(val);


// function return in object
const myobj = {
    name: "anand",
    game: function () {
        return "GTA"
        
    }

}
console.log(myobj.game());

// function use in array

arr = ['fruit', 'playground', 'vegetable'];
arr.forEach(function (element, index,array) {

console.log(element,index)
    

    
});

// scope
 
// global  variable
let i = 230;
console.log(i);

function ui(name) 
{ 
    // local variable
    let i=9;
    console.log(i);
    return `this is a ${name} ui`;
    
}
console.log(ui("anand"), i);
