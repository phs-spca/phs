'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import NavBar from '../../components/userComponents/NavBar/NavBar';
import FilterButton from '../../components/userComponents/FilterButton/FilterButton';
import { useWebDeviceDetection } from '../../context/WindowWidthContext/WindowWidthContext';
import Footer from '../../components/userComponents/Footer/Footer';

const filterButtonContent: string[] = ['Virtual Tour Map', 'Exhibits Map'];

const SiteMap = dynamic(
  () => import('../../components/userComponents/SiteMap/SiteMap'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);
type ModeState = 'tours' | 'exhibits';

/**
 * @returns Page for the interactive map
 */
function MapPage() {
  const [selectedMap, setSelectedMap] = useState(filterButtonContent[0]); // "Virtual Tour Map" by default
  const [mode, setMode] = useState<ModeState>('tours');
  const isWebDevice = useWebDeviceDetection();

  const handleFilter = (mapName: string) => {
    setSelectedMap(mapName);
    if (mapName === 'Virtual Tour Map') {
      setMode('tours');
    } else if (mapName === 'Exhibits Map') {
      setMode('exhibits');
    }
  };

  const renderFilterContainer = () => (
    <div className="mb-6 w-full px-4">
      <div className="flex flex-row items-center justify-between bg-mint-cream border-mint-cream border-[8px] rounded-lg w-full">
        {filterButtonContent &&
          filterButtonContent.map(text => (
            <FilterButton
              key={text}
              content={text}
              onClick={() => handleFilter(text)}
              isSelected={selectedMap === text}
            />
          ))}
      </div>
    </div>
  );
  const renderFilterContainerWide = () => (
    <div className="flex justify-end w-[23.875rem] h-[3.25rem]">
      <div className="flex flex-row items-center rounded-lg bg-mint-cream  border-mint-cream border-[8px] mx-auto w-full">
        {filterButtonContent &&
          filterButtonContent.map(text => (
            <FilterButton
              key={text}
              content={text}
              onClick={() => handleFilter(text)}
              isSelected={selectedMap === text}
            />
          ))}
      </div>
    </div>
  );

  return isWebDevice ? (
    <>
      <NavBar />
      <div className="justify-center mx-auto w-[70%]">
        <div className="pt-0 pl-2 pr-2 bg-ivory">
          <div className="pt-20 pb-6 pl-2 ">
            <text className="text-scary-forest font-lato text-sm font-normal">
              Home{' '}
              <text className="text-night"> / Site Maps</text>
            </text>
          </div>
          <div className="flex items-center  pb-4">
            <div className="flex-initial pr-2 pl-2">
              <p className="text-night font-lato font-normal text-3xl">
                Site Maps
              </p>
            </div>
            <div className="flex-grow flex justify-end pr-2 pl-2 pb-3">
              {renderFilterContainerWide()}
            </div>
          </div>
          <div className="w-full pr-2 pl-2 flex h-2/3 mb-8">
            <SiteMap mode={mode} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <>
      <NavBar />
         <div className="pt-6.25 pr-2 pl-2 pb-2 bg-ivory">
        

        {renderFilterContainer()}
        <div className="pt-0 pl-2 pr-2 bg-ivory">
          <div className="w-full pr-2 pl-2 flex h-2/3 mb-8">
            <SiteMap mode={mode} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MapPage;
