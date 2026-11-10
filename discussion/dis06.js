// TODO 1: make a variable to count the creatures (start at 0)
let count = 0

// .click(...) runs this function when the button is clicked.
$("#add-button").click(function () {
    // .val() reads the field; .trim() removes spaces at either end.
    let label = $("#item-label").val().trim();
    let objectColor = $("#object-color").val();
    let labelLength = label.length;

    // TODO 3: read the size picker with .val(), the same way objectColor is read above
    let objectSize = $("#creature-size").val();

    if ((label == "") || (labelLength > 20)) {
        $("#message").text("Creature's name can't be empty or longer than 20 characters.");
    }
    else {
        // HTML inside $(...) creates a new element, not yet on the page.
        let item = $("<li></li>");
        // .css(property, value) changes this element's background color.
        item.css("background-color", objectColor);
        item.css("font-size", objectSize);
        // .text(...) sets its label literally, including < and >.
        item.text(label);

        // TODO 3: set the creature's size with .css("font-size", ...)


        // TODO 2: when this creature is clicked, remove it
        //    hint: item.click(function () { ... });
        //    inside, $(this).remove() removes the creature that was clicked
        //    then make the counter go down by 1 and update #count
        item.click(function () {
        $(this).remove();

        count = count - 1;
        $("#count").text(count);
        });

        // .append(...) adds it after the existing list items.
        $("#items").append(item);

        // TODO 1: add 1 to the counter, then show it in #count
        //    e.g.  3 creatures roaming
        count = count + 1;
        $("#count").text(count + " creatures roaming");

        // Clear the field and put the cursor back for the next name.
        $("#item-label").val("");
        $("#item-label").focus();
        $("#message").text("");
    }
});


// STRETCH (done early?): give each new creature a random emoji
//    1. make an array:  let emojis = ["🐸", "🐌", "🦋", "🐞", "🐝"];
//    2. a random index:  Math.floor(Math.random() * emojis.length)
//    3. put the emoji in front of the name:  item.text(emoji + " " + label);

let emojis = ["🐸", "🐌", "🦋", "🐞", "🐝"];

let randomIndex = Math.floor(Math.random() * emojis.length);
let emoji = emojis[randomIndex];

item.text(label);

item.text(emoji + " " + label);