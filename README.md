# ForkDelta Phoenix

ForkDelta is a decentralized exchange (DEX) that allows users to trade ERC20 tokens directly from their wallets. Built on the Ethereum blockchain, ForkDelta ensures secure, transparent, and trustless token exchanges.

This repository contains the source code for ForkDelta, including the front-end interface and integration with Ethereum smart contracts.

## Features

- Decentralized trading of ERC20 tokens.
- Direct wallet interaction (e.g., MetaMask).
- Order book functionality for placing and matching trades.
- Integration with Web3.js for Ethereum blockchain communication.
- Lightweight and responsive UI.

## Prerequisites

Before running ForkDelta, ensure you have the following:

- **Node.js** (v14 or higher recommended)
- **npm** or **yarn**
- **MetaMask** or a similar Ethereum wallet browser extension
- Access to an Ethereum node (e.g., Infura or local node)

### File Structure

```bash
project/
│
├── index.html       // Main HTML file
├── style.css        // Basic styling
├── app.js           // JavaScript logic for interacting with the contract
└── web3.min.js      // Web3.js library
```

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/zchgorg/ForkDeltaPhoenix.git
cd ForkDeltaPhoenix
```
### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables
Create a .env file in the root directory and configure the following:

env
```bash
REACT_APP_INFURA_PROJECT_ID=<Your_Infura_Project_ID>
REACT_APP_NETWORK=<mainnet|ropsten|rinkeby>
```
Replace <Your_Infura_Project_ID> with your Infura project ID.
Set the network to either mainnet or a testnet like ropsten or rinkeby.

### 4. Run the Development Server
```bash

npm start
# or
yarn start
```
The application will be available at http://localhost:3000.

### 5. Build for Production
```bash
npm run build
# or
yarn build
```
The production-ready files will be generated in the build directory.

### Usage
Open the application in your browser.
Connect your wallet using MetaMask or a similar Ethereum wallet.
Select the token pair you want to trade.
Place orders or match existing orders from the order book.
Smart Contracts
ForkDelta uses the following Ethereum smart contracts:

Exchange Contract: Handles order matching and token transfers.
Token Contract: Implements the ERC20 standard.
You can find the contract addresses in the src/config/contracts.js file.

### Technologies
React: Front-end library for building the user interface.
Web3.js: Ethereum JavaScript API for blockchain interactions.
Solidity: Smart contract programming language.
Bootstrap: Responsive CSS framework for styling.
Contributing
We welcome contributions to ForkDelta! Please follow these steps to contribute:

Fork the repository.
Create a new branch for your feature or bugfix:
```bash
git checkout -b feature-name
```
Commit your changes and push to your fork:
```bash
git commit -m "Add feature description"
git push origin feature-name
```
Open a pull request with a detailed description of your changes.

###  web3.js

web3.js is typically included as a library that provides an API for communicating with the Ethereum blockchain. There are several ways to include web3.js in your project:

1. Via npm (Recommended for Modern Applications)
Install the library using npm or yarn:
```bash
npm install web3
```
Import it into your JavaScript/TypeScript file:
javascript
```bash
import Web3 from 'web3';
```
2. Via a CDN
Include it directly in your HTML file:
html
```bash 
<script src="https://cdn.jsdelivr.net/npm/web3@1.8.0/dist/web3.min.js"></script>
```
Once included, web3 will be available globally as a JavaScript object:
javascript
```bash
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
```
3. Via a Framework Like Truffle or Hardhat
If you're using a framework like Truffle or Hardhat, they often come with tools to integrate web3.js. You'll still need to install it as part of your project dependencies.
How Does It Work in the Front-End Code?
Use web3.js to interact with the Ethereum network and smart contracts. For instance:
javascript
```bash
const web3 = new Web3(window.ethereum); // Use the browser's Ethereum provider
const contract = new web3.eth.Contract(abi, contractAddress);
```

// Example of calling a contract method
```bash
contract.methods.balanceOf(accountAddress).call()
  .then(balance => console.log(`Balance: ${balance}`));
```
Make sure you have web3.js properly included in your environment based on your setup. 

### License
This project is licensed under the zCHG.org License. See the LICENSE file for details.

### Acknowledgements
ForkDelta is a fork of the EtherDelta decentralized exchange. Special thanks to the Ethereum community for providing the tools and resources that made this project possible.
