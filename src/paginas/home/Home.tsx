import React from "react";
import { Typography, Box, Grid, Button } from '@material-ui/core';
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem';
import './Home.css';

function Home() {
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