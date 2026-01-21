"use server";

import { connectDb } from "./db";
import Menu from "./models/menu";

export const createMenu = async (formData: FormData) => {
  await connectDb();
  const name = formData.get("name")?.toString().trim();
  const image = formData.get("image")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const price = formData.get("price")?.toString().trim();
  const size = formData.get("size")?.toString().trim();

  if (!name || !image || !description || !price || !size) {
    throw new Error("All fields are required");
  }
  await Menu.create({
    name,
    image,
    description,
    price,
    size,
  });
  console.log({ name, image, description, price, size });
};
