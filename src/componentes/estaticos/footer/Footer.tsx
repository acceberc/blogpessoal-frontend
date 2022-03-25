import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Typography, Box, Grid } from '@material-ui/core';

import './Footer.css'

function Footer(){
    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12} >
                    <Box className="contatos">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="textos">Contatos </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="mailto:rebecca-cunha@hotmail.com" target="_blank">
                                <EmailIcon className="redes" />
                            </a>
                            <a href="https://github.com/acceberc" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/acceberc/" target="_blank">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="rodape">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos" >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom align="center" className="textos">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;