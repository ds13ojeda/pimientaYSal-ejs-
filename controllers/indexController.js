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
]
const indexController = {
    index: (req, res) => {
        res.render("index", {products : products})
    },
}

module.exports = indexController