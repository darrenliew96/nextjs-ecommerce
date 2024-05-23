"use client";
import ImageInput from "@/app/components/FormInputs/ImageInput";
import SelectInput from "@/app/components/FormInputs/SelectInput";
import SubmitButton from "@/app/components/FormInputs/SubmitButton";
import TextInput from "@/app/components/FormInputs/TextInput";
import TextareaInput from "@/app/components/FormInputs/TextareaInput";
import FormHeader from "@/app/components/backoffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const marketplace = [
    { id: 1, title: "Anti-Hypertensive" },
    { id: 2, title: "Anti-Diabetic" },
    { id: 3, title: "Anti-Tussive" },
    { id: 4, title: "Anti-Pyrexic" },
  ];
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  async function onSubmit(data) {
    {
      /* 
    -id
    -title
    -slug
    -description
    -image
    */
    }
    setLoading(true);
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/categories", data, "Category", reset);
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title="New Category" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
            className=""
          />
          <SelectInput
            label="Select Marketplace"
            name="marketIds"
            register={register}
            errors={errors}
            options={marketplace}
            hasMultipleSelect={true}
            className="w-full"
          />
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
            label="Category Image"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Category"
          loadingButtonTitle="Creating Category, Please Wait..."
        />
      </form>
    </div>
  );
}
