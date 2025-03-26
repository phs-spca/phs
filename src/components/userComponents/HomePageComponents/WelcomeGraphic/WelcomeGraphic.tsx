import React from 'react';
import { useWebDeviceDetection } from '../../../../context/WindowWidthContext/WindowWidthContext';

/**
 * @returns - Welcome graphic on the home page.  Button available for "start tour" leads to the featured tours page and flow
 */
function WelcomeGraphic() {
  const isWebDevice = useWebDeviceDetection();
  return (
    <div className="Wrapper">
    {isWebDevice && (
      <div
      className="h-50 bg-neutral-900 bg-opacity-60 flex justify-center items-center relative"
      style={{
        backgroundImage: `url('https://qkkuacqtcsfjbnzmxmhk.supabase.co/storage/v1/object/public/images/EllisonCover.png?t=2023-11-05T03%3A22%3A44.379Z')`,
        backgroundSize: '65% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'white',
        textAlign: 'center',
        lineHeight: '50px'
      }}
    >
      <div className="w-80 h-38 flex-col justify-start items-center gap-1 inline-flex">
        {/* <div className="flex-col justify-start items-center gap-1 flex"> */}
        <br/>
        <p className=" font-light text-center">WELCOME TO</p>
        <h1 className="text-center w-80">The Peninsula Humane</h1>
        <h1 className="text-center w-80">Society & SPCA</h1>
        <h1 className="text-center w-80">Wildlife Care Center</h1>
        <p className="b3 font-light mt-7 w-96 text-left">
          Embark on an exciting journey with HootWise, your personal wildlife companion app! This fun digital guide helps you:
          - Explore our Wildlife Care Center&apos;s main attractions
          - Discover fascinating Interactive Exhibits along our Learning Path
          - Unlock Wildlife Spotlights that answer your most curious questions
          HootWise makes exploring even more exciting with our virtual site tour! You&apos;ll get all the fascinating details about the animals in our rehabilitation enclosures right at your fingertips.
        </p>
        <br/>
      </div>
    </div>)}
  {!isWebDevice && (
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
      </div>
    </div>
    )}
      
    {!isWebDevice && (
    <div className="IntroInfo web:w-full web:h-72 bg-ivory web:bg-mint-cream inline-flex flex-col justify-center items-center">
        <p className="b3 w-full px-4 py-10 text-night text-left text-base gap-4">
          Embark on an exciting journey with HootWise, your personal wildlife companion app! This fun digital guide helps you:
          - Explore our Wildlife Care Center&apos;s main attractions
          - Discover fascinating Interactive Exhibits along our Learning Path
          - Unlock Wildlife Spotlights that answer your most curious questions
          HootWise makes exploring even more exciting with our virtual site tour! You&apos;ll get all the fascinating details about the animals in our rehabilitation enclosures right at your fingertips.
        </p>
      </div>)}
      </div>
  );
}

export default WelcomeGraphic;
