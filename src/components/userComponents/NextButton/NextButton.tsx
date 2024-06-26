import React from 'react';
import { NextArrow } from '../../../../public/icons';

/**
 * @returns the NextArrow button
 */
export default function NextButton() {
  return (
    <div className="bg-[#EBF0E8] bg-opacity-[36%] w-[3rem] h-[2.0625rem] rounded-lg flex items-center justify-around">
      <NextArrow />
    </div>
  );
}
