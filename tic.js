let cubed = document.getElementsByClassName('cubes');
let divs = Array.from(cubed);
console.log(divs);
var switcher=true;
let restart = document.getElementById('restart');
restart.onclick=()=>{location.reload()};

divs.map(block=>{block.onclick = (e)=>{e.target.innerText='X';
console.log(e.target);
if(e.target.innerText!=='X'){Player1.disabled=false;};
let Player1 = document.getElementById('play1');
let Player2 = document.getElementById('play2');
if(switcher==true){
    Player1.disabled=true;
    Player2.disabled=false;
    Player2.innerText='Player 2 Turn';
    Player2.style.backgroundColor='#00ff00';
    Player2.style.fontWeight='700';
    Player1.style.fontWeight='100';
    Player1.style.backgroundColor="#A89C94FF";
    bounceIT()}

else if(switcher==false){
    e.target.innerText='O';
    if(e.target.innerText!=='O'){Player2.disabled=false;};
    Player1.disabled=false;
    Player2.disabled=true;
    Player1.style.fontWeight='700';
    Player2.style.fontWeight='100';
    Player1.innerText='Player 1 Turn';
    Player1.style.backgroundColor='#00ff00';
    Player2.style.backgroundColor="#A89C94FF";
    makeIt();
};
let parentElement = document.getElementById('cont');



let possibilities = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
console.log(parentElement.children[8].innerText);
for(let n=0; n<8; n++){
    parentElement.children[n].innerText;
     
    function checkResult([i,j,k]){
        console.log(i,j,k);
        if(parentElement.children[i].innerText=='X'&&parentElement.children[j].innerText=='X'&&parentElement.children[k].innerText=='X')
        {
         Player1.innerText='Player 1 WON!!';
         Player1.style.width= '300px';
         Player1.style.zIndex='3';
         Player1.style.fontWeight='700';
         Player1.style.backgroundColor='green';
         Player1.style.color='white';

         Player2.style.top='45vh';
         Player2.style.left='39vw';
         if(window.innerWidth<812){Player2.style.left='13.5vw';}else if(window.innerWidth<1024){Player2.style.left='32vw';};
         Player2.innerText='Player 1 Won';
         Player2.style.width= '300px';
         Player2.style.zIndex='4';
         Player2.onclick=()=>{location.reload()};
        };
        if(parentElement.children[i].innerText=='O'&&parentElement.children[j].innerText=='O'&&parentElement.children[k].innerText=='O')
        {
         Player1.innerText='Player 2 WON!!';
         Player1.style.width= '300px';
         Player1.style.zIndex='5';
         Player1.style.fontWeight='700';
         Player1.style.backgroundColor='green';
         Player1.style.color='white';

         Player2.style.top='45vh';
         Player2.style.left='39vw';
         if(window.innerWidth<812){Player2.style.left='13.5vw';}else if(window.innerWidth<1024){Player2.style.left='32vw';};
         Player2.innerText='Player 2 WON!!';
         Player2.style.width= '300px';
         Player2.style.zIndex='6';
         Player2.onclick=()=>{location.reload()};
        };
    
    };
    checkResult(possibilities[n]);
    
}
function makeIt(){switcher=true};
function bounceIT(){switcher=false};
}});

console.log(window.innerWidth);
//0 1 2, 3 4 5 , 6 7 8, 0 3 6, 1 4 7, 2 5 8, 2 4 6, 0 4 8





