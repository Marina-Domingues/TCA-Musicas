
class Musica {
    constructor(titulo, artista, genero) {
        this.titulo = titulo
        this.artista = artista
        this.genero = genero
     }
}
let repositorio_musicas = [
    new Musica("Shake It Off", "Taylor Swift", "1"),
    new Musica("Love Story", "Taylor Swift", "1"),
    new Musica("Cardigan", "Taylor Swift", "2"),
    new Musica("Cruel Summer", "Taylor Swift", "1"),
    new Musica("AntiHero", "Taylor Swift", "1"),
    new Musica("Levitating", "Dua Lipa", "1"),
    new Musica("Velha Infancia", "Tribalistas", "4"),
    new Musica("Ana Julia", "Los Hermanos", "2")
]

let playlists = {
    'playlistEstudos' : [repositorio_musicas[2],repositorio_musicas[6],repositorio_musicas[1]],
    'playlistFesta' : [repositorio_musicas[0],repositorio_musicas[3],repositorio_musicas[5]],
    'playlistChorar' : [ repositorio_musicas[4],repositorio_musicas[2],repositorio_musicas[7]]    
}
alert("Bem vindo(a) ao Repositório Musical!!!")
let opcao;
while(opcao!= "6"){
    opcao = prompt("O que você deseja fazer hoje?\n" + "1-Criar playlist personalizada\n" + "2-Acessar playlist já criada\n" + "3-Adicionar músicas\n" + "4-Remover músicas\n" + "5-Ver repositório musical\n"+ "6-Encerrar atividades por hoje")
    if (opcao == 1) {
    alert("Vamos criar sua playlist!")
   let nomePlaylist = prompt('Digite o nome da playlist.')
   while(nomePlaylist in playlists){
    alert("Não é possível criar uma playlist com o mesmo nome de uma playlist já existente. Tente outro.")
    nomePlaylist = prompt('Digite outro nome para a playlist.')
   }
playlists[nomePlaylist]= []
   let continuar =  prompt("Deseja adicionar uma música a sua playlist? Responda com: sim/não.").trim().toLowerCase()
while(continuar=="sim"){
    let titulo= prompt("Qual música deseja adicionar?").trim().toLowerCase()
    let musicaEncontrada = repositorio_musicas.find(musica => musica.titulo.trim().toLowerCase() == titulo);
    if(musicaEncontrada){
     playlists[nomePlaylist].push(musicaEncontrada)
     alert("Música adicionada a playlist!")
    } else {
        alert("Essa música não faz parte do repositório! Tente adicionar outra música.")
    }
    continuar=prompt("Deseja adicionar outra música a sua playlist? Responda com: sim/não.").trim().toLowerCase()
}
alert("Playlist criada com sucesso!")
} else if (opcao == 2) {
    alert("Vamos ver as playlists!")
    console.clear()
    console.log(playlists)
    let listaPlaylists = "Playlists disponíveis:\n";
    for (let nomePlaylist in playlists) {
    listaPlaylists += nomePlaylist + "\n";
}
alert(listaPlaylists);
       let escolha= prompt("Qual playlist você deseja acessar?").trim().toLowerCase() 
let playlistEncontrada;
for (let nomePlaylist in playlists) {
    if ((nomePlaylist.toLowerCase().trim()) == escolha) {
        playlistEncontrada = nomePlaylist;
    }
}
if (playlistEncontrada) {
    alert("Playlist encontrada!");
    console.clear()
    for (let musica of playlists[playlistEncontrada]) {
     console.log(musica.titulo);
    }
   let adicionar=prompt("Deseja adicionar uma música a essa playlist? Responda com: sim/não.").trim().toLowerCase()
   while(adicionar=="sim"){
       let titulo= prompt("Qual música deseja adicionar?").trim().toLowerCase()
       let musicaEncontrada = repositorio_musicas.find(musica => musica.titulo.trim().toLowerCase() == titulo);
       if(musicaEncontrada){
        playlists[playlistEncontrada].push(musicaEncontrada)
        alert("Música adicionada a playlist!")
        console.clear()
        for (let musica of playlists[playlistEncontrada]) {
         console.log(musica.titulo);
        }
       } else {
           alert("Essa música não faz parte do repositório! Tente adicionar outra música.")
       }
       adicionar=prompt("Deseja adicionar outra música a sua playlist? Responda com: sim/não.").trim().toLowerCase()
    }
} else {
alert("Playlist não encontrada!");
}
} else if (opcao == 3) {
    alert("Vamos adicionar músicas!")
    let titulo = prompt("Qual o título da música?")
    let artista = prompt("De qual artista é a música?")
    let genero = prompt("De qual gênero é a sua música?\n" + "1-Pop\n" + "2-Rock\n" + "3-Rap\n" + "4-MPB\n" + "5-Sertanejo")
    let novaMusica = new Musica(titulo, artista, genero)
    repositorio_musicas.push(novaMusica);
    alert("Música adicionada com sucesso!")

} else if (opcao == 4) {
    alert("Vamos remover músicas!") 
   let titulo = prompt("Qual o título da música?").trim().toLowerCase()
    let indice= repositorio_musicas.findIndex(musica=>(musica.titulo.trim().toLowerCase())==titulo)
    if(indice==-1){
        alert("Música não encontrada:(")
    } else{
        repositorio_musicas.splice(indice, 1)
    for(let nomePlaylist in playlists){
        let indicePlaylist = playlists[nomePlaylist].findIndex(musica=>(musica.titulo.trim().toLowerCase())==titulo)
        if(indicePlaylist!=-1){
            playlists[nomePlaylist].splice(indicePlaylist, 1)
        }
    }
     alert("Música removida com sucesso!")
    }
} else if(opcao == 5){
    let musicasPorPagina = 10;
    let totalPaginas = Math.ceil(repositorio_musicas.length / musicasPorPagina);
    let paginaAtual = 1;
    let continuar = "sim";
    while (paginaAtual <= totalPaginas && continuar == "sim") {
        let inicio = (paginaAtual - 1) * musicasPorPagina;
        let fim = inicio + musicasPorPagina;
        let musicasPagina = repositorio_musicas.slice(inicio, fim);
        let listaMusicas = "REPOSITÓRIO MUSICAL\n";
        listaMusicas += "Página " + paginaAtual + " de " + totalPaginas + "\n\n";
        for (let musica of musicasPagina) {
            listaMusicas += musica.titulo + " - " + musica.artista + "\n";
        }
        alert(listaMusicas);
        if (paginaAtual < totalPaginas) {
            continuar = prompt("Deseja ver a próxima página? Responda com sim/não.").trim().toLowerCase();
            if (continuar == "sim") {
                paginaAtual++;
            }
        } else {
            continuar = "não";
        }
    }
} else if(opcao>6 || opcao<1) {
    alert("Opção inválida!:(")
}
}
alert("Obrigada por prestigiar o Repertório Musical. Até mais!")















playlists.playlistChorar
mostrarInformacoes(){
    alert("Músicas:" + this.titulo)
      }
  }
nomePlaylist = prompt('digite o nome da playlist')
playlists[nomePlaylist] = []


for(let i=0;i<repositorio.length;i++){
    repositorio[i].mostrarInformacoes()


let genero = prompt("De qual gênero musical será sua playlist?" + "1-Pop\n" + "2-Rock\n" + "3-Rap\n" + "4-MPB\n" + "5-Sertanejo")
let atividade = prompt("Qual atividade mais combina com a sua playlist?" + "1-Estudo/Leitura\n" + "2-Esporte/Academia\n" + "3-Festa\n" + "4-Momento de chorar")
let definicoes = (genero)"+"(atividade)
alert("Criando playlist perfeita para:" + (definicoes))


//exemplo

for(let i=0; i < playlists['playlistEstudos'].length; i++){
    console.log(playlists['playlistEstudos'][i].titulo)
}

for(let i=0; i < repositorio_playlists.length; i++){
      console.log(repositorio_playlists[i].titulo)
}

        
  git config --global user.email "marinadominguesss@yahoo.com"
  git config --global user.name "Marina Domingues"