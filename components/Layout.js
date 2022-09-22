import { Content } from "./Content.js"
import { Box } from "./Box.js";
import { Topbar } from "./Topbar.js.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    <Topbar />
    {children}
  </Box>
);