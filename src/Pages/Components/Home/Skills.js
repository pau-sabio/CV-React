import { Card, Progress, Grid, Text} from "@nextui-org/react";

const title = "Skills";

export const Skills = () => (
    
    <Card isHoverable  css={{ p: "$6" }}>
        <Grid>
            <Text css={{marginBottom: "20px"}} h3>{title}</Text>
        </Grid>
        <Grid>
            <Text css={{marginBottom: "10px"}} h5>Pack Adobe</Text>
            <Progress value={90} color="primary"  status="primary" />
        </Grid>
        <Grid>
            <Text css={{marginBottom: "10px"}} h5>HTML & CSS</Text>
            <Progress value={80} color="secondary" status="primary" />
        </Grid>
        <Grid>
            <Text css={{marginBottom: "10px"}} h5>Angular</Text>
            <Progress value={50} color="success" status="primary" />
        </Grid>
        <Grid>
            <Text css={{marginBottom: "10px"}} h5>React</Text>
            <Progress value={60} color="warning" status="primary" />
        </Grid>
    </Card>
);
