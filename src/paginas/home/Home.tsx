import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import useLocalStorage from 'react-use-localstorage';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Home() {
    let history = useHistory()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
  
    useEffect(() => {
      if (token === "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        history.push("/login")

    }
}, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="corpo">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo" >Olá!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo" >Saiba mais sobre tecnologia</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className="botao" > 🖊️  Ver Postagens</Button>
                    </Box>
                </Grid>

                <Grid xs={6} className='foto'>
                </Grid>

                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>


            </Grid>
        </>
    );
}

export default Home;