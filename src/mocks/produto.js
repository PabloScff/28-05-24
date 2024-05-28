import Logo from '../../assets/logo.png';
import marrom from '../../assets/produtos/marrom.png'
import capinha from '../../assets/produtos/capinhaa.jpg'
import vermelho from '../../assets/produtos/verme.webp'

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Kit de capinhas iphone",
        logo: Logo,
        detalhes: "Um kit de 7 capinhas de iphone com cores variadas, as mais lindas do mercado!",
        preco: "R$ 100,00",
        botao: "Adicionar na Lista de Desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
            {
                id: 1,
                nome: "1x capinha de iphone 11 roxo",
                imagem: capinha,
            },
            {
                id: 2,
                nome: "1x capinha de iphone 11 marrom",
                imagem: marrom,
            },
            {
                id: 3,
                nome: "1x capinha de iphone 11 vermelho",
                imagem: vermelho,
            },
        ]
    }
}

export default produto;