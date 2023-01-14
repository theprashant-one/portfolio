import { Spacer } from "@nextui-org/react";
import { Box } from "./Box";
import SectionOne from "./sections/section-1";
import SectionTwo from "./sections/section-2";
import SectionThree from "./sections/section-3";
import SectionThreeNew from "./sections/section-3/New";
import SectionFour from "./sections/section-4";
import SectionFive from "./sections/section-5";

export const Content = () => (
  <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "80%" }}>
        <Spacer y={1} />
        <SectionOne />
        <Spacer y={2} />
        <SectionTwo />
        <Spacer y={2} />
        {/* <SectionThree /> */}
        <SectionThreeNew/>
        <Spacer y={2} />
        <SectionFour />
        <Spacer y={2} />
        <SectionFive />
      </div>
    </div>
  </Box>
);
