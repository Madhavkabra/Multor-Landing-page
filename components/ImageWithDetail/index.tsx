import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface ImageWithDetailProps {
  image: string;
  heading: string;
  description: string;
}

export default function ImageWithDetail({
  image,
  heading,
  description,
}: ImageWithDetailProps) {
  return (
    <Card sx={{ maxWidth: 300, minHeight: 300 }}>
      <CardActionArea>
        <CardMedia component="img" image={image} alt={heading} />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle1"
            fontWeight={600}
            className="font-work-sans"
            fontSize={22}
          >
            {heading}
          </Typography>
          <Typography variant="body1" className="font-muli" fontSize={16}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
