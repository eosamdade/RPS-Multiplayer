console.log("hello world");
console.log($);

//initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBluu0AHxa8NxIpBrXRMIfuJRlcxTXEXRs",
    authDomain: "rpsgame-44592.firebaseapp.com",
    databaseURL: "https://rpsgame-44592.firebaseio.com",
    projectId: "rpsgame-44592",
    storageBucket: "",
    messagingSenderId: "391429460136",
    appId: "1:391429460136:web:5d3ff51e35d5bede"
};

firebase.initializeApp(firebaseConfig);

//create a variable to ref database
var database = firebase.database();

var player1name = "";
var player2Name = "";
var player1NewMsg = "";
var player2NewMsg = "";
var newMsgP1 = "";
var newMsgP2 = "";


//enter click event
$("#player1button").on("click",function(event){
    event.preventDefault();
    console.log("am lsiterning player 1");

    player1name = $("#player1Name").val().trim();

    database.ref().child("player 1 data").set({
        player1name: player1name,
        player1newMsg: player1NewMsg,
        // dateAdded: firebase.database.ServerVlue.TIMESTAMP
    })

    // player1NameDisplay();
    //displaying players name in rps multiplayer and chatroom
    $("#name1").append(`<div class="palyer1nameDisplay"><h2 id="player1">${player1name}♫</h2></div>`);
    $("#name1Msg").append(`<div class="palyer1nameDisplay"><h2 id="player1">${player1name}♫</h2></div>`);

    readyPlayer1();

    $("#player1Name").hide();
    $("#player1button").hide();

});


$("#player2button").on("click",function(event){
    event.preventDefault();
    console.log("am lsiterning player 2");

    player2name = $("#player2Name").val().trim();

    database.ref().child("Player 2 data").set({
        player2name: player2name,
        player2newMsg: player2NewMsg,
    })

    // player2NameDisplay();
    //displaying players name in rps multiplayer and chatroom
    $("#name2").append(`<div class="palyer2nameDisplay"><h2 id="player2">${player2name}❀</h2></div>`);
    $("#name2Msg").append(`<div class="palyer2nameDisplay"><h2 id="player2">${player2name}❀</h2></div>`);

    readyPlayer2();

    $("#player2Name").hide();
    $("#player2button").hide();
    
    $("#welMsg").append(`<h2 class="welMsg">CURRENT PLAYERS</h2>`)
});


database.ref().on("value",function(p1datasnapshot){
    player1Name = (p1datasnapshot.val().player1name);
    console.log(p1datasnapshot.val().player1NewMsg);
    
},function(errorobject) {
    console.log("Error handled: " + errorobject.code);
});

database.ref().on("value", function(p2datasnapshot){
    player2Name = (p2datasnapshot.val().player2name);
    console.log(p2datasnapshot.val().player2NewMsg);

},function(errorobject) {
    console.log("Error handled: " + errorobject.code);
});


//showing that players have login successfully
function readyPlayer1 () {
    $("#ready1").append(`<p class="ready">PLAYER 1 : ${player1name} IS READY ♫ </p>`)
}

function readyPlayer2 () {
    $("#ready2").append(`<p class="ready">PLAYER 2 : ${player2name} IS READY ❀</p>`)
}








//showing the current palyers on load of the App
// database.ref().orderByChild("dataAdded").limitToLast(1).on("value", function(snapshot) {
//     $("#name1").text(snapshot.val().player1Name);
//     $("#name2").text(snapshot.val().player2Name);
// })






//RPS GAME SESSION

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



//MSG APP

$("#player1Msgs").on("click",function(event){
    event.preventDefault();
    console.log("ding1");

    newMsgP1 = $("#player1MsgText").val().trim();
    console.log(newMsgP1);

    postMsgP1()

    $("#player1MsgText").val("");
});

$("#player2Msgs").on("click",function(event){
    event.preventDefault();
    console.log("ding2");

    newMsgP2 = $("#player2MsgText").val().trim();
    console.log(newMsgP2);

    postMsgP2();

    $("#player2MsgText").val("");
});

//will it be better as a array?
function postMsgP1() {
    $("#newMsgP1").append(`<P class = "messagesItem time">${newMsgP1}</P>`)
}

function postMsgP2() {
    $("#newMsgP2").append(`<P class = "messagesItem time">${newMsgP2}</P>`)
}