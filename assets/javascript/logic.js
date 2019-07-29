console.log("hello world");
console.log($);

let player1name = "";
let rpsPlayer2 = "";

$("#player1button").on("click",function(event){
    event.preventDefault();
    console.log("am lsiterning player 1");

   player1name = $("#player1Name").val().trim();
    console.log(player1name);

    player1NameDisplay();
    
    $("#player1Name").val("");
});

$("#player2button").on("click",function(event){
    event.preventDefault();
    console.log("am lsiterning player 2");

   player2name = $("#player2Name").val().trim();
    console.log(player1name);

    player2NameDisplay();
    
    $("#player2Name").val("");
});

function player2NameDisplay () {
    rpsPlayer2 = $("#name2").append(`<div class="palyer2nameDisplay"><h2 id="player2">${player2name}</h2></div>`);
}

function player1NameDisplay () {
    rpsPlayer1 = $("#name1").append(`<div class="palyer1nameDisplay"><h2 id="player1">${player1name}</h2></div>`);
}

