import React from "react";
import { Box } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SwitchButtons } from "./SwitchButtons";

export const Sidebar = ({ collapse }) => (
  <React.Fragment>
    <Box w="full">
      <Logo collapse={collapse} />
      <SwitchButtons collapse={collapse} />
      <Navigation collapse={collapse} />
    </Box>
  </React.Fragment>
);
