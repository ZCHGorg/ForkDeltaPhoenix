# ForkDeltaPhoenix

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

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/forkdelta.git
cd forkdelta

### 2. Install Dependencies
bash
Copy code
npm install
# or
yarn install
### 3. Configure Environment Variables
Create a .env file in the root directory and configure the following:

env
Copy code
REACT_APP_INFURA_PROJECT_ID=<Your_Infura_Project_ID>
REACT_APP_NETWORK=<mainnet|ropsten|rinkeby>
Replace <Your_Infura_Project_ID> with your Infura project ID.
Set the network to either mainnet or a testnet like ropsten or rinkeby.
### 4. Run the Development Server
bash
Copy code
npm start
# or
yarn start
The application will be available at http://localhost:3000.

### 5. Build for Production
bash
Copy code
npm run build
# or
yarn build
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

Technologies
React: Front-end library for building the user interface.
Web3.js: Ethereum JavaScript API for blockchain interactions.
Solidity: Smart contract programming language.
Bootstrap: Responsive CSS framework for styling.
Contributing
We welcome contributions to ForkDelta! Please follow these steps to contribute:

Fork the repository.
Create a new branch for your feature or bugfix:
bash
Copy code
git checkout -b feature-name
Commit your changes and push to your fork:
bash
Copy code
git commit -m "Add feature description"
git push origin feature-name
Open a pull request with a detailed description of your changes.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
ForkDelta is a fork of the EtherDelta decentralized exchange. Special thanks to the Ethereum community for providing the tools and resources that made this project possible.
