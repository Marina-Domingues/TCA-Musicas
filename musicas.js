
class Musica {
    constructor(titulo, artista, genero) {
        this.titulo = titulo
        this.artista = artista
        this.genero = genero

    }
    mostrarInformacoes(){
        console.log("Música(s):"+this.titulo)
    }
}
let repositorio_musicas = [
    new Musica("Shake It Off", "Taylor Swift", "1"),
    new Musica("Love Story", "Taylor Swift", "1"),
    new Musica("Cardigan", "Taylor Swift", "2"),
    new Musica("Cruel Summer", "Taylor Swift", "1"),
    new Musica("Anti-Hero", "Taylor Swift", "1"),
    new Musica("Levitating", "Dua Lipa", "1"),
    new Musica("Velha Infância", "Tribalistas", "4"),
    new Musica("Anna Júlia", "Los Hermanos", "2")
]

let playlists = {
    'playlistEstudos' : [repositorio_musicas[2],repositorio_musicas[6],repositorio_musicas[1]],
    'playlistFesta' : [repositorio_musicas[0],repositorio_musicas[3],repositorio_musicas[5]],
    'playlistChorar' : [ repositorio_musicas[4],repositorio_musicas[2],repositorio_musicas[7]]    
}
let opcao = prompt("O que você deseja fazer hoje?" + "1-Criar playlist personalizada\n" + "2-Ver playlist já criada\n" + "3-Adicionar músicas")
if (opcao == 1) {
    alert("Vamos criar sua playlist!")
   let nomePlaylist = prompt('Digite o nome da playlist.')
   while(nomePlaylist in playlists){
    alert("Não é possível criar uma playlist com o mesmo nome de uma playlist ja existente. Tente outro.")
    nomePlaylist = prompt('Digite outro nome para a playlist.')
   }
playlists[nomePlaylist]= []
   let continuar =  prompt("Deseja adicionar uma música a sua playlist? Responda com: sim/não.").toLowerCase()
while(continuar=="sim"){
    let titulo= prompt("Qual música deseja adicionar?")
    let musicaEncontrada = repositorio_musicas.find(musica => musica.titulo == titulo);
    if(musicaEncontrada){
     playlists[nomePlaylist].push(musicaEncontrada)
     alert("Música adicionada a playlist!")
    } else {
        alert("Essa música não faz parte do repositório! Tente adicionar outra música!")
    }
    continuar=prompt("Deseja adicionar outra música a sua playlist? Responda com: sim/não.").toLowerCase()
}
alert("Playlist criada com sucesso!")



} else if (opcao == 2) {
    alert("Vamos ver as playlists!")
    let escolha= prompt("Qual playlist você deseja acessar?" + "1-Playlist para Estudos\n" + "2- Playlist para Festa\n" + "3-Playlist para chorar")
    if(escolha==1){
        console.log(playlists.playlistEstudos)
    } else if (escolha==2){
        console.log(playlists.playlistFesta)
    } else if (escolha==3){
        console.log(playlists.playlistChorar)
    }else{
        console.log("Opção inválida!:(")
    }
} else if (opcao == 3) {
    alert("Vamos adicionar músicas!")
    let titulo = prompt("Qual o título da música?")
    let artista = prompt("De qual artista é a música?")
    let genero = prompt("De qual gênero é a sua música?" + "1-Pop\n" + "2-Rock\n" + "3-Rap\n" + "4-MPB\n" + "5-Sertanejo")
    let novaMusica = new Musica(titulo, artista, genero)"
    repositorio_musicas.push(novaMusica);
    alert("Música adicionada com sucesso!")

} else {
    alert("Opção inválida!:(")
}








playlists.playlistChorar

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