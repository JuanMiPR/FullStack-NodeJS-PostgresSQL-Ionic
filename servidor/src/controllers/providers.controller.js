import providers from "../models/providers";

export async function getProviders(req, res) {
    try {
        const Providers = await providers.findAll();

        res.json({
            data: Providers
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "no hay proveedores",
            data: {}
        })
    }
}
export async function createProvider(req, res) {
    let {id_product, provider_name, dni_provider} = req.body;
   
    try {
        let newProvider = await providers.create({
            id_product,
            provider_name,
            dni_provider
            
        }, {
            fields: ['id_product', "provider_name", "dni_provider"]
        });
        if (newProvider) {
            res.json({
                message: "proveedor creado",
                data: newProvider
            })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "proveedor no creado",
            data: {}
        })
    }

}
export async function getProviderById(req, res) {
    const { id_provider } = req.params;
    try {
        const provider = await providers.findOne({
            where: {
                id_provider
            }
        })
        res.json({
            data: provider
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: "proveedor no encontrado",
            data: {}
        })
    }
}
export async function deleteProviderById(req, res) {
    const { id_provider } = req.params;
    try {
        const deleteRowCount = await providers.destroy({
            where: {
                id_provider
            }
        })
        res.json({
            message: "provider deleted"
        })
    } catch (e) {

    }
}
export async function updateProviderById(req, res) {
    const { id_provider } = req.params;
    let {id_product, provider_name, dni_provider} = req.body;
    const provider = await providers.findOne({
        where: {
            id_provider
        }
    })

    if (provider != null){
        provider.update({
            id_product, provider_name, dni_provider
        })
    }

    res.json({
        data:provider
    })

}