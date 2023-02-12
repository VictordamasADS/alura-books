import { Box, Grid, Rating, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC, useState } from "react";
import {
    Control, useFieldArray, UseFormGetValues
} from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartCheck, BsCartCheckFill, BsFillCartCheckFill } from "react-icons/bs";
import { IOptions } from "../../shared/types";
import * as S from "./styles";

interface IOptionsProps {
    updateCarrinho: (values: any) => void;
    control: Control<IOptions, any>;
    getValues: UseFormGetValues<IOptions>;
    itens: IOptions;
}

export const Options: FC<IOptionsProps> = ({
    control,
    itens,
    getValues,
    updateCarrinho,
}) => {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    const {
        fields: carrinhoFields,
        remove: carrinhoRemove,
        update: carrinhoUpdate,
    } = useFieldArray({
        control,
        name: "options",
    });
    
    return (
        <Grid
            container
            spacing={3}
            sx={{ display: "flex", alignItems: "flex-start" }}
        >
            <Grid
                item
                xs={12}
                md={10}
                sm={12}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Typography fontWeight="600" fontSize={smDown ? "1.6rem" : "2rem"}>Escolha o livro</Typography>
            </Grid>
            <Grid
                item
                xs={12}
                md={10}
                sm={12}
                sx={{
                    display: "flex",
                    flexDirection: smDown ? "column" : "row",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: smDown ? "flex-start" : "center",
                    gap: "1rem"
                }}
            >
                {itens.options.map(
                    (value) => (
                    <S.Section        
                        onClick={async () => {                                    
                            await carrinhoUpdate(index, value)
                                
                            updateCarrinho(getValues(`options`))
                            setIndex(index + 1)
                        }}         
                        key={value.id}        
                    >
                        <Typography fontFamily="serif">
                            {value.titulo}
                        </Typography>
                        
                        <Typography fontWeight="600">
                            R${value.preco}
                        </Typography>
                        
                        <Typography>
                            {value.formato.join(", ")}
                        </Typography>

                        <Rating 
                            name="estrelas" 
                            value={value.estrelas}
                            readOnly 
                        />
                    </S.Section>
                ))}  
            </Grid>

            {!show && (
                <S.ViewCar
                    onClick={() => setShow(true)}
                >
                    {carrinhoFields.length ? (
                        <BsCartCheckFill fontSize="2.2rem" />
                    ) : (
                        <BsCartCheck fontSize="2.2rem" />
                    )}
                    
                    <Box
                        sx={{
                            display: "flex",
                            background: "red",
                            position: "absolute",
                            color: "white",
                            width: "1rem",
                            height: "1.5rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            margin: "-20px -20px 0px 0px"
                        }}
                    >
                        {carrinhoFields.length}
                    </Box>
                </S.ViewCar>
            )}

            <Grid
                item
                xs={12}
                md={4}
                sm={12}
                sx={{
                    display: show ? "flex" : "none",
                    right: "0",
                    position: "absolute",
                    flexDirection: "column",
                    gap: "1rem"
                }}      
            >
                <S.MenuCar>
                    <Box
                        sx={{
                            display: "flex",
                            width: "100%",
                            gap: "0.5rem",
                            flexDirection: "column",
                        }}
                        >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                cursor: "pointer"
                            }}
                            onClick={() => setShow(false)}
                        >
                            <AiOutlineClose fontSize="1.4rem" />
                        </Box>
                        <Box 
                            sx={{ 
                                display: "flex", 
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row", 
                                gap: "0.2rem" 
                            }}>
                            <Typography fontWeight="600">Meu Carrinho</Typography>
                            <BsFillCartCheckFill fontSize="2rem" /> 
                        </Box>
                    </Box>
                    
                    {carrinhoFields.map(
                        (value, key) => (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                minWidth: "90%",
                                gap: "1rem",
                                alignItems: "center",
                                padding: "1rem",
                                borderRadius: "1rem"
                            }}
                            key={value?.id}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "flex-end",
                                    cursor: "pointer"
                                }}
                                onClick={async () => {
                                    await carrinhoRemove(
                                        key
                                    )

                                    setIndex(index - 1)
                                }}
                            >
                                <AiOutlineClose />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    gap: "0.5rem"
                                }}
                            >
                                <Typography fontWeight="600" fontSize="0.8rem" whiteSpace="nowrap">Título do livro:</Typography>
                                <Typography fontSize="0.8rem">{value?.titulo}</Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "row",
                                    gap: "0.5rem"
                                }}
                            >
                                <Typography fontWeight="600" fontSize="0.8rem">Formatos:</Typography>
                                <Typography fontSize="0.8rem">{value?.formato?.join(", ")}</Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    gap: "0.2rem"
                                }}
                            >
                                <Typography fontWeight="600" fontSize="0.8rem">Avaliação:</Typography>
                                <Rating 
                                    name="estrelas" 
                                    value={value?.estrelas}
                                    readOnly 
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "row",
                                    gap: "0.5rem"
                                }}
                            >
                                <Typography fontWeight="600" fontSize="0.8rem">Preço:</Typography>
                                <Typography fontSize="0.8rem">R${value?.preco}</Typography>
                            </Box>
                        </Box>
                    ))}
                </S.MenuCar>
            </Grid>
        </Grid>
    )
}