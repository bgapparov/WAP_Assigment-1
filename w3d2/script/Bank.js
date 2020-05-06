/*jshint esversion: 6 */

class Bank{
    static nextNumber = 1;
        constructor(){
            this._account = [];
        }

    addAccount(){
        let account = new Account(Bank.nextNumber++);
        this._account.push(account);
        return account.getNumber();
    }

    addSavingsAccount(interest, deposit){
        let account = new SavingsAccount(Bank.nextNumber++, interest);
        if(deposit !== null && deposit !== undefined){
            account.deposit(deposit);
        }
        this._account.push(account);
        return account.getNumber();
    }

    addCheckingAccount(overdraft){
        let account = new CheckingAccount(Bank.nextNumber++, overdraft);
           this._account.push(account);
           return account.getNumber();
    }

    closeAccount(number){
        for(let i in this._account){
            if(this._account[i].getNumber() === number){
                this._account.splice(i, 1);
                return;
            }
        }
    }

    accountReport(){
        let result = "";
        for(let acc of this._account){
            result +=acc.toString() + "\n";
        }
        return result;
    }

    endOfMonth(){
        let result = "";
        for(let acc of this._accounts){
            result += acc.constructor.name + " #"+acc.getNumber()+": \""+ acc.endOfMonth()+"\"\n";
        }
        return result;
    }
}