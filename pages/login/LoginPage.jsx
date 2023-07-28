import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Lakukan validasi kredensial di sini (misalnya dengan mengirimkan data ke server)
    // Gantikan komentar di bawah dengan validasi sesuai dengan username dan password yang benar
    if (username === "reinz" && password === "29121994") {
      // Jika login berhasil, alihkan ke halaman dashboard
      router.push("../dashboard/DashboardPage");
    } else {
      alert("Login failed. Please check your username and password.");
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box p={8} maxWidth="md" borderWidth={1} borderRadius={8} boxShadow="lg">
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" mt={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue" mt={10} w={250} onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default LoginPage;
