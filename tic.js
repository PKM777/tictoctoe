let cubed = document.getElementsByClassName('cubes');

let divs = Array.from(cubed);
console.log(divs);
var switcher=true;
let restart = document.getElementById('restart');
restart.onclick=()=>{location.reload()};

divs.map(block=>{block.onclick = (e)=>{e.target.innerText='X';

if(e.target.innerText!=='X'){Player1.disabled=false;};
let Player1 = document.getElementById('play1');
let Player2 = document.getElementById('play2');
if(switcher==true){
    Player1.disabled=true;
    Player2.disabled=false;
    Player2.innerText='Player 2 Turn';
    Player2.style.backgroundColor='crimson';
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
    Player1.style.backgroundColor='crimson';
    Player2.style.backgroundColor="#A89C94FF";
    makeIt();
};
let parentElement = document.getElementById('cont');



let possibilities = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
for(let n=0; n<8; n++){
    parentElement.children[n].innerText;
     
    function checkResult([i,j,k]){
        
        if(parentElement.children[i].innerText=='X'&&parentElement.children[j].innerText=='X'&&parentElement.children[k].innerText=='X')
        {
         Player1.innerText='Player 1 WON!!';
         Player1.style.width= '20vw';
         Player1.style.top='50vh';
         Player2.style.display='none';
         if(window.innerWidth<812 || window.innerWidth<1024){Player1.style.width= '100vw';Player1.style.top='45vh';}
         Player1.style.zIndex='3';
         Player1.style.fontWeight='700';
         Player1.style.backgroundColor='#FE0000FF';
         Player1.style.color='white';
         parentElement.style.display='none';
         
        };
        if(parentElement.children[i].innerText=='O'&&parentElement.children[j].innerText=='O'&&parentElement.children[k].innerText=='O')
        {
         Player1.innerText='Player 2 WON!!';
         Player1.style.width= '22vw';
         Player1.style.top='50vh';
         if(window.innerWidth<812 || window.innerWidth<1024){Player1.style.width= '100vw';Player1.style.top='45vh';}
         Player1.style.zIndex='5';
         Player1.style.fontWeight='700';
         Player1.style.backgroundColor='#FE0000FF';
         Player1.style.color='white';
         parentElement.style.display='none';
         Player2.style.display='none';
        };
    
    };
    checkResult(possibilities[n]);
    
}
function makeIt(){switcher=true};
function bounceIT(){switcher=false};
}});








