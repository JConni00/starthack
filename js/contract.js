
      //const ethers = require('ethers')

import { ethers } from "ethers";

      
const getBalance = async () => {
    const [account] = await window.ethereum.request({method: 'eth_requestAccounts'})
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const balance = await provider.getBalance(account)
    const formattedBalance = ethers.utils.formatEther(balance)
    return formattedBalance;

}

export function contract(){
      //Create a constant to maniputale the DOM:
      const contractReturn = document.querySelector('#pp');

      const GREETER_ADDRESS = '0xE0282e76237B8eB19A5D08e1741b8b3e2691Dadd'
      const GREETER_ABI = `[{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"}]`

      async function getGreeting() {
        // Wrap the window.ethereum object injected by MetaMask with the ethers API
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Connect to the greeter contract.
        const greeterContract = new ethers.Contract(GREETER_ADDRESS, GREETER_ABI, provider);
        console.log(greeterContract)

        // Call the greet() smart contract function.
        const greeting = await greeterContract.greet();

        const balance = await getBalance();
        console.log(balance)

        // Write the greeting result to the DOM.
        contractReturn.textContent = balance;
      }
      getGreeting();

}