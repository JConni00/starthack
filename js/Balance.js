import { ethers } from "ethers";

      
const getBalance = async () => {
    const [account] = await window.ethereum.request({method: 'eth_requestAccounts'})
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const balance = await provider.getBalance(account)
    const formattedBalance = ethers.utils.formatEther(balance)
    return formattedBalance;
}

export function loadBalance(){
    const balance = await getBalance();
    let s = '<div>Balance: ' + balance + '</div>'
    return s;
}