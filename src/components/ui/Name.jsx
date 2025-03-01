import { motion } from 'framer-motion'
import React from 'react'
import {useNavigate } from 'react-router-dom'

const Name = () => {

  const navigate = useNavigate()

  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 120 }}
    onClick={()=>navigate('/')}
    className=' flex absolute top-2 left-2 p-4 z-50 text-2xl font-bold cursor-pointer'>
    
        <div className=' text-white'>
            Naveen
        </div>
        <div className='  text-[#FF7F50]'>
            VJ
        </div>
    </motion.div>
  )
}

export default Name