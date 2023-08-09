import Web3 from "web3";
import { contractABI } from "../abi/abi"; 

const ethereumNodeUrl = "https://rpc-msc.mindchain.info/"; 
const contractAddress = "0x0000000000000000000000000000000000001001"; 

class ContractInteraction {
  constructor() {
    this.web3 = new Web3(ethereumNodeUrl);
    this.contract = new this.web3.eth.Contract(contractABI, contractAddress);
  }

  async getTotalValidatorsCount() {
    const validatorsArray = await this.contract.methods.validators().call();
    const totalValidatorsCount = validatorsArray.length;

    return totalValidatorsCount;
  }
}

export default ContractInteraction;