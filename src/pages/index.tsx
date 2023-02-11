import { useForm } from "react-hook-form";
import { Options } from "../components/Options";
import { itens } from "../shared/itens";
import { IOptions } from "../shared/types";

const Home = () => {
    const {
        control,
        trigger
    } = useForm<IOptions>();

    const updateCarrinho = (values: any) => {    
        console.log(values)
    }

    return (
        <Options 
            updateCarrinho={updateCarrinho}
            itens={itens} 
            trigger={trigger}
            control={control}
        />
    )
}

export default Home