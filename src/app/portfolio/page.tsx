// app/portfolio/page.tsx
'use client';

import { Box, Heading, SimpleGrid, Image, Text } from '@chakra-ui/react';

const portfolioItems = [
  {
    title: 'Wedding of John & Jane',
    image: '/images/john-jane.jpg',
  },
  // Add more items
];

export default function PortfolioPage() {
  return (
    <Box p={6}>
      <Heading mb={6}>Portfolio</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {portfolioItems.map((item, index) => (
          <Box key={index}>
            <Image src={item.image} alt={item.title} borderRadius="md" />
            <Text mt={2}>{item.title}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}