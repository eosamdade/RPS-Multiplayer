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
const msgRef = database.ref("/msg")

var player1name = "";
var player2Name = "";
var player1NewMsg = "";
var player2NewMsg = "";
var newMsgP1 = "";
var newMsgP2 = "";
var gameid = ""
var id = uuid();

//enter click event
$("#player1button").on("click",function(event){
    event.preventDefault();
    console.log("am lsiterning player 1");

    player1name = $("#player1Name").val().trim();

    database.ref("/games").push({
        player1name: player1name,
        playerId : id
        // player1newMsg: player1NewMsg,
        // dateAdded: firebase.database.ServerVlue.TIMESTAMP
    })

    //making game id
    // .then(function(data){
    //     console.log(data.key);
    //     gameid = data.key
    // })

    // player1NameDisplay();
    //displaying players name in rps multiplayer and chatroom
    $("#name1").append(`<div class="palyer1nameDisplay"><h2 id="player1">${player1name}♫</h2></div>`);
    // $("#name1Msg").append(`<div class="palyer1nameDisplay"><h2 id="player1">${player1name}♫</h2></div>`);

    readyPlayer1();

    $("#player1Name").hide();
    $("#player1button").hide();

});

// database.ref("/games").on("child_added",function (snapshot) {
//     document.querySelector(".currentgames").append(snapshot.key)
// })


$("#player2button").on("click",function(event){
    event.preventDefault();
    console.log("am lsiterning player 2");

    player2name = $("#player2Name").val().trim();

    database
        .ref(`/games/${gameid}`)
        .set({
            player2name: player2name,
            playerId : id,
            // player2newMsg: player2NewMsg,
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


// database.ref().on("value",function(p1datasnapshot){
//     player1Name = (p1datasnapshot.val().player1name);
//     console.log(p1datasnapshot.val().player1NewMsg);
    
// },function(errorobject) {
//     console.log("Error handled: " + errorobject.code);
// });

// database.ref().on("value", function(p2datasnapshot){
//     player2Name = (p2datasnapshot.val().player2name);
//     console.log(p2datasnapshot.val().player2NewMsg);

// },function(errorobject) {
//     console.log("Error handled: " + errorobject.code);
// });


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

    if(!newMsgP1)return;

    database
        .ref("/games/chat/")
        .push({
            id : id,
            Name: player1name,
            Msg: newMsgP1,
        // timeStamp: firebase.database.ServerVlue.TIMESTAMP 
    })

    var updateMsgs = data => {
        const {id : userID,Name,Msg} = data.val();
        // console.log(id,Name,Msg)
        var msg = `<li class=" newPlayer ${id == userID && "mygame"}">
                            <span>
                                <i class="name">${{player1name}} : </i>
                                ${newMsgP1}
                            </span>
                    </li>`;
        
        $("#msgScreen").append(msg)
    }

    database.ref("/games/chat/").on("child_added",updateMsgs)

    $("#player1MsgText").val("");
});

// $("#player2Msgs").on("click",function(event){
//     event.preventDefault();
//     console.log("ding2");

//     newMsgP2 = $("#player2MsgText").val().trim();
//     console.log(newMsgP2);

//     $("#newMsgP2").append(`<P class = "messagesItem time">${newMsgP2}</P>`)

//     $("#player2MsgText").val("");
// });

//will it be better as a array?


