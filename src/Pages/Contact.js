import { Grid } from "@nextui-org/react";
import { CardImage } from './Components/Contact/CardImage';
import { Form} from './Components/Contact/Form';



export const Contact = () => (
  <Grid.Container gap={2} justify="center" alignItems="top">
    
  <Grid xs={12} sm={4.01}>
      <CardImage />
  </Grid>

  <Grid xs={12} sm={4.01}>
      <Form />
  </Grid>
  </Grid.Container>
    
);