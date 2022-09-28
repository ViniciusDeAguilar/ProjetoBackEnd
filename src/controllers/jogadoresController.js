const modelos = [
    {
        id: 1,
        fichaId: 1,
        nome: "Vinicius",
        idade: 20,
        contato: "0000-0000",
        disponivel: true
    },
    {
        id: 2,
        fichaId: 2,
        nome: "Matheus",
        idade: 25,
        contato: "1111-0000",
        disponivel: true
    },
    {
        id: 3,
        fichaId: 3,
        nome: "Joaun",
        idade: 30,
        contato: "1111-1111",
        disponivel: true
    }
]

listarJogadores = (req, res, next) => {
    res.status(200).json(modelos)
}


consultarJogadorId = (req, res, next) => {
    const modelosItem = modelos.find(x => x.id === Number(req.params.id));
    if (!modelosItem) {
        return res.status(404).json({ msg: "Não encontramos este jogador!" })
    } else {
        res.json(modelosItem)
    }
}

atualizarJogador = (req, res, next) => {
    const atualizarModelos = modelos.find(x => x.id === Number(req.params.id));
    if (!atualizarModelos) {
        res.status(404).json({ msg: "Não encontramos este jogador" })
    } else {
        atualizarModelos.disponivel = req.body.disponivel;
        res.status(204).end();
    }
}

module.exports = { listarJogadores, consultarJogadorId, atualizarJogador }