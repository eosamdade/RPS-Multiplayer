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
var rpsRef = database.ref("/game/rpsgame/")
var id = uuid();
var name;
var newPlayer = "";
var rpsVal = "";

$("#userLoginForm").hide();
$("#currentPlayer").hide();

$("#start").on("click",function(){
    $("#welMsg").hide();
    $("#userLoginForm").show();
    $("#start").hide();
    $("#currentPlayer").show()
})

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
$(".rpsBtns").on("click",function () {
    
    var rpsVal = $( this ).text();
    $("#Rock").val(rpsVal);
    
    $("#gameScreen").html(`<p id="playerVal" class="playerVal">${rpsVal}</p>`)
    
    var RPSGame = {
        name,
        id,
        rpsVal,
    }

    rpsRef.push(RPSGame)

    rpsRef.on("child_added",function(snapshot){
        console.log(snapshot.val().rpsVal);
        console.log(snapshot.val().id);
        console.log(snapshot.val().name);
        
    })
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



