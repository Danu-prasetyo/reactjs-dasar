import React from "react";
import Button from "../../atom/Button";

// nested ccomponent
export default function CardProduct(props) {
  const { children } = props;
  return (
    <>
      <div className="max-w-xs rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-sky-500 p-1 shadow-xl">
        <div className="w-full max-w-xs bg-white rounded-lg">{children}</div>
      </div>
    </>
  );
}

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="gambar" className="p-4 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <>
      <div className="px-5 pb-4">
        <a href="#">
          <h5 className="text-3xl font-bold text-slate-900">{title}</h5>
          <p className="mt-1 text-slate-500 text-base text-justify">{children}</p>
        </a>
      </div>
    </>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-4">
      <span className="text-2xl font-semibold mb-2">Harga : Rp. {price}</span>
      <Button size="w-full" color="bg-blue-500">
        Beli
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
