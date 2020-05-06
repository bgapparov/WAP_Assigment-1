/*jshint esversion: 6 */


    class SavingsAccount extends Account{
        constructor(interest) {
            super();
            this._interest = interest;
        }

        getInterest(){
            return this._interest;
        }

        setInterest(interest){
            if(interest < 0) {throw new Error('Negative interest!');}
            this._interest = interest;
        }

        addInterest(){
            let interest = super.getBalance() * this._interest / 100;
            super.deposit(interest);
            return interest;
        }

        toString(){
            return "Interest " + this._interest;
        }
    }
