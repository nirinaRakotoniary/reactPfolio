import React from "react";
import {Box, Typography} from "@mui/material";

const Eemploi = () => {
    return (
        <Box className="w-full p-4">
            <Box sx={{borderTop:"0.5px solid blue"}} className="h-96 flex gap-10 items-end p-10 border rounded-2xl bg-gradient-to-t from-blue-300 to-gray-50">
                <Box className={"w-1/2 fill-amber-200"}>
                    <Box>
                        <Typography variant="h4" sx={{marginBottom:"20px"}} ><span className={"font-manrope"}>E-Emploi project</span></Typography>
                        <Typography><span className={"text-xl"}>A website, as our Final Year Project, in order to make one who are looking a tasker to do a task and the tasker in contact</span></Typography>
                    </Box>
                </Box>
                <Box>Droite</Box>
            </Box>
        </Box>
    )
}

export default Eemploi;