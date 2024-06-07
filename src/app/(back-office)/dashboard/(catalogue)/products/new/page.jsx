"use client";
import ArrayItemsInput from "@/app/components/FormInputs/ArrayItemsInput";
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

export default function NewProduct() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const [tags, setTags] = useState(["tag1", "tag2"]);

  const categories = [
    { id: 1, title: "Category 1" },
    { id: 2, title: "Category 2" },
    { id: 3, title: "Category 3" },
    { id: 4, title: "Category 4" },
  ];
  const agents = [
    { id: 1, title: "Agent 1" },
    { id: 2, title: "Agent 2" },
    { id: 3, title: "Agent 3" },
    { id: 4, title: "Agent 4" },
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
    -id =>auto
    -title
    -slug =>auto
    -description
    -productPrice
    -sku
    -barcode
    -salePrice
    -categories
    -staff
    -image/images[]
    -product tags[]
    */
    }
    setLoading(true);
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags;
    console.log(data);
    makePostRequest(setLoading, "api/products", data, "Products", reset);
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title="New Product" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className=""
          />
          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className=""
          />
          <TextInput
            label="Product Price"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className=""
          />
          <TextInput
            label="Product Sale Price"
            name="salePrice"
            type="number"
            register={register}
            errors={errors}
            className=""
          />
          <SelectInput
            label="Select Category"
            name="categoryIds"
            register={register}
            errors={errors}
            options={categories}
            className="w-full"
          />
          <SelectInput
            label="Select Agent"
            name="agentIds"
            register={register}
            errors={errors}
            options={agents}
            className="w-full"
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
            label="Category Image"
          />
          <ArrayItemsInput setItems={setTags} items={tags} itemTitle="Tag"/>

          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Product"
          loadingButtonTitle="Creating Product, Please Wait..."
        />
      </form>
    </div>
  );
}
