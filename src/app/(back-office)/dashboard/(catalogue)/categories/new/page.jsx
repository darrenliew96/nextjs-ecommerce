"use client";
import SubmitButton from "@/app/components/FormInputs/SubmitButton";
import TextInput from "@/app/components/FormInputs/TextInput";
import TextareaInput from "@/app/components/FormInputs/TextareaInput";
import FormHeader from "@/app/components/backoffice/FormHeader";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCategory() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  async function onSubmit(data) {
    console.log(data);
  }
  return (
    <div>
      <FormHeader title="New Category" />
      {/* 
    -id
    -title
    -slug
    -description
    -image
    */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton isLoading={false} buttonTitle="Create Category" loadingButtonTitle="Creating Category, Please Wait..." />
      </form>
    </div>
  );
}
