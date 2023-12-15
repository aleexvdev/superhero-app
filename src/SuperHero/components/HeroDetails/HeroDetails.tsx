import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeHeroApp } from '../../../types/TypeHero';
import { Biography } from './Biography';
import { Connections } from './Connections';
import { Work } from './Work';
import { Appearance } from './Appearance';

type PropsHeroDetails = {
  props: TypeHeroApp;
}

const buttonVariants = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 }
};

export const HeroDetails = ({ props }: PropsHeroDetails) => {
  const [selectedTab, setSelectedTab] = useState<string>('biography');
  const tabs = ['biography', 'appearance', 'work', 'connections'];

  const renderTabContent = (index: string) => {
    switch (index) {
      case 'biography':
        return <Biography key={'biography'} props={props.biography} />
      case 'appearance':
        return <Appearance key={'appearance'} props={props.appearance} />
      case 'work':
        return <Work key={'work'} props={props.work} />
      case 'connections':
        return <Connections key={'connections'} props={props.connections} />
      default:
        return <Biography key={'biography'} props={props.biography} />
    }
  } 

  return (
    <div className="mx-auto px-4 w-full">
      <div className="flex mb-4 items-center justify-between gap-10">
        {tabs.map((tab) => (
          <motion.button
            key={tab.toUpperCase()}
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className={`flex-1 px-4 py-2 rounded-full text-center ${
              selectedTab.toUpperCase() === tab.toUpperCase() ? 'bg-red-700 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.toUpperCase()}
          </motion.button>
        ))}
      </div>
      <div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {renderTabContent(selectedTab)}
        </motion.div>
      </div>
    </div>
  );
}
