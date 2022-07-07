import { Grid } from "@nextui-org/react";
import { CardImage } from './Components/Home/CardImage';
import { CardText} from './Components/Home/CardText';
import { Experience} from './Components/Home/Experience';
import { Education} from './Components/Home/Education';
import { Skills} from './Components/Home/Skills';
import { Languages} from './Components/Home/Languages';


export const Home = () => (
    <Grid.Container gap={2} justify="center" alignItems="top">
    
    <Grid xs={12} sm={4.01}>
        <CardImage />
    </Grid>

    <Grid xs={12} sm={4.01}>
        <CardText />
    </Grid>

    <Grid xs={12} sm={4.01}>
        <Experience />
    </Grid>

    <Grid xs={12} sm={4.01}>
        <Education />
    </Grid>

    <Grid xs={12} sm={4.01}>
        <Skills />
    </Grid>
    
    <Grid xs={12} sm={4.01}>
        <Languages />
    </Grid>
    
    

    </Grid.Container>
    
);