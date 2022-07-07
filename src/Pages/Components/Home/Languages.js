import { Card, Progress, Grid, Text} from "@nextui-org/react";

const title = "Languages";

export const Languages= () => (
    
    <Card isHoverable  css={{ p: "$6" }}>
        <Grid>
            <Text css={{marginBottom: "20px"}} h3>{title}</Text>
        </Grid>
        <Grid>
            <Text css={{marginBottom: "10px"}} h5>English</Text>
            <Progress value={70} color="primary"  status="primary" />
        </Grid>
        <Grid>
            <Text css={{marginBottom: "10px"}} h5>Spanish</Text>
            <Progress value={100} color="error" status="primary" />
        </Grid>
        <Grid>
            <Text css={{marginBottom: "10px"}} h5>Catalan</Text>
            <Progress value={100} color="warning" status="primary" />
        </Grid>
        <Grid>
            <Text css={{marginBottom: "10px"}} h5>Shyriiwook</Text>
            <Progress value={90} color="success" status="primary" />
        </Grid>
    </Card>
);
