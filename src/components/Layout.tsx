import { Box } from "./Box";
import { Content } from "./Content";

export const Layout = ({ children }: { children: any }) => (
  <Box
    css={{
      maxW: "100%",
      position: "relative",
      overflow: "visible scroll",
    }}
  >
    {children}
    <Content />
  </Box>
);
