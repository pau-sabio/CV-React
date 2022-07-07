import { Card, Grid, Row, Text } from "@nextui-org/react";

const list = [
  {
    title: "Entrebusiness",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5b8596130981569.618bf2147b7ec.png",
    description: "UX/UI Design",
    link: "https://www.behance.net/gallery/130981569/Entrebusiness-UXUI-Design"
  },
  {
    title: "Traspacar",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ed9d38140423181.6241d4f0cff6e.png",
    description: "UX/UI Design + Rebranding",
    link: "https://www.behance.net/gallery/140423181/Traspacar-Brand-Redesign"
  },
  {
    title: "Recomotor",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/19e8ed137826657.6245b59bcb8c0.png",
    description: "UX/UI Design",
    link: "https://www.behance.net/gallery/137826657/Recomotor-UXUI-Design"
  },
  {
    title: "Paperfy",
    img: "https://uploads-ssl.webflow.com/624ee5a5f149f94dda60bac2/624f095da2728d0c99b0bb12_paperfy-p-1080.png",
    description: "UX/UI Design",
    link: ""
  },

];

export const CardImage = () => (
  
        <Grid.Container gap={2} justify="center" alignItems="top">
        {list.map((item, index) => (
          <Grid xs={12} sm={6}>
            <Card isPressable isHoverable>
              <Card.Body css={{ p: 0 }}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Card.Image
                  src={item.img}
                  objectFit="cover"
                  width="100%"
                  height={300}
                  alt={item.title}
                />
                </a>
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {item.description}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
  
);
