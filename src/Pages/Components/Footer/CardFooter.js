import { Card, Text, Link} from "@nextui-org/react";


export const CardFooter = () => (
    <Card isHoverable  css={{ p: "$6", display: "flex" }}>
        <Text> This site was made by <Link
                icon
                color="primary"
                target="_blank"
                href="https://github.com/pau-sabio"
            >
                Pau Sabio
            </Link> with React 
            </Text>
    </Card>
);
