let listaAmigos = [];
let pAmigos = document.getElementById('lista-amigos');
let pListaSorteio = document.getElementById('lista-sorteio');

function adicionar() {
        let nomeAmigo = document.getElementById('nome-amigo').value;
        nomeAmigo = nomeAmigo.toUpperCase();
        if(nomeAmigo === ''){
            alert('informe um nome');
            return;             
        }
        if(listaAmigos.includes(`${' '}${nomeAmigo}`)){
            alert(`O nome ${nomeAmigo} já foi adicionado a lista`)
            return;
        }else {
            listaAmigos.push(`${' '}${nomeAmigo}`);
            document.getElementById('nome-amigo').value = '';
            amigosIncluidos();
        }    
}

function amigosIncluidos () {
    pAmigos.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        if(i % 3 ===0 && i > 1){ 
            pAmigos.innerHTML += '<br>'; // A cada vez que o iteredor é divisivel por 3 pula uma linha, a cada 3 nome pula linha
            pAmigos.innerHTML += listaAmigos[i];
            pAmigos.innerHTML += ',';
        }else{
            pAmigos.innerHTML += listaAmigos[i];
            pAmigos.innerHTML += ',';
        }   
   } 
}

function sortear(){
    if (listaAmigos.length % 2 === 0 && listaAmigos.length > 2){
        embaralharAmigos();
        pListaSorteio.innerHTML = '';
        for (let i = 0; i < listaAmigos.length; i++) {
            if(i % 2 ===0 && i > 1){ 
                pListaSorteio.innerHTML += '<br>'; // A cada vez que o iteredor é divisivel por 2 pula uma linha, a cada 2 nome pula linha
                pListaSorteio.innerHTML += listaAmigos[i];
                pListaSorteio.innerHTML += ' --->';
            }else if(i === 0){
                pListaSorteio.innerHTML += listaAmigos[i];
                pListaSorteio.innerHTML += ' --->';
            }else{
                pListaSorteio.innerHTML += listaAmigos[i];
            }   
        }   
    } else{
        alert('Adicione pelo menos 4 amigos e uma quantidade par de pessoas');
    }    
} 

function embaralharAmigos () {
    for (let i = listaAmigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // índice aleatório
        [listaAmigos[i], listaAmigos[j]] = [listaAmigos[j], listaAmigos[i]]; // troca os elementos
    }
    return listaAmigos;    
}
     
function reiniciar() {
    listaAmigos= [];
    pAmigos.innerHTML = '';
    pListaSorteio.innerHTML = '';
}

function remover(){
    let indexRemover = prompt('informe a posição do nome a ser removido:');
    if (indexRemover !== '' && indexRemover < listaAmigos.length + 1){
        indexRemover += - 1;
        listaAmigos.splice(indexRemover, 1);
        amigosIncluidos();
    }else{
        alert('Informe uma posição existente na lista de amigos')
    }   
}

