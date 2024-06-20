# The Ethereum project raises funds from the community for construction based on Kickstart.

### Description

- This project is constructed based on the reference to the kickstart website, incorporating nearly all the logics of a crowdfunding platform. However, this website enhances security by utilizing blockchain as the primary tool for storage and interaction. It allows users to create new campaigns, and they become the sole managers of those campaigns without relying on or needing permission from others. Once a campaign is created, its information becomes immutable. Additionally, each campaign enables the deployer to create new requests for mobilizing and utilizing funds from the community. However, when executing such requests, the participants in the campaign need to vote on the feasibility of the request. If the number of affirmative votes exceeds half of the participants, the request is approved, allowing the deployer to mobilize the specified funds.

### The major problems with the current crowdfunding platforms that I wanted to solve were:

- Security: As the funds become larger, they need to be heavily secured. Although stringent measures such as symmetric encryption are in place to make e-payment safe and secure, it is still vulnerable to hacking. Blockchain, which has never been compromised yet, can provide that level of security.

- Transparency and Anti-Fraud: Many crowdfunding scams continue to happen. There is no way to see where the funds are being used. I wanted to make the entire flow of funds transparent at every stage, so that there is no possibility of the money being misused.

- Global contribution: With some platforms being country-specific, it becomes hard for people from other countries to contribute to various campaigns. Using blockchain, anyone in the world can contribute to the campaign. Transactions are quick and convenient.

# Screenshots 
### Home Page :
- This page will display details of each campaign's addresses.

![{07F0C778-715D-40B8-9E5A-3E669C9B83B3} png](https://github.com/Zellsed/defi-staking-app-starter/assets/155917734/d4ed7585-bf95-4bd7-995b-80c1cf8d7de5)

### Create New Campaign Page :
- The page for creating a new campaign will report errors if the input is not suitable.

![{DD7C7C44-546E-4875-A168-85D5107465CA} png](https://github.com/Zellsed/defi-staking-app-starter/assets/155917734/70678d5f-fab6-4089-8398-73803baabd1f)

![{56DA5A5E-2295-4BDC-90D0-BE49CC535D43} png](https://github.com/Zellsed/defi-staking-app-starter/assets/155917734/58c85dca-196c-47df-977a-b910256387b2)

### Campaign Page :
- A page detailing information about each campaign.

![{9E1FED3D-878C-472A-97D6-FA657D577D63} png](https://github.com/Zellsed/defi-staking-app-starter/assets/155917734/0b04ff12-3215-4760-a41b-3d4e719ea25b)

- The function to participate in a campaign.

![{7F43DA83-B1D0-4539-BA48-947421DC0771} png](https://github.com/Zellsed/defi-staking-app-starter/assets/155917734/43d19401-09eb-48ab-a11e-6d0cc9f4e50a)

### View Request Page:
- A page providing detailed information about the list of requests. When a request accumulates enough votes, it will turn green; once the request is completed, it will turn gray.

![{FD19F1E2-A764-4E7B-89E9-69A2B108DFB5} png](https://github.com/Zellsed/defi-staking-app-starter/assets/155917734/7004e5c7-2f73-4d56-a01e-d9fc16501781)

![{EADA2E35-78CD-41B5-A311-2891383EFBF7} png](https://github.com/Zellsed/defi-staking-app-starter/assets/155917734/3a96a366-2061-4fcf-b89e-9376d509a9d8)

### New Request Page:
- This page allows the deployer to create new requests.

![{F94F9F51-F51F-4BE1-AD73-365628F16E6D} png](https://github.com/Zellsed/defi-staking-app-starter/assets/155917734/ad5bc20c-b8ba-4051-bb9a-4bc0fa48c3fb)

# Tech Stack 
- Web3.js
- Node.js
- Next JS
- React JS
- React Semantic UI
- Solidity
- Infura
- Metamask

# To run the application locally
### Navigate to the command prompt, go to the directory containing the project, and execute the commands to install dependencies.
- npm install --legacy-peer-deps

## Prerequisites to create Campaign and Contribute
1. Install **Metamask** as Google Chrome Extension and Create an account.

2.  Request Ether by sharing your ethereum address in social media <br>`(https://faucet.sepolia.io/)`

3. Get ether free by giving the ethereum address <br>`(http://sepolia-faucet.com/)`

# To Deploy your own Contract 
1. Create an account at [https://infura.io](https://infura.io/) and select the Ethereum network "sepolia" as the main network.

2. In the "ethereum/deploy.js" section, adjust the provider as follows:

```javascript
const provider = new HDWalletProvider(
  'Your mnemonic code',
  'Your Infura endpoint link'
);
```
3. Do the Changes that you want to do inside the Solidity File

4. Compile the Contract 
  `node compile.js`
5. Deploy Contract by going into smart-contract Directory and run.
	`node deploy.js`
	
- Copy the contract deploy address and replace it in factory.js file.
  
6. Replace your "infura end point link" in web3.js file

# Run Mocha tests and execute the program.
### Run Mocha tests
- `npm run test`

### Execute the program
- `npm run dev`