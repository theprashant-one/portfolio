import {
  Card,
  Grid,
  Text,
  Image,
  Spacer,
  Button,
  Badge,
  Divider,
} from "@nextui-org/react";

import { IProjectData } from "../../data";

export default function CardOne({
  projectName,
  techStack,
  about,
  githubLink,
  sourceLink,
  bulletPoints,
}: IProjectData) {
  return (
    <Card
      variant="bordered"
      css={{
        borderRadius: "$sm",
        maxHeight: "70vw",
        // maxWidth: "70vh",
        overflow: "scroll",
      }}
    >
      <Grid.Container>
        <Grid xs={6}>
          <Image
            src="https://www.itl.cat/pngfile/big/284-2842130_flower-wallpaper-hd-nature.jpg"
            objectFit="fill"
            css={{
              maxHeight: "50vw",
            }}
          />
        </Grid>
        <Grid
          xs={6}
          direction="column"
          alignItems="flex-start"
          css={{
            paddingLeft: "$10",
            paddingRight: "$10",
            paddingTop: "$5",
            paddingBottom: "$5",
            maxHeight: "50vw",
            overflowY: "scroll",
          }}
        >
          <Text css={{ fontSize: "calc(12px + 1vw)", textAlign: "left" }}>
            {projectName}
          </Text>
          <span style={{ display: "flex", flexWrap: "wrap" }}>
            {techStack.map((ts) => (
              <Badge css={{ fontSize: "$sm" }}>{ts}</Badge>
            ))}
          </span>
          <Text
            css={{
              textAlign: "left",
              paddingBottom: "$5",
              fontSize: "calc(5px + 1vw)",
              fontWeight: 500,
            }}
          >
            {about}
          </Text>
          <span style={{ display: "flex", flexDirection: "column" }}>
            {bulletPoints.map((bp) => (
              <Text style={{ fontSize: "calc(5px + 1vw)", textAlign: "left" }}>
                • {bp}
              </Text>
            ))}
          </span>
        </Grid>
      </Grid.Container>
      <Divider />
      <Card.Footer
        css={{ display: "flex", justifyContent: "flex-end" }}
        isBlurred
      >
        <Button
          color="primary"
          auto
          onClick={() => window.open(githubLink, "_blank")}
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
          GitHub
        </Button>
      </Card.Footer>
    </Card>
  );
}

/* 

 <Card.Header>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {projectName}
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
        {about}
      </Card.Body>
      <Card.Footer>
        <Button
          color="primary"
          auto
          onClick={() => window.open(githubLink, "_blank")}
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

*/
