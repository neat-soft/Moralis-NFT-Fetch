const httpStatus = require('http-status');
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
Moralis.start({
    apiKey: "a5CsT43pWcUEkedtvrWxTnOodBpab09zKIrn4IaLA2yG0MqozjotDkX88FL0xZIl",
    // ...and any other configuration
})
const chain = EvmChain.GOERLI;
class WalletController{
    getOwnedTokens = async(req,res) => {
        try {
            let { address } = req.params;
            const response = await Moralis.EvmApi.nft.getWalletNFTs({
                address,
                chain,
            });
            let code = httpStatus.OK;
            res.status(code).send({ status:true, code, message: "", data:response.toJSON().result });
        } catch (e) {
            console.log(e)
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    }
    getToken = async(req, res) => {
        let { address,tokenId } = req.params;
        const response = await Moralis.EvmApi.nft.getNFTMetadata({
            address,
            chain,
            tokenId
        });
        let code = httpStatus.OK;
        res.status(code).send({ status:true, code, message: "", data:response.toJSON() });
    }
}
module.exports = WalletController;