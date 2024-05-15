"use client";
import ImageInput from "@/app/components/FormInputs/ImageInput";
import SubmitButton from "@/app/components/FormInputs/SubmitButton";
import TextInput from "@/app/components/FormInputs/TextInput";
import FormHeader from "@/app/components/backoffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewBanner() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  async function onSubmit(data) {
    {
      /* 
    -id => auto()
    -title
    -link
    -description
    -image
    */
    }
    data.imageUrl = imageUrl;
    setLoading(true);

    console.log(data);
    makePostRequest(setLoading, "api/banners", data, "Banner", reset);
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title="New Banner" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Banner Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Banner Link"
            name="link"
            register={register}
            errors={errors}
            className="w-full"
          />
          {/* {configure endpoint in the core js} */}
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="bannerImageUploader"
            label="Banner Image"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Banner"
          loadingButtonTitle="Creating Banner, Please Wait..."
        />
      </form>
    </div>
  );
}
