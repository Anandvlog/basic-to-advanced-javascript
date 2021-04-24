// let str1 = 'anand';
// let str2 = 'chauhan'; 
// console.log(str1 + " " + str2);

function wordcount() {
    let str = 'anand chauhan';
    let n = str.length
    document.getElementById('count').innerHTML=n; 
}

 function merge(){

    let str1 = 'anand';
    let str2 = 'chauhan';
    let res = str1 .concat (str2);
    document.getElementById("count1").innerHTML = res;
    // document.getElementById('count1').innerHTML=(str1 + " " + str2); 

     
 }
 

 function sameword()
 {
   let str = "javascript is a grat is language"
   let w = str.match(/is/g);
   document.getElementById('count2').innerHTML=w;
 }
 

 function replace()
 {
      let str= "anand chauhan";
      let r= str.replace("anand","chauhan" ) ;
      document.getElementById('count3').innerHTML= r;

 }

 function trim()
 {
     let str= "    javascript        ";
     let t = str.trim();
     alert(t);
    
 }
  
 function char()
 {
     let str = 'javascript';
     let c =  str.charAt(3);
     document.getElementById('count5').innerHTML= c;

 }
     
  function split()
  {
      let str = 'javascript is best language';
      let s = str.split(" ");
      document.getElementById('count6').innerHTML= s

  }
   
  function repeat()
  {
      let str1= "javascript is a great language";
      let r = str1.repeat(2);
      document.getElementById('count7').innerHTML= r;
  }

   function slice()
   {
    let str1= "javascript is a great language";
    let sli = str1.slice(3);
    document.getElementById('count8').innerHTML= sli; 
   }


  function findword()
  {
    let str = "anand javascript anand is a javascript";
      let strArr = str.split(" ");
      let res = []
      
      for (let i = 0; i < strArr.length; i++){
          if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
              if(!res.includes(strArr[i])){
                  res.push(strArr[i]);
              };
          };
      };
      
      
  };
  document.getElementById('count9').innerHTML= str;

var str = "how do you do"
 function finddublicateword (str){
      var res = str.split(" ");
      
 }

















 


