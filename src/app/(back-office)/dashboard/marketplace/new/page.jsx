"use client";
import ImageInput from "@/app/components/FormInputs/ImageInput";
import SubmitButton from "@/app/components/FormInputs/SubmitButton";
import TextInput from "@/app/components/FormInputs/TextInput";
import TextareaInput from "@/app/components/FormInputs/TextareaInput";
import FormHeader from "@/app/components/backoffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewMarketplace() {
  const [loading, setLoading] = useState(false);
  const [logoUrl, setLogoUrl] = useState(null);
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
    -slug => auto()
    -logo
    -description
    */
    }
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = logoUrl;
    setLoading(true);

    console.log(data);
    makePostRequest(setLoading, "api/marketplace", data, "Marketplace", reset);
    setLogoUrl("");
  }
  return (
    <div>
      <FormHeader title="New Market" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Marketplace Title"
            name="title"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint="marketplaceLogoUploader"
            label="Marketplace Logo"
          />
          <TextareaInput
            label="Marketplace Description"
            name="description"
            register={register}
            errors={errors}
          />
          {/* {configure endpoint in the core js} */}
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Marketplace"
          loadingButtonTitle="Creating Marketplace, Please Wait..."
        />
      </form>
    </div>
  );
}
