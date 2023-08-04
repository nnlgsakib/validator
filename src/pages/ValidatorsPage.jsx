import React, { useEffect, useState } from "react";
import Web3 from "web3";
import InfoBox from "../components/InfoBox";
import { FaUserAstronaut } from "react-icons/fa";
import { RiMedal2Line } from "react-icons/ri";
import { SiBitcoin } from "react-icons/si";
import { GiMining } from "react-icons/gi";
import { Avatar } from "@mui/material";
import { fakeApiData } from "./handler/fk";
import { Link } from "react-router-dom";
import {listHeaderData} from "./handler/valdummy"
import { getLatestDifficulty , wsProvider} from "./handler/dif";
import { getStakedAmount } from "./handler/getstake";
import { abi } from "./abi/chainarg";
const ValidatorsPage = () => {
  const [difficulty, setDifficulty] = useState(null);

  useEffect(() => {
    const fetchDifficulty = async () => {
      try {
        const latestDifficulty = await getLatestDifficulty();
        setDifficulty(latestDifficulty);
      } catch (error) {
        console.error('Error fetching difficulty:', error);
      }
    };

    fetchDifficulty();

    const blockListener = (blockNumber) => {
      fetchDifficulty();
    };

    // Subscribe to new block events
    wsProvider.on('block', blockListener);

    // Clean up the event listener when the component unmounts
    return () => {
      wsProvider.removeListener('block', blockListener);
    };
  }, []);

const [stakedAmount, setStakedAmount] = useState(0);

useEffect(() => {
  async function fetchStakedAmount() {
    try {
      const amount = await getStakedAmount();
      setStakedAmount(amount);
    } catch (error) {
      // Handle error
    }
  }

  fetchStakedAmount();
}, []);

const [currentRound, setCurrentRound] = useState('Loading...');
const [subscription, setSubscription] = useState(null);

useEffect(() => {
  const web3 = new Web3('wss://seednode.mindchain.info/ws');

  const contractAddress = '0x76193DE9F720c768f9605bcc5b3ACD01C70381f5';

  const contract = new web3.eth.Contract(abi, contractAddress);

  const fetchCurrentRound = async () => {
    try {
      const round = await contract.methods.getCurrentRound().call();
      setCurrentRound(round.toString());
    } catch (error) {
      console.error('Error fetching current round:', error);
      setCurrentRound('Error');
    }
  };

  // Call the function once to display the initial value
  fetchCurrentRound();

  // Subscribe to new block headers
  const newBlockSubscription = web3.eth.subscribe('newBlockHeaders', (error, result) => {
    if (!error) {
      fetchCurrentRound();
    } else {
      console.error('WebSocket error:', error);
    }
  });

 
  setSubscription(newBlockSubscription);

  // Clean up the subscription when the component unmounts
  return () => {
    if (subscription) {
      subscription.unsubscribe((error, success) => {
        if (success) {
          console.log('Unsubscribed successfully');
        } else if (error) {
          console.error('Unsubscribe error:', error);
        }
      });
    }
  };
}, []);

  // Sort the fakeApiData based on totalValidatedBlock in descending order
  const sortedFakeApiData = fakeApiData.sort(
    (a, b) => b.totalValidatedBlock - a.totalValidatedBlock
  );

  return (
    <>
      <div className="max-w-container mx-auto px-4">
        <div className="py-2 flex items-center gap-x-3">
          <h4 className="font-normal m-0 p-0">Validators </h4>{" "}
          <span className="text-[14px]">
            (Round: <span className="text-colorprimary text-">{currentRound}</span>)
          </span>{" "}
        </div>
      </div>
      <div className="mt-4 p-1 bg-[#9ae1ff]">
        <div className="max-w-container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row   justify-between flex-wrap gap-y-3 gap-x49.5">
            <div className="shining-box shadow-md bg-white w-full md:w-[49.5%] rounded-md p-3">
              <div className="flex justify-between">
                <InfoBox text="Validator" info="You are my validator" />
                <FaUserAstronaut className="text-[50px] text-colorprimary" />
              </div>
              <div className="mt-2">
                <h2 className="text-black font-bold">27/27</h2>
              </div>
            </div>
            <div className="shining-box shadow-md  bg-white w-full md:w-[49.5%] rounded-md p-3">
              <div className="flex justify-between">
                <InfoBox
                  text="Total Staked MIND"
                  info="Write your information about Staked MIND"
                />
                <img
                  src="https://i.postimg.cc/WzP0q49y/logo.png"
                  className="h-[50px] w-[50px]"
                  alt=""
                />
              </div>
              <div className="mt-2 flex items-center gap-x-2">
                <h2 className="text-black font-bold">{stakedAmount}</h2>{" "}
                <small>MIND</small>
              </div>
            </div>
            <div className="shining-box shadow-md bg-white w-full md:w-[49.5%] rounded-md p-3">
              <div className="flex justify-between">
                <InfoBox
                  text="Reward Rate"
                  info="PMIND Reward Rate for every block"
                />
                <RiMedal2Line className="h-[50px] w-[50px] text-colorprimary" />
              </div>
              <div className="mt-2 flex items-center gap-x-2">
                <h2 className="text-black font-bold">0.003</h2>{" "}
                <small>PMIND</small>
              </div>
            </div>
            <div className="shining-box shadow-md bg-white w-full md:w-[49.5%] rounded-md p-3">
              <div className="flex justify-between">
                <InfoBox
                  text="total blocks"
                  info="Current block height of MindChain"
                />
                <GiMining className="h-[50px] w-[50px] text-colorprimary" />
              </div>
              <div className="mt-2 flex items-center gap-x-2">
                <h2 className="text-black font-bold">{difficulty !== null ? <p>{difficulty.toString()}</p> : <p>Loading...</p>}</h2>{" "}
                <small>bk</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-container px-4 mx-auto mt-5 mb-5">
        <h4>Validators</h4>
        <div className="mt-4 bg rounded-lg shadow-xl w-full">
          <div className="py-2 px-3 bg-[rgb(226,243,255)] rounded-t-lg flex justify-between">
            {listHeaderData.map((item, index) => (
              <div key={index} className="w-[16.66666666667%]">
                <InfoBox text={item.name} info={item.info} />
              </div>
            ))}
          </div>
          <ul className="m-0 p-0 h-[600px] overflow-y-scroll">
            {sortedFakeApiData.map((item,index)=>(
              <li key={index} className="px-3 py-2 flex justify-between items-center">
                <div className="flex items-center text-[13px]  font-semibold text-[gray] gap-x-1 w-[16.66666666667%]">
                  <Avatar className="!w-[27px] !h-[27px]" />
                  <Link to={"/vprofile"} className="!underline text-[gray]">
                    {item.validator}
                  </Link>
                </div>
                <div className="flex flex-col gap-y-1 w-[16.66666666667%]">
                  <div className={`rounded-full w-[60px] text-center px-2 py-1 text-[10px] text-white font-bold ${item.status === "Active" ? "bg-[#00ffa6]" : "bg-[#ffaf0e]"}`}>
                    {item.status}
                  </div>
                  <div className={`rounded-full w-[60px] text-center px-2 py-1 text-[10px] text-[#989898] font-bold  ${item.status === "Active" ? "bg-[#97ffd0]" : "bg-[#ffc074]"}`}>
                    {item.status === "Active" ? "Normal" : "Queued"}
                  </div>
                </div>
                <div className="text-[13px] pl-3 font-semibold text-[gray] w-[16.66666666667%]">
                  {item.validatorHash}
                </div>
                <div className="text-[13px] pl-3 font-semibold text-[gray] w-[16.66666666667%]">
                  {item.stakedMind}
                </div>
                <div className="text-[13px] pl-3 font-semibold text-[gray] w-[16.66666666667%]">
                  {item.earnedReward}
                </div>
                <div className="text-[13px] un pl-3 font-semibold text-[gray] w-[16.66666666667%]">
                  {item.totalValidatedBlock}
                </div>
              </li>
            ))} 
          </ul>
        </div>
      </div>
    </>
  );
};

export default ValidatorsPage;
