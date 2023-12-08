import { Box, Typography } from '@mui/material'
import React from 'react'
import pict_Nirina from "../pict/pdp.jpg"

const Home = () => {
  return (
      <Box className="h-screen p-5 flex items-center justify-center bg-test bg-cover ">
          <Box className="flex md:p-10 md:pt-14 items-center md:flex-row flex-col-reverse">
              <Box className="flex items-center">
                  <Box>
                      <Typography sx={{
                          fontSize: "44px", '@media(max-width:767px)': {
                              fontSize: "34px",
                              textAlign: "center"
                          }
                      }}>
                          <span className='font-manrope'>
                              I'm <span className='text-teal-400' >Nirina</span>. I'm a Software Engineer, Fullstack Developer and UI/UX Designer.
                          </span>

                      </Typography>
                  </Box>
              </Box>
              <Box className="w-1/6 p-6">
                  <img src={pict_Nirina} alt="Nirina's picture" className='w-36 h-36 md:w-40 md:h-40 rounded-full' />
              </Box>
          </Box>
      </Box>
   
  )
}

export default Home