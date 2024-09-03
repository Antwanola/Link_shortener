"use client";
import { Heading, Box, Input, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./component/Header";
import { Tabb } from "./component/Tabs";

export default function Home() {
  const [longLink, setLongLink] = useState("");

  let handleShortenURL = () => {
  };
  return (
    <Stack>
      <Header/>
      <Tabb/>






      {/* <Heading color="blue">Hello</Heading>
      <Box>
        {" "}
        <Input
          placeholder="input URL"
          value={longLink}
          onChange={(e) => setLongLink(e.target.value)}
          size="sm"
        />
        <Button onClick={handleShortenURL}>Click</Button>
      </Box>
      <Box>{longLink}</Box> */}
    </Stack>
  );
}
