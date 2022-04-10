import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';
import { toast } from 'react-toastify';

function Navbar() {
    let history = useHistory()

    const dispatch = useDispatch()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens

    )
    function goLogout() {
        dispatch(addToken(""))
        toast.info('Usuário deslogado', {
          position: "top-right",
          autoClose: 2000,   // 2 seg
          hideProgressBar: false, 
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
      })
        history.push('/login')
      }

    var navBarComponent

    if (token !== "") {
        navBarComponent =
            <AppBar position="static" className='barra'>
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                        <iframe src="https://giphy.com/embed/2pM0CJ7vHXgXiaLgVJ" width="480" height="142" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
    }

    return (
        <>
            {navBarComponent}
        </>
    )

}

export default Navbar;