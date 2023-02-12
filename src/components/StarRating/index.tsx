import { Rating } from "@mui/material";
import { FC } from "react";

interface IStarRating {
    name: string;
    value: number;
    readOnly: boolean;
}

const StarRating: FC<IStarRating> = ({
    name,
    value,
    readOnly
}) => {
    return (
        <Rating 
            name={name}
            value={value}
            readOnly={readOnly}
        />
    )
}

export default StarRating