import { Card, Col, Text } from "@nextui-org/react";

export const CardImage = () => (
  <Card isHoverable>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Hey!
        </Text>
        <Text h4 color="white">
          Want to know about me?
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
);
