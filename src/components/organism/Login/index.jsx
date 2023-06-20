import React from "react";
import InputForm from "../../molecules/InputForm";
import Button from "../../atom/Button";

export default function Login() {
  const handleLogin = (event) => {
    //     event.preventDefault(); = buat mencegah haalaman merefresh
    event.preventDefault();
    // console.log yg ke 1
    console.log("terklik login");
    //  event.target.email.value buat ngambil value yang ada di input form
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    // buat nyimpen data dari form input ke penyimpanan browser (aplications)
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    // buat ngeridairek ke halaman laen
    window.location.href = "/products";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" name="email" type="email" placeholder="Masukkan email" />
      <InputForm label="password" type="password" name="password" placeholder="Masukkan password" />
      {/* ini adalah eventhandler untuk nampilin console.log yg ke 1
      <Button onClick={handleLogin} color="bg-blue-500 hover:bg-blue-700" size="w-full">
        Login
      </Button> */}
      <Button color="bg-blue-500 hover:bg-blue-700" size="w-full">
        Login
      </Button>
    </form>
  );
}
