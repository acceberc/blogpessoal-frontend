import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        history.push('/login')
    }

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

                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/posts' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/formularioTema' className='text-decorator-none'>
                            <Box mx={5} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Novos temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/perfil" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Perfil
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={5} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Sair
                            </Typography>
                        </Box>


                    </Box>

                </Toolbar>
            </AppBar>



        </>
    )
}

export default Navbar;