"use client";

import SubmitButton from "@/app/components/SubmitButton";
import { createMenu } from "@/app/lib/action";

const page = () => {
  /* const handleForm = async (formData: FormData) => {
    const result = await createMenu(formData);
    console.log(result);
  }; */

  return (
    <div className="flex justify-center mt-10">
      <form action={createMenu}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-6 flex flex-col items-center gap-3">
          <h1 className="text-center text-2xl text-primary font-semibold mb-2">
            Add Menu Item
          </h1>

          <div className="w-full max-w-sm">
            <label className="label justify-center">Item Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="My awesome page"
            />
          </div>

          <div className="w-full max-w-sm">
            <label className="label justify-center">Image Link</label>
            <input
              type="text"
              name="image"
              className="input input-bordered w-full"
              placeholder="Enter the image URL"
            />
          </div>
          <div className="w-full max-w-sm">
            <label className="label justify-center">Description</label>
            <textarea
              rows={6}
              name="description"
              className="textarea textarea-bordered w-full"
              placeholder="Write a description for your menu item"
            />
          </div>
          <div className="w-full max-w-sm">
            <label className="label justify-center">Price</label>
            <input
              type="number"
              name="price"
              className="input input-bordered w-full"
              placeholder="Enter the price"
            />
          </div>
          <div className="w-full max-w-sm">
            <label className="label justify-center">Size</label>

            <select
              className="select select-bordered bg-base-100 text-center w-full"
              defaultValue=""
              name="size"
            >
              <option value="" disabled>
                Select size
              </option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <SubmitButton></SubmitButton>
        </fieldset>
      </form>
    </div>
  );
};

export default page;
