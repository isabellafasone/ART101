// the clicker button program

// we create a variable named "count", the initial value is 0

let count = 0;
let colorsCount = 0;

// an indexed array of data
let colors = ["green", "orange", "brown",  "yellow", "gold", "purple", "red", "pink"];

let buttonText="";

// green, orange, brown,  yellow, gold, purple, red, pink

// we listened for when an html element with and id "needy-button" is clicked and then...

$("#needy-button").click( function(){
    
    // what to do when the button is clicked
    // first, set a new value for "count", which is the current value +1
   
    count = count + 1;

    console.log(count);
    console.log(colors[colorsCount]);
   
    // now lets find our button and set a new text for it
   
    // $("#needy-button").html("I was KICKED" + count + " TIMES");

    buttonText="I was KICKED" + count + "times and color is" + colors[colorsCount];

    $("#needy-button").html( buttonText );

    $("body").css( "background-color", colors[colorsCount] );

    //$("body").append("<img src='" +colors[count-1] +".jpg'>");

    // if we are run out of colors start from the first one anew

    colorsCount = colorsCount +1;

    if( colorsCount >= 8 ) { colorsCount = 0; }
    
    if( count < 4 ) {$("#needy-button").after("<p>My mood is...dead</p>")};

    if( (count >= 4) && ( count < 7 )) {$("#needy-button").after("<p>My mood is...good mood</p>")};

    if( (count >= 7) && ( count < 12 ) ) {$("#needy-button").after("<p>My mood is...annoyed</p>")};

    if( count >= 12 ) {$("#needy-button").after("<p>My mood is...pissed off</p>")};

});

