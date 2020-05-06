/*jshint esversion: 6 */

class CheckingAccount extends Account{
        constructor(number, overdraftLimit){
            super(number);
            this.overdraftLimit = overdraftLimit;
        }

        getOverdraftLimit(){
           return this._overdraftLimit;
        }

        setOverdraftLimit(overdraftLimit){
            this._overdraftLimit = overdraftLimit;
        }

        withdraw(amount){
            if(amount <= 0){
                throw new Error("Withdraw amount has to be greater than zero!");
            }
            if(amount > this.getBalance() + this.overdraftLimit){
                throw Error("Insufficient funds");
            }
            this._balance  -= amount;
        }

        endOfMonth(){
            return this.toString();
        }

        toString(){
            return  (this._balance < 0 ?"Warning, low balance":"") + "CheckingAccount " + this.getNumber()+ " balance  " + this.getBalance() + " overdraft limit  " + this.overdraftLimit;
        }
}