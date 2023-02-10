import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Container from "../Container";

import ReviewCard from "../ReviewCard";
import { reviews } from "./mocks";

export default function ReviewSection() {
  return (
    <Container sx={{ pb: 15 }} className="max-sm:pt-2 max-sm:pb-[50px]">
      <Stack gap={10} width={"full"} className="max-sm:gap-10">
        <Box width={300} className="max-sm:w-64" alignSelf={"center"}>
          <Typography
            align="center"
            fontSize={12}
            fontWeight={600}
            className="text-teal-400"
          >
            DON&apos;T JUST TAKE OUR WORD FOR IT
          </Typography>
        </Box>
        <Stack
          alignItems={"center"}
          flexDirection={"row"}
          gap={6}
          className="max-sm:flex-col"
        >
          {reviews.map((review) => {
            return <ReviewCard key={review.name} {...review} />;
          })}
        </Stack>
      </Stack>
    </Container>
  );
}
