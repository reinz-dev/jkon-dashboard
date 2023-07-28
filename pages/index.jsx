import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import Dashboard from "../pages/dashboard/DashboardPage";
import Login from "../pages/login/LoginPage";

const HomePage = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      // Simulasi proses login dengan delay selama 2 detik
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Lakukan validasi kredensial di sini (misalnya dengan mengirimkan data ke server)
      // Gantikan komentar di bawah dengan validasi sesuai dengan username dan password yang benar
      if (data.username === "username" && data.password === "password") {
        setLoggedIn(true);
        setUsername(data.username);
        toast.success("Login successful!");
      } else {
        toast.error("Login failed. Please check your username and password.");
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred during login.");
    }
  };

  const handleLogout = () => {
    // Logika untuk logout, seperti menghapus token atau session
    // Selanjutnya, set loggedIn ke false untuk kembali ke halaman login
    setLoggedIn(false);
  };

  return (
    <div>
      {!loggedIn ? (
        <Login
          handleSubmit={handleSubmit(handleLogin)}
          register={register}
          errors={errors}
          loading={loading}
        />
      ) : (
        <Dashboard username={username} handleLogout={handleLogout} />
      )}
      <ToastContainer />
    </div>
  );
};

export default HomePage;
