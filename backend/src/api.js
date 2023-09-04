// const express = require('express');
// const { ethers } = require('ethers');
// const fs = require('fs');
// const app = express();
// const port = process.env.PORT || 3000;

// const provider = new ethers.providers.JsonRpcProvider('https://seednode.mindchain.info');

// const contractABI = require('./StakingContractABI.json');
// const stakingContractAddress = '0x0000000000000000000000000000000000001001';
// const rewardContractAddress = '0x75E218790B76654A5EdA1D0797B46cBC709136b0';

// const stakingContract = new ethers.Contract(stakingContractAddress, contractABI, provider);
// const rewardContractABI = require('./RewardContractABI.json');
// const rewardContract = new ethers.Contract(rewardContractAddress, rewardContractABI, provider);

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// let validatorData = readDataFromFile('data.json') || [];

// async function getValidatorData() {
//   try {
//     const validatorAddresses = await stakingContract.validators();
//     const validatorCount = validatorAddresses.length;

//     for (let i = 0; i < validatorCount; i++) {
//       const validator = validatorAddresses[i];
//       const stakedMind = await stakingContract._addressToStakedAmount(validator);
//       const earnedReward = await rewardContract.balanceOf(validator);

//       const stakedMindInEther = ethers.utils.formatEther(stakedMind);
//       const earnedRewardInEther = ethers.utils.formatEther(earnedReward);

//       const isActive = isValidatorActive(stakedMindInEther);

//       const existingValidatorData = validatorData.find((v) => v.validator === validator);
//       if (existingValidatorData) {
//         existingValidatorData.stakedMind = stakedMindInEther;
//         existingValidatorData.earnedReward = earnedRewardInEther;
//         existingValidatorData.status = isActive ? 'Active' : 'Inactive';
//       } else {
//         validatorData.push({
//           validator: validator,
//           stakedMind: stakedMindInEther,
//           earnedReward: earnedRewardInEther,
//           status: isActive ? 'Active' : 'Inactive',
//         });
//       }
//     }

//     saveDataToFile('data.json', validatorData);
//   } catch (error) {
//     console.error('Error fetching and updating validator data:', error);
//   }
// }

// function isValidatorActive(stakedAmountInEther) {
//   return parseFloat(stakedAmountInEther) > 0;
// }

// function readDataFromFile(filename) {
//   try {
//     const data = fs.readFileSync(filename, 'utf8');
//     return JSON.parse(data);
//   } catch (error) {
//     console.error('Error reading data from file:', error);
//     return null;
//   }
// }

// function saveDataToFile(filename, data) {
//   try {
//     fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf8');
//   } catch (error) {
//     console.error('Error saving data to file:', error);
//   }
// }

// app.get('/api/staking', async (req, res) => {
//   await getValidatorData();
//   res.json(validatorData);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require('express');
const { ethers } = require('ethers');
const WebSocket = require('websocket').w3cwebsocket;
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

const wsProvider = new ethers.providers.WebSocketProvider('wss://seednode.mindchain.info/ws'); // Replace with your WebSocket URL

const contractABI = require('./StakingContractABI.json');
const stakingContractAddress = '0x0000000000000000000000000000000000001001';
const rewardContractAddress = '0x75E218790B76654A5EdA1D0797B46cBC709136b0';

const stakingContract = new ethers.Contract(stakingContractAddress, contractABI, wsProvider);
const rewardContractABI = require('./RewardContractABI.json');
const rewardContract = new ethers.Contract(rewardContractAddress, rewardContractABI, wsProvider);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //http://localhost:5173
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

let validatorData = /*readDataFromFile*/('') || [];

async function getValidatorData() {
  try {
    const validatorAddresses = await stakingContract.validators();
    const validatorCount = validatorAddresses.length;

    const validatorPromises = validatorAddresses.map(async (validator) => {
      const stakedMind = await stakingContract._addressToStakedAmount(validator);
      const earnedReward = await rewardContract.balanceOf(validator);

      const stakedMindInEther = ethers.utils.formatEther(stakedMind);
      const earnedRewardInEther = ethers.utils.formatEther(earnedReward);

      const isActive = isValidatorActive(stakedMindInEther);

      return {
        validator: validator,
        stakedMind: stakedMindInEther,
        earnedReward: earnedRewardInEther,
        status: isActive ? 'Active' : 'Inactive',
      };
    });

    const validatorDataArray = await Promise.all(validatorPromises);

    validatorData = validatorDataArray.reduce((acc, val) => {
      const existingDataIndex = acc.findIndex((v) => v.validator === val.validator);
      if (existingDataIndex !== -1) {
        acc[existingDataIndex] = val;
      } else {
        acc.push(val);
      }
      return acc;
    }, []);

    saveDataToFile('data.json', validatorData);
  } catch (error) {
    console.error('Error fetching and updating validator data:', error);
  }
}

function isValidatorActive(stakedAmountInEther) {
  return parseFloat(stakedAmountInEther) > 0;
}

function readDataFromFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data from file:', error);
    return null;
  }
}

function saveDataToFile(filename, data) {
  try {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving data to file:', error);
  }
}

app.get('/api/staking', async (req, res) => {
  await getValidatorData();
  res.json(validatorData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
