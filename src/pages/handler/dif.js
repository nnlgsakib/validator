//import Web3 from 'web3';

/*const web3 = new Web3('https://rpc-msc.mindchain.info/'); 

async function getLatestDifficulty() {
  const latestBlock = await web3.eth.getBlock('latest');
  const difficulty = latestBlock.difficulty;
  return difficulty;
}

export { getLatestDifficulty };**/


// Import ethers from the node_modules folder
import {ethers} from 'ethers';

// Create a JsonRpcProvider instance with the URL
const rpc = new ethers.providers.JsonRpcProvider('https://rpc-msc.mindchain.info/');

// Define an async function to get the latest difficulty
async function getLatestDifficulty() {
  try {
    // Get the latest block number from the provider
    const latestBlockNumber = await rpc.getBlockNumber();
    // Get the block details from the provider
    const latestBlock = await rpc.getBlock(latestBlockNumber);
    // Extract the difficulty from the block
    const difficulty = latestBlock.difficulty;
    // Return the difficulty
    return difficulty;
  } catch (error) {
    // Log and rethrow the error
    console.error('Error retrieving latest difficulty:', error);
    throw error;
  }
}

// Export the function as a module
export { getLatestDifficulty };
