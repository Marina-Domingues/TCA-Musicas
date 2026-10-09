
class Musica {
    constructor(titulo, artista, humor, genero, atividade) {
        this.titulo = titulo
        this.artista = artista
        this.humor = humor
        this.genero = genero
        this.atividade = atividade
    }
}
let repositorio = [
    new Musica("Shake It Off", "Taylor Swift", "1", "1", "3"),
    new Musica("Love Story", "Taylor Swift", "1", "1", "1"),
    new Musica("cardigan", "Taylor Swift", "2", "2", "4"),
    new Musica("Cruel Summer", "Taylor Swift", "1", "1", "3"),
    new Musica("Anti-Hero", "Taylor Swift", "4", "1", "4"),
    new Musica("Levitating", "Dua Lipa", "1", "1", "2"),
    new Musica("Velha Infância", "Tribalistas", "3", "4", "1"),
    new Musica("Anna Júlia", "Los Hermanos", "4", "2", "3")
]
let opcao = prompt("O que você deseja fazer hoje?" + "1-Criar playlist personalizada" + "2-Ver playlist já criada" + "3-Adicionar músicas" + "4-Remover músicas")
if (opcao == 1) {
    alert("Vamos criar sua playlist!")
} else if (opcao == 2) {
    alert("Vamos ver as playlists!")
} else if (opcao == 3) {
    alert("Vamos adicionar músicas!")
    let titulo = prompt("Qual o título da música?")
    let artista = prompt("De qual artista é a música" + (titulo) + "?")
    let humor = prompt("Qual humor melhor define essa música?" + "1-Feliz\n" + "2-Triste\n" + "3-Calmo\n" + "4-Nostálgico")
    let genero = prompt("De qual gênero é a sua música?" + "1-Pop\n" + "2-Rock\n" + "3-Rap\n" + "4-MPB\n" + "5-Sertanejo")
    let atividade = prompt("Qual atividade mais combina com" + (titulo) + "1-Estudo/Leitura\n" + "2-Esporte/Academia\n" + "3-Festa\n" + "4-Momento de chorar")
    let novaMusica = new Musica(titulo, artista, humor, genero, atividade)
    repositorio.push(novaMusica);


} else if (opcao == 4) {
    alert("Vamos remover músicas!")



} else {
    alert("Opção inválida!:(")
}

let humor = prompt("Qual palavra melhor define o seu humor?" + "1-Feliz\n" + "2-Triste\n" + "3-Calmo\n" + "4-Nostálgico")
let genero = prompt("De qual gênero musical será sua playlist?" + "1-Pop\n" + "2-Rock\n" + "3-Rap\n" + "4-MPB\n" + "5-Sertanejo")
let atividade = prompt("Qual atividade mais combina com a sua playlist?" + "1-Estudo/Leitura\n" + "2-Esporte/Academia\n" + "3-Festa\n" + "4-Momento de chorar")
let definicoes = (humor)"+"(genero)"+"(atividade)
alert("Criando playlist perfeita para:" + (definicoes))



let playlist = prompt("Qual playlist vocẽ deseja ouvir?" + "1-Playlist para dançar" + "2-Playlist para chorar" + "3-Melhores músicas para correr")

        
  git config --global user.email "marinadominguesss@yahoo.com"
  git config --global user.name "Marina Domingues"