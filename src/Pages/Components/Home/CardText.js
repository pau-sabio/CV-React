import { Card, Text, User, Link, } from "@nextui-org/react";

export const CardText = () => (
    <Card isHoverable  css={{ p: "$6" }}>
        <Card.Header css={{marginLeft: "-20px"}}>
        <User
            src="https://media-exp2.licdn.com/dms/image/C4D03AQGKEsSoYENBsw/profile-displayphoto-shrink_800_800/0/1602583612181?e=1662595200&v=beta&t=-uYr-qLAC6qZxDmuTgF3Pgz_iHZFGQ5eHLcdWesbzL8"
            name="Pau Sabio"
            description="Product Designer at Leadtech"
            color="primary"
            bordered
            size="lg"
        />
            
        </Card.Header>
        <Card.Body css={{py: "$2" }}>
            <Text css={{marginRight: "20px"}}>
            I am passionate about the digital environment, although my environment is somewhat "vintage". Fan of vinyl music and classic cars.
            I consider myself a very decisive and curious person, eager to teach and learn new things every day.
            I have experience carrying out web and app design projects, design systems and identity. I started with small startup projects, later as Freelance and also went through larger companies.
            </Text>
        </Card.Body>
            
        <Card.Footer>
            <Link
                icon
                color="primary"
                target="_blank"
                href="https://www.linkedin.com/in/pau-sabio-doblas/"
            >
                Let's visit my Linkedin
            </Link>
        </Card.Footer>
    </Card>
);
