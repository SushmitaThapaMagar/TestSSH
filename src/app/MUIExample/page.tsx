"use client";
import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";

const destinations = [
  {
    title: "Explore the Majestic Himalayas",
    image: "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg",
    description:
      "The Himalayas offer some of the most stunning trekking routes in the world. Experience the thrill of reaching new heights while surrounded by nature's beauty.",
    price: "$300",
  },
  {
    title: "Discover the Beauty of Patagonia",
    image: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg",
    description:
      "Patagonia is home to breathtaking landscapes, including towering mountains, glaciers, and pristine lakes. It's a paradise for adventurers and nature lovers alike.",
  },
  {
    title: "Journey Through the Swiss Alps",
    image: "https://images.pexels.com/photos/1146642/pexels-photo-1146642.jpeg",
    description:
      "The Swiss Alps offer picturesque trails with stunning mountain views and charming villages. Hike through lush meadows and enjoy the serene atmosphere.",
  },
  {
    title: "Experience the Tranquil Dolomites",
    image: "https://images.pexels.com/photos/5752567/pexels-photo-5752567.jpeg",
    description:
      "The Dolomites are known for their dramatic peaks and serene lakes, making them a perfect destination for trekking and photography. Explore the unique rock formations and vibrant alpine flora.",
  },
  {
    title: "Venture Into the Canadian Rockies",
    image:
      "https://images.pexels.com/photos/28441560/pexels-photo-28441560.jpeg",
    description:
      "The Canadian Rockies boast some of the most breathtaking scenery on the planet. With turquoise lakes, soaring peaks, and diverse wildlife, it's a must-visit for outdoor enthusiasts.",
  },
  {
    title: "Trek the Majestic Altai Mountains",
    image: "https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg",
    description:
      "The Altai Mountains, located in Central Asia, are a hidden gem for trekkers. Experience untouched nature, rich culture, and spectacular views that will leave you in awe.",
  },
];

const TrekkingDestinations: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "25px" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Amazing Trekking Destinations
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        flexWrap="wrap"
        gap={4}
      >
        {destinations.map((destination, index) => (
          <Box key={index} flex="1 1 30%" minWidth="250px">
            <Card
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)", // Zoom in effect
                },
              }}
            >
              <CardMedia
                component="img"
                alt={destination.title}
                height="300"
                image={destination.image}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {destination.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {destination.description}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {destination.price}
                </Typography>
                <Button
                  color="error"
                  style={{
                    marginTop: "10px",
                    marginBottom: "1px",
                    fontStyle: "italic",
                    fontSize: "14px",
                    textTransform: "lowercase",
                  }}
                >
                  Know more....
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <Link href="/DestinationDetails" passHref>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px", marginBottom: "60px" }}
        >
          Explore Your Adventure More
        </Button>
      </Link>
    </Container>
  );
};

export default TrekkingDestinations;
