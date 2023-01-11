class CardController {

    constructor(){
    //atributos
    this._myTextFront;
    this._myTextBack;
    this.API_URL = "https://localhost:7189/api/Phrases";
    this.currentUserIndex = 0;
    this.users = []
    this.displayCurrentUser();
    this.buttonProximo();
    }

    // Pega o usuário atual a partir da API
    async getCurrentUser() {
        const response = await fetch(this.API_URL);
        this.users = await response.json();
        const currentUser = this.users[this.currentUserIndex];
        return currentUser;
        }
    
    // Mostra o usuário atual na tela
    async displayCurrentUser() {
        console.log(this.getCurrentUser())
        if (this.currentUserIndex <= this.users.length) {
            
            const currentUser = await this.getCurrentUser();
            const english = document.querySelector(".textFront");
            const portuguese = document.querySelector(".textBack");
            english.innerHTML = currentUser.textEnglish;
            portuguese.innerHTML = currentUser.textPortuguese;
        }else {
            console.log("acabou ")
            this.currentUserIndex = 0
            await this.displayCurrentUser();
        }
        }

    async buttonProximo(){
        // Quando clicar no botão, pega o próximo usuário e mostra na tela
        document.addEventListener('DOMContentLoaded', () => {
            const nextButton = document.getElementById("btn");
                nextButton.addEventListener("click", async () => {
                this.currentUserIndex++;
                await this.displayCurrentUser();
            }); 
        });   
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