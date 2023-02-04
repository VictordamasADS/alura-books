import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import * as S from "./styles";

interface IOptions {
    id: number;
    titulo: string;
    preco: string;
    formato: string[];
}

interface IOptionsProps {
    options: IOptions[];
    valorPadrao?: IOptions | null;
    onChange?: (opcao: IOptions) => void; 
}

export const Options: FC<IOptionsProps> = ({
    options,
    onChange,
    valorPadrao
}) => {
    const [select, setSelect] = useState<IOptions | null>(valorPadrao || null);

    const handleSelect = (values: IOptions) => {
        setSelect(values)

        if(onChange) {
            onChange(values)
        }

        console.log(values)
    }

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
                <S.Section 
                    onClick={() => handleSelect(value)}
                    key={value.id} 
                    select={select?.id === value.id}
                >
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