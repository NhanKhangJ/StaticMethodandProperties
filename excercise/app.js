
                              //excercise 1
// class Governor{
//    constructor(name, law, age){
//     this.name = name;
//     this.law = law,
//     this.age = age
//    }
     //static function for on Governor class
//    static takeTax(personName){ 
//     console.log(this.name + "will take tax from " + personName);
//     return this;
//    }
// }
// const  newGovernor = new Governor('Nhan', 'rich', 26);
// console.log(newGovernor.name) // log properties of new Governor contructing from Governor's class
// Governor.takeTax("Will")


                             //excercise 2
// class Person{
//     constructor(name,age,gender){
//        this.name = name;
//        this.age = age;
//        this.gender = gender;  
//     }
//     doMath(){
//         console.log('1+2 = '+3)
//     }
//     woking(){
//         console.log('Work very hard')
//     }
//     rest(){
//         console.log('You need to rest')
//     }    
// }
     //PostalWorker contructor  
// class PostalWorker extends Person{
//     deliverMail(){
//         console.log('I can deliver mail')
//     }
//     workOverTime(){
//         console.log('Work from morning till dawm')
//     }
// }
    //Cheff contructor 
// class Cheff extends Person{
//        cook(){
//         console.log('I am the head cheff')
//        }
//        joinMasterCheff(){
//         console.log('I will see Gordon Ramsay')
//        }
// }
// inheritate
// const postalWorker1 = new PostalWorker("Ricky", 25, "Male") ;
// const postalWorker2 = new PostalWorker("Nhi", 25, "female") ;

// const cheff1 = new Cheff("Will", 28, "Male");
// const cheff2 = new Cheff("Nhan", 26, "Male");
 //calling the method
// postalWorker1.workOverTime();
// postalWorker2.deliverMail();

// cheff1.joinMasterCheff();
// cheff2.cook();

                                                /*excercise 3: Hungry for more*/

                                              /*Bank account constructor */
class BankAccount{
    constructor(name, balance, accountNumber = Math.floor( Math.random()*1000)){
        this.ownerName = name;
        this.balance = balance;
        this.acctNum = accountNumber;
    }
    deposit(amount){  //method
        console.log(`${this.ownerName} has deposit the amount of ${amount}. And the Balance now is ${this.balance += amount}.`)
    }
    widthdraw(amount){ //method
        console.log(`${this.ownerName} has widthdraw ${amount}$ from ${this.balance}$ balance. And the remaining balance is ${this.balance -= amount}.`)
    } 
}
                                            /*Checking account constructor */
class CheckingAccount extends BankAccount{
    constructor(name, balance, accountNumber = Math.floor(Math.random()*1000), overDraftEnabled) { // adding OverDraftEnabled property
        super(name, balance, accountNumber = Math.floor(Math.random()*1000)) //call the parent constructor using super is required
        this.overDraftEnabled = overDraftEnabled || false;
    }
    //overdrive witdthdraw method
    widthdraw(overdrive, amount){ //(boolean, number) 
        //manipulate properties
        this.overDraftEnabled = overdrive; 
        //log overdraft status
        console.log(overdrive ?  'overdraft enabled' : 'overdraft disabled')
        //if else stament
        if (overdrive === true && amount > this.balance){
     
        let yourLoan = (amount - this.balance)*0.75 +(amount-this.balance) ;
        console.log(`now you can widthdraw the amount of ${amount}. But you own us the total amount of ${yourLoan}$ which is include 75% interest of ${amount-this.balance}$ overdraft amount.`)    
        
        } else if(overdrive === true || overdrive === false && amount < this.balance) {
            
            console.log(`${this.ownerName} has widthdraw ${amount}$ from ${this.balance}$ balance. And the remaining balance is ${this.balance -= amount}.`)
            
        } else {
            console.log('you must enabled overdraft in order to do this transaction')
        }
    }
}
                                     /*Saving account constructor */
class SavingsAccount extends BankAccount {
    widthdraw(amount){ //overdrive again
        console.log(`${this.ownerName} can not widthdraw the amount of ${amount}$ from the Savings account `)
    }
}
//inheritate
const userAccount = new BankAccount('Nhan', 66000);
const checkingAccount = new CheckingAccount('Kevin',100000);
const savingAccount = new SavingsAccount('Will', 80000);

//existence of object

console.log(savingAccount);
console.log(checkingAccount);
console.log(savingAccount);

//BankAccount's methods
userAccount.deposit(10000) 
console.log(userAccount.balance); //76000$
userAccount.widthdraw(5000);
console.log(userAccount.balance); // 71000$

//CheckingAccount's methods
checkingAccount.widthdraw(false, 110000);
console.log(checkingAccount.overDraftEnabled);

//SavingAccount's methods
savingAccount.widthdraw(1000);
