import React, { useState } from 'react';
import { motion } from 'framer-motion';

/* interface SuperheroDetailsProps {
  biography: {
    'full-name': string;
    'alter-egos': string;
    aliases: string[];
    'place-of-birth': string;
    'first-appearance': string;
    publisher: string;
    alignment: string;
  },
  appearance: {
    gender: string;
    race: string;
    height: [string, string];
    weight: [string, string];
    'eye-color': string;
    'hair-color': string;
  },
  work: {
    occupation: string;
    base: string;
  },
  connections: {
    'group-affiliation': string;
    relatives: string;
  }
}

type HeroDetails = {
  data: SuperheroDetailsProps
} */

const data = {
  "biography": {
    "full-name": "Richard Milhouse Jones",
    "alter-egos": "No alter egos found.",
    "aliases": [
        "Rick Jones"
    ],
    "place-of-birth": "Scarsdale, Arizona",
    "first-appearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
    "publisher": "Marvel Comics",
    "alignment": "good"
},
"appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
        "6'8",
        "203 cm"
    ],
    "weight": [
        "980 lb",
        "441 kg"
    ],
    "eye-color": "Yellow",
    "hair-color": "No Hair"
},
"work": {
    "occupation": "Musician, adventurer, author; formerly talk show host",
    "base": "-"
},
"connections": {
    "group-affiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
    "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
}
};

export const HeroDetails = () => {
  const [selectedTab, setSelectedTab] = useState<string>('biography');

  const tabs = ['biography', 'appearance', 'work', 'connections'];
  /* const tabContent = {
    biography: (
      <ul>
        <li>
          <strong>Full Name:</strong> {data.biography['full-name']}
        </li>
        <li>
          <strong>Alter Egos:</strong> {data.biography['alter-egos']}
        </li>
        <li>
          <strong>Aliases:</strong>{' '}
          {data.biography.aliases.map((alias) => (
            <span key={alias} className="mr-2">
              <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {alias}
              </motion.span>
            </span>
          ))}
        </li>
      </ul>
    ),
    appearance: (
      <ul>
        <li>
          <strong>Full Name:</strong> {data.biography['full-name']}
        </li>
        <li>
          <strong>Alter Egos:</strong> {data.biography['alter-egos']}
        </li>
        <li>
          <strong>Aliases:</strong>{' '}
          {data.biography.aliases.map((alias) => (
            <span key={alias} className="mr-2">
              <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {alias}
              </motion.span>
            </span>
          ))}
        </li>
      </ul>
    ),
    work: (
      <ul>
        <li>
          <strong>Full Name:</strong> {data.biography['full-name']}
        </li>
        <li>
          <strong>Alter Egos:</strong> {data.biography['alter-egos']}
        </li>
        <li>
          <strong>Aliases:</strong>{' '}
          {data.biography.aliases.map((alias) => (
            <span key={alias} className="mr-2">
              <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {alias}
              </motion.span>
            </span>
          ))}
        </li>
      </ul>
    ),
    connections: (
      <ul>
        <li>
          <strong>Full Name:</strong> {data.biography['full-name']}
        </li>
        <li>
          <strong>Alter Egos:</strong> {data.biography['alter-egos']}
        </li>
        <li>
          <strong>Aliases:</strong>{' '}
          {data.biography.aliases.map((alias) => (
            <span key={alias} className="mr-2">
              <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {alias}
              </motion.span>
            </span>
          ))}
        </li>
      </ul>
    ),
  }; */
  return (
    <div className="mx-auto p-4 bg-slate-600 w-full">
      <div className="flex mb-4 items-center justify-between gap-10">
        {tabs.map((tab) => (
          <motion.button
            key={tab.toLowerCase()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`flex-1 px-4 py-2 rounded-full text-center ${
              selectedTab.toLowerCase() === tab.toLowerCase() ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setSelectedTab(tab.toLowerCase())}
          >
            {tab}
          </motion.button>
        ))}
      </div>
      {/* <div className="border p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {tabContent[selectedTab]}
        </motion.div>
      </div> */}
    </div>
  );
}
