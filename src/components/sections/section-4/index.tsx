import { Grid, Text } from "@nextui-org/react";
// import CardOne from "../../Cards/CardOne";

import { data, IProjectData } from "../../../data";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CardOne from "../../Cards/CardOne";

const SectionFour = () => {
  return (
    <div id="section-4">
      <Text>03. Some Things I’ve Built</Text>
      <Carousel emulateTouch showStatus={false} useKeyboardArrows>
        {data.projectData.map((item: IProjectData) => {
          return (
            <div style={{ padding: "2rem", paddingBottom: "4rem" }}>
              <CardOne {...item} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SectionFour;
