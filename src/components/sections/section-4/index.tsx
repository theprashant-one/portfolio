import { Grid, Text } from "@nextui-org/react";
import CardOne from "../../Cards/CardOne";

import { data, IProjectData } from "../../../data";

const SectionFour = () => {
  return (
    <div id="section-4">
      <Text>03. Some Things I’ve Built</Text>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid.Container gap={2}>
          {data.projectData.map((ele: IProjectData) => (
            <Grid xs={12} md={6}>
              <CardOne {...ele} />
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </div>
  );
};

export default SectionFour;
