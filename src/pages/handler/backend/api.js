const express = require('express');
const { ethers } = require('ethers');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

const provider = new ethers.providers.JsonRpcProvider('https://seednode.mindchain.info');

const contractABI = require('./StakingContractABI.json');
const stakingContractAddress = '0x0000000000000000000000000000000000001001';
const rewardContractAddress = '0x75E218790B76654A5EdA1D0797B46cBC709136b0';

const stakingContract = new ethers.Contract(stakingContractAddress, contractABI, provider);
const rewardContractABI = require('./RewardContractABI.json');
const rewardContract = new ethers.Contract(rewardContractAddress, rewardContractABI, provider);

// Read the initial data from data.json if it exists
let validatorData = readDataFromFile('data.json') || [];

async function getValidatorData() {
  try {
    const validatorAddresses = await stakingContract.validators();
    const validatorCount = validatorAddresses.length;

    for (let i = 0; i < validatorCount; i++) {
      const validator = validatorAddresses[i];
      const stakedMind = await stakingContract._addressToStakedAmount(validator);
      const earnedReward = await rewardContract.balanceOf(validator);

      // Convert wei to Ether format
      const stakedMindInEther = ethers.utils.formatEther(stakedMind);
      const earnedRewardInEther = ethers.utils.formatEther(earnedReward);

      // Check if the validator is active or not based on your criteria
      const isActive = isValidatorActive(stakedMindInEther);

      // Find the validator's data in the existing data or create a new entry
      const existingValidatorData = validatorData.find((v) => v.validator === validator);
      if (existingValidatorData) {
        // Update existing data
        existingValidatorData.stakedMind = stakedMindInEther;
        existingValidatorData.earnedReward = earnedRewardInEther;
        existingValidatorData.status = isActive ? 'Active' : 'Inactive';
      } else {
        // Create a new entry
        validatorData.push({
          validator: validator,
          stakedMind: stakedMindInEther,
          earnedReward: earnedRewardInEther,
          status: isActive ? 'Active' : 'Inactive',
        });
      }
    }

    // Save the updated data to data.json
    saveDataToFile('data.json', validatorData);
  } catch (error) {
    console.error('Error fetching and updating validator data:', error);
  }
}

// Function to determine if a validator is active (customize this based on your criteria)
function isValidatorActive(stakedAmountInEther) {
  // Customize this logic to determine if the validator is active or not.
  // For this example, we consider validators with stakedMind > 0 as active.
  return parseFloat(stakedAmountInEther) > 0;
}

// Function to read data from a JSON file
function readDataFromFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data from file:', error);
    return null;
  }
}

// Function to save data to a JSON file
function saveDataToFile(filename, data) {
  try {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving data to file:', error);
  }
}

// Define a route to retrieve the staking data
app.get('/api/staking', async (req, res) => {
  await getValidatorData(); // Update the data before responding to the request
  res.json(validatorData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});