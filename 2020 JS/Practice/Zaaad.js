// create js app resembling Zaad operations

let pin = 1234;
let balance = 250;



// ask pin

let result = prompt("Please Enter Your Pin")


// check pin

if (pin == result) {
    let option = prompt("1: Show Balance. \n 2: Send Money \n 3: withdraw amount")

    // check option 1
    if (option == 1) {
        alert(`Your Balance is $${balance}`)
    } else if (option == 2) {

        let mobile = prompt("Please Enter the Number ")

        // check if mobile is telesom.
        if (mobile.startsWith('063') && mobile.length == 10) {

            let amount = prompt("Please Enter Amount");

            // check if balance > amount
            if (balance > amount) {
                let person = prompt("Please name of the person");
                alert(` $${amount} is sent to ${person} [${mobile}], your current Balance is $${balance - amount}`)
            } else {
                alert("Insuffient Balance")
            }

        } else {
            alert("Number is not Telesom Number")
        }


    } else {
        alert("Invalid Option")
    }

} else {
    alert("Incorrect PIN")
}

let balance = 900;

 //Ask two things

 let ask = prompt("Fadlan Dooro Lcagta\n 1-Dollar \n 2-Shiling")

 if (ask){
     prompt("")
 }



 let balance = 400;

let options= prompt("Fadlan Dooro Lacagta \n 1-Dollar \n 2-Shiling")

if (options){
    prompt("Fadlan Dooro \n 1-Xisaabtada \n 2-Lacag Dirid \n 3-Ku Shubasho \n 4-Ku Iibso \n 5-Lacag La bixid \n 6- Dahabshiil Bank")
} else if (option == 2){
    let mobile = prompt("Enter the number")
}
  if (options == 1){
      alert(`your balance is $${balance}`)
  } else if (option == 2) {

    let mobile = prompt("Please Enter the Number ")
    
  