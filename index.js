
function theBeatlesPlay(musicians,instruments) {
  var array = [];
  for(let i=0; i<musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return(array);
}

function johnLennonFacts(facts) {
  var array = [];
  var j=0;
  while(j<facts.length){
    array.push(facts[j] + "!!!");
    j = j+1;
  }
  return(array);
}
