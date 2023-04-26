/* eslint-disable react/prop-types */
import React from 'react';

function LineProgressBar({ borderColor, value, color }) {
  return (
    <div
      className={`rounded-[6px] border-[1px] ${borderColor} h-[7px] sm:h-[12px] flex items-center w-[106px]`}
    >
      <div
        className={`${color} h-full rounded-[6px] border-[1px ml-[-1px]`}
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}

export default LineProgressBar;
