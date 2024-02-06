import { NextResponse, NextRequest } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("hello");
	// Do whatever you want
	return NextResponse.json(
		{ message: "API PPh 21 Root", req: query },
		{ status: 200 }
	);
}
