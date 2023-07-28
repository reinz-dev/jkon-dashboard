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
      <Box w="full" h="full" gap={3}>
        <Box w="full" align="right">
          <IconButton
            aria-label="Menu Colapse"
            icon={<AiOutlineSearch />}
            mr={2}
            variant="ghost"
            onClick={() => setCollapse(!collapse)}
          />
          <IconButton
            aria-label="Menu Colapse"
            icon={<MdMenu />}
            position="relative"
            mr={2}
            variant="ghost"
            onClick={() => setCollapse(!collapse)}
          />
          <IconButton
            aria-label="Menu Colapse"
            icon={<AiOutlinePoweroff />}
            position="relative"
            mr={2}
            variant="ghost"
            onClick={handleLogout}
          />
          <ThemeToggleButton />
          <AvatarBox />
        </Box>
      </Box>
    </Flex>
  );
};

export default DashboardPage;
