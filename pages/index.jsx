import {
  Flex,
  Box,
  VStack,
  SimpleGrid,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MdMenu } from "react-icons/md";
import { Sidebar } from "../components/Sidebar";

const IndexPage = () => {
  const [collapse, setCollapse] = React.useState(false);

  return (
    <Flex gap={3} w="full" h="100vh" paddingY={4}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 350 : 100}
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
        bg={useColorModeValue("#ffffff40", "#17223f40")}
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Flex w="full" h="full" gap={3}>
        <VStack w="30%">
          <Flex
            as="main"
            w="full"
            h="50%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
            borderRadius="3xl"
            bg={useColorModeValue("#ffffff40", "#17223f40")}
          >
            <IconButton
              aria-label="Menu Colapse"
              icon={<MdMenu />}
              position="absolute"
              top={6}
              left={6}
              onClick={() => setCollapse(!collapse)}
            />
            <Text fontSize={30} color="gray.300">
              Main
            </Text>
          </Flex>
          <Flex
            as="main"
            w="full"
            h="50%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
            borderRadius="3xl"
            bg={useColorModeValue("#ffffff40", "#17223f40")}
          >
            <Text fontSize={30} color="gray.300">
              Main
            </Text>
          </Flex>
        </VStack>
        <VStack w="100%">
          <Flex
            as="main"
            w="100%"
            h="60%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
            borderRadius="3xl"
            bg={useColorModeValue("#ffffff40", "#17223f40")}
          >
            <Text fontSize={30} color="gray.300">
              Main
            </Text>
          </Flex>
          <Flex
            as="main"
            w="100%"
            h="40%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
            borderRadius="3xl"
            bg={useColorModeValue("#ffffff40", "#17223f40")}
          >
            <Text fontSize={30} color="gray.300">
              Main
            </Text>
          </Flex>
        </VStack>
        <VStack w="30%">
          <Flex
            as="main"
            w="100%"
            h="30%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
            borderRadius="3xl"
            bg={useColorModeValue("#ffffff40", "#17223f40")}
          >
            <Text fontSize={30} color="gray.300">
              Main
            </Text>
          </Flex>
          <Flex
            as="main"
            w="100%"
            h="20%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
            borderRadius="3xl"
            bg={useColorModeValue("#ffffff40", "#17223f40")}
          >
            <Text fontSize={30} color="gray.300">
              Main
            </Text>
          </Flex>
          <Flex
            as="main"
            w="100%"
            h="50%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
            borderRadius="3xl"
            bg={useColorModeValue("#ffffff40", "#17223f40")}
          >
            <Text fontSize={30} color="gray.300">
              Main
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
