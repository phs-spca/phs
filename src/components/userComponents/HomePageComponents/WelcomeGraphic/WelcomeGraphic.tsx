import React from 'react';
import { useWebDeviceDetection } from '../../../../context/WindowWidthContext/WindowWidthContext';

/**
 * @returns - Welcome graphic on the home page.  Button available for "start tour" leads to the featured tours page and flow
 */
function WelcomeGraphic() {
  const isWebDevice = useWebDeviceDetection();
  return (
    <div
      className="h-96 bg-neutral-900 bg-opacity-60 flex justify-center items-center relative"
      style={{
        backgroundImage: `url('https://qkkuacqtcsfjbnzmxmhk.supabase.co/storage/v1/object/public/images/EllisonCover.png?t=2023-11-05T03%3A22%3A44.379Z')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-80 h-38 flex-col justify-start items-center gap-1 inline-flex">
        {/* <div className="flex-col justify-start items-center gap-1 flex"> */}
        <p className=" font-light text-center">WELCOME TO</p>
        <h1 className="text-center w-80">The Peninsula Humane</h1>
        <h1 className="text-center w-80">Society & SPCA</h1>
        <h1 className="text-center w-80">Wildlife Care Center</h1>
        {isWebDevice && (
          <p className="b3 font-light mt-7 w-96 text-center">
           The Peninsula Humane Society & SPCA (PHS/SPCA) is a local, private,
            non-profit charitable organization dedicated to animal welfare.
            PHS/SPCA is truly an open admission shelter, not only accepting many
            pet animals who might be refused at other shelters, but also taking
            care of sick, injured, and orphaned native wildlife.
          </p>
        )}
      </div>
    </div>
  );
}

export default WelcomeGraphic;
