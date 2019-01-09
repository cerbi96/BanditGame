class Draw{
    constructor(){
         this.colorStack = ['red','green','blue'];
         let _result = this.drawResult();
         this.getDrawResult = () => _result;
    }
    drawResult(){
         let colors = [];
         for(let i = 0;i<this.colorStack.length;i++){
            const index = Math.floor(Math.random()* this.colorStack.length)
            const color = this.colorStack[index];  
            console.log(color);
            colors.push(color);
         }
         return colors
    }
}
