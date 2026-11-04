// this function expects a color
function paintPage (color) {
    $("body").css("background-color", color);
}

paintPage("yellow")

let count = 0;
let colorsCount = 0;


let colors = ["green", "orange", "brown",  "yellow", "gold", "purple", "red", "pink"];

let buttonText="";

$("#needy-button").click( function(){
   
    count = count + 1;

    console.log(count);
    console.log(colors[colorsCount]);
   
    // $("#needy-button").html("I was KICKED" + count + " TIMES");

    buttonText="I was KICKED" + count + "times and color is" + colors[colorsCount];

    $("#needy-button").html( buttonText );

    paintPage(colors[colorsCount]);
    //$("body").css( "background-color", colors[colorsCount] );

    //$("body").append("<img src='" +colors[count-1] +".jpg'>");

    if ( count >= 16) {  $("#needy-button").after("<p>my mood is... wild!</p>");   }
    else if ( count >= 13 ) {  $("#needy-button").after("<p>my mood is... really agitated</p>");   }
    else if (count >= 5) { $("#needy-button").after("<p>my mood is... agitated</p>");   }

    colorsCount = colorsCount +1;

    // if we are run out of colors start fron the first one anew
    if ( colorsCount >= 8 ) { colorsCount = 0;  } ;

   // if( colorsCount >= 8 ) { colorsCount = 0; }
   // if( count < 4 ) {$("#needy-button").after("<p>My mood is...dead</p>")};
   // if( (count >= 4) && ( count < 7 )) {$("#needy-button").after("<p>My mood is...good mood</p>")};
   // if( (count >= 7) && ( count < 12 ) ) {$("#needy-button").after("<p>My mood is...annoyed</p>")};
   // if( count >= 12 ) {$("#needy-button").after("<p>My mood is...pissed off</p>")};

});

//$("#green").click(function(){
   // console.log("green was clicked");
   // paintPage("green");
//});

//$("#orange").click(function(){
   // console.log("orange was clicked");
   // paintPage("orange");
//});

//$("#pink").click(function(){
   //console.log("pink was clicked");
   // paintPage("pink");
//});

$(".color-circle").click(function(){
    console.log("a circle was clicked")
    paintPage(this.id)
})