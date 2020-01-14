let balance = 900;
let pin = 4433;

 //Ask two things

 let ask = prompt("Fadlan Dooro Lacagta\n 1-Dollar \n 2-Shiling")

 //check option
 let options = prompt("Fadlan Dooro \n 1- Xisaabtada \n 2-Lacag Dirid \n 3- Ku Shubasho \n 4-Ku Iibso \n 5-Lacag La bixid \n 6- Dahabshiil Bank")

 if (options == 1){
     alert(`hadhaagagu waa $${balance}`)
 }
 
 if (options == 3){
    let kushubasho = prompt("fadlan gali lacagtad ku shubanaysid")
    alert(`waxaad ku shubaty $${kushubasho} hadhaagagu waa $${balance - kushubasho}`)
 }
 if (options == 4){
     let kuibso= prompt("fadlan gali lambarka ku iibsada")
     if (kuibso.startsWith('5') && kuibso.length == 6){
         let qofka = prompt("fadlan gali magaca meharada")
         let qimaha = prompt("fadlan gali lacagta")
         alert(`waxaad ${qofka} u dirtay $${qimaha} hadhaagagu waa $${balance - qimaha}`)
     }else {
        alert("fadlan lambarkani ma jiro")
    }
 } 

  if (options == 2){
      let number = prompt("Fadlan Gali Lambarka")
// check number
   if (number.startsWith ('065') && number.length == 10){
    let amount = prompt("fadlan gali lacagta")
    let person = prompt("fadlan gali magaca qofka")    
    alert(`waxaad ${person} u dirtay$${amount} hadhaagagu waa $${balance - amount}`)
   }else {
       alert("Fadlan numberkani ma jiro")
   }
}  
