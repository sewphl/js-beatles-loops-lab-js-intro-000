
function theBeatlesPlay(musicians,instruments) {
  var array = [];
  for(i=1; i<musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return(array);
}
