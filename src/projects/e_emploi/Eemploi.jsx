import React from "react";
import {Box, Typography} from "@mui/material";
import EemploiPict from "../../pict/e_emp_pic.png";

const Eemploi = () => {
    return (
        <Box className="w-full p-4">
            <Box sx={{borderTop:"0.5px solid blue"}} className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 p-10 border rounded-2xl bg-gradient-to-t from-blue-300 to-gray-50">
                <Box className="md:w-1/2">
                    <Box>
                        <Typography variant="h4" sx={{marginBottom:"20px"}} ><span className={"font-manrope text-center"}>E-Emploi project</span></Typography>
                        <Typography><span className={"text-xl text-center"}>A website, as our Final Year Project, in order to make one who are looking for a tasker to do a task and the tasker in contact</span></Typography>
                    </Box>
                </Box>
                <Box className="md:w-1/2 flex justify-center">
                    <img src={EemploiPict} alt="picture e_emploi" className="md:w-full w-1/2" />
                </Box>
            </Box>
        </Box>
    )
}

export default Eemploi;