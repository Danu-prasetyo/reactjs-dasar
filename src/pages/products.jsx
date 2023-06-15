import React from "react";
import CardProduct from "../components/organism/CardProduct";

const data = [
  {
    id: 1,
    image: "public/images/odeng.jpg",
    title: "Odeng",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab consectetur dolor, non hic cupiditate.",
    price: 45000,
  },
  {
    id: 1,
    image: "public/images/odeng.jpg",
    title: "Odeng",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab consectetur dolor, non hic cupiditate.",
    price: 55000,
  },
  {
    id: 1,
    image: "public/images/odeng.jpg",
    title: "Odeng",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab consectetur dolor, non hic cupiditate.",
    price: 40000,
  },
];

export default function ProductPage() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen gap-6">
        {/* <CardProduct>
          <CardProduct.Header image="public/images/odeng.jpg" />
          <CardProduct.Body title="Odeng">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium quisquam aspernatur, nobis enim
            quaerat!
          </CardProduct.Body>
          <CardProduct.Footer price="25.000" />
        </CardProduct> */}
        {/* .map = fungsi yang ngebaca data dalam array dan ditampilin ke dalem komponen */}
        {data.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
}
