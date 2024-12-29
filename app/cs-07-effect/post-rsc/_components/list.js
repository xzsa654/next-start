'use client'

import React, { useState, useEffect } from 'react'
import { ListMotionContainer, ListMotionItem } from './list-motion.js'
import Link from 'next/link.js'
import DelForm from './del-from.js'
export default function List({ posts }) {
  return (
    <>
      <ListMotionContainer element="ul">
        {posts.map((post) => {
          return (
            <ListMotionItem element="li" key={post.id}>
              <Link href={`/cs-07-effect/post-rsc/${post.id}`}>
                {post.title}
              </Link>
              <DelForm postId={post.id} />
            </ListMotionItem>
          )
        })}
      </ListMotionContainer>
    </>
  )
}
