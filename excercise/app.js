// class Governor{
//    constructor(name, law, age){
//     this.name = name;
//     this.law = law,
//     this.age = age
//    }
//    static takeTax(personName){ 
//     console.log(this.name + "will take tax from " + personName);
//     return this;
//    }
// }
// const  newGovernor = new Governor('Nhan', 'rich', 26);
// console.log(newGovernor.name)
// Governor.takeTax("Will")



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

// class PostalWorker extends Person{
//     deliverMail(){
//         console.log('I can deliver mail')
//     }
//     workOverTime(){
//         console.log('Work from morning till dawm')
//     }
// }

// class Cheff extends Person{
//        cook(){
//         console.log('I am the head cheff')
//        }
//        joinMasterCheff(){
//         console.log('I will see Gordon Ramsay')
//        }
// }

// const postalWorker1 = new PostalWorker("Ricky", 25, "Male") ;
// const postalWorker2 = new PostalWorker("Nhi", 25, "female") ;

// const cheff1 = new Cheff("Will", 28, "Male");
// const cheff2 = new Cheff("Nhan", 26, "Male");

// postalWorker1.workOverTime();
// postalWorker2.deliverMail();

// cheff1.joinMasterCheff();
// cheff2.cook();

class BankAccount{
    constructor(name, balance, accounttNumber = Math.floor( Math.random()*1000)){
        this.ownerName = name;
        this.balance = balance;
        this.acctNum = accounttNumber;
    }
    deposit(amount){
        console.log(`${this.name} has deposit the amount of ${amount}`)
    }
    widthdraw(amount){
        console.log(`${this.ownerName} will widthdraw ${amount} from ${this.balance},the remaining balance is ${this.balance-amount}.`)
    } 
}

class CheckingAccount extends BankAccount{
    constructor(name, balance, accounttNumber = Math.floor( Math.random()*1000)) {
        super(name, balance, accounttNumber = Math.floor( Math.random()*1000))
        this.overDraft = false ;
    }
    widthdraw(overdide){
       if (overdide === "on"){
        this.overDraft = true ;
         console.log('overdraft enabled');
       } else if(overdide === "off"){
         this.overDraft =false;
         console.log('overdraft disabled')
       }
    }

}

class SavingsAccount extends BankAccount {
    widthdraw(amount){
        console.log(`${this.ownerName} can not widthdraw the amount of ${amount} from your Savings account `)
    }
}


const userAccount = new BankAccount('Nhan', 66000);
const savingAccount = new SavingsAccount('NhanKhang', 80000);
const checkingAccount = new CheckingAccount('Nhan Khang Le',100000, )
// // console.log(savingAccount)
// // savingAccount.widthdraw(1000)
// checkingAccount.widthdraw("off")
// console.log(checkingAccount)