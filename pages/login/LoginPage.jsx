import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  Text,
  FormLabel,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Lakukan validasi kredensial di sini (misalnya dengan mengirimkan data ke server)
    // Gantikan komentar di bawah dengan validasi sesuai dengan username dan password yang benar
    if (username === "admin" && password === "admin") {
      // Jika login berhasil, alihkan ke halaman dashboard
      router.push("../dashboard/DashboardPage");
    } else {
      alert("Login failed. Please check your username and password.");
    }
  };

  const handleKeyPress = (event) => {
    // Jika tombol "Enter" ditekan dan form valid, maka lakukan login
    if (event.key === "Enter" && username !== "" && password !== "") {
      handleLogin();
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="md"
        borderRadius={8}
        boxShadow="lg"
        bg="blackAlpha.300"
        backdropFilter="blur(8px)"
      >
        <Box fontSize={25} align="center" justify="center" mb={10}>
          <Text justifyContent="center">Login</Text>
        </Box>
        <FormControl id="username" isRequired>
          <Input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </FormControl>
        <FormControl id="password" mt={4} isRequired>
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </FormControl>
        <Button colorScheme="blue" mt={5} w={250} onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default LoginPage;
