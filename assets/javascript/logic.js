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

var msgScreen = $("#messages");
var msgForm = $("#messageForm");
var msgInput = $("#msgInput");
var msgBtn = $("#submitBtn");
var database = firebase.database();
var msgRef = database.ref("/game/msgs/")
var playerRef = database.ref("game")
var id = uuid();
var name;
var newPlayer = "";


var curPlayer = $("#currentPlayer").append(`<P id="gametag">⌚ CURRENT PLAYER</P> `)

//enter click event
$("#nameBtn").on("click",function(event){
    event.preventDefault();
    
    newPlayer = $("#nameInput").val().trim();
    console.log(newPlayer);

    var player = {
        id,
        newPlayer,
    }

    playerRef.push(player);

    if (newPlayer.length < 4) {
        return alert ("name needs to be more than 4 Characters!")
    }

    $("#name").append(newPlayer);
    $("#player").append(newPlayer);    

    localStorage.clear();
    localStorage.setItem("playername", newPlayer);
    localStorage.setItem("pllayerId", id);
    

    $("#userLoginForm").hide();
    
    return (name = $("#nameInput").val());
});

$("#name").text(localStorage.getItem("playername"));
$("#player").text(localStorage.getItem("playername"));

$("#nameDisplay").append(`<P id="gametag">⌚</P> `)





//RPS GAME SESSION


//player one rps
$("#p1Rock").on("click",function(){
    console.log(`${name} Rocks`)
})

$("#p1Paper").on("click",function(){
    console.log(`${name} Papers`)
})

$("#p1Scissors").on("click",function(){
    console.log(`${name} Scissors`)
})


//MSG APP

$("#messageForm").on("submit",function(event){
    event.preventDefault();
    console.log("form submited");

    var text = $("#msgInput").val().trim();

    if(!$("#msgInput").val().trim()) return;

    var msg = {
        id,
        name,
        text,
    };

    msgRef.push(msg);

    $("#msgInput").val("");
})

function updateMsgs (data) {
   var { id: userId,name,text} = (data.val());
   var msg = `<li class=" msg ${id == userId && "my" }">
   <span>
       <i class="name">${name} :</i>
       ${text}
   </span></li>`

   $("#messages").append(msg);
   
}

msgRef.on("child_added", updateMsgs)




//enter click event
// $("#nameSubBtn").on("submit",function(event){
    
//     event.preventDefault();
//     console.log("am lsiterning player 1");

//     // console.log( $("#nameInput").val().trim());
    
//     // database.ref().child("player 1 data").set({
//     //     player1name: player1name,
//     //     player1newMsg: player1NewMsg,
//     //     // dateAdded: firebase.database.ServerVlue.TIMESTAMP
//     // })

//     // // player1NameDisplay();
//     // //displaying players name in rps multiplayer and chatroom
//     // $("#name1").append(`<div class="palyer1nameDisplay"><h2 id="player1">${player1name}♫</h2></div>`);
//     // $("#name1Msg").append(`<div class="palyer1nameDisplay"><h2 id="player1">${player1name}♫</h2></div>`);

//     // readyPlayer1();

//     // $("#player1Name").hide();
//     // $("#player1button").hide();

// });


// $("#player2button").on("click",function(event){
//     event.preventDefault();
//     console.log("am lsiterning player 2");

//     player2name = $("#player2Name").val().trim();

//     database.ref().child("Player 2 data").set({
//         player2name: player2name,
//         player2newMsg: player2NewMsg,
//     })

//     // player2NameDisplay();
//     //displaying players name in rps multiplayer and chatroom
//     $("#name2").append(`<div class="palyer2nameDisplay"><h2 id="player2">${player2name}❀</h2></div>`);
//     $("#name2Msg").append(`<div class="palyer2nameDisplay"><h2 id="player2">${player2name}❀</h2></div>`);

//     readyPlayer2();

//     $("#player2Name").hide();
//     $("#player2button").hide();
    
//     $("#welMsg").append(`<h2 class="welMsg">CURRENT PLAYERS</h2>`)
// });


// database.ref().on("value",function(p1datasnapshot){
//     player1Name = (p1datasnapshot.val().player1name);
//     // console.log(p1datasnapshot.val().player1NewMsg);
    
// },function(errorobject) {
//     console.log("Error handled: " + errorobject.code);
// });

// database.ref().on("value", function(p2datasnapshot){
//     player2Name = (p2datasnapshot.val().player2name);
//     // console.log(p2datasnapshot.val().player2NewMsg);

// },function(errorobject) {
//     console.log("Error handled: " + errorobject.code);
// });


// //showing that players have login successfully
// function readyPlayer1 () {
//     $("#ready1").append(`<p class="ready">PLAYER 1 : ${player1name} IS READY ♫ </p>`)
// }

// function readyPlayer2 () {
//     $("#ready2").append(`<p class="ready">PLAYER 2 : ${player2name} IS READY ❀</p>`)
// }








// //showing the current palyers on load of the App
// // database.ref().orderByChild("dataAdded").limitToLast(1).on("value", function(snapshot) {
// //     $("#name1").text(snapshot.val().player1Name);
// //     $("#name2").text(snapshot.val().player2Name);
// // })



