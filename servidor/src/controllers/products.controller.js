import products from "../models/products";
export async function getProducts(req, res) {
    try {
        const Products = await products.findAll();

        res.json({
            data: Products
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "fallo de conexion",
            data: {}
        })
    }
}
export async function createProduct(req, res) {

    let { product_name, product_stock, id_warehouse, product_image } = req.body;
    console.log(product_name);
    try {
        let newProduct = await products.create({
            product_name,
            product_stock, id_warehouse, product_image

        }, {
            fields: ['product_name', "product_stock", "product_image", "id_warehouse"]
        });
        if (newProduct) {
            res.json({
                message: "producto creado",
                data: newProduct
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "producto no creado",
            data: {}
        })
    }

}

export async function getProductById(req, res) {
    const { id_product } = req.params;
    try {
        const product = await products.findOne({
            where: {
                id_product
            }
        })
        res.json({
            data: product
        });
    }
    catch (e) {
        res.status(500).json({
            message: "producto no encontrado",
            data: {}
        })
    }
}
export async function getProductByIdWarehouse(req, res) {
    const { id_warehouse } = req.params;
    try {
        const product = await products.findAll({
            where: {
                id_warehouse
            }
        })
        res.json({
            data: product
        });
    }
    catch (e) {
        res.status(500).json({
            message: "producto no encontrado",
            data: {}
        })
    }
}
export async function deleteProductById(req, res) {
    const { id_product } = req.params;
    try {
        const deleteRowCount = await products.destroy({
            where: {
                id_product
            }
        })
        res.json({
            message: "product deleted"
        })
    } catch (e) {

    }
}
export async function updateProductById(req, res) {
    const { id_product } = req.params;
    let { product_name, product_stock, product_image, id_warehouse } = req.body;
    const product = await products.findOne({
        where: {
            id_product
        }
    })

    if (product != null) {
        product.update({
            product_name, product_stock, product_image, id_warehouse
        })

    }

    res.json({
        data: product
    })

}