import { Box, Grid, Rating, Typography } from "@mui/material";
import { FC, useState } from "react";
import {
    Control,
    useFieldArray,
    UseFormGetValues
} from "react-hook-form";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IBooks, IOptions } from "../../shared/types";
import * as S from "./styles";

interface IOptionsProps {
    handleSubmit: (values: any) => void;
    control: Control<IOptions, any>;
    getValues: UseFormGetValues<IOptions>;
    valorPadrao?: IBooks | null;
    itens: IOptions;
}

export const Options: FC<IOptionsProps> = ({
    control,
    itens,
    handleSubmit,
    valorPadrao,
    getValues
}) => {
    const [options, setOptions] = useState<IBooks | null>(valorPadrao || null)

    const {
        fields: booksFields,
        append: booksAppend,
        update: booksUpdate,
        remove: booksRemove,
    } = useFieldArray({
        control,
        name: "options",
    });

    const handleSelect = (value: IBooks) => {
        setOptions(value)
    }

    return (
        <S.FormLayout onSubmit={handleSubmit(options)}>
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
                            key={value.id} 
                            select={value.id}
                            onClick={() => { 
                                handleSelect(value)

                                booksUpdate(
                                    index,
                                    getValues(`options.${index}`),
                                );
                        
                                booksAppend({
                                    id: value.id,
                                    titulo: value.titulo,
                                    estrelas: value.estrelas,
                                    formato: value.formato,
                                    preco: value.preco
                                })
                            }}
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
                            
                        {booksFields.map(book => (
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
                                key={book.id}
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
                                    <Typography fontSize="0.8rem">{book?.titulo}</Typography>
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
                                    <Typography fontSize="0.8rem">{book?.formato?.join(", ")}</Typography>
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
                                        value={book.estrelas}
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
                                    <Typography fontSize="0.8rem">R${book.preco}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </S.MenuCar>
                </Grid>
            </Grid>
        </S.FormLayout>
    )
}