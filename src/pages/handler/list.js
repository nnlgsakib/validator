import Web3 from 'web3';
import {abi} from '../abi/abi'

const contractAddress = '0x0000000000000000000000000000000000001001';
const web3 = new Web3('https://rpc-msc.mindchain.info/');
const contract = new web3.eth.Contract(abi, contractAddress);

async function getValidatorList() {
  const validatorList = await contract.methods.validators().call();
  return validatorList;
}

async function getStakedAmount() {
  const stakedAmount = await contract.methods.stakedAmount().call();
  return stakedAmount;
}

export { getValidatorList, getStakedAmount };

