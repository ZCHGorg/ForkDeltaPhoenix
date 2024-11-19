let web3;
let contract;

const contractAddress = "YOUR_CONTRACT_ADDRESS";
const abi = [
  // Add your contract ABI here
];

window.onload = async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
  } else {
    alert("Please install MetaMask to use this application!");
  }
};

document.getElementById("connectWallet").addEventListener("click", async () => {
  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const walletAddress = accounts[0];
    document.getElementById("walletAddress").textContent = `Connected: ${walletAddress}`;
    contract = new web3.eth.Contract(abi, contractAddress);
  } catch (error) {
    console.error("Wallet connection failed", error);
  }
});

document.getElementById("checkBalance").addEventListener("click", async () => {
  const tokenAddress = document.getElementById("tokenAddress").value;
  const accounts = await web3.eth.getAccounts();
  const balance = await contract.methods.balanceOf(tokenAddress, accounts[0]).call();
  document.getElementById("tokenBalance").textContent = `Balance: ${web3.utils.fromWei(balance, "ether")}`;
});

document.getElementById("depositEther").addEventListener("click", async () => {
  const amount = document.getElementById("depositAmount").value;
  const accounts = await web3.eth.getAccounts();
  await contract.methods.deposit().send({
    from: accounts[0],
    value: web3.utils.toWei(amount, "ether"),
  });
  alert("Ether deposited successfully!");
});

document.getElementById("withdrawEther").addEventListener("click", async () => {
  const amount = document.getElementById("withdrawAmount").value;
  const accounts = await web3.eth.getAccounts();
  await contract.methods.withdraw(web3.utils.toWei(amount, "ether")).send({
    from: accounts[0],
  });
  alert("Ether withdrawn successfully!");
});
