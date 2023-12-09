import React from 'react'
import {Box, Typography} from "@mui/material";
import Eemploi from "./e_emploi/Eemploi";

const Projects = () => {
  return (
      <Box className="w-full h-screen" sx={{paddingTop:"68px"}}>
        <Box id="project" className='px-10 flex flex-col justify-center items-center py-4' >
          <Box id="title" className="flex flex-col items-center justify-center text-4xl pb-8">
            <Typography variant={"h5"} ><span className="text-teal-400 uppercase">project</span></Typography>
            <Typography variant="h3">
              <span className="font-manrope" >
                Some of my projects
              </span>
            </Typography>
          </Box>
          <Eemploi/>
        </Box>
      </Box>
  );
}

export default Projects