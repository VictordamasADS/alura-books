import { Grid } from "@mui/material"
import Cards from "../components/Cards"

const Home = () => {
    return (
        <Grid
            container
            sx={{ display: "flex", alignItems: "flex-start" }}
        >
            <Cards />
        </Grid>
    )
}

export default Home