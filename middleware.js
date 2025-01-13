import { NextResponse } from "next/server";

export function middleware(req) {
  const auth = req.headers.get("authorization");

  // Check if Authorization header is present
  if (!auth) {
    return new Response("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  // Decode the base64 encoded credentials
  const [scheme, encoded] = auth.split(" ");
  if (scheme !== "Basic") {
    return NextResponse.next();
  }

  const decoded = Buffer.from(encoded, "base64").toString();
  const [username, password] = decoded.split(":");

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username === adminUsername && password === adminPassword) {
    return NextResponse.next();
  }

  return new Response("Invalid credentials", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

// Apply middleware to specific paths
export const config = {
  matcher: "/admin/:path*",
};
