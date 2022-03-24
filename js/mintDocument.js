import { ethers } from "ethers"

/**
 * Mints a document but involves Paying for the minting
 * -> i think one can leave it out and change the contract to eliminate that!
 * 
 * @param {*} contract 
 * @param {*} signer 
 * @param {*} metadataURI 
 * @returns 
 */

export async function mintDocument(contract, signer, metadataURI){
    const connection = contract.connect(signer)
    const addr = connection.address
    const result = await contract.payToMint(addr, metadataURI, {
        value: ethers.utils.parseEther('0.05')
    })

    await result.wait()
    return result;
}