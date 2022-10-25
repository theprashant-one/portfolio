import { Text, Grid, Image } from "@nextui-org/react";

const SectionTwo = () => {
  return (
    <div id="section-2">
      <Text>01. About Me</Text>
      <Grid.Container gap={2} justify="center" alignItems="center">
        <Grid xs={12} md={6}>
          <Image
            width={400}
            height={400}
            src="https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg"
            alt="Default Image"
            objectFit="fill"
            style={{ borderRadius: "50%" }}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Text h4 css={{ color: "Grey" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            commodi repellat eos! Doloremque reiciendis delectus dolor aliquam
            inventore eligendi fugit perspiciatis accusantium fugiat? Unde vel
            est accusamus culpa, eveniet molestiae! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt minima optio odio, ad
            sapiente molestias corrupti illum aspernatur laborum ipsa
            consectetur obcaecati explicabo ratione, facilis veniam, id
            voluptates? Molestias, eaque? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Adipisci, voluptates itaque maxime labore, magni
            distinctio officiis
          </Text>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default SectionTwo;
