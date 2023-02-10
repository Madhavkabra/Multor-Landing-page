import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ImageWithDetail from "../ImageWithDetail";

import Container from "../Container";
import { features } from "./mocks";

export default function FeaturesSection() {
  return (
    <Container sx={{ pb: 15 }} className="max-sm:pt-3 max-sm:pb-[50px]">
      <Stack
        alignItems={"center"}
        flexDirection={"row"}
        gap={6}
        className="max-sm:flex-col"
      >
        {features.map((feature) => {
          return (
            <Box key={feature.heading} className="grow">
              <ImageWithDetail {...feature} />
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}
