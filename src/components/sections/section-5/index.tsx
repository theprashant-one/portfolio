import { Button, Text } from "@nextui-org/react";

import { data } from "../../../data";

const SectionFive = () => {
  return (
    <div id="section-5" style={{ marginBottom: "3rem" }}>
      <Text>04. Contact</Text>
      <Text h1 css={{ textAlign: "center" }}>
        Get in Touch
      </Text>
      <Text h5 css={{ textAlign: "center" }}>
        {data.getInTouch}
      </Text>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => window.open(`mailto:${data.contactemail}`)}>
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default SectionFive;
