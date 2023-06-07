
const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 3003;
const routes = require("./route");

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.get('/', async(req, res)=>{
    res.status(200);
    // await Moralis.start({
    //     apiKey: "a5CsT43pWcUEkedtvrWxTnOodBpab09zKIrn4IaLA2yG0MqozjotDkX88FL0xZIl",
    //     // ...and any other configuration
    // });
    // const address = "0x943b1f2e1A1Ce254c611f69Dd20b47C960cE1A2A";
    // const chain = EvmChain.GOERLI;

    // const response = await Moralis.EvmApi.nft.getWalletNFTs({
    //    address,
    //    chain,
    // });
    // console.log(response.toJSON())
    res.send("Welcome to root URL of Server");
});
app.use("/api", routes);
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);