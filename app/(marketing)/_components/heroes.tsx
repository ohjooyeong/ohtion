'use client';

import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BookOpenText,
  File,
  Target,
} from 'lucide-react';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
import { motion } from 'framer-motion';

const tabs = [
  {
    icon: (
      <BookOpenText className="text-3xl mr-2 text-red-600 bg-red-100 rounded-md p-1" />
    ),
    name: '위키',
    description:
      '지식을 집중화하고 접근할 수 있도록 합니다.',
    image: '/assets/wikis.png',
    image_dark: '/assets/wikis-dark.png',
    more: (
      <div className="text-red-600 flex items-center">
        자세히 알아보기
        <ArrowRight className="text-sm ml-1" />
      </div>
    ),
  },
  {
    icon: (
      <Target className="text-3xl mr-2 text-blue-600 bg-blue-100 rounded-md p-1" />
    ),
    name: '프로젝트',
    description: '혼란 없이 복잡한 프로젝트를 관리하세요.',
    image: '/assets/project.png',
    image_dark: '/assets/project-dark.png',
    more: (
      <div className="text-blue-600 flex items-center">
        자세히 알아보기
        <ArrowRight className="text-sm ml-1" />
      </div>
    ),
  },
  {
    icon: (
      <File className="text-3xl mr-2 text-yellow-600 bg-yellow-100 rounded-md p-1" />
    ),
    name: '문서',
    description:
      '단순하고 강력하며 아름답습니다. 차세대 메모 및 문서.',
    image: '/assets/docs.png',
    image_dark: '/assets/docs-dark.png',
    more: (
      <div className="text-yellow-600 flex items-center">
        자세히 알아보기
        <ArrowRight className="text-sm ml-1" />
      </div>
    ),
  },
];

const Heroes = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const matches = useMediaQuery('(min-width: 767px)');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative h-[400px] w-[400px]">
          <Image
            src="/reading.png"
            fill
            className="object-contain dark:hidden"
            alt="Reading"
          />
          <Image
            src="/reading-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Reading"
          />
        </div>
      </div>

      {!matches && mounted ? (
        <div className="px-8">
          <div className="grid grid-cols-3 md:row-span-1 gap-4 xl:gap-6 mt-8 xl:px-0">
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                className={`flex p-1 md:p-8 cursor-pointer ${
                  activeTab.name === tab.name
                    ? `rounded-md md:rounded-xl bg-[#f6f5f4] md:bg-white
                      border-gray-200 md:border items-center justify-center flex
                      p-1`
                    : `md:bg-[#f6f5f4] rounded-md xl:rounded-xl p-1 items-center
                      justify-center hover:bg-[#eae7e7]`
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <div className="flex flex-col items-center md:justify-center mx-auto">
                  <div className="hidden md:flex text-4xl">
                    {tab.icon}
                  </div>
                  <div className="font-medium text-sm xl:text-lg mt-1">
                    {tab.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="pt-6 md:py-10 lg:px-16 xl:px-0 md:px-16 w-full">
            {activeTab && (
              <div className="flex justify-center items-center flex-col">
                <Image
                  src={activeTab.image}
                  width={1025}
                  height={500}
                  alt="tab-logo"
                  className="w-full border p-20 xl:p-40 rounded-xl dark:hidden"
                />
                <Image
                  src={activeTab.image_dark}
                  width={1025}
                  height={500}
                  alt="tab-logo"
                  className="w-full border p-20 xl:p-40 rounded-xl hidden dark:block"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          className="flex xl:space-x-4 items-center justify-between
            cursor-pointer gap-4 w-5/6 xl:w-4/5 2xl:w-[85%]"
        >
          {tabs.map((tab) => (
            <motion.div
              key={tab.name}
              className={`xl:flex justify-center space-x-4 xl:pt-4 sm:my-10 xl:my-0
                w-60 h-36 ${
                  activeTab === tab
                    ? 'border rounded-xl pt-2 bg-white dark:bg-[#f0e7e7]'
                    : `border shadow-md rounded-xl pt-2 bg-[#f6f5f4]
                      dark:bg-[#d8d6d6]`
                }`}
              onMouseEnter={() => setActiveTab(tab)}
            >
              <div className="px-4 select-none">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl font-medium dark:text-primary-foreground">
                    {tab.name}
                  </div>
                </div>

                <motion.div
                  className="flex flex-col text-sm dark:text-primary-foreground"
                  initial={{ y: 0 }}
                  animate={{
                    y: activeTab === tab ? 10 : 25,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {tab.description}
                  </motion.div>

                  {activeTab === tab && (
                    <div className="text-sm mt-2">
                      {tab.more}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="hidden md:flex py-10 px-8 w-5/6 md:px-0 xl:w-4/5 2xl:w-[85%]">
        {activeTab && (
          <div
            className="md:flex items-center justify-center space-x-6
              hover:cursor-pointer w-full"
          >
            <Image
              src={activeTab.image}
              width={500}
              height={500}
              alt="logo"
              className="w-full p-20 xl:p-40 shadow-md rounded-xl bg-[#f6f5f4]
                dark:bg-[#d8d6d6]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Heroes;
