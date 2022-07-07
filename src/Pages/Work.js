import { Grid } from "@nextui-org/react";
import { CardImage } from './Components/Work/CardImage';



export const Work = () => (
    <Grid.Container gap={2} justify="center" alignItems="top">
    
    <Grid xs={12} sm={8}>
        <CardImage />
    </Grid>

    </Grid.Container>
    
);