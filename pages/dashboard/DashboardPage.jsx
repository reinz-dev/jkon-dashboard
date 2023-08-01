import {
  Flex,
  VStack,
  IconButton,
  Text,
  HStack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { MdMenu } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Sidebar } from "../../components/Sidebar";
import { AvatarBox } from "../../components/AvatarBox";
import ThemeToggleButton from "../../components/theme-toggle-button";

const DashboardPage = () => {
  const [collapse, setCollapse] = React.useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Lakukan proses logout di sini (misalnya dengan menghapus token atau data sesi)
    // Setelah logout berhasil, alihkan ke halaman login
    router.push("../login/LoginPage");
  };

  return (
    <Flex gap={3} w="full" h="100vh" paddingY={4}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 250 : 100}
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
        bg={useColorModeValue("#ffffff40", "#00000040")}
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Box w="full" h="full">
        <Flex
          w="full"
          h="3%"
          justifyContent="space-between"
          alignItems="center"
          rounded={15}
        >
          <Box>
            <IconButton
              aria-label="Menu Colapse"
              icon={<MdMenu />}
              variant="ghost"
              onClick={() => setCollapse(!collapse)}
            />
          </Box>
          <Box>
            <IconButton
              aria-label="Menu Colapse"
              icon={<AiOutlineSearch />}
              position="relative"
              variant="ghost"
              onClick={() => setCollapse(!collapse)}
            />
            <IconButton
              aria-label="Menu Colapse"
              icon={<AiOutlinePoweroff />}
              position="relative"
              variant="ghost"
              onClick={handleLogout}
            />
            <ThemeToggleButton />
            <AvatarBox />
          </Box>
        </Flex>
        <Flex w="full" h="3%" align="center" mt="1%" gap={2}>
          <Flex
            w="70px"
            h="full"
            align="center"
            justify="center"
            roundedStart={10}
            bg={useColorModeValue("#ffffff40", "#00000040")}
          >
            LOGO
          </Flex>
          <Flex
            w="full"
            h="full"
            align="center"
            roundedEnd={10}
            bg={useColorModeValue("#ffffff40", "#00000040")}
          >
            MAIN
          </Flex>
          <Flex
            w="20%"
            h="full"
            align="center"
            justify="center"
            rounded={10}
            bg={useColorModeValue("#ffffff40", "#00000040")}
          >
            MAIN
          </Flex>
        </Flex>
        <Flex w="full" h="50%" mt="1%" gap={3}>
          <Flex
            w="300px"
            justify="center"
            align="center"
            rounded={10}
            bg={useColorModeValue("#ffffff40", "#00000040")}
          >
            MAIN
          </Flex>
          <Flex
            w="full"
            justify="center"
            align="center"
            rounded={10}
            bg={useColorModeValue("#ffffff40", "#00000040")}
          >
            MAIN
          </Flex>
        </Flex>
        <Flex w="full" h="40%" mt={2} gap={3}>
          <Flex
            w="300px"
            justify="center"
            align="center"
            rounded={10}
            bg={useColorModeValue("#ffffff40", "#00000040")}
          >
            MAIN
          </Flex>
          <Flex
            w="full"
            justify="center"
            align="center"
            rounded={10}
            bg={useColorModeValue("#ffffff40", "#00000040")}
          >
            MAIN
          </Flex>
        </Flex>
      </Box>
      <Flex
        w="20%"
        justify="center"
        align="center"
        rounded={10}
        bg={useColorModeValue("#ffffff40", "#00000040")}
      >
        MAIN
      </Flex>
    </Flex>
  );
};

export default DashboardPage;
