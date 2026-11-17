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
    new Musica("Cardigan", "Taylor Swift", "1"),
    new Musica("Cruel Summer", "Taylor Swift", "1"),
    new Musica("AntiHero", "Taylor Swift", "1"),
    new Musica("Levitating", "Dua Lipa", "1"),
    new Musica("As It Was", "Harry Styles", "1"),
    new Musica("Flowers", "Miley Cyrus", "1"),
    new Musica("Blinding Lights", "The Weeknd", "1"),
    new Musica("Bad Romance", "Lady Gaga", "1"),
    new Musica("Espresso", "Sabrina Carpenter", "1"),
    new Musica("Birds of a Feather", "Billie Eilish", "1"),
    new Musica("Halo", "Beyonce", "1"),
    new Musica("Dont Start Now", "Dua Lipa", "1"),
    new Musica("O Sol", "Vitor Kley", "1"),
    new Musica("Dona de Mim", "IZA", "1"),

    new Musica("Ana Julia", "Los Hermanos", "2"),
    new Musica("Tempo Perdido", "Legiao Urbana", "2"),
    new Musica("Pais e Filhos", "Legiao Urbana", "2"),
    new Musica("Pro Dia Nascer Feliz", "Barao Vermelho", "2"),
    new Musica("Meu Erro", "Os Paralamas do Sucesso", "2"),
    new Musica("Lanterna dos Afogados", "Os Paralamas do Sucesso", "2"),
    new Musica("Infinita Highway", "Engenheiros do Hawaii", "2"),
    new Musica("Dias de Luta Dias de Gloria", "Charlie Brown Jr", "2"),
    new Musica("So os Loucos Sabem", "Charlie Brown Jr", "2"),
    new Musica("Exagerado", "Cazuza", "2"),
    new Musica("Me Adora", "Pitty", "2"),
    new Musica("Malandragem", "Cassia Eller", "2"),

    new Musica("AmarElo", "Emicida", "3"),
    new Musica("Levanta e Anda", "Emicida", "3"),
    new Musica("Jesus Chorou", "Racionais MCs", "3"),
    new Musica("Vida Loka Parte 2", "Racionais MCs", "3"),
    new Musica("Boa Esperanca", "Emicida", "3"),

    new Musica("Velha Infancia", "Tribalistas", "4"),
    new Musica("Trevo", "ANAVITORIA", "4"),
    new Musica("Partilhar", "Rubel", "4"),
    new Musica("Leaozinho", "Caetano Veloso", "4"),
    new Musica("Sina", "Djavan", "4"),
    new Musica("Dona Cila", "Maria Gadu", "4"),
    new Musica("Amei Te Ver", "Tiago Iorc", "4"),
    new Musica("Como Nossos Pais", "Elis Regina", "4"),
    new Musica("Tocando em Frente", "Almir Sater", "4"),
    new Musica("Velha Roupa Colorida", "Belchior", "4"),
    new Musica("Meu Abrigo", "Melim", "4"),
    new Musica("Acorda Pedrinho", "Jovem Dionisio", "4")
]
let playlists = {
    'Estudos': [
        repositorio_musicas[2],
        repositorio_musicas[6],
        repositorio_musicas[1],
        repositorio_musicas[35],
        repositorio_musicas[36],
        repositorio_musicas[37]
    ],

    'Festa': [
        repositorio_musicas[0],
        repositorio_musicas[3],
        repositorio_musicas[5],
        repositorio_musicas[8],
        repositorio_musicas[10],
        repositorio_musicas[13]
    ],

    'Chorar': [
        repositorio_musicas[4],
        repositorio_musicas[2],
        repositorio_musicas[7],
        repositorio_musicas[16],
        repositorio_musicas[42]
    ],

    'MPB': [
        repositorio_musicas[34],
        repositorio_musicas[35],
        repositorio_musicas[36],
        repositorio_musicas[37],
        repositorio_musicas[38],
        repositorio_musicas[39],
        repositorio_musicas[40],
        repositorio_musicas[41],
        repositorio_musicas[42],
        repositorio_musicas[43],
        repositorio_musicas[44]
    ],

    'Rock': [
        repositorio_musicas[16],
        repositorio_musicas[17],
        repositorio_musicas[18],
        repositorio_musicas[19],
        repositorio_musicas[20],
        repositorio_musicas[21],
        repositorio_musicas[22],
        repositorio_musicas[23],
        repositorio_musicas[24],
        repositorio_musicas[25],
        repositorio_musicas[26],
        repositorio_musicas[27]
    ],

    'Pop': [
        repositorio_musicas[0],
        repositorio_musicas[1],
        repositorio_musicas[3],
        repositorio_musicas[5],
        repositorio_musicas[6],
        repositorio_musicas[7],
        repositorio_musicas[8],
        repositorio_musicas[9],
        repositorio_musicas[10],
        repositorio_musicas[11],
        repositorio_musicas[12],
        repositorio_musicas[13]
    ],

    'Rap': [
        repositorio_musicas[28],
        repositorio_musicas[29],
        repositorio_musicas[30],
        repositorio_musicas[31],
        repositorio_musicas[32]
    ],

    'Romance': [
        repositorio_musicas[1],
        repositorio_musicas[2],
        repositorio_musicas[34],
        repositorio_musicas[35],
        repositorio_musicas[36],
        repositorio_musicas[37]
    ],

    'Treino': [
        repositorio_musicas[0],
        repositorio_musicas[3],
        repositorio_musicas[5],
        repositorio_musicas[8],
        repositorio_musicas[13],
        repositorio_musicas[23],
        repositorio_musicas[24],
        repositorio_musicas[28]
    ]
}
alert("Bem vindo(a) ao Repositório Musical!!!")
let opcao;
while (opcao != "6") {
    opcao = prompt("O que você deseja fazer hoje?\n" + "1-Criar playlist personalizada\n" + "2-Acessar playlists já criadas\n" + "3-Adicionar músicas\n" + "4-Remover músicas\n" + "5-Ver repositório musical\n" + "6-Encerrar atividades por hoje")
    if (opcao == 1) {
        alert("Vamos criar sua playlist!")
        let nomePlaylist = prompt('Digite o nome da playlist.')
        while (nomePlaylist in playlists) {
            alert("Não é possível criar uma playlist com o mesmo nome de uma playlist já existente. Tente outro.")
            nomePlaylist = prompt('Digite outro nome para a playlist.')
        }
        playlists[nomePlaylist] = []
        let continuar = prompt("Deseja adicionar uma música a sua playlist? Responda com: sim/não.").trim().toLowerCase()
        while (continuar == "sim") {
            let titulo = prompt("Qual música deseja adicionar?").trim().toLowerCase()
            let musicaEncontrada = repositorio_musicas.find(musica => musica.titulo.trim().toLowerCase() == titulo);
            if (musicaEncontrada) {
                playlists[nomePlaylist].push(musicaEncontrada)
                alert("Música adicionada a playlist!")
            } else {
                alert("Essa música não faz parte do repositório! Tente adicionar outra música.")
            }
            continuar = prompt("Deseja adicionar outra música a sua playlist? Responda com: sim/não.").trim().toLowerCase()
        }
        alert("Playlist criada com sucesso!")
    } else if (opcao == 2) {
        alert("Vamos ver as playlists!")
        console.clear()

        let listaPlaylists = "PLAYLISTS DISPONÍVEIS:\n"

        for (let nome in playlists) {
            listaPlaylists += nome + "\n"
        }

        alert(listaPlaylists)

        let escolha = prompt("Qual playlist você deseja acessar?").trim().toLowerCase()
        let playlistEncontrada;

        for (let nomePlaylist in playlists) {
            if (nomePlaylist.toLowerCase().trim() == escolha) {
                playlistEncontrada = nomePlaylist;
            }
        }

        if (playlistEncontrada) {
            alert("Playlist encontrada!");
            console.clear();

            let listaMusicas = "Playlist " + playlistEncontrada + ":"+ "\n";

            for (let musica of playlists[playlistEncontrada]) {
                listaMusicas += musica.titulo + "\n";
            }

            alert(listaMusicas);

            let adicionar = prompt("Deseja adicionar uma música a essa playlist? Responda com: sim/não.").trim().toLowerCase()

            while (adicionar == "sim") {
                let titulo = prompt("Qual música deseja adicionar?").trim().toLowerCase()
                let musicaEncontrada = repositorio_musicas.find(musica => musica.titulo.trim().toLowerCase() == titulo);

                if (musicaEncontrada) {
                    playlists[playlistEncontrada].push(musicaEncontrada)
                    alert("Música adicionada a playlist!")
                    console.clear()

                    for (let musica of playlists[playlistEncontrada]) {
                        alert(musica.titulo);
                    }
                } else {
                    alert("Essa música não faz parte do repositório! Tente adicionar outra música.")
                }

                adicionar = prompt("Deseja adicionar outra música a sua playlist? Responda com: sim/não.").trim().toLowerCase()
            }

        } else {
            alert("Playlist não encontrada!");
        }
    } else if (opcao == 3) {
        alert("Vamos adicionar músicas!")
        let titulo = prompt("Qual o título da música?")
        let artista = prompt("De qual artista é a música?")
        let genero = prompt("De qual gênero é a sua música?\n" + "1-Pop\n" + "2-Rock\n" + "3-Rap\n" + "4-MPB")
        let novaMusica = new Musica(titulo, artista, genero)
        repositorio_musicas.push(novaMusica);
        alert("Música adicionada com sucesso!")

    } else if (opcao == 4) {
        alert("Vamos remover músicas!")
        let titulo = prompt("Qual o título da música?").trim().toLowerCase()
        let indice = repositorio_musicas.findIndex(musica => (musica.titulo.trim().toLowerCase()) == titulo)
        if (indice == -1) {
            alert("Música não encontrada:(")
        } else {
            repositorio_musicas.splice(indice, 1)
            for (let nomePlaylist in playlists) {
                let indicePlaylist = playlists[nomePlaylist].findIndex(musica => (musica.titulo.trim().toLowerCase()) == titulo)
                if (indicePlaylist != -1) {
                    playlists[nomePlaylist].splice(indicePlaylist, 1)
                }
            }
            alert("Música removida com sucesso!")
        }
    } else if (opcao == 5) {
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
    } else if (opcao > 6 || opcao < 1) {
        alert("Opção inválida!:(")
    }
}
alert("Obrigada por prestigiar o Repertório Musical. Até mais!")



        
  git config --global user.email "marinadominguesss@yahoo.com"
  git config --global user.name "Marina Domingues"