const modelos = [
    {
        id: 1,
        nome: "Fulano, O rei",
        raca: "Humano",
        classe: "Gurreiro",
        vivo: false
    },
    {
        id: 2,
        nome: "Jessica, a Mercadora",
        raca: "Khajit",
        classe: "Mercadora",
        vivo: true
    },
    {
        id: 3,
        nome: "Raphael, o ladrào",
        raca: "Goblin",
        classe: "Ladino",
        vivo: true
    }
]

listarNpcs = (req, res, next) => {
    res.status(200).json(modelos)
}


consultarNpcId = (req, res, next) => {
    const modelosItem = modelos.find(x => x.id === Number(req.params.id));
    if (!modelosItem) {
        return res.status(404).json({ msg: "Não encontramos este NPC!" })
    } else {
        res.json(modelosItem)
    }
}

atualizarNpc = (req, res, next) => {
    const atualizarModelos = modelos.find(x => x.id === Number(req.params.id));
    if (!atualizarModelos) {
        res.status(404).json({ msg: "Não encontramos este NPC!" })
    } else {
        atualizarModelos.vivo = req.body.vivo;
        res.status(204).end();
    }
}

module.exports = { listarNpcs, consultarNpcId, atualizarNpc }