import React from 'react'

// shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import Link from 'next/link'


interface Props {
  post: Post
}

export default function PostCard({post}: Props) {
  return (
  <Link href={`/posts/${post.slug}`}> 
    <Card>
      <div>
        <img src={post.image} alt="" className="object-cover w-full h-56"/>
      </div>
      <CardHeader>
          <CardTitle className='line-clamp-2'>{post.title}</CardTitle>
          <CardDescription>{post.date}</CardDescription>
      </CardHeader>
      <CardContent >
          <p className='line-clamp-4'>{post.paragraph}</p>
      </CardContent>
      {/* <CardFooter>
          <Button asChild>
              {card.buttonText}
          </Button>
      </CardFooter> */}
    </Card>
  </Link>  
  )
}
