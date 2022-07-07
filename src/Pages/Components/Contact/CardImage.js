import { Card, Col, Text } from "@nextui-org/react";

export const CardImage = () => (
  <Card isHoverable>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Contact
        </Text>
        <Text h4 color="white">
          Send me an e-mail
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://images.pexels.com/photos/2975688/pexels-photo-2975688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      objectFit="cover"
      width="100%"
      height={500}
      alt="Card image background"
    />
  </Card>
);
