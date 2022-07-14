
// we set a value which can be manipulated later
 var value = 0;
 // we add a event listener to the button
$("button").click(function(){
 var click = this.id;
 switch (click) {   //control
  case "inc":
  value = value +1;
  colordecider(value);
    break;
  case "res":
    value = 0;
    $(".value").text(value).css("color", "black");
    break;
  case "dec":
  value = value - 1;
  colordecider(value);
    break;
}
});

//function to set the color of the number.

function colordecider(value){
  if(value>0){
  $(".value").text(value).css("color", "green");
  }else if (value<0) {
  $(".value").text(value).css("color", "red");
  }else{
  $(".value").text(value).css("color", "black");
}}
