import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
// import { redirect } from 'next/navigation'

export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const headerList = await headers();
  const type = headerList.get("Content-Type");

  const cookiesList = await cookies();
  const coo2 = cookiesList.get("Cookie_2")?.value;

  // logic delete post
  // redirect('/blog')

  return NextResponse.json({ id, type, coo2 });
}
