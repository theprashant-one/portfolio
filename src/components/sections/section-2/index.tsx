import { Text, Grid, Image } from "@nextui-org/react";

import { data } from "../../../data";

const SectionTwo = () => {
  return (
    <div id="section-2">
      <Text>About Me</Text>
      <Grid.Container gap={2} justify="center" alignItems="center">
        <Grid xs={12} md={6}>
          <div
            style={{
              height: 400,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={require("../../../assets/me.jpeg")}
              // src={
              //   "https://media.istockphoto.com/photos/portrait-of-handsome-attractive-positive-curly-haired-indian-or-guy-picture-id1392944438?b=1&k=20&m=1392944438&s=170667a&w=0&h=Jc7QEq4WkReR97ysAgcM6tFU6F6uGmtFjw5zxIZB8c0="
              // }
              alt="My Profile Image"
              objectFit="contain"
              css={{
                borderRadius: 10,
                backgroundColor: "transparent",
                width: 300,
                height: 300,
              }}
            />
          </div>
        </Grid>
        <Grid xs={12} md={6}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.aboutMe.map((ab) => {
              return (
                <Text h4 css={{ color: "WhiteSmoke" }}>
                  {ab}
                </Text>
              );
            })}
          </div>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default SectionTwo;
