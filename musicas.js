
class Musica {
    constructor(titulo, artista, genero, atividade) {
        this.titulo = titulo
        this.artista = artista
        this.genero = genero
        this.atividade = atividade
    }
    mostrarInformacoes(){
        console.log("Música(s):"+this.titulo)
    }
let repositorio_musicas = [
    new Musica("Shake It Off", "Taylor Swift", "1", "3"),
    new Musica("Love Story", "Taylor Swift", "1", "1"),
    new Musica("cardigan", "Taylor Swift", "2", "4"),
    new Musica("Cruel Summer", "Taylor Swift", "1", "3"),
    new Musica("Anti-Hero", "Taylor Swift", "1", "4"),
    new Musica("Levitating", "Dua Lipa", "1", "2"),
    new Musica("Velha Infância", "Tribalistas", "4", "1"),
    new Musica("Anna Júlia", "Los Hermanos", "2", "3")
]
let playlistEstudos = [repositorio_musicas[2].titulo,repositorio_playlist[6].titulo,repositorio_musicas[1].titulo]
let playlistFesta = [repositorio_musicas[0].titulo,repositorio_musicas[3].titulo,repositorio_musicas[5].titulo]
let playlistChorar = [ repositorio_musicas[4].titulo,repositorio_musicas[2].titulo,repositorio_musicas[7].titulo]
let repositorio_playlists= [playlistEstudos, playlistFesta, playlistChorar]


let playlists = {
    'playlistEstudos' : [repositorio_musicas[2].titulo,repositorio_playlist[6].titulo,repositorio_musicas[1].titulo],
    'playlistFesta' : [repositorio_musicas[0].titulo,repositorio_musicas[3].titulo,repositorio_musicas[5].titulo],
    'playlistChorar' : [ repositorio_musicas[4].titulo,repositorio_musicas[2].titulo,repositorio_musicas[7].titulo],
    'repositorio_playlists' : [playlistEstudos, playlistFesta, playlistChorar]
    
}
playlist.playlistChorar

nomePlaylist = prompt('digite o nome da playlist')
playlist[nomePlaylist] = []


for(let i=0;i<repositorio.length;i++){
    repositorio[i].mostrarInformacoes()
}
}
let opcao = prompt("O que você deseja fazer hoje?" + "1-Criar playlist personalizada\n" + "2-Ver playlist já criada\n" + "3-Adicionar músicas\n" + "4-Remover músicas\n")
if (opcao == 1) {
    alert("Vamos criar sua playlist!")
} else if (opcao == 2) {
    alert("Vamos ver as playlists!")
    let escolha= prompt("Qual playlist você deseja acessar?" + "1-Playlist para Estudos\n" + "2- Playlist para Festa\n" + "3-Playlist para chorar")
    if(escolha==1){
        console.log(repositorio_playlists[0])
    } else if (escolha==2){
        console.log(repositorio_playlists[1])
    } else if (escolha==3){
        console.log(repositorio_playlists[2])
    }else{
        console.log("Opção inválida!:(")
    }
} else if (opcao == 3) {
    alert("Vamos adicionar músicas!")
    let titulo = prompt("Qual o título da música?")
    let artista = prompt("De qual artista é a música" + titulo + "?")
    let genero = prompt("De qual gênero é a sua música?" + "1-Pop\n" + "2-Rock\n" + "3-Rap\n" + "4-MPB\n" + "5-Sertanejo")
    let atividade = prompt("Qual atividade mais combina com" + titulo + "1-Estudo/Leitura\n" + "2-Esporte/Academia\n" + "3-Festa\n" + "4-Momento de chorar")
    let novaMusica = new Musica(titulo, artista, humor, genero, atividade)
    repositorio.push(novaMusica);


} else if (opcao == 4) {
    alert("Vamos remover músicas!")



} else {
    alert("Opção inválida!:(")
}

let genero = prompt("De qual gênero musical será sua playlist?" + "1-Pop\n" + "2-Rock\n" + "3-Rap\n" + "4-MPB\n" + "5-Sertanejo")
let atividade = prompt("Qual atividade mais combina com a sua playlist?" + "1-Estudo/Leitura\n" + "2-Esporte/Academia\n" + "3-Festa\n" + "4-Momento de chorar")
let definicoes = (genero)"+"(atividade)
alert("Criando playlist perfeita para:" + (definicoes))


        
  git config --global user.email "marinadominguesss@yahoo.com"
  git config --global user.name "Marina Domingues"