import React from 'react';
import { GadsElipse } from '../../../assets/images';
import LineProgressBar from '../../utilities/ProgressBar/LineProgressBar';

function GadsCard() {
  return (
    <div className="bg-pri10 text-black2 rounded-[7px] flex items-center justify-between px-4 py-2">
      <div className="">
        <div className="flex justify-between">
          <GadsElipse styling="mr-5 " />
          <div className="w-full">
            <p className="font-[400] text-[16px] text-black1">
              GADS Program 2022
            </p>
            <div className="flex w-full items-center">
              <p className="text-[#4D4D4D] text-[400] text-[10px] mr-2">50%</p>
              <LineProgressBar
                value={50}
                color="bg-pri3"
                borderColor="border-pri3 bg-pri10"
              />
            </div>
          </div>
        </div>

        <p className="font-[400] text-[#4D4D4D] text-[10px] mt-[7px]">
          Jun 13, 2022 -&gt; Feb 10, 2023
        </p>
      </div>
    </div>
  );
}

export default GadsCard;
