import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, logoUrl, description } = await request.json();
    const NewMarketplace = { title, slug, logoUrl, description };
    console.log(NewMarketplace);
    return NextResponse.json(NewMarketplace);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Couldn't create marketplace. Something went wrong", error },
      { status: 500 }
    );
  }
}
