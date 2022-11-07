import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import NavBar from "../components/navbar"
import Disconnected from "../components/disconnected"
import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "../components/connected"

const Home: NextPage = () => {
  const { connected } = useWallet()

  return (
    <div className={styles.container}>
    <Head>
      <title>RK NFTs</title>
      <meta name="The NFT Collection for Builders" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Box
      w="full"
      h="calc(100vh)"
      bgImage={connected ? "url(/bg.png)" : "url(/home-background.svg)"}
      backgroundPosition="center"
    >
      <Stack w="full" h="calc(100vh)" justify="center">
        <NavBar />

        <Spacer />
        <Center>{connected ? <Connected /> : <Disconnected />}</Center>
        <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/0xrahulk"
                target="_blank"
                rel="noopener noreferrer"
              >
                built by @rk
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home