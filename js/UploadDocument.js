import {ethers} from 'ethers';
import StartCertificates from '../artifacts/contracts/StartCertificates.sol/StartCertificates.json'


export function initDocumentUpload(){

    const contactAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

    const provider = new ethers.providers.Web3Provider();

    // gets end user
    const signer = provider.getSigner();

    // get smart contract
    const contract = new ethers.Contract(contactAddress, StartCertificates.abi, signer)


    
}
