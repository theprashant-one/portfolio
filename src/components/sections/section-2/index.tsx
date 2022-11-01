import { Text, Grid, Image } from "@nextui-org/react";

import { data } from "../../../data";

const SectionTwo = () => {
  return (
    <div id="section-2">
      <Text>01. About Me</Text>
      <Grid.Container gap={2} justify="center" alignItems="center">
        <Grid xs={12} md={6}>
          <Image
            width={400}
            height={250}
            src={require("../../../assets/me.jpeg")}
            alt="Default Image"
            objectFit="contain"
            css={{ borderRadius: "50%" }}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Text h4 css={{ color: "Grey" }}>
            {data.aboutMe}
          </Text>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default SectionTwo;
