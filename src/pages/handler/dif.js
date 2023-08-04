


import { ethers } from 'ethers';


const wsProvider = new ethers.providers.WebSocketProvider('wss://seednode.mindchain.info/ws');


async function getLatestDifficulty() {
  try {

    const latestBlockNumber = await wsProvider.getBlockNumber();
    
    const latestBlock = await wsProvider.getBlock(latestBlockNumber);
  
    const difficulty = latestBlock.difficulty;
    
    return difficulty;
  } catch (error) {
    console.error('Error retrieving latest difficulty:', error);
    throw error;
  }
}

export { getLatestDifficulty, wsProvider }; 

