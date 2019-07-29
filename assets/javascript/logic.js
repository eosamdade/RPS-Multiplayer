console.log("hello world");
console.log($);

$("#player1button").on("click",function(event){
    event.preventDefault();
    console.log("am lsiterning");

    var player1name = $("#player1Name").val().trim();
    console.log(player1name);

    var rpsPlayer1 = $("#name1").append(`<h2 id="player1">${player1name}</h2>`);
});

function 

