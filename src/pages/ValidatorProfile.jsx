import { Avatar } from "@mui/material";
import React, { useEffect, useRef } from "react";
import InfoBox from "../components/InfoBox";

let demoData = [
  {
    dataName: "Realtime MIND",
    dataVal: "2,506,82MIND",
    aboutdata: "give your explaination",
  },
  {
    dataName: "Realtimee Hash",
    dataVal: "14Bitcoin Blocks",
    aboutdata: "give your explaination",
  },
  {
    dataName: "MIND Delegate",
    dataVal: "1,537,025MIND",
    aboutdata: "give your explaination",
  },
  {
    dataName: "Hash Delegate",
    dataVal: "8Bitcoin Blocks",
    aboutdata: "give your explaination",
  },
  {
    dataName: "Margin",
    dataVal: "10,000MIND",
    aboutdata: "give your explaination",
  },
  {
    dataName: "Commission",
    dataVal: "10%",
    aboutdata: "give your explaination",
  },
  {
    dataName: "Reward Rate",
    dataVal: "18.77%",
    aboutdata: "give your explaination",
  },
  {
    dataName: "Status",
    dataVal: "Active",
    aboutdata: "give your explaination",
  },
  {
    dataName: "MIND Delegators",
    dataVal: "43,102",
    aboutdata: null,
  },
  {
    dataName: "Hash Delegators",
    dataVal: "9",
    aboutdata: null,
  },
  {
    dataName: "Operator Address",
    dataVal: "0x64dB24a662e20bBdF72d1Cc6E973DbB2D12897D5",
    aboutdata: null,
  },
  {
    dataName: "Consensus Address",
    dataVal: "0x613b0F519aDA008CB99B6130E89122BA416Bf159",
    aboutdata: null,
  },
  {
    dataName: "Fee Address",
    dataVal: "0xB8cd2702b44efb5FB93299C68C38737bf0D124AB",
    aboutdata: null,
  },
];

const addressData = [
  {
    address: "0x06b94520356ea867cd11d42809c7f1a2d3a15cff",
    amount: "1,000,000CORE",
  },
  {
    address: "0x8905b2a5e2b6e51ad73ee17a53eda5ce8daa3b4b",
    amount: "30,247CORE",
  },
  {
    address: "0x0ac7552d407ce9da665b4a67bfb6f2feabf9288e",
    amount: "13,143.3CORE",
  },
  {
    address: "0x07a961d1d52377643daa778325a4e48d226f2885",
    amount: "11,745.42CORE",
  },
  {
    address: "0x91ba25d5d1f6294f612a77564ca0941ad50b616d",
    amount: "11,486CORE",
  },
  {
    address: "0x06b94520356ea867cd11d42809c7f1a2d3a15cff",
    amount: "1,000,000CORE",
  },
  {
    address: "0x8905b2a5e2b6e51ad73ee17a53eda5ce8daa3b4b",
    amount: "30,247CORE",
  },
  {
    address: "0x0ac7552d407ce9da665b4a67bfb6f2feabf9288e",
    amount: "13,143.3CORE",
  },
  {
    address: "0x07a961d1d52377643daa778325a4e48d226f2885",
    amount: "11,745.42CORE",
  },
  {
    address: "0x91ba25d5d1f6294f612a77564ca0941ad50b616d",
    amount: "11,486CORE",
  },
  {
    address: "0x9e0bf9dbb8080ba059a3e9ec3b07e0de30f67dd0",
    amount: "10,599CORE",
  },
  {
    address: "0x0220e642bbf58e0300b93eedf83be50d6d52e1eb",
    amount: "10,500CORE",
  },
  {
    address: "0x954c678bfe1391b26ce771d8cba091ee82dcec37",
    amount: "10,075CORE",
  },
  {
    address: "0x69ed68e73c57c853dd093811862326c4256c0ba9",
    amount: "9,000CORE",
  },

  {
    address: "0x9e0bf9dbb8080ba059a3e9ec3b07e0de30f67dd0",
    amount: "10,599CORE",
  },
  {
    address: "0x0220e642bbf58e0300b93eedf83be50d6d52e1eb",
    amount: "10,500CORE",
  },
  {
    address: "0x954c678bfe1391b26ce771d8cba091ee82dcec37",
    amount: "10,075CORE",
  },
  {
    address: "0x69ed68e73c57c853dd093811862326c4256c0ba9",
    amount: "9,000CORE",
  },
  {
    address: "0x06b94520356ea867cd11d42809c7f1a2d3a15cff",
    amount: "1,000,000CORE",
  },
  {
    address: "0x8905b2a5e2b6e51ad73ee17a53eda5ce8daa3b4b",
    amount: "30,247CORE",
  },
  {
    address: "0x0ac7552d407ce9da665b4a67bfb6f2feabf9288e",
    amount: "13,143.3CORE",
  },
  {
    address: "0x07a961d1d52377643daa778325a4e48d226f2885",
    amount: "11,745.42CORE",
  },
  {
    address: "0x91ba25d5d1f6294f612a77564ca0941ad50b616d",
    amount: "11,486CORE",
  },
  {
    address: "0x9e0bf9dbb8080ba059a3e9ec3b07e0de30f67dd0",
    amount: "10,599CORE",
  },
  {
    address: "0x0220e642bbf58e0300b93eedf83be50d6d52e1eb",
    amount: "10,500CORE",
  },
  {
    address: "0x954c678bfe1391b26ce771d8cba091ee82dcec37",
    amount: "10,075CORE",
  },
  {
    address: "0x69ed68e73c57c853dd093811862326c4256c0ba9",
    amount: "9,000CORE",
  },
  {
    address: "0xbbee686b58befea053f08fe109c06a6c04d15170",
    amount: "7,601.7CORE",
  },
  {
    address: "0x2030659f285888fcca010dd06a0fc3ae63b97afc",
    amount: "6,825CORE",
  },
  {
    address: "0x76ea5ac80263eabadc8f5622559db803aa944537",
    amount: "5,901.1CORE",
  },
  {
    address: "0x0ada287aaf44572f22cabff8660213cbabdd676c",
    amount: "5,505.85CORE",
  },
  {
    address: "0x04250c741df290467119fde89eaddaea0c5f5d0f",
    amount: "5,109CORE",
  },
  {
    address: "0x7e26b3f832c172be6277257b4bd081823632cb1a",
    amount: "5,000CORE",
  },
  {
    address: "0xca78ea9b20e3c47e6cbdb1d1bbadc649947bde18",
    amount: "4,985.7918CORE",
  },
];
const addressDatademo = [
  {
    "address": "0x5144295b2acba77654c417d2179479861019acb9",
    "type": "Delegate",
    "time": "2023-08-01 14:01",
    "amount": "1CORE"
  },
  {
    "address": "0x6a94d722f3642868a4ddecedc8bfc5737111d620",
    "type": "Undelegate",
    "time": "2023-08-01 13:56",
    "amount": "13CORE"
  },
  {
    "address": "0x50d06b71b3bdd18b9f1bbcbe406fb8b2ab252d44",
    "type": "Undelegate",
    "time": "2023-08-01 13:45",
    "amount": "50CORE"
  },
  // ... 27 more objects ...
  {
    "address": "0x4925d2f841896fa47c2e5d03367d6ac4a8c434c5",
    "type": "Delegate",
    "time": "2023-08-01 11:15",
    "amount": "7CORE"
  },
  {
    "address": "0x81c8f853489c4e1677cfb60a854b50974c45a8d9",
    "type": "Undelegate",
    "time": "2023-08-01 10:59",
    "amount": "12CORE"
  },
  {
    "address": "0x5144295b2acba77654c417d2179479861019acb9",
    "type": "Delegate",
    "time": "2023-08-01 14:01",
    "amount": "1CORE"
  },
  {
    "address": "0x6a94d722f3642868a4ddecedc8bfc5737111d620",
    "type": "Undelegate",
    "time": "2023-08-01 13:56",
    "amount": "13CORE"
  },
  {
    "address": "0x50d06b71b3bdd18b9f1bbcbe406fb8b2ab252d44",
    "type": "Undelegate",
    "time": "2023-08-01 13:45",
    "amount": "50CORE"
  },
  // ... 27 more objects ...
  {
    "address": "0x4925d2f841896fa47c2e5d03367d6ac4a8c434c5",
    "type": "Delegate",
    "time": "2023-08-01 11:15",
    "amount": "7CORE"
  },
  {
    "address": "0x81c8f853489c4e1677cfb60a854b50974c45a8d9",
    "type": "Undelegate",
    "time": "2023-08-01 10:59",
    "amount": "12CORE"
  },

  {
    "address": "0x5144295b2acba77654c417d2179479861019acb9",
    "type": "Delegate",
    "time": "2023-08-01 14:01",
    "amount": "1CORE"
  },
  {
    "address": "0x6a94d722f3642868a4ddecedc8bfc5737111d620",
    "type": "Undelegate",
    "time": "2023-08-01 13:56",
    "amount": "13CORE"
  },
  {
    "address": "0x50d06b71b3bdd18b9f1bbcbe406fb8b2ab252d44",
    "type": "Undelegate",
    "time": "2023-08-01 13:45",
    "amount": "50CORE"
  },
  // ... 27 more objects ...
  {
    "address": "0x4925d2f841896fa47c2e5d03367d6ac4a8c434c5",
    "type": "Delegate",
    "time": "2023-08-01 11:15",
    "amount": "7CORE"
  },
  {
    "address": "0x81c8f853489c4e1677cfb60a854b50974c45a8d9",
    "type": "Undelegate",
    "time": "2023-08-01 10:59",
    "amount": "12CORE"
  },
  {
    "address": "0x5144295b2acba77654c417d2179479861019acb9",
    "type": "Delegate",
    "time": "2023-08-01 14:01",
    "amount": "1CORE"
  },
  {
    "address": "0x6a94d722f3642868a4ddecedc8bfc5737111d620",
    "type": "Undelegate",
    "time": "2023-08-01 13:56",
    "amount": "13CORE"
  },
  {
    "address": "0x50d06b71b3bdd18b9f1bbcbe406fb8b2ab252d44",
    "type": "Undelegate",
    "time": "2023-08-01 13:45",
    "amount": "50CORE"
  },
  // ... 27 more objects ...
  {
    "address": "0x4925d2f841896fa47c2e5d03367d6ac4a8c434c5",
    "type": "Delegate",
    "time": "2023-08-01 11:15",
    "amount": "7CORE"
  },
  {
    "address": "0x81c8f853489c4e1677cfb60a854b50974c45a8d9",
    "type": "Undelegate",
    "time": "2023-08-01 10:59",
    "amount": "12CORE"
  }
];

const ValidatorProfile = () => {
  const sortedAddressData = addressData
    .slice()
    .sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
  return (
    <>
      <div className="container font-lato mt-3">
        <div className="flex items-center gap-x-3">
          {" "}
          <Avatar className="!w-[50px] !h-[50px]" />
          <h3 className="!m-0 !p-0">Dao Mining Pool</h3> <br />
        </div>
        <div className="py-[8px] ml-[63px] px-[20px] text-white rounded-md duration-300 inline-block mt-3 hover:bg-black hover:text bg-colorprimary font-bold cursor-pointer">
          Stake Now
        </div>

        {/* content starts */}
        <div className="flex my  flex-col md:flex-row gap-y-5 md:gap-x-3 mt-4 ">
          <div className="w-full md:w-[40%] p-3 rounded-xl shadow-lg">
            {demoData.map((item, index) => (
              <div className="mt-3">
                <InfoBox text={item.dataName} info={item.aboutdata} />
                {item.dataName === "Status" ? (
                  <div className="flex  gap-x-1 w-[46.66666666667%] mt-2 ">
                    <div
                      className={`rounded-full w-[60px] text-center px-2 py-1 text-[10px] text-white font-bold ${
                        item.dataVal === "Active"
                          ? "bg-[#00ffa6]"
                          : "bg-[#ffaf0e]"
                      }`}
                    >
                      {item.dataVal}
                    </div>
                    <div
                      className={`rounded-full w-[60px] text-center px-2 py-1 text-[10px] text-[#989898] font-bold  ${
                        item.dataVal === "Active"
                          ? "bg-[#97ffd0]"
                          : "bg-[#ffc074]"
                      }`}
                    >
                      {item.dataVal === "Active" ? "Normal" : "Queued"}
                    </div>
                  </div>
                ) : (
                  <div className="font-bold ">{item.dataVal}</div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full md:w-[60%] p-3 rounded-xl shadow-lg ">
            <div className="border-b">
              <h5>Stackers MIND</h5>
            </div>
            <div className="flex justify-between py-2 border-b">
              <p className="m-0 font-semibold text-[gray] ">Address</p>
              <p className="m-0 font-semibold text-[gray]  ">Amount</p>
            </div>
            <div className="md:h-[799px] overflow-y-scroll w-full">
              {sortedAddressData.map((item) => (
                <div className="flex justify-between py-2 border-b hover:bg-[#dddddd] duration-200">
                  <p className="m-0  text-[gray] ">{item.address}</p>
                  <p className="m-0  text-[gray]  ">{item.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full mt-5 md:w-full p-3 rounded-xl shadow-lg mt-4">
          <div className="border-b">
            <h5>MIND Records</h5>
          </div>
          <div className="flex justify-between py-2 border-b hover:bg-[#dddddd] duration-200">
            <p className="m-0 w-[25%]  text-center  font-semibold text-[gray]">Address</p>
            <p className="m-0 w-[25%]  text-center font-semibold text-[gray]">Type</p>
            <p className="m-0  w-[25%] text-center font-semibold text-[gray]">Time</p>
            <p className="m-0 w-[25%]  text-center font-semibold text-[gray]">Amount</p>
          </div>
          <div className="h-[600px] overflow-y-scroll w-full">
            {addressDatademo.map((item) => (
              <div
                className="flex justify-between py-2 border-b hover:bg-[#dddddd] duration-200"
                key={item.address}
              >
                <p className="m-0 w-[25%] text-[gray] text-center">{item.address.slice(0,20)}...</p>
                <p className="m-0 w-[25%] text-[gray] text-center">{item.type}</p>
                <p className="m-0 w-[25%] text-[gray] text-center">{item.time}</p>
                <p className="m-0 w-[25%] text-[gray] text-center">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidatorProfile;
