import React from "react";
import AuthLayout from "../components/template/AuthLayout";
import Register from "../components/organism/Register";

export default function RegisterPage() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <AuthLayout title="Register" desc="Silahkan daftar" type="register">
          <Register />
        </AuthLayout>
      </div>
    </>
  );
}
