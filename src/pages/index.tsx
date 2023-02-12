import { useForm } from "react-hook-form";
import { Options } from "../components/Options";
import { itens } from "../shared/itens";
import { IOptions } from "../shared/types";

const Home = () => {
    const {
        control,
        getValues
    } = useForm<IOptions>();

    const updateCarrinho = (values: any) => {    
        console.log(values)
    }

    return (
        <Options 
            updateCarrinho={updateCarrinho}
            getValues={getValues}
            itens={itens} 
            control={control}
        />
    )
}

export default Home