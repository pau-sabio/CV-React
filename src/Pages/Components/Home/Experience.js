import { Card, Collapse, Text, Grid, Avatar} from "@nextui-org/react";

const title = "Experience";

const list = [
    {
        title: "Leadtech",
        img: "https://media-exp2.licdn.com/dms/image/C4E0BAQGm6GIMqyYrbg/company-logo_100_100/0/1656910905509?e=1665014400&v=beta&t=4irHN_sD63vtOPiGwv1Q09pi_OKg3AcsIJbT6X432JM",
        description: "Product Designer",
        date: "jun. 2022 - Now",
        color: "primary"
    },
    {
        title: "Edag",
        img: "https://media-exp2.licdn.com/dms/image/C4D0BAQFokxJ7c9Oj8w/company-logo_100_100/0/1568641479711?e=1665014400&v=beta&t=EGPu_C3yGCc8ykCRcVS332sBXcSWaVtyJPU2dBFGRag",
        description: "HMI UX Designer",
        date: "ene. 2022 - mar. 2022",
        color: "warning"
    },
    {
        title: "Group RTP",
        img: "https://media-exp2.licdn.com/dms/image/C4D0BAQEP87dTtBP9OQ/company-logo_100_100/0/1519952369369?e=1665014400&v=beta&t=s92hSs8MvlgMLN61aaS8I31z2F9prGSheAcGd2xlxK0",
        description: "Graphic Designer & Community Manager",
        date: "ene. 2021 - dic. 2021",
        color: "warning"
    },
    {
        title: "Recomotor",
        img: "https://media-exp2.licdn.com/dms/image/C4E0BAQGpdKpyWsrlSw/company-logo_100_100/0/1626610500750?e=1665014400&v=beta&t=8Dr961KqdTf8Ly3Yil0F774C3v2y0RTWUP_ruDI7ybE",
        description: "Product Designer",
        date: "jun. 2021 - nov. 2021",
        color: "warning"
    },
    {
        title: "Entrebusiness",
        img: "https://media-exp2.licdn.com/dms/image/C4D0BAQEpTfuxcwwCsw/company-logo_100_100/0/1612888748335?e=1665014400&v=beta&t=qf2guhN2Enoqn3T11IJCMXa4MTCwXN0kDL4CyJZ1tZw",
        description: "Product Designer",
        date: "ene. 2021 - jun. 2021",
        color: "warning"
    },
    {
        title: "Traspacar",
        img: "https://media-exp2.licdn.com/dms/image/C4D0BAQGAklmiA99_8g/company-logo_100_100/0/1603973923077?e=1665014400&v=beta&t=zCskZ_K9D1alfhID6gvxKkTAfsxlaKliHQD8QXz7ECM",
        description: "Product Designer",
        date: "sept. 2019 - sept. 2020",
        color: "warning"
    },
];

export const Experience = () => (
    
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
