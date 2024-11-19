<script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.6.1/web3.min.js"></script>
<script>
  // Check if Web3 is injected (from browser extension like MetaMask)
  if (typeof window.ethereum !== 'undefined') {
    console.log('Ethereum successfully detected!');

    // Create a Web3 instance
    const web3 = new Web3(window.ethereum);

    // Request account access
    window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
      console.log("Connected account:", accounts[0]);
      startApp(accounts[0]);
    }).catch(error => {
      console.error("Error requesting accounts:", error);
    });

    async function startApp(account) {
      const contractAddress = '0x8d12A197cB00D4747a1fe03395095ce2A5CC6819'; // The address of the EtherDelta contract
      const abi = [{"constant":false,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"user","type":"address"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"amount","type":"uint256"}],"name":"trade","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"}],"name":"order","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"orderFills","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"depositToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"user","type":"address"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"amountFilled","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"tokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"feeMake_","type":"uint256"}],"name":"changeFeeMake","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"feeMake","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"feeRebate_","type":"uint256"}],"name":"changeFeeRebate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"feeAccount","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"user","type":"address"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"amount","type":"uint256"},{"name":"sender","type":"address"}],"name":"testTrade","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"feeAccount_","type":"address"}],"name":"changeFeeAccount","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"feeRebate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"feeTake_","type":"uint256"}],"name":"changeFeeTake","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"admin_","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"orders","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"feeTake","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"accountLevelsAddr_","type":"address"}],"name":"changeAccountLevelsAddr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"accountLevelsAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"user","type":"address"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"availableVolume","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"admin_","type":"address"},{"name":"feeAccount_","type":"address"},{"name":"accountLevelsAddr_","type":"address"},{"name":"feeMake_","type":"uint256"},{"name":"feeTake_","type":"uint256"},{"name":"feeRebate_","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenGet","type":"address"},{"indexed":false,"name":"amountGet","type":"uint256"},{"indexed":false,"name":"tokenGive","type":"address"},{"indexed":false,"name":"amountGive","type":"uint256"},{"indexed":false,"name":"expires","type":"uint256"},{"indexed":false,"name":"nonce","type":"uint256"},{"indexed":false,"name":"user","type":"address"}],"name":"Order","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenGet","type":"address"},{"indexed":false,"name":"amountGet","type":"uint256"},{"indexed":false,"name":"tokenGive","type":"address"},{"indexed":false,"name":"amountGive","type":"uint256"},{"indexed":false,"name":"expires","type":"uint256"},{"indexed":false,"name":"nonce","type":"uint256"},{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"v","type":"uint8"},{"indexed":false,"name":"r","type":"bytes32"},{"indexed":false,"name":"s","type":"bytes32"}],"name":"Cancel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenGet","type":"address"},{"indexed":false,"name":"amountGet","type":"uint256"},{"indexed":false,"name":"tokenGive","type":"address"},{"indexed":false,"name":"amountGive","type":"uint256"},{"indexed":false,"name":"get","type":"address"},{"indexed":false,"name":"give","type":"address"}],"name":"Trade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Withdraw","type":"event"}];

      // Create contract instance
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      // Example function to check balances
      async function getBalance(tokenAddress) {
        const balance = await contract.methods.balanceOf(tokenAddress, account).call();
        console.log("Balance:", web3.utils.fromWei(balance, 'ether'));
        return balance;
      }

      // Example of deposit function (handling Ether deposit)
      async function depositEther(amountInEther) {
        const amountInWei = web3.utils.toWei(amountInEther, 'ether');
        await contract.methods.deposit().send({
          from: account,
          value: amountInWei,
        });
      }

      // Example of withdraw function (handling Ether withdraw)
      async function withdrawEther(amountInEther) {
        const amountInWei = web3.utils.toWei(amountInEther, 'ether');
        await contract.methods.withdraw(amountInWei).send({
          from: account,
        });
      }

      // Example of submitting an order
      async function placeOrder(tokenGet, amountGet, tokenGive, amountGive, expires, nonce) {
        const amountGetInWei = web3.utils.toWei(amountGet, 'ether');
        const amountGiveInWei = web3.utils.toWei(amountGive, 'ether');
        await contract.methods.order(
          tokenGet, amountGetInWei, tokenGive, amountGiveInWei, expires, nonce
        ).send({ from: account });
      }

      // Example of canceling an order
      async function cancelOrder(tokenGet, amountGet, tokenGive, amountGive, expires, nonce) {
        const hash = web3.utils.soliditySha3(
          { t: 'address', v: contract.options.address },
          { t: 'address', v: tokenGet },
          { t: 'uint256', v: amountGet },
          { t: 'address', v: tokenGive },
          { t: 'uint256', v: amountGive },
          { t: 'uint256', v: expires },
          { t: 'uint256', v: nonce }
        );
        await contract.methods.cancelOrder(
          tokenGet, amountGet, tokenGive, amountGive, expires, nonce
        ).send({ from: account });
      }

      // Attach event listeners to UI elements
      document.getElementById('depositEtherBtn').addEventListener('click', () => {
        const amount = document.getElementById('depositAmount').value;
        depositEther(amount);
      });

      document.getElementById('withdrawEtherBtn').addEventListener('click', () => {
        const amount = document.getElementById('withdrawAmount').value;
        withdrawEther(amount);
      });

      document.getElementById('placeOrderBtn').addEventListener('click', () => {
        const tokenGet = document.getElementById('tokenGet').value;
        const amountGet = document.getElementById('amountGet').value;
        const tokenGive = document.getElementById('tokenGive').value;
        const amountGive = document.getElementById('amountGive').value;
        const expires = document.getElementById('expires').value;
        const nonce = document.getElementById('nonce').value;
        placeOrder(tokenGet, amountGet, tokenGive, amountGive, expires, nonce);
      });

      document.getElementById('cancelOrderBtn').addEventListener('click', () => {
        const tokenGet = document.getElementById('tokenGet').value;
        const amountGet = document.getElementById('amountGet').value;
        const tokenGive = document.getElementById('tokenGive').value;
        const amountGive = document.getElementById('amountGive').value;
        const expires = document.getElementById('expires').value;
        const nonce = document.getElementById('nonce').value;
        cancelOrder(tokenGet, amountGet, tokenGive, amountGive, expires, nonce);
      });
    }
  } else {
    console.log('Please install MetaMask!');
  }
</script>
