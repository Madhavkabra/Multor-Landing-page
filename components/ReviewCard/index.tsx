import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Image from "next/image";

interface ReviewCardProps {
  rating: number;
  review: string;
  name: string;
  place: string;
  image: string;
}

export default function ReviewCard({
  rating,
  review,
  name,
  place,
  image,
}: ReviewCardProps) {
  return (
    <Stack width={"100%"} gap={4} flexDirection={"column"} flexGrow={"1"}>
      <Box>
        <Rating
          value={rating}
          size="medium"
          precision={0.5}
          className={"text-teal-400"}
          readOnly
        />
        <Typography
          fontSize={"24px"}
          lineHeight="30px"
          className="italic max-w-xs text-slate-700 font-muli"
        >
          {review}
        </Typography>
      </Box>

      <Stack flexDirection={"row"} gap={3}>
        <Image
          width={50}
          height={50}
          alt={"A generic profile picture"}
          src={image}
        />

        <Stack gap={1} justifyContent={"center"}>
          <Typography fontSize={"0.75rem"} fontWeight={600}>
            {name}
          </Typography>
          <Typography fontSize={"0.75rem"}>{place}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
