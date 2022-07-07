import { Grid } from "@nextui-org/react";
import { CardFooter } from './Pages/Components/Footer/CardFooter';


export default function Footer() {
    return (
    
    <Grid.Container gap={2} justify="center" alignItems="top">
        <Grid xs={12} sm={8}>
            <CardFooter />
        </Grid>
    </Grid.Container>
)
    }
