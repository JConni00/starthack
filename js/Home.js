import {ethers} from 'ethers';
import { NFTStorage } from 'nft.storage';
import StartCertificates from '../artifacts/contracts/MintingContract.sol/StartCertificates.json'
import { imgData } from './imgData';
import { mintDocument } from './mintDocument';
import { uploadFile } from './upload';

// very ugly
export function loadHome(){
    document.querySelector('#app').innerHTML = '<div><button id="mint">MINT</button></div><div><button id="upload">Upload</div>' // creates buttons

    // credentials for uploading to ifsp
    const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVkNDEyQTRmRjQ5ZTFEODJFNzU2M0YzZjRiYzIwMmRkZTFhMDMwNDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODA3OTE1NTgxMSwibmFtZSI6IlN0YXJ0In0.xJal4dSGHdNFUjbkzsVPHQY7tbJnmzvKw22BlIwP2ZQ'
    const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

    const contactAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3' // this is a locally deployed smart contract
    // Tutorial: https://youtu.be/meTpMP0J5E8?t=917
    // i just changed it -> transformed to vanilla js to later make it work with other backend maybe and simplify it for our use-case

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // gets end user
    const signer = provider.getSigner();

    // get smart contract
    const contract = new ethers.Contract(contactAddress, StartCertificates.abi, signer)

    document.getElementById("mint").addEventListener("click", async () => {

        const metadataURI = uploadFile(client, imgData); // uploads file to get metadataURI

        const result = await mintDocument(contract, signer, metadataURI); // mints document
        console.log(result)
    })

    document.getElementById("upload").addEventListener("click", () => {
        console.log("Upload started")
        uploadFile(client, imgData)
    })

}