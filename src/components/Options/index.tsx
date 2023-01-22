import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import * as S from "./styles";

interface IOptions {
    id: number;
    titulo: string;
    preco: string;
    formato: string[];
}

interface IOptionsProps {
    options: IOptions[];
}

export const Options: FC<IOptionsProps> = ({
    options
}) => {
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
                flexDirection: "column",
                gap: "1rem"
            }}
        >
            {options.map(value => (
                <S.Section key={value.id}>
                    <Typography>
                        {value.titulo}
                    </Typography>
                    
                    <Typography fontWeight="600">
                        R${value.preco}
                    </Typography>
                    
                    <Typography>
                        {value.formato.join(", ")}
                    </Typography>
                </S.Section>
            ))}  
        </Grid>
    )
}