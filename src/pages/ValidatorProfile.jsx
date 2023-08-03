import { Avatar } from "@mui/material";
import React, { useEffect, useRef } from "react";
import InfoBox from "../components/InfoBox";
import {addressDatademo , addressData,demoData} from "./handler/valdummy"

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
        <div className="w-full hi md:w-full p-3 rounded-xl shadow-lg mt-4">
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
