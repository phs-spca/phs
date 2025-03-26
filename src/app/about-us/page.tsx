'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavBar from '../../components/userComponents/NavBar/NavBar';
import { BackArrow } from '../../../public/icons';
import Footer from '../../components/userComponents/Footer/Footer';

/**
 * @returns The about us page
 */
export default function AboutUsPage() {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    if (window) {
      setIsWide(window.innerWidth >= 1024);
    }
    // Update isWide state on window resize
    const handleResize = () => setIsWide(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isWide ? (
    <div className="bg-ivory min-h-screen">
      <NavBar />
      <div className="py-[6.25rem] flex justify-center">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-6">
            <p className="s3 text-night">
              <span className="text-scary-forest">Home</span> / About Us
            </p>
            <h1 className="text-night">About Us</h1>
          </div>
          <div className="flex flex-row gap-[5.69rem]">
            <img
              src="https://qkkuacqtcsfjbnzmxmhk.supabase.co/storage/v1/object/public/images//PHSLogo_transparent_PNG.png"
              alt="About Us"
              className="object-cover w-[30.375rem] h-[25.6875rem] rounded-xl"
            />
            <div className="flex flex-col gap-[3.31rem]">
              <div className="flex flex-col gap-[2.12rem]">
                <h4 className="text-night">About Us</h4>
                <div className="flex flex-col">
                  <div className="mb-9">
                    <div className="flex flex-row gap-[0.56rem] items-center">
                  <p className="b3 text-night w-[24.75rem]">
                  The Peninsula Humane Society & SPCA (PHS/SPCA) is a local, private, non-profit charitable organization dedicated to animal welfare. PHS/SPCA is truly an open admission shelter, not only accepting many pet animals who might be refused at other shelters, but also taking care of sick, injured, and orphaned native wildlife.
                </p>
                    </div>
                </div>
              </div>
                </div>
                <p className="b3 text-night w-[24.75rem]">
                  If you’ve found a wild animal that appears to be sick,
                  injured, or orphaned, safely contain it and either bring it to
                  our nearest shelter or contact us for guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
  ) : (
    <div className="bg-ivory min-h-screen">
      <NavBar />
      <div className="px-[1.12rem] pt-4 pb-[2.5rem]">
        <div className="mb-4">
          <Link href="/">
            <BackArrow />
          </Link>
        </div>
        <h1 className="text-night mb-4">About Us</h1>
        <h4 className="text-night mb-4">About Us</h4>

        <div className="bg-[#EBF0E8] rounded-lg py-8 pl-[1.13rem] pr-[1.56rem] mb-[2.38rem]">
          <div className="mb-[1.81rem]">
            <div className="flex gap-[0.56rem] items-center">
              <p className="b2 text-night">The Peninsula Humane Society & SPCA (PHS/SPCA) is a local, private, non-profit charitable organization dedicated to animal welfare. PHS/SPCA is truly an open admission shelter, not only accepting many pet animals who might be refused at other shelters, but also taking care of sick, injured, and orphaned native wildlife.</p>
            </div>
          </div>
        </div>
        <p className="b3 text-night pl-[1.31rem]">
          If you’ve found a wild animal that appears to be sick, injured, or
          orphaned, safely contain it and either bring it to our nearest shelter
          or contact us for guidance.
        </p>
      </div>
      <Footer />
    </div>
  );
}
