/*jshint esversion: 6 */


    class SavingsAccount extends Account{
        constructor(interest, number) {
            super(number);
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

        endOfMonth(){
            let interest = this.addInterest();
            return "Interest added SavingsAccount "+this.getNumber()+": balance: "+this.getBalance()+" interest: "+interest;
        }

        toString(){
            return "SavingAccount " + this._number + " balance " + super.getBalance() + " interest(%) " + this._interest + "%";
        }
    }
