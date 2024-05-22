import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      name,
      phone,
      email,
      physicalAddress,
      contactPerson,
      contactAlternativePerson,
      paymentTerms,
      notes,
      code,
    } = await request.json();
    const newStaff = {
      name,
      phone,
      email,
      physicalAddress,
      contactPerson,
      contactAlternativePerson,
      paymentTerms,
      notes,
      code,
    };
    console.log(newStaff);
    return NextResponse.json(newStaff);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Couldn't create Store Banner. Something went wrong", error },
      { status: 500 }
    );
  }
}
