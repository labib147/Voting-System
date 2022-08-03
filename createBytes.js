const ethers = require ('ethers');

async function createBytes(args) {
    const name = args[0];       // getting name out of array
    const bytes = ethers.utils.formatBytes32String(name); //create varible called bytes passing in the name for conversion to bytes32 (Pass strings returns bytes)
    console.log("Bytes: ",bytes); 
}

createBytes (process.argv.slice(2)); // to send argunents from command line to send invocation of functions 