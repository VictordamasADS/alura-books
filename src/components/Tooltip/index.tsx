import { IconButton, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import * as S from "./styles";

interface ITooltip {
    onClick?: () => void;
    title: string;
    position: "right" | "left" | "top" | "bottom";
    icon: ReactNode;
}

const Tooltip: FC<ITooltip> = ({
    position,
    icon,
    title,
    onClick
}) => {
    return (
        <S.TooltipIcon
            onClick={onClick}
            placement={position}
            title={
                <Typography
                    sx={{
                        color: "#FFF",
                        fontSize: "1rem"
                    }}
                >
                    {title}
                </Typography>
            }
        >
            <IconButton>
                {icon}
            </IconButton>
        </S.TooltipIcon>

    )
}

export default Tooltip