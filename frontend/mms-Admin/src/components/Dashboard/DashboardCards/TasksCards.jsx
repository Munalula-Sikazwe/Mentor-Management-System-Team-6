import React from 'react';
import { CalenderIcon, TaskIcon } from '../../../assets/images';

function TasksCards() {
  return (
    <div className="bg-pri10 text-black2 rounded-[7px] flex items-center justify-between px-4 py-2">
      <div className="">
        <div className="flex justify-between">
          <TaskIcon color="#058B94" styling="mr-5 w-[31.64px] h-[34.78px]" />
          <div className="w-full">
            <p className="font-[400] text-[16px] text-black1">
              Room liberary article write...
            </p>
            <div className="flex w-full items-center">
              <CalenderIcon styling="mr-1" />
              <p className="font-[400] text-black5 text-[10px]">
                3 days from now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksCards;
