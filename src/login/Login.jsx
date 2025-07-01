import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import bground from "../assets/images/homeImage.png";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "123456") {
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    } else {
      setErrorMessage("Username atau password salah");
    }
    if (!username || !password) {
      setErrorMessage("Username dan password tidak boleh kosong");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password minimal 6 karakter");
      return;
    }
  };
  return (
    <div className=" bg-gray-700  text-white">
      <div className=" grid  grid-cols-1 md:grid-cols-2 gap-4  items-center justify-center md:mx-30 min-h-screen">
        <div
          className="relative flex flex-col items-center justify-center border border-gray-700 shadow-xl p-8 rounded-md w-full h-[300px] md:h-[400px] bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${bground})` }}
        >
          {/* Overlay gelap agar teks lebih jelas */}
          <div className="absolute inset-0 bg-black/60 z-0" />

          {/* Konten di atas overlay */}
          <div className="relative z-10 flex flex-col items-center">
            <img
              src={Logo}
              alt="logo"
              className="w-10 h-10 rounded-full mb-6"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
              Welcome To My Company
            </h1>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-md shadow-xl w-full max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 border-b pb-2">
            LOGIN
          </h2>
          <form onSubmit={handleLogin}>
            {errorMessage && (
              <p className="text-red-400 text-sm text-center mt-2">
                {errorMessage}
              </p>
            )}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium mb-1">
                  Masukkan Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Input your Username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Masukkan Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Input your password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-2 rounded mt-6 transition duration-200"
              >
                Login
              </button>

              <p className="text-center text-sm mt-4">
                Belum punya akun?{" "}
                <Link to="/register" className="text-blue-400 hover:underline">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
