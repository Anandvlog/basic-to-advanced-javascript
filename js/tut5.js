let name = "anand";
let fruits1 ="apple";
let fruits2 = 'orange';
let myhtml = `hello ${name} 
            <h1>This is heading</h1>
            <p> You like ${fruits1} and ${fruits2} 

`;
document.body.innerHTML = myhtml;