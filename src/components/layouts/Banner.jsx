
import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Button from '../common/Button'


const Banner = () => {
  return (
    <>
    <div className='w-full h-full p-47 bg-indigo-200'>
      <Container>
        <Flex>
            <div>
                <h1 className='text-7xl text-blue-800 mb-5'> Hi, I'm Dolphii</h1>
                <h2 className='text-[32px] font-medium w-3xl text-gray-500'>a Front-End Developer who builds fast, accessible, and visually polished web applications.</h2>
                <h5 className='text-xs font-light text-gray-600'>I turn complex requirements into clean, user-centric interfaces using modern JavaScript frameworks and responsive design.</h5>

            </div>
            <div className='gap-10 text-9xl ml-40'>
                <h2>🐬</h2>
            </div>
        </Flex>
       <Button btntext={"Download CV"} className=" bg-blue-400 border-2 border-blue-950 rounded-3xl hover:bg-blue-900 hover:border-blue-300 text-cyan-50 font-bold mt-5"/>
      </Container>
    </div>
    
    </>
  )
}

export default Banner