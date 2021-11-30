import React from "react";
import { Button, useTheme } from "@material-ui/core";

import Box from "@material-ui/core/Box";

import GitHubIcon from "@material-ui/icons/GitHub";

export default () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80px"
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
      bgcolor={theme.palette.primary.light}
    >
      <Box>
        <Box pt="3px">2020 Tu quiniela</Box>
      </Box>
    </Box>
  );
};
