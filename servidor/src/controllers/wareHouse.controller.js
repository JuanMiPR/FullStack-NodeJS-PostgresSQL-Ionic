import WareHouses from "../models/WareHouses";

export async function getWareHouses(req, res) {
    try {
        const wareHouses = await WareHouses.findAll();

        res.json({
            data: wareHouses
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "no hay proveedores",
            data: {}
        })
    }
}
export async function createWareHouse(req, res) {
    let {warehouse_address, phone_number} = req.body;
   
    try {
        let newWareHouse = await WareHouses.create({
            warehouse_address,
            phone_number
            
        }, {
            fields: ["warehouse_address", "phone_number"]
        });
        if (newWareHouse) {
            res.json({
                message: "almacen creado",
                data: newWareHouse
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "almacen no creado",
            data: {}
        })
    }

}
export async function getWareHouseById(req, res) {
    const { id_warehouse } = req.params;
    try {
        const warehouse = await WareHouses.findOne({
            where: {
                id_warehouse
            }
        })
        res.json({
            data: warehouse
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: "almacen no encontrado",
            data: {}
        })
    }
}
export async function deleteWareHouseById(req, res) {
    const { id_warehouse } = req.params;
    try {
        const deleteRowCount = await WareHouses.destroy({
            where: {
                id_warehouse
            }
        })
        res.json({
            message: "warehouse deleted"
        })
    } catch (e) {

    }
}
export async function updateWareHouseById(req, res) {
    const { id_warehouse } = req.params;
    let {warehouse_address, phone_number} = req.body;
    const warehouse = await WareHouses.findOne({
        where: {
            id_warehouse
        }
    })

    if (warehouse != null){
        WareHouses.update({
            warehouse_address, phone_number
        })
    }

    res.json({
        data:warehouse
    })

}