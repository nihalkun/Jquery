var v = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your
phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;


var reg = /[?.]/;

var words = v.split(reg);
var n , m=0;
console.log(words)
function countWords(str ) {
        str = str.replace(/(^\s*)|(\s*$)/gi,"");
        str = str.replace(/[ ]{2,}/gi," ");
        str = str.replace(/\n /,"\n");
        str = str.replace(/\r?\n|\r/g, " ");                                                       
        n = str.split(' ').length;
        if(n > 3){
            m+=1;
            console.log(m , str);
        }
 }

for(let i =0; i<words.length; i++){
   
   // console.log(i, countWords(words[i]));
      countWords(words[i]);
}



/*let n = 0;
let word_count;
for( let i = 0; i < words.length; i++){
    for(let j = 0; j < words[i]; j++){
        if(j==" ")
        {
           n++;
        }
    }
    if(n > 3){
        console.log(words[i]);
    }
}
*/