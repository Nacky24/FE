export class Like {
    constructor(private click:boolean,private count:number){
        if (this.click === true){
            this.count +=1;
        }
    }
    
    
    get likeState(){
        return this.click;
    }
    get likeCount(){
        return this.count;
    }
}