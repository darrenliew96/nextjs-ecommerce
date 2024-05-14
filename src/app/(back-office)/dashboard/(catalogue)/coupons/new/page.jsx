"use client";
import SubmitButton from "@/app/components/FormInputs/SubmitButton";
import TextInput from "@/app/components/FormInputs/TextInput";
import FormHeader from "@/app/components/backoffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateCouponCode } from "@/lib/generateCouponCode";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCoupon() {
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState();
  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  async function onSubmit(data) {
    {
      /* 
    -id => auto()
    -title
    -code => auto()
    -expiry date
    */
    }
    const couponCode = generateCouponCode(data.title,data.expiryDate);
    data.couponCode = couponCode;
    setLoading(true);
    
    console.log(data);
    makePostRequest(setLoading, "api/coupons", data, "Coupon", reset);
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
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Coupon Code"
            name="couponCode"
            defaultValue="xxxasdasd"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Coupon Expiry Date"
            name="expiryDate"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Coupon"
          loadingButtonTitle="Creating Coupon, Please Wait..."
        />
      </form>
    </div>
  );
}
