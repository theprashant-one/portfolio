import {
  Card,
  Grid,
  Text,
  Link,
  Image,
  Spacer,
  Button,
} from "@nextui-org/react";

import { IProjectData } from "../../data";

export default function CardOne({
  name,
  techStack,
  about,
  link,
  sourceLink,
}: IProjectData) {
  return (
    <Card css={{ p: "$1", mw: "500px" }} variant="bordered">
      <Card.Header>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {name}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Image
          src="https://www.itl.cat/pngfile/big/284-2842130_flower-wallpaper-hd-nature.jpg"
          height={300}
          width={500}
          objectFit="cover"
          css={{ borderRadius: "10px" }}
        />
        <Spacer />
        <Text size="$xs">Built using {techStack}</Text>
        {about.map((ab) => {
          return <Text weight={"thin"}>- {ab}</Text>;
        })}
      </Card.Body>
      <Card.Footer>
        <Button
          color="primary"
          auto
          onClick={() => window.open(link, "_blank")}
        >
          Live App
        </Button>
        <Spacer x={1} />
        <Button
          ghost
          color="primary"
          auto
          onClick={() => window.open(sourceLink, "_blank")}
        >
          GitHub.
        </Button>
      </Card.Footer>
    </Card>
  );
}
