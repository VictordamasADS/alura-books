import { useForm } from "react-hook-form";
import { Options } from "../components/Options";
import { itens } from "../shared/itens";
import { IOptions } from "../shared/types";

const Home = () => {
    const {
        handleSubmit,
        getValues,
        control,
    } = useForm<IOptions>();

    const onSubmit = async (values: IOptions) => {
        
        await console.log(values.options)
    }

    return (
        <Options 
            handleSubmit={handleSubmit(onSubmit)}
            itens={itens} 
            getValues={getValues}
            control={control}
        />
    )
}

export default Home