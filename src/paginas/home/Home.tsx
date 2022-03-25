import React from "react";
import {Typography, Box, Grid, Button} from '@material-ui/core';
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
                <Grid item xs={6} >
                    <img src="https://i.ibb.co/FK49MRs/Pngtree-women-with-laptop-working-from-5348500.png" alt="Mulher com laptop" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagem">
                </Grid>
            </Grid>
        </>
    );
}

export default Home;