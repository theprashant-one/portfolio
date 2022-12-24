import { Card, Text, Badge, Col } from "@nextui-org/react";
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
  image,
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
      <Card.Header
      // css={{ position: "absolute", zIndex: 1, top: 5 }}
      >
        <Col>
          <Text
            h3
            css={{
              // backgroundColor: "rgba(0, 0, 0, 0.50)",
              // borderRadius: 5,
              // padding: 2,
              color: "WhiteSmoke",
            }}
          >
            {projectName}
          </Text>
          <span
            style={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: 10,
              rowGap: 10,
            }}
          >
            {techStack.map((ts) => (
              <Badge css={{ fontSize: "$xs", borderColor: "transparent" }}>
                {ts}
              </Badge>
            ))}
          </span>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={
            image
              ? image
              : "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"
          }
          width="100%"
          height="100%"
          alt={projectName}
          css={{
            backgroundColor: "#2f2e2e",
            objectFit: "cover",
            opacity: 0.8,
            // "@xs": {
            //   objectFit: "contain",
            // },
          }}
        />
      </Card.Body>
   
    </Card>
  );
}

