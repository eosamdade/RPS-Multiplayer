console.log("hello world");
console.log($);

let player1name = "";
let player2Name = "";
let rpsPlayer2 = "";

//enter click event
$("#player1button").on("click",function(event){
    event.preventDefault();
    console.log("am lsiterning player 1");

   player1name = $("#player1Name").val().trim();
    console.log(player1name);

    player1NameDisplay();

    readyPlayer1();

    $("#player1Name").hide();
    $("#player1button").hide();

});


$("#player2button").on("click",function(event){
    event.preventDefault();
    console.log("am lsiterning player 2");

   player2name = $("#player2Name").val().trim();
    console.log(player2name);

    player2NameDisplay();

    readyPlayer2();

    $("#player2Name").hide();
    $("#player2button").hide();
    
    $("#welMsg").append(`<h2 class="welMsg">CURRENT PLAYERS</h2>`)
});

//showing that players have login successfully
function readyPlayer1 () {
    $("#ready1").append(`<p class="ready">PLAYER 1 : ${player1name} IS READY ♫ </p>`)
}

function readyPlayer2 () {
    $("#ready2").append(`<p class="ready">PLAYER 2 : ${player2name} IS READY ❀</p>`)
}

//displaying players name in rps multiplayer and chatroom
function player1NameDisplay () {
    rpsPlayer1 = $("#name1").append(`<div class="palyer1nameDisplay"><h2 id="player1">${player1name}♫</h2></div>`);
    $("#name1Msg").append(`<div class="palyer1nameDisplay"><h2 id="player1">${player1name}♫</h2></div>`);
}

function player2NameDisplay () {
    rpsPlayer2 = $("#name2").append(`<div class="palyer2nameDisplay"><h2 id="player2">${player2name}❀</h2></div>`);
    $("#name2Msg").append(`<div class="palyer2nameDisplay"><h2 id="player2">${player2name}❀</h2></div>`);
}

//player one rps
$("#p1Rock").on("click",function(){
    console.log(`${player1name} Rocks`)
})

$("#p1Paper").on("click",function(){
    console.log(`${player1name} Papers`)
})

$("#p1Scissors").on("click",function(){
    console.log(`${player1name} Scissors`)
})

//player two rps
$("#p2Rock").on("click",function(){
    console.log(`${player2name} Rocks`)
})

$("#p2Paper").on("click",function(){
    console.log(`${player2name} Papers`)
})

$("#p2Scissors").on("click",function(){
    console.log(`${player2name} Scissors`)
})
