import { Grid, Text } from "@nextui-org/react";
import CardOne from "../../Cards/CardOne";

const SectionFour = () => {
  return (
    <div id="section-4">
      <Text>04. Some Things I’ve Built</Text>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid.Container gap={2}>
          {[0, 1, 2, 3].map(() => (
            <Grid xs={12} md={6}>
              <CardOne />
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </div>
  );
};

export default SectionFour;
