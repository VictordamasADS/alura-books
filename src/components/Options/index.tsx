import { Box, Grid, Rating, Typography } from "@mui/material";
import { FC } from "react";
import {
    Control, useFieldArray, UseFormTrigger
} from "react-hook-form";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IOptions } from "../../shared/types";
import * as S from "./styles";

interface IOptionsProps {
    updateCarrinho: (values: any) => void;
    control: Control<IOptions, any>;
    trigger: UseFormTrigger<IOptions>;
    itens: IOptions;
}

export const Options: FC<IOptionsProps> = ({
    control,
    itens,
    updateCarrinho,
    trigger
}) => {
 
    const {
        fields: carrinhoFields,
        append: carrinhoAppend,
        remove: carrinhoRemove,
        prepend: carrinhoPrepend,
        update: carrinhoUpdate,
    } = useFieldArray({
        control,
        name: "options",
    });

    const handleUpdate = () => {
        if(carrinhoFields.length) {
            updateCarrinho(carrinhoFields)
        }
    }
    
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
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2rem"
                    }}
                >
                    <Typography fontWeight="600" fontFamily="cursive" fontSize="2.2rem">Escolha o Livro</Typography>
                    {itens.options.map(
                        (value, index) => (
                        <S.Section        
                            onClick={async () => { 
                                const carrinhoValues = await trigger([
                                    `options`
                                ])
                                
                                if(carrinhoValues) {
                                    carrinhoUpdate(index, value)
                                    handleUpdate()
                                }
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

                <Grid
                    item
                    xs={12}
                    md={2}
                    sm={12}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}      
                >
                    <S.MenuCar>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "row",
                                gap: "0.5rem"
                            }}
                            >
                            <Typography fontWeight="600">Meu Carrinho</Typography>
                            <BsFillCartCheckFill fontSize="2rem" /> 
                        </Box>
                        
                        {carrinhoFields.map(value => (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    alignItems: "center",
                                    border: "1px solid gray",
                                    padding: "1rem",
                                    borderRadius: "1rem"
                                }}
                                key={value?.id}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: "row",
                                        gap: "0.5rem"
                                    }}
                                >
                                    <Typography fontWeight="600" fontSize="0.8rem">Título do livro: </Typography>
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
                                    <Typography fontWeight="600" fontSize="0.8rem">Formatos: </Typography>
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
                                    <Typography fontWeight="600" fontSize="0.8rem">Avaliação: </Typography>
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
                                    <Typography fontWeight="600" fontSize="0.8rem">Preço: </Typography>
                                    <Typography fontSize="0.8rem">R${value?.preco}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </S.MenuCar>
                </Grid>
            </Grid>
    )
}