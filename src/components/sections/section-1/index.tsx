//@ts-nocheck
import { Button, Spacer, Text } from "@nextui-org/react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

import { data } from "../../../data";

const SectionOne = () => {
  return (
    <div style={{ minHeight: "calc(100vh - 76px)" }}>
      <Text
        h4
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Hi, my name is
      </Text>
      <Text
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",

          "@xsMax": {
            fontSize: "70px",
          },
          fontSize: "80px",
        }}
        weight="bold"
      >
        {data.name}
      </Text>

      <Text
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
          "@xsMax": {
            fontSize: "70px",
          },
          fontSize: "80px",
        }}
        weight="bold"
      >
        {data.lineOne}
      </Text>

      <Text size={30}>{data.lineTwo}</Text>
      <Spacer x={3} />
      <Button
        color="secondary"
        onClick={() => window.open(data.resumeLink)}
        css={{
          backgroundColor: "white",
          borderWidth: "thin",
          borderColor: "white",
          color: "black",
        }}
        bordered
      >
        Resume
      </Button>
      <Spacer x={3} />
      <div
        style={{ display: "flex", justifyContent: "flex-start", columnGap: 10 }}
      >
        <Button
          auto
          icon={<IoLogoGithub style={{ backgroundColor: "transparent" }} />}
          onClick={() => window.open(data.githubLink)}
          css={{
            backgroundColor: "black",
            borderWidth: "thin",
            borderColor: "white",
            color: "white",
          }}
          bordered
        />
        <Button
          icon={<IoLogoLinkedin />}
          auto
          onClick={() => window.open(data.linkdinLink)}
          css={{
            backgroundColor: "black",
            borderWidth: "thin",
            borderColor: "white",
            color: "white",
          }}
          bordered
        />
      </div>
    </div>
  );
};

export default SectionOne;
