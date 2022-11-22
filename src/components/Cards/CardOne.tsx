import {
  Card,
  Grid,
  Text,
  Image,
  Spacer,
  Button,
  Badge,
  Divider,
  Col,
  Row,
} from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";

import { IProjectData } from "../../data";

export default function CardOne({
  projectName,
  techStack,
  about,
  githubLink,
  sourceLink,
  bulletPoints,
  setCardIndex,
  setVisible,
  cardIndex,
}: IProjectData & {
  setCardIndex: Dispatch<SetStateAction<number>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  cardIndex: number;
}) {
  return (
    <Card
      css={{ w: "100%", h: "400px" }}
      isPressable
      onClick={() => {
        setCardIndex(cardIndex);
        setVisible(true);
      }}
    >
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <span style={{ display: "flex", flexWrap: "wrap" }}>
            {techStack.map((ts) => (
              <Badge css={{ fontSize: "$xs" }}>{ts}</Badge>
            ))}
          </span>
          <Text h3 color="white">
            {projectName}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://nextui.org/images/card-example-5.jpeg"
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
      {/* <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col span={3}>
                <Card.Image
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                  css={{ bg: "black", br: "50%" }}
                  height={40}
                  width={40}
                  alt="Breathing app icon"
                />
              </Col>
              <Col>
                <Text color="#d1d1d1" size={12}>
                  Breathing App
                </Text>
                <Text color="#d1d1d1" size={12}>
                  Get a good night's sleep.
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Get App
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer> */}
    </Card>
  );
}

/*
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

*/
