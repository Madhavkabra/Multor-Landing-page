import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";

import Container from "../Container";

export default function Footer() {
  return (
    <Box className="bg-teal-950">
      <Container>
        <Stack
          height={135}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="max-sm:flex-col max-sm:justify-center max-sm:gap-8"
        >
          <Image
            width={90}
            height={20}
            src={
              "https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
            }
            alt="Multor"
          />
          <Typography fontSize={12} className="text-gray-400">
            © 2020 Insert Name Here. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
