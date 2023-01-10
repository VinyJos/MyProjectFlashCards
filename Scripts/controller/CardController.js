class CardController {

    constructor(){
    //atributos
    this._myTextFront;
    this._myTextBack;
    this.API_URL = "https://localhost:7007/api/Usuarios";
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
            const userName = document.querySelector(".textFront");
            userName.innerHTML = currentUser.nome;
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


    // oberterUm(){
    //     const myTextFront = document.querySelector(".textFront");
    //     const getUrl = new URLSearchParams(window.location.search);
    //     id = getUrl.get('id')
    //     let url = 'https://localhost:7007/api/Usuarios'

    //     console.log(`${url}${id}`)
    //     fetch(`${url}/${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         myTextFront.innerHTML = data.nome
    //     })
    //     .catch(err => console.log(err))
    // }
      

    // método para iniciar junto
    // initialize(){
    //     let myTextFront = document.querySelector(".textFront");
    //     let myTextBack = document.querySelector(".textBack")

      
        
    //     myTextFront.innerHTML = this.get();
    //     myTextBack.innerHTML = "Olá"
        
    // }

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