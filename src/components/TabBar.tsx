'use client';
import { useState } from 'react';
import { setCookie } from 'cookies-next';

// https://tailwindcomponents.com/component/radio-buttons-1

interface Props {
  currentTap?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  currentTap = 1,
  tabOptions = [1, 2, 3, 4, 5],
}: Props) => {
  const [selected, setSelected] = useState(currentTap);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie('selectedTab', tab.toString());
  };

  return (
    <div
      className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2
        ${'grid-cols-' + tabOptions.length}
        `}
      // className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2
      //   grid-cols-5
      //   `}
    >
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input
            checked={selected === tab}
            onChange={() => {}}
            type='radio'
            id={tab.toString()}
            className='peer hidden'
          />
          <label
            onClick={() => onTabSelected(tab)}
            className='transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
