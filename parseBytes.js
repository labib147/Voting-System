const ethers = require ('ethers');

async function parseBytes(args) {
    const bytes = args[0];       // getting name out of array
    const name = ethers.utils.parseBytes32String(bytes); //create varible called name passing in the bytes for conversion to name (Pass bytes returns strings)
    console.log("name: ",name); 
}

parseBytes (process.argv.slice(2)); // to send argunents from command line to send invocation of functions 