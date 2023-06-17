import React, { useEffect, useState } from "react";
import InfoBox from "../components/InfoBox";
import { FaUserAstronaut } from "react-icons/fa";
import { RiMedal2Line } from "react-icons/ri";
import { SiBitcoin } from "react-icons/si";
import { GiMining} from "react-icons/gi";
import { GrFormPreviousLink ,GrFormNextLink} from "react-icons/gr";
import { Avatar } from "@mui/material";
import ReactPaginate from "react-paginate";
import {BsThreeDots} from "react-icons/bs"
import Web3 from "web3";
import {abi} from "./abi/abi"
import { getValidatorList , getStakedAmount} from "./list";
import { getLatestDifficulty } from "./dif";
//import getValidators from "./vallist";
import { fakeApiData } from "./fk";
import { toByteArray } from 'base64-js';

let listHeaderData = [
  {
    name: "Validator",
    info: "Give more information about the validator",
  },
  {
    name: "Status",
    info: "Give more information about the status",
  },
  {
    name: "Validator Hash",
    info: "Give more information about the validator hash",
  },
  {
    name: "Staked MIND",
    info: "Give more information about the staked MIND",
  },
  {
    name: "Earned Reward",
    info: "Give more information about the earned reward",
  },
  {
    name: "Total Validated Block",
    info: "Give more information about the total validated block",
  },
];
//   fake api


// let items = []
// for (var i = 1; i <= fakeApiData.length; i++) {
//   items.push(i);
// }


  

function Items({ currentItems }) {
  const [validatorList, setValidatorList] = useState([]);

  useEffect(() => {
    async function fetchValidatorList() {
      const list = await getValidatorList();
      setValidatorList(list);
    }

    fetchValidatorList();
  }, []);
 
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <li key={index} className="px-3 py-2 flex justify-between items-center">
          <div className="flex items-center text-[13px] font-semibold text-[gray] gap-x-1 w-[16.66666666667%]">
            <Avatar className="!w-[27px] !h-[27px]" />
            {validatorList.length === 0 ? (
          <li>No validators available</li>
        ) : (
          validatorList.map((address, index) => (
            <li key={index}>{address}</li>
          ))
        )}
          </div>
          <div className="flex flex-col gap-y-1 w-[16.66666666667%]">
            <div className={` rounded-full w-[60px] text-center  px-2 py-1 text-[10px] text-white font-bold ${item.status === "Active" ? "bg-[#00ffa6]" : "bg-[#ffaf0e]"} `}>
              {item.status}
            </div>
            <div className={` rounded-full w-[60px] text-center px-2 py-1 text-[10px] text-[#989898] font-bold  ${item.status === "Active" ? "bg-[#97ffd0]" : "bg-[#ffc074]"}`}>
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
    </>
  );
}
// react pagination
function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = fakeApiData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(fakeApiData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % fakeApiData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
      containerClassName="flex justify-center items-center py-3  gap-x-5  border-t !text-colorprimary"
      // className="!no-underline flex"
        breakLabel={<BsThreeDots/>}
        nextLabel={<GrFormNextLink className="text-colorprimary"/>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={<GrFormPreviousLink className="!text-colorprimary"/>}
        renderOnZeroPageCount={null}
        pageLinkClassName="inline-block w-[30px] h-[30px]  rounded-full shadow-md no-underline flex justify-center items-center font-semibold text-colorprimary duration-300 hover:bg-colorprimary hover:text-white"
        previousClassName="page-item w-[30px] h-[30px]  rounded-full shadow-md no-underline flex justify-center items-center  !text-colorprimary duration-300 hover:bg-colorprimary  hover:!text-white"
        previousLinkClassName="page-link !text-colorprimary"
        nextClassName="page-item  w-[30px] h-[30px]  rounded-full shadow-md no-underline flex justify-center items-center  text-colorprimary duration-300 hover:bg-colorprimary  hover:text-white"
        nextLinkClassName="page-link "
        activeLinkClassName="active-link !no-underline"
        activeClassName="active"
        breakClassName=" w-[30px] h-[30px]  rounded-full shadow-md no-underline flex justify-center items-center  !text-colorprimary duration-300 hover:bg-colorprimary  hover:!text-white"
      />
    </>
  );
}

const web3 = new Web3('https://rpc-msc.mindchain.info/');
const ValidatorsPage = () => {
  const [stakedAmount, setStakedAmount] = useState(0);
  const [latestDifficulty, setLatestDifficulty] = useState(0);


  useEffect(() => {
    const fetchStakedAmount = async () => {
      const amountInWei = await getStakedAmount();
      const amountInEther = web3.utils.fromWei(amountInWei, 'ether');
      setStakedAmount(amountInEther);
    };

    fetchStakedAmount();
  }, []);
  useEffect(() => {
    const fetchLatestDifficulty = async () => {
      const difficulty = await getLatestDifficulty();
      setLatestDifficulty(difficulty);
    };
  
    fetchLatestDifficulty();
  }, []);
  
  
  

  return (
    <>
      <div className="max-w-container mx-auto px-4">
        <div className="py-2 flex items-center gap-x-3">
          <h4 className="font-normal m-0 p-0">Validators </h4>{" "}
          <span className="text-[14px]">
            (Round: <span className="text-colorprimary text-">21563</span>)
          </span>{" "}
        </div>
      </div>
      {/* 4 box start */}
      <div className="mt-4 p-1 bg-[#9ae1ff]">
        <div className="max-w-container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row   justify-between flex-wrap gap-y-3 gap-x49.5">
            <div className="shining-box shadow-md bg-white w-full md:w-[49.5%] rounded-md p-3">
              <div className="flex justify-between">
                <InfoBox text="Validator" info="You are my validator" />
                <FaUserAstronaut className="text-[50px] text-colorprimary" />
              </div>
              <div className="mt-2">
                <h2 className="text-black font-bold">7/1000</h2>
              </div>
            </div>

            <div className="shining-box shadow-md  bg-white w-full md:w-[49.5%] rounded-md p-3">
              <div className="flex justify-between">
                <InfoBox
                  text="Total Staked MIND"
                  info="Write you information about Staked MIND"
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
                  info="Write you information about Reward Rate"
                />
                <RiMedal2Line className="h-[50px] w-[50px] text-colorprimary" />
              </div>
              <div className="mt-2 flex items-center gap-x-2">
                <h2 className="text-black font-bold">6</h2>{" "}
                <small>PMIND per Block</small>
              </div>
            </div>

            <div className="shining-box shadow-md bg-white w-full md:w-[49.5%] rounded-md p-3">
              <div className="flex justify-between">
                <InfoBox
                  text="Total Difficulties"
                  info="Write you information about Total Difficulties"
                />
                <GiMining className="h-[50px] w-[50px] text-colorprimary" />
              </div>
              <div className="mt-2 flex items-center gap-x-2">
                <h2 className="text-black font-bold">{latestDifficulty}</h2>{" "}
                <small>EH/s</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4 box end */}
      {/* validator list start */}
      <div className="max-w-container px-4 mx-auto mt-5 mb-5">
        <h4>Validators</h4>
        <div className="mt-4 bg  rounded-lg shadow-xl w-full">
          {/* list header start */}
          <div className="py-2 px-3 bg-[rgb(226,243,255)] rounded-t-lg flex justify-between">
            {listHeaderData.map((item, index) => (
              <div  key={index} className=" w-[16.66666666667%]">
                <InfoBox text={item.name} info={item.info} />
              </div>
            ))}
          </div>
          {/* list header end */}
          {/* list body start */}
          <ul className="m-0 p-0  overflow-y-scroll">
          <PaginatedItems itemsPerPage={8} />
            {/* {fakeApiData.map((item, index) => (
              <li className="px-3 py-2 flex justify-between items-center">
                <div className="flex items-center text-[13px] font-semibold text-[gray] gap-x-1 w-[16.66666666667%]">
                  <Avatar className="!w-[27px] !h-[27px]" />
                  {item.validator}
                </div>
                <div className="flex flex-col gap-y-1 w-[16.66666666667%]">
                  <div className={` rounded-full w-[60px] text-center  px-2 py-1 text-[10px] text-white font-bold ${item.status === "Active" ? "bg-[#00ffa6]" : "bg-[#ffaf0e]"} `}>
                    {item.status}
                  </div>
                  <div className={` rounded-full w-[60px] text-center px-2 py-1 text-[10px] text-[#989898] font-bold  ${item.status === "Active" ? "bg-[#97ffd0]" : "bg-[#ffc074]"}`}>
                    {item.status === "Active" ? "Normal" : "Queued"}
                  </div>
                </div>
                <div className="text-[13px] font-semibold text-[gray] w-[16.66666666667%]">
                  {item.validatorHash}
                </div>
                <div className="text-[13px] font-semibold text-[gray] w-[16.66666666667%]">
                  {item.stakedMind}
                </div>
                <div className="text-[13px] font-semibold text-[gray] w-[16.66666666667%]">
                  {item.earnedReward}
                </div>
                <div className="text-[13px] font-semibold text-[gray] w-[16.66666666667%]">
                  {item.totalValidatedBlock}
                </div>
              </li>
            ))} */}
          </ul>
          {/* list body end */}
        </div>
      </div>
      {/* validator list end */}
    </>
  );
};


export default ValidatorsPage; 
