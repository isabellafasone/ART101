let boops = 0;

let foxy = {
    name: "Foxy",
    age: 7,
    species: "PirateFox", 
    lore: "The spirit of a murdered child lives inside of the animatronics."
};

let moods = ["cute", "cuddly", "hungry"];

let mood = "";

function updatePage() {
    
    if (boops >= 11) {
        mood = moods[2];
    }
    else if (boops >=5 && boops <=10) {
        mood = moods[1];
    }
    else {
        mood = moods[0];
    }

    let boopWord = "boops";

    if (boops == 1) {
    boopWord = "boop";
    }

    $("#boop-count").html("Foxy the Pirate Foxy has " + boops + " " + boopWord + " and is feeling " + mood);
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

