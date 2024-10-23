// app/contact/page.tsx
'use client';

import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

export default function ContactPage() {
  return (
    <Box p={6} maxW="600px" mx="auto">
      <Heading mb={6}>Contact Us</Heading>
      <form>
        <FormControl id="name" mb={4}>
          <FormLabel>Your Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Your Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Your Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="brand" type="submit">
          Send Message
        </Button>
      </form>
    </Box>
  );
}