import React from "react";

const StackingDapp = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <img
          src="https://i.postimg.cc/3wZpv9HX/giphy.gif"
          alt="GIF"
          className="w-full h-full absolute z-[-1] bg-fixed"
        />
        <div className="w-full h-full absolute bg-[#030a24] opacity-80 z-9999 ">
        </div>
         <div className="w-full h-full absolute z-99999 p-7">
         <h1 className="text-[20px]  flex font-bold md:text-[40px] lg:text-[60px] text-white uppercase items-center animate-letter-spacing">
            <img
              src="https://i.postimg.cc/WzP0q49y/logo.png"
              className="mr-[10px] mt-[20px]  animate-bounce w-[40px] h-auto md:w-[70px] "
              alt=""
            />
            MIND CHAIN STAKING DAPP{" "}
          </h1>

          <div className="md:flex justify-between mt-8">
            <div className="bg-white w-full md:w-[49%] opacity-80 p-5 rounded-lg">
              <p className="font-bold text-base md:text-[20px] text-[#333]">
                Account:
              </p>
              <p className="font-bold text-base md:text-[20px] mt-3 text-[#333]">
                Staked Amount: 0 MIND
              </p>
              <div className="flex mt-5 gap-x-4 ml-[-5px]">
                <button class="custom-btn btn-12">
                  <span>Click!</span>
                  <span>Connect Wallet</span>
                </button>
                <button class="custom-btn btn-12">
                  <span>Click!</span>
                  <span>Register as Validator</span>
                </button>
              </div>
              <p className="font-bold text-base md:text-[20px] mt-3 text-[#333]">
                Staking
              </p>
            </div>
            <div className="bg-white w-full md:w-[49%] opacity-80 p-5 rounded-lg mt-5 md:mt-0">
              <p className="font-bold text-base md:text-[20px] text-[#333]">
                Stake MIND tokens to become a validator
              </p>

              <div className="flex mt-5 gap-x-4 ml-[-5px]">
                <button class="custom-btn btn-12">
                  <span>Click!</span>
                  <span>Stake 10000 MIND</span>
                </button>
                <button class="custom-btn btn-12">
                  <span>Click!</span>
                  <span>Stake 10000 MIND</span>
                </button>
              </div>
              <p className="font-bold text-base md:text-[20px] mt-3 text-[#333]">
                Validators
              </p>
            </div>
          </div>
         </div>
      </div>

      <style>
        {`
          @keyframes letterSpacingAnimation {
            0% {
              letter-spacing: -30px;
              opacity: 0;
            }
            10%{
                opacity: 0;
            }
            50% {
              letter-spacing: 10px;
              opacity: 1;
            }
            100% {
              letter-spacing: 0px;
              opacity: 1;
            }
          }

          @keyframes coinAnimation {
            10%{
                transform: translateY(0px);
            }
            20%{
                transform: translateY(-10px);
            }
            30%{
                transform: translateY(0);
            }
            40%{
                transform: translateY(-10px);
            }
            50%{
                transform: translateY(0);
            }
            60%{
                transform: translateY(-10px);
            }
            70%{
                transform: translateY(0);
            }
            80%{
                transform: translateY(-10px);
            }
            90%{
                transform: translateY(0);
            }
            100% {
                transform: translateY(-10px);
            }
          }

          .animate-letter-spacing {
            animation: letterSpacingAnimation 3s ease-in-out alternate ;
          }

          .animate-coin {
            animation: coinAnimation 2s ease-in-out infinity;
            animation-delay: 3s; /* Delay the coin animation to synchronize with the letter spacing animation */
            animation-fill-mode: both;
          }
          .glass-background {
            background-color:#fff; /* Adjust the opacity as needed */
            
          }
          .custom-btn {
            width: 180px;
            height: 40px;
            color: #fff;
            border-radius: 5px;
            padding: 10px 25px;
            font-family: 'Lato', sans-serif;
            font-weight: 500;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
             box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
             7px 7px 20px 0px rgba(0,0,0,.1),
             4px 4px 5px 0px rgba(0,0,0,.1);
            outline: none;
          }
          .btn-12{
            position: relative;
            right: 20px;
            bottom: 20px;
            border:none;
            box-shadow: none;
            width: 180px;
            height: 40px;
            line-height: 42px;
            -webkit-perspective: 230px;
            perspective: 230px;
          }
          .btn-12 span {
            background: rgb(0,172,238);
          background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
            display: block;
            position: absolute;
            width: 180px;
            height: 40px;
            box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
             7px 7px 20px 0px rgba(0,0,0,.1),
             4px 4px 5px 0px rgba(0,0,0,.1);
            border-radius: 5px;
            margin:0;
            text-align: center;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-transition: all .3s;
            transition: all .3s;
          }
          .btn-12 span:nth-child(1) {
            box-shadow:
             -7px -7px 20px 0px #fff9,
             -4px -4px 5px 0px #fff9,
             7px 7px 20px 0px #0002,
             4px 4px 5px 0px #0001;
            -webkit-transform: rotateX(90deg);
            -moz-transform: rotateX(90deg);
            transform: rotateX(90deg);
            -webkit-transform-origin: 50% 50% -20px;
            -moz-transform-origin: 50% 50% -20px;
            transform-origin: 50% 50% -20px;
          }
          .btn-12 span:nth-child(2) {
            -webkit-transform: rotateX(0deg);
            -moz-transform: rotateX(0deg);
            transform: rotateX(0deg);
            -webkit-transform-origin: 50% 50% -20px;
            -moz-transform-origin: 50% 50% -20px;
            transform-origin: 50% 50% -20px;
          }
          .btn-12:hover span:nth-child(1) {
            box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
             7px 7px 20px 0px rgba(0,0,0,.1),
             4px 4px 5px 0px rgba(0,0,0,.1);
            -webkit-transform: rotateX(0deg);
            -moz-transform: rotateX(0deg);
            transform: rotateX(0deg);
          }
          .btn-12:hover span:nth-child(2) {
            box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
             7px 7px 20px 0px rgba(0,0,0,.1),
             4px 4px 5px 0px rgba(0,0,0,.1);
           color: transparent;
            -webkit-transform: rotateX(-90deg);
            -moz-transform: rotateX(-90deg);
            transform: rotateX(-90deg);
          }
          
        `}
      </style>
    </>
  );
};

export default StackingDapp;
