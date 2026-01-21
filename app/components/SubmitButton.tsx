import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <div>
      <button disabled={pending} className="btn btn-primary w-96">
        {pending ? "ADDING ITEM......." : "ADD MENU ITEM"}
      </button>
    </div>
  );
};

export default SubmitButton;
