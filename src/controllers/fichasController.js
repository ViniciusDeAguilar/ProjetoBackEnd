const modelos = [
    {
        id: 1,
        nomeJogador: "Vinicius",
        nomePersonagem: "Kruk, quebra cranios",
        raca: "Orc",
        classe: "barbaro",
        for: 10,
        cons: 8,
        dex: 4,
        int: 3,
        car: 2,
        wis: 0,
        jogando: true
    },
    {
        id: 2,
        nomeJogador: "Matheus",
        nomePersonagem: "Reinaldo, o tocador",
        raca: "Elfo",
        classe: "bardo",
        for: 10,
        cons: 8,
        dex: 4,
        int: 3,
        car: 2,
        wis: 0,
        jogando: true
    },
    {
        id: 3,
        nomeJogador: "Joaun",
        nomePersonagem: "Cleber, o Curandeiro",
        raca: "Humano",
        classe: "druida",
        for: 10,
        cons: 8,
        dex: 4,
        int: 3,
        car: 2,
        wis: 0,
        jogando: false
    }
]

listarFichas = (req, res, next) => {
    res.status(200).json(modelos)
}


consultarFichaId = (req, res, next) => {
    const modelosItem = modelos.find(x => x.id === Number(req.params.id));
    if (!modelosItem) {
        return res.status(404).json({ msg: "Não encontramos sua ficha!" })
    } else {
        res.json(modelosItem)
    }
}

atualizarFicha = (req, res, next) => {
    const atualizarModelos = modelos.find(x => x.id === Number(req.params.id));
    if (!atualizarModelos) {
        res.status(404).json({ msg: "Não encontramos sua ficha!" })
    } else {
        atualizarModelos.jogando = req.body.jogando;
        res.status(204).end();
    }
}

module.exports = { listarFichas, consultarFichaId, atualizarFicha }