module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => {
            res.status(500).send({errorMessage: `Can't get Inventory`})
            console.log(err);
        })
    },

    createProduct: (req, res) => {
        const db = req.app.get('db');
        // console.log(req.body)
        const {product_name, price, img} = req.body;
        db.create_product([product_name, price, img]).then(() => {
            res.sendStatus(200);
        }).catch(err => {
            res.status(500).send({errorMessage: `Can't add product`})
            console.log(err)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_product(id).then(() => {
            res.sendStatus(200);
        }).catch(err => {
            res.status(500).send({errorMessage: `Can't add product`})
            console.log(err)
        })
    }
}