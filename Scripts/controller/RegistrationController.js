

async function postData(data) {
    const response = await fetch("https://localhost:7189/api/Phrases", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}


// const a = data.postData(newData);
let buttonAdd = document.querySelector("#addPhrase");

buttonAdd.addEventListener("click", function(event){
    event.preventDefault();

    // PUXAR OS DADOS DO FORMULARIO

    var form = document.querySelector("#formAdiciona");

    var englishPhrase = form.englishPhrase.value;
    var potuguesePhrase = form.potuguesePhrase.value;

    if (englishPhrase.value === '' && potuguesePhrase.value === '' ) {
        alert("Não poder ter campo nulo !")
        
    }else{

        let newData = {textEnglish: englishPhrase, textPortuguese: potuguesePhrase};
        console.log(newData)
        const a = postData(newData);
        document.getElementById('englishPhrase').value='';
        document.getElementById('potuguesePhrase').value='';
        alert("Adicionado com sucesso!")

      
    }

    
    
});
