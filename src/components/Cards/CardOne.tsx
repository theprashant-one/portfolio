import { Card, Grid, Text, Link, Image, Spacer } from "@nextui-org/react";

export default function CardOne() {
  return (
    <Card css={{ p: "$6", mw: "400px" }} isHoverable variant="bordered">
      <Card.Header>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Next UI
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Image
          src="https://www.itl.cat/pngfile/big/284-2842130_flower-wallpaper-hd-nature.jpg"
          height={200}
          width={400}
          objectFit="contain"
          css={{ borderRadius: "10px" }}
        />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          alias voluptate nihil aut quae maxime voluptatibus, molestiae earum!
          Eius dolorem itaque, eos iusto voluptatum sapiente unde nisi ipsum est
          aut! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          tenetur aliquam vero eos corrupti porro ipsa quod maiores, officia id
          similique beatae nobis veniam repudiandae ipsum in, natus magni
          eligendi?
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          color="primary"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          Live App
        </Link>
        <Spacer x={1} />
        <Link
          color="primary"
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </Card.Footer>
    </Card>
  );
}
