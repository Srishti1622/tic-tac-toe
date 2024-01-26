let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let bodyPopUp2 = document.getElementsByClassName("bodyPopUp2")[0];
// console.log(bodyPopUp2)
let startBtn = document.getElementById("btn"); // start game button reference

let points=[] //stores for all possible win cases

//initial page in which we are getting player names 
let mainPage = `<h1 class="heading1">Welcome<br>To<br>Tic-Tac-Toe</h1>
        <div id="player1">
          <label class="label1">Enter Name of 1st Player:</label>
        <input class="input1" type="text" id="p1">
        </div>
        <div id="player2">
          <label class="label2">Enter Name of 2nd Player:</label>
        <input class="input2" type="text" id="p2">
        </div>
        <!-- <button type="button" id="btn" >Start Game</button> -->
        <button  onclick="startGame()" id="btn" >Start Game</button>`

let msg = ''; //varibles to store which player input field is empty

//it will route player to depending upon the condition
const startGame = () => {
  // console.log("game started");
  if (p1.value === '' || p2.value === '') { //if either of input is empty
    // console.log(p1.value===''?"Please Enter Player-1 Name":"Please Enter Player-2 Name");
    msg = p1.value === '' ? "Please Enter Player-1 Name" : "Please Enter Player-2 Name"
    // console.log(msg)
    let p1Empty = `<h1 class="heading1">Welcome<br>To<br>Tic-Tac-Toe</h1>
        <div id="popupContainer" class="popup-container">
      <h2 class="popupHeading">Oops!!</h2>
      <p class="para">${msg}</p>
      <button type="button" id="closePopup" class="close-button" onclick="closePopUp()">Close</button>
  </div>`
    bodyPopUp2.innerHTML = p1Empty; //changing the page to pop-up msg telling to player to fill the name
  }
  else { // both player names present then route to game board page
    // console.log("getting you inside the game please wait!");
    let game = `<div class="outerMost">
<div class="p1Score"><h2>Player-1: ${p1.value} </h2></div>
<div class="outerBox">
<div>
<button id="1" onclick="fill(id)" class="box"></button>
<button id="2" onclick="fill(id)" class="box"></button>
<button id="3" onclick="fill(id)" class="box"></button>
</div><div>
<button id="4" onclick="fill(id)" class="box"></button>
<button id="5" onclick="fill(id)" class="box"></button>
<button id="6" onclick="fill(id)" class="box"></button>
</div><div>
<button id="7" onclick="fill(id)" class="box"></button>
<button id="8" onclick="fill(id)" class="box"></button>
<button id="9" onclick="fill(id)" class="box"></button>
</div></div>
<div class="p2Score"><h2>Player-2: ${p2.value} </h2></div>
</div>`

    bodyPopUp2.innerHTML = game;
  }
}

const closePopUp = () => {
  // console.log("closed pop up");
  // bodyPopUp2.innerHTML = mainPage;
  window.location.reload()
}

// let p1turn=document.getElementsByClassName("p1Score")[0];
// let p2turn=document.getElementsByClassName("p2Score")[0];
let flag=true;
let result=[null,null,null,null,null,null,null,null,null]
const fill = (id) => {
  // console.log(id);
  let boxId=document.getElementsByClassName('box');
  // console.log(boxId)
  let index=id-1;
  if(flag){
    boxId[index].outerHTML=`<img class="box" src="pngfind.com-heart-silhouette-png-368091.png">`
    result[index]='x';
  }
  else{
    boxId[index].outerHTML=`<img class="box" src="clipart4408148.png">`
    result[index]='o';
  }
  flag=!flag;
  // console.log(result);
  win();
}

let draw=0;
const win=()=>{
  points=[  // all possible win cases indexs
    [1,2,3],
    [4,5,6],
    [7,8,9],  
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ]
  // console.log(result);
  points.forEach((value,index)=>{
    // console.log(value,index)
    const [a,b,c]=value;
    // console.log(a,b,c)
    if(result[a-1] && result[a-1]===result[b-1] && result[a-1]===result[c-1]){ // checking if current pressed is not null and respective other position have same either 'x' or 'o'
      // console.log("winner");
      let p1Empty = `<h1 class="heading1">Welcome<br>To<br>Tic-Tac-Toe</h1>
        <div id="popupContainer" class="popup-container">
      <h2 class="popupHeading">Yeahhh!!</h2>
      <p class="para">${result[a-1]==='x'?`Player-1 ${p1.value} WINNER`:`Player-2 ${p2.value} WINNER`}</p>
      <button type="button" id="closePopup" class="close-button" onclick="closePopUp()">Close</button>
  </div>`
    bodyPopUp2.innerHTML = p1Empty;
    }
    else{
      draw=0;
      result.forEach((v)=>{
        // console.log(v)
        if(v){
          draw++;
          // console.log(draw)
        }
      })
    }
  })
  if(draw==9){
    // console.log("no one wins");
    let p1Empty = `<h1 class="heading1">Welcome<br>To<br>Tic-Tac-Toe</h1>
        <div id="popupContainer" class="popup-container">
      <h2 class="popupHeading">Oops!!</h2>
      <p class="para">Match Draw!!</p>
      <button type="button" id="closePopup" class="close-button" onclick="closePopUp()">Close</button>
  </div>`
    bodyPopUp2.innerHTML = p1Empty;
  }
  
}