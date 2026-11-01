let boops = 0;

let foxy = {
    name: "Foxy",
    age: 7,
    species: "PirateFox", 
    lore: "The spirit of a murdered child lives inside of the animatronics."
};

let moods = ["cute", "cuddly", "hungry"];

let mood = "";

let colors = ["#6a0000", "#470000"];

function updatePage() {
    
    let boopWord = "boops";

    if (boops == 1) {
    boopWord = "boop";
    }

    if (boops >= 11) {
        mood = moods[2];
        $("#enviornment-output").css("background-color", colors[2]);
    }
    else if (boops >=5 && boops <=10) {
        mood = moods[1];
        $("#enviornment-output").css("background-color", colors[1]);
    }
    else {
        mood = moods[0];
        $("#enviornment-output").css("background-color", colors[0]);
    }

    if (boops == 0) {
        $("#boop-count").html("Foxy the Pirate Foxy has no boops and is feeling " + mood);
        $("#enviornment-output").css("background-color", "rgb(165, 42, 42)");
    } else if (boops < 0) {
        $("#boop-count").html("Foxy the Pirate Foxy owes you " + boops + " boops and is feeling " + mood);
        $("#enviornment-output").css("background-color", "rgb(225, 62, 62)");
    } else {
        $("#boop-count").html("Foxy the Pirate Foxy has " + boops + " " + boopWord + " and is feeling " + mood);
    }

};

$("#give-button").click(function() {
    boops = boops + 1;
    updatePage();
});

$("#take-button").click(function() {
    boops = boops - 1;
    updatePage();
});

$("#name-button").click(function() {
    $("#name-text").html(foxy.name)
});

$("#age-button").click(function() {
    $("#age-text").html(foxy.age)
});

$("#species-button").click(function() {
    $("#species-text").html(foxy.species)
});

$("#lore-button").click(function() {
    $("#lore-text").html(foxy.lore)
});