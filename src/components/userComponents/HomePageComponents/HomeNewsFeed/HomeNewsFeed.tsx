'use client';

import React, { useEffect, useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';
import Link from 'next/link';
import { NewsRow } from '../../../../types/types';
import NewsDisplay from '../../NewsDisplay/NewsDisplay';
import { fetchAllNewsByDate } from '../../../../supabase/news/queries';
import { useWebDeviceDetection } from '../../../../context/WindowWidthContext/WindowWidthContext';

/**
 * @returns news feed page limited to 3 most recend entries, for home page.
 */
function HomeNewsFeed() {
  const isWebDevice = useWebDeviceDetection();
  const [news, setNews] = useState<NewsRow[]>([]);

  useEffect(() => {
    // Get news
    const getNews = async () => {
      const fetchedNews: NewsRow[] = await fetchAllNewsByDate();
      const topThreeNews = fetchedNews.slice(0, 3);
      setNews(topThreeNews);
    };
    getNews();
  }, []);

  return (
    <div
      className="w-full flex flex-row px-2.5 py-20 web:px-56 web:py-28 gap-40
     justify-center items-center"
    >
      {isWebDevice && (
        <iframe title="Instagram Feed" className="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/phsspcawildlife/embed/?cr=1&amp;v=14&amp;wp=540&amp;rd=file%3A%2F%2F&amp;rp=%2FC%3A%2FUsers%2Fedidato%2FDownloads%2Ftesting_embed%2520-%2520Copy.html#%7B%22ci%22%3A0%2C%22os%22%3A23.899999999441206%2C%22ls%22%3A13.099999999627471%2C%22le%22%3A15.399999999441206%7D" allowFullScreen="true" frameBorder="0" height="583" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style={{
    background: 'white',
    maxWidth: '540px',
    width: 'calc(100% - 2px)', 
    borderRadius: '3px',
    border: '1px solid rgb(219, 219, 219)', 
    boxShadow: 'none',
    display: 'block',
    margin: '0px 0px 12px',
    minWidth: '326px',
    padding: '0px'}}></iframe>
      )}
    </div>
  );
}

export default HomeNewsFeed;
