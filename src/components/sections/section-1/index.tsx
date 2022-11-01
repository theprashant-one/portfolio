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
      <Button shadow color="secondary">
        Resume
      </Button>
      <Spacer x={3} />
      <div
        style={{ display: "flex", justifyContent: "flex-start", columnGap: 10 }}
      >
        <Button
          auto
          icon={<IoLogoGithub style={{ backgroundColor: "transparent" }} />}
          onClick={() => window.open("https://github.com/prashantkumar23")}
        />
        <Button
          icon={<IoLogoLinkedin />}
          auto
          onClick={() =>
            window.open("https://www.linkedin.com/in/prashantkumar23")
          }
        />
      </div>
    </div>
  );
};

export default SectionOne;
