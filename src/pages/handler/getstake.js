

import Web3 from "web3"
import { contractABI } from "../abi/abi"; 


const web3 = new Web3('wss://seednode.mindchain.info/ws'); 


const contractAddress = '0x0000000000000000000000000000000000001001'; 


const contract = new web3.eth.Contract(contractABI, contractAddress);


async function getStakedAmount() {
  try {
    const result = await contract.methods.stakedAmount().call();
    return web3.utils.fromWei(result, 'ether'); 
  } catch (error) {
    console.error('Error fetching staked amount:', error);
    throw error;
  }
}

export {getStakedAmount};
