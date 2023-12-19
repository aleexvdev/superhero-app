import { motion } from 'framer-motion'
import { socialNetworks } from '../data/socialNetworks';
import { ComponentSocialNetwork } from './ComponentSocialNetwork ';
import  Imgprofile  from '../img/profile.png';
import { IconLinkWeb } from '../icons/IconLinkWeb';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(1px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0)", y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

export const CardProfile = () => {
  return (
    <div className='w-full h-full mx-10 my-20 flex flex-col items-center justify-center'>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='w-[50%] h-full min-h-[230px] rounded-lg bg-gradient-to-br from-green-200 via-green-400 to-teal-400 shadow-md shadow-black p-16 relative'
      >
        <div className='grid md:grid-cols-1 md:grid-rows-4 grid-cols-3 grid-rows-3 gap-0 w-full h-full'>
          <motion.h2 
            variants={itemVariants}
            className='col-span-3 row-span-1 md:col-span-1 md:row-span-1'
          >
            <span className='text-[25px] font-bold text-gray-700/90'>Dev</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className='col-span-3 row-span-1 md:col-span-1 md:row-span-1'
          >
            <span className='text-[25px] text-black md:text-[25px] font-bold'>Alexander Valverde</span>
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className='col-span-1 row-span-1 md:col-span-1 md:row-span-1 font-semibold text-gray-800/80 flex items-center justify-start md:pb-2'
          >
            <span className='text-[18px] font-bold text-gray-700/90'>@alexvdev</span>
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className='absolute z-30 right-20 top-12 bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-300 rounded-lg'
          >
            <img src={Imgprofile} alt="Alexander Valverde" className='rounded-lg w-56 h-56' />
          </motion.div>
          <div className='col-span-1 row-span-1'>
            <motion.div 
              variants={itemVariants}
              className='flex items-center justify-center w-full h-full gap-10'
            >
              {
                socialNetworks.map((social) => (
                  <ComponentSocialNetwork key={social.id} props={social} />
                ))
              }
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className='w-full flex flex-col justify-center mt-8'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-start justify-start pt-2 px-3'>
            <div className='flex flex-row flex-wrap justify-center w-full items-center'>
              <span className={`text-white text-[13px] pr-2 tracking-wide`}>SuperHero data provided by</span>
              <a href="https://superheroapi.com/" target="_blank" rel="noopener noreferrer">
                <span className={`text-whit text-[13px] flex flex-row items-center hover:text-blue-500 cursor-pointer tracking-wide`}>
                  <IconLinkWeb fontSize={15} />
                  <span>SuperHeroAPI</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}