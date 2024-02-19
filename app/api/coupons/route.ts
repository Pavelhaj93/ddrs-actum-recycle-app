import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const coupoon = await prisma.bottle.findMany();

    if (!coupoon) {
      return new NextResponse("No coupoon found", { status: 404 });
    }

    return NextResponse.json(coupoon);
  } catch (err) {
    console.error(err);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
