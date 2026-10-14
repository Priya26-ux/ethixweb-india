
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(200).optional().default(""),
  service: z.string().trim().min(1).max(100),
  budget: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(10).max(3000),
});

export async function POST(request: Request) {
  try {
    const contentLength = Number(
      request.headers.get("content-length") || 0
    );

    if (contentLength > 20_000) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 }
      );
    }

    const body: unknown = await request.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please check your form fields and try again.",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase environment variables are missing.");

      return NextResponse.json(
        { error: "The enquiry service is not configured." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from("enquiries")
      .insert(parsed.data);

    if (error) {
      console.error("Supabase enquiry insert failed:", error.message);

      return NextResponse.json(
        { error: "Unable to submit your enquiry right now." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Your enquiry has been submitted successfully!" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request or server error. Please try again." },
      { status: 400 }
    );
  }
}
