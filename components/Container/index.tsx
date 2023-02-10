import React from "react";
import { SxProps } from "@mui/material";
import MuiContainer from "@mui/material/Container";

interface ContainerProps {
  children: React.ReactNode;
  sx?: SxProps;
  className?: string;
}

export default function Container({ children, sx, className }: ContainerProps) {
  return (
    <MuiContainer
      maxWidth={"lg"}
      sx={sx}
      className={`max-sm:mx-auto max-sm:w-[320px] w-[940px] ${className}`}
    >
      {children}
    </MuiContainer>
  );
}
