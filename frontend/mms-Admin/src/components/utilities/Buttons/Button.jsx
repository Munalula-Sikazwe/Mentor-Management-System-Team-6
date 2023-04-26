/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

function Button({ children, width, ...restProps }) {
  return (
    <button {...restProps} className={`bg-pri3 h-[40px] flex items-center justify-center text-white duration-700 text-[18px] font-[600] text-mukta hover:bg-pri2 py-2 rounded-[10px] ${width}`} type="submit">
      {children}
    </button>
  );
}

export default Button;
