import buy from "../models/buy";

export async function getBuys(req, res) {
    try {
        const Buys = await buy.findAll();

        res.json({
            data: Buys
        })
    } catch (e) {
        res.status(500).json({
            message: "no hay compras",
            data: {}
        })
    }
}
export async function createBuy(req, res) {
    let { id_user, id_product, quantity, date,payment_type,user_address } = req.body;
   
    try {
        let newBuy = await buy.create({
            id_user, id_product, quantity, date,payment_type,user_address
            
        }, {
            fields: [ "id_user", "id_product", "quantity", "date","payment_type","user_address"]
        });
        if (newBuy) {
            res.json({
                message: "compra creada",
                data: newBuy
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "compra no creada",
            data: {}
        })
    }

}
export async function getBuyById(req, res) {
    const { id_user } = req.params;
    try {
        const findedBuy = await buy.findOne({
            where: {
                id_user
            }
        })
        res.json({
            data: findedBuy
        });
    }
    catch (e) {
        res.status(500).json({
            message: "compra no encontrada",
            data: {}
        })
    }
}
export async function deleteBuyById(req, res) {
    const { id_user } = req.params;
    try {
        const deleteRowCount = await buy.destroy({
            where: {
                id_user
            }
        })
        res.json({
            message: "buy deleted"
        })
    } catch (e) {

    }
}
export async function updateBuyById(req, res) {
    const { id_user,date } = req.params;
    let { quantity,payment_type,user_address } = req.body;
   
    const findedBuy = await buy.findOne({
        where: {
            id_user,
            date
        }
    })

    if (findedBuy != null){
        findedBuy.update({
            quantity, payment_type,user_address
        })
    }

    res.json({
        data:findedBuy
    })

}