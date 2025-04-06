let user=0;
let computer=0;
let boxes=document.querySelectorAll(".choice");

let winneris=document.querySelector("#winneris")
let userscore=document.querySelector("#scoreu")
let computerscore=document.querySelector("#scorec")
//   function winner()

function Winner(win,userchoice,computerres)
{
  if(win)

  {  user++;
    userscore.innerText=user;
      winneris.innerText=`You Win -> Your choice ${userchoice} beats Computer choice ${computerres}`
   
    console.log(`user ${userchoice}beats ${computerres}`)
    winneris.style.backgroundColor="SkyBlue"
    
  
  }
  else{
    computer++;
    computer.innerText=computer;
    console.log(`computer ${computerres}beats ${userchoice}`)
    winneris.innerText=`You Lost ! Computer choice ${userchoice} beats Your choice ${computerres}`
      winneris.style.backgroundColor="red"
  }
   


}
function draw()
{
    winneris.innerText=`Match is Drawn ! Please Try again`
     winneris.style.backgroundColor="lightgreen"
    
     
   
}
function computerchoice()
{
     arr=["stone","paper","scissor"];
     compval=Math.floor(Math.random()*3);
    return arr[compval];
}
boxes.forEach((choice)=>
{
   choice.addEventListener("click",()=>
{     
    let userchoice=choice.getAttribute("id")

    let computerres=computerchoice();
   
    if(userchoice===computerres)
        {
            draw();
        }
        
    else{
       let userWin=true;
        
         if(userchoice=="stone")
          {  //paper scissor
           userWin = computerres==="paper"?false:true
          }
       
          else if(userchoice=="paper")
         {//rock scissor
            userWin=computerres==="scissor"?false:true
         }
          else{ //scissor
            // rock
          userWin=computerres==="stone"?false:true;
         }
         Winner(userWin,userchoice,computerres);
         
       }
     



})


})