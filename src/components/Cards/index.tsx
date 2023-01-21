import { Box, Grid, Typography } from "@mui/material"
import { AiOutlineHeart } from "react-icons/ai"
import { BsBag } from "react-icons/bs"
import Button from "../Button"
import * as S from "./styles"

const Cards = () => {
    return (
        <Grid
            item 
            xs={12} 
            md={12} 
            sm={12} 
            sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                flexDirection: "column"
            }}
        >
            <S.CardsStyled>
                <Box 
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%"
                    }}
                >
                    <Typography color="#EB9b00" fontWeight="600" >Sobre o livro</Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                            gap: "1rem"
                        }}
                    >
                        <BsBag fontSize="20px" />
                        <AiOutlineHeart fontSize="20px" /> 
                    </Box>
                </Box>

                <Typography fontWeight="600">Liderança em design</Typography>

                <Typography>Habilidades de gestão para alavancar sua carreira</Typography>

                <Typography fontFamily="cursive">Por: Victor Zanini</Typography>

                <Typography fontSize="12px">A partir de apenas:</Typography>
                
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between"
                    }}
                >
                    <Typography fontSize="22px" fontWeight="600">R$ 29,90</Typography>

                    <Button>
                        Comprar
                    </Button>
                </Box>
            </S.CardsStyled>
        </Grid>
    )
}

export default Cards