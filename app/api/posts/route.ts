import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);

  const query = searchParams.get('q');

  let currentPosts = posts;

  if(query) {
    currentPosts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }

  return NextResponse.json(currentPosts)
}

export async function POST(req: Request) {
  const body = await req.json()
  return NextResponse.json(body, { status: 201 })
}