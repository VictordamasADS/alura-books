import { Grid } from "@mui/material"
import Cards from "../components/Cards"
import { Options } from "../components/Options"
import { itens } from "../shared/itens"

const Home = () => {
    return (
        <Grid
            container
            sx={{ display: "flex", alignItems: "flex-start", gap: "2rem" }}
        >
            <Cards />

            <Options options={itens.options} />
        </Grid>
    )
}

export default Home