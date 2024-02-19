import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const bottles = await prisma.bottle.findMany();

    if (!bottles) {
      return new NextResponse("No bottles found", { status: 404 });
    }

    return NextResponse.json(bottles);
  } catch (err) {
    console.error(err);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
