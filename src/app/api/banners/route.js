import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, link, bannerImageUploader  } = await request.json();
    const newBanner = { title, link, bannerImageUploader  };
    console.log(newBanner);
    return NextResponse.json(newBanner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Couldn't create banner. Something went wrong", error },
      { status: 500 }
    );
  }
}
