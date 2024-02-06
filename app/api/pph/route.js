import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
	// Do whatever you want
	return NextResponse.json({ message: "API PPh Root" }, { status: 200 });
}

