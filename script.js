async function foo(){
    var inp=document.querySelector("input").value;
    var a=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inp}`);
    var b=await a.json();
    var title=document.querySelector("#title");
  title.innerText= b[0].word;
  var content=document.querySelector(".contents");
console.log(inp);
  content.innerText=`Meaning : ${b[0].meanings[0].definitions[0].definition}

  Parts of speech : ${b[0].meanings[0].partOfSpeech}
  
  Synonym : ${b[0].meanings[0].synonyms[0]}
  
  Antonym : ${b[0].meanings[0].antonyms[0]}
  
  Pronounciation : ${b[0].phonetics[0].audio}
  
  Source : ${b[0].sourceUrls[0]}`;

 console.log(b);
 console.log(b[0].meanings[0].definitions[0].definition);
 console.log(b[0].meanings[0].partOfSpeech);
}