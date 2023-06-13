import React from "react";
import InputForm from "../../molecules/InputForm";
import Button from "../../atom/Button";

export default function Login() {
  return (
    <form action="">
      <InputForm label="Email" name="email" type="email" placeholder="Masukkan email" />
      <InputForm label="password" type="password" name="password" placeholder="Masukkan password" />
      <Button color="bg-blue-500" size="w-full">
        Login
      </Button>
    </form>
  );
}
