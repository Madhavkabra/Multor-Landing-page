import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Container from "../Container";

export default function VideoSection() {
  return (
    <>
      <Box position="relative">
        <Box
          position="absolute"
          height={646}
          width={"100%"}
          className={"bg-cyan-100/50 max-sm:h-[403px]"}
        />
      </Box>

      <Container sx={{ py: 15 }} className="max-sm:py-[50px]">
        <Stack
          gap={10}
          alignItems={"center"}
          zIndex={1}
          position="relative"
          className="max-sm:gap-8"
        >
          <Stack gap={3} alignItems={"center"}>
            <Box width={500} className="max-sm:w-96">
              <Typography
                fontWeight={600}
                fontSize={"3rem"}
                lineHeight={1.15}
                align="center"
                className="font-work-sans"
              >
                Show visitors what they&apos;re signing up for
              </Typography>
            </Box>
            <Box width={540} className="max-sm:w-96">
              <Typography align="center" fontSize={17} className="font-muli">
                Include a video or photo from one of your sessions to help
                people understand your service (or just to hype ‘em up).
              </Typography>
            </Box>
          </Stack>

          <iframe
            width={"100%"}
            className="aspect-[94/53]"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          />
        </Stack>
      </Container>
    </>
  );
}
