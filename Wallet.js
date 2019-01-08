class Wallet{
constructor(money){
    let _money = money;
    this.getWalletValue = () => _money;

    this.checkEnoughMoney = value => {
        if(_money >= value) return true;
         return false;

    }
    this.changeWalletBalanse = (value,type ="+") =>{
        if(typeof value === "number" && !isNaN(value)){
            if(type ==="+"){
                return _money +=value;
            }else if(type === "-"){
                return _money -= value;
            }else{
                throw new Error("nieprawidlowe działanie")
            }
        }else {
            console.log(typeof value)
            throw new Error("nieprawidlowa liczba")
        }

    }
     
}




    
}
const wallet =  new Wallet(200)