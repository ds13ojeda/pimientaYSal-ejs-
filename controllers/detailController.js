const detailController = {
    detail: (req, res) => {
        const products = [
    {
        id: 1,
        name: "Carpaccio fresco",
        detail: "Entrada Carpaccio de salmón con cítricos",
        price: "U$S 65.50",
    },
    {
        id: 2,
        name: "Risotto de berenjena",
        detail: "Risotto de berenjena y queso de cabra",
        price: "U$S 47.00",
    },
    {
        id: 3,
        name: "Mousse de arroz",
        detail: "Mousse de arroz con leche y aroma de azahar",
        price: "U$S 27.50",
    },
    {
        id: 4,
        name: "Espárragos blancos",
        detail: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        price: "U$S 37.50",
    },
    {
        id: 5,
        name: "Milanesa Napolitana",
        detail: "",
        price: "U$S 10.50"
    },
]
        let idPlate = req.params.id
        let searchedPlate = products.find(i => i.id == idPlate)
        res.render('detalleMenu', {searchedPlate : searchedPlate})
    },
}

module.exports = detailController