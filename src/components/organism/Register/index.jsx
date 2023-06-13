import React from "react";
import InputForm from "../../molecules/InputForm";
import Button from "../../atom/Button";

export default function Register() {
  return (
    <form action="">
      <InputForm label="Name" name="name" type="name" placeholder="Masukkan nama" />
      <InputForm label="Email" name="email" type="email" placeholder="Masukkan email" />
      <InputForm label="password" type="password" name="password" placeholder="Masukkan password" />
      <Button color="bg-blue-500" size="w-full">
        Register
      </Button>
    </form>
  );
}
