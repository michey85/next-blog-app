import { NextResponse } from "next/server";
import { headers, cookies} from "next/headers";
// import { redirect } from "next/navigation";


export async function DELETE(req:Request, {params}: {params: {id: string}}) {
  const id = params.id

  const headerList = headers()
  // console.log(headerList.get('authorization'));

  const cookiesList = cookies();
  // console.log(cookiesList.get('Cookie_1')?.value);

  // logic delete post

  return NextResponse.json({id})
  // или можно переправить на др страницу
  // redirect('/blog')
}