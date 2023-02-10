import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import Container from "../Container";

export default function CoverPage() {
  return (
    <Box
      position="relative"
      className="bg-multor-cover h-[721px] no-repeat bg-center bg-cover max-sm:h-[529px] max-sm:bg-left"
    >
      <Container>
        <Stack className="!gap-14 pt-20 max-sm:pt-8">
          <Image
            src={
              "//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"
            }
            alt=""
            width={138}
            height={30}
          />

          <Stack className="gap-9 w-[657px] max-sm:w-[298px] max-sm:self-center">
            <Typography
              fontSize={"5em"}
              lineHeight={"5.12rem"}
              fontWeight={600}
              className="text-teal-950 font-work-sans"
              letterSpacing={"-0.35rem"}
            >
              Describe the value of booking an appointment
            </Typography>
            <Typography
              fontSize={"1.25rem"}
              lineHeight={"1.75rem"}
              fontWeight={400}
              color={"#042F2E"}
              className="font-muli"
              letterSpacing={"0.1rem"}
            >
              No need to get clever. Tell people exactly what you&apos;re
              offering, then use this space to communicate your key value
              proposition.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
