const express = require("express");
const router = express.Router();
const WalletController = require('./controllers/WalletController');
const walletController = new WalletController();
router.get('/wallet/:address', walletController.getOwnedTokens);
router.get('/token/:address/:tokenId', walletController.getToken);
module.exports = router;
