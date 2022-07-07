import { Card, Collapse, Text, Grid, Avatar} from "@nextui-org/react";

const title = "Education";

const list = [
    {
        title: "Upgrade",
        img: "https://media-exp2.licdn.com/dms/image/C4D0BAQGoLdnPUaeIPg/company-logo_100_100/0/1599238417058?e=1665014400&v=beta&t=zC0TDLQpcP3srfSQ7KYXH7yOVp_WSopuT5DHckb5CtI",
        description: "Bootcamp, Front-end Developer",
        date: "mar. 2022 - jul. 2022",
        color: "primary"
    },
    {
        title: "EINA",
        img: "https://media-exp2.licdn.com/dms/image/C560BAQG7CwRKvsKDZA/company-logo_100_100/0/1588164837081?e=1665014400&v=beta&t=VnlfAX-V-RfcHoDWzxAkEPkQGjQAnsPrQjter4Ai2d8",
        description: "Grado en Diseño, Diseño gráfico",
        date: "2016 - 2020",
        color: "warning"
    },
    {
        title: "HTL Escuela de Empresas",
        img: "https://media-exp2.licdn.com/dms/image/C560BAQGWZ4rlaDD6rA/company-logo_100_100/0/1551359528776?e=1665014400&v=beta&t=SkrBvqQ0hnkqrMVgL-v2B09ctm_jsLbJtPOmYztakXQ",
        description: "Curso Universitario de Especialización en Branding",
        date: "sept. 2020 - ene. 2021",
        color: "warning"
    },
];

export const Education = () => (
    
    <Card isHoverable  css={{ p: "$6" }}>
            <Grid>
            <Text css={{marginBottom: "20px"}} h3>{title}</Text>
            
                <Collapse.Group shadow>
                {list.map((item, index) => (
                    <Collapse
                        title={<Text h4>{item.title}</Text>}
                        subtitle={item.description}
                        contentLeft={
                            <Avatar
                            src={item.img}
                            color={item.color}
                            bordered
                            size="lg"
                            />
                        }
                        >
                        <Text>
                        {item.date}
                        </Text>
                    </Collapse>
                    ))}
                </Collapse.Group>
            </Grid>
    </Card>
);
