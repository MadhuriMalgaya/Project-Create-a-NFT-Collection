// Step 1: Create a variable to hold your NFTs
let nfts = [];

// Step 2: Define the mintNFT function
function mintNFT(name, father_name, age, profession) {
    // Create an NFT object using the parameters passed to it for its metadata
    let data = {
        name: name,
        father_name: father_name,
        age: age,
        profession: profession
    };
    
    // Store the NFT object in the nfts array
    nfts.push(data);
}

// Step 3: Define the listNFTs function
function listNFTs() {
    // Loop through the array of NFTs and print their metadata
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("Father Name: " + nfts[i].father_name);
        console.log("AGE: " + nfts[i].age);
        console.log("Profession: " + nfts[i].profession);
        console.log("--------------------");
    }
}

// Step 4: Define the getTotalSupply function
function getTotalSupply() {
    // Return the number of NFTs in the array
    return nfts.length;
}

// Step 5: Call your functions below this line

// Mint a few NFTs
mintNFT("Madhuri", "Dinesh", 20, "I am a College Student");
mintNFT("Minu", "Shivam", 21, "I am a Doctor");
mintNFT("Shivi", "Ritik", 23, "I am a Housewife");

// List all the NFTs
listNFTs();

// Print the total number of NFTs minted
console.log("Total Supply: " + getTotalSupply());
