import React from "react";
import { useForm } from "react-hook-form";

export default function AddService() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://gentle-wave-76810.herokuapp.com/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("success", data);
      alert("users added successfully!!!");
    });
  };

  return (
    <div className="my-5 mx-auto w-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-1"
      >
        <input
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea placeholder="Description" {...register("description")} />
        <input placeholder="Price" type="number" {...register("price")} />
        <input placeholder="Photo Url" type="text" {...register("img")} />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
}
