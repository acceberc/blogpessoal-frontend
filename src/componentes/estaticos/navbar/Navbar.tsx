import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static" className="barra">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            <iframe src="https://giphy.com/embed/2pM0CJ7vHXgXiaLgVJ" width="480" height="142" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={5} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={5} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={5} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={5} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Novos temas
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Sair
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>



        </>
    )
}

export default Navbar;