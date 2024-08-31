"use client";
import { Heading, Box, Input, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./component/Header";
import { PageTable } from "./component/PageTables";

export default function Home() {
  const [longLink, setLongLink] = useState("");

  let handleShortenURL = () => {
  };
  return (
    <Stack>
      <Header/>
      <PageTable/>






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
