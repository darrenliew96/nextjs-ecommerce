import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const productData =  await request.json();
    console.log(productData);
    return NextResponse.json(productData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Couldn't create product. Something went wrong", error },
      { status: 500 }
    );
  }
}


// {
//   agentIds,
//   barcode,
//   categoryIds,
//   description,
//   imageUrl,
//   productPrice,
//   salePrice,
//   sku,
//   slug,
//   title,
// } 