
export async function uploadFile(client, file){

    const imageFile = new File([ file ], 'nft.png', { type: 'image/png' })
    const metadata = await client.store({
    name: 'My sweet NFT',
    description: 'Just try to funge it. You can\'t do it.',
    creator: 'Jannis',
    image: imageFile
    })

    console.log(metadata)
    console.log("Upload Worked")

    return metadata.url; // maybe ipnft
}