import {
  Flex,
  IconButton,
  Box,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { MdMenu } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Sidebar } from "../../components/Sidebar";
import { AvatarBox } from "../../components/AvatarBox";
import ThemeToggleButton from "../../components/theme-toggle-button";
import { MotionBox } from "framer-motion";

const DashboardPage = () => {
  const [collapse, setCollapse] = React.useState(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // Lakukan proses logout di sini (misalnya dengan menghapus token atau data sesi)
    // Setelah logout berhasil, alihkan ke halaman login
    router.push("../login/LoginPage");
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
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
        bg={useColorModeValue("bgLight", "bgDark")}
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
              mr={2}
            />
            Hallo Reinz, welcome back
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
        <Flex w="full" h="3%" align="center" mt={2} gap={2}>
          <Flex
            w="70px"
            h="full"
            align="center"
            justify="center"
            rounded={10}
            bg={useColorModeValue("bgLight", "bgDark")}
          >
            ICON
          </Flex>
          <Flex
            w="full"
            h="full"
            align="center"
            justify="center"
            rounded={10}
            bg={useColorModeValue("bgLight", "bgDark")}
          >
            NEWS
          </Flex>
          <Flex
            w="20%"
            h="full"
            align="center"
            justify="center"
            rounded={10}
            bg={useColorModeValue("bgLight", "bgDark")}
          >
            MAIN
          </Flex>
        </Flex>
        <Flex w="full" h="50%" mt={2} gap={3}>
          <Box w="300px" h="full">
            <Flex
              w="300px"
              h="25%"
              mb={2}
              justify="center"
              align="center"
              rounded={10}
              bg={useColorModeValue("bgLight", "bgDark")}
            >
              MAIN
            </Flex>
            <Flex
              w="300px"
              h="73.8%"
              justify="center"
              align="center"
              rounded={10}
              bg={useColorModeValue("bgLight", "bgDark")}
            >
              MAIN
            </Flex>
          </Box>
          <Flex
            w="full"
            justify="center"
            align="center"
            rounded={10}
            bg={useColorModeValue("bgLight", "bgDark")}
            onClick={handleOpenModal}
            cursor="pointer"
          >
            MAIN
          </Flex>
        </Flex>
        <Flex w="full" h="41.5%" mt={2} gap={3}>
          <Flex
            w="1200px"
            justify="center"
            align="center"
            rounded={10}
            bg={useColorModeValue("bgLight", "bgDark")}
          >
            MAIN
          </Flex>
          <Flex
            w="full"
            justify="center"
            align="center"
            rounded={10}
            bg={useColorModeValue("bgLight", "bgDark")}
          >
            MAIN
          </Flex>
        </Flex>
      </Box>
      <Flex
        w="15%"
        justify="center"
        align="center"
        rounded={10}
        bg={useColorModeValue("bgLight", "bgDark")}
      >
        MAIN
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={handleCloseModal} size="6xl">
        <ModalContent bg="transparent" backdropFilter="blur(8px)">
          <ModalHeader>Modal Judul</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
              also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham.
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default DashboardPage;
