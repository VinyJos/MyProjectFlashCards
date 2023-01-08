class CardController {

    constructor(){
    //atributos
    this._myTextFront;
    this._myTextBack;
    this.initialize();
    }


    // método para iniciar junto
    initialize(){
        let myTextFront = document.querySelector(".textFront");
        let myTextBack = document.querySelector(".textBack")

        myTextFront.innerHTML = "hello"
        myTextBack.innerHTML = "Olá"
    }

    get myTextFront(){
        
        return this._myTextFront;
    }

    set myTextFront(valor){
        
        this._myTextFront = valor;
    }
    get myTextBack(){
        
        return this._myTextBack;
    }

    set myTextBack(valor){
        
        this._myTextBack = valor;
    }
 
}