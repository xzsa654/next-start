'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../_hooks/zod/page'
import { zodResolver } from '@hookform/resolvers/zod'
export default function RegisterPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })
  const registerHandler = async (data) => {
    const res = await fetch('http://localhost:register', {
      method: 'POST',
      body: data,
    })
    const result = await res.json()
  }
  return (
    <>
      <form onSubmit={handleSubmit(registerHandler)}>
        <div className="relative flex">
          <input
            type="text"
            id="hs-floating-underline-input-name"
            className="peer py-4 px-0 block w-56 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
              focus:pt-6
              focus:outline-none
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2"
            placeholder="********"
            name="name"
            {...register('name')}
          />
          <label
            htmlFor="hs-floating-underline-input-name"
            className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:scale-90
              peer-focus:translate-x-0.5
              peer-focus:-translate-y-1.5
              peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
              peer-[:not(:placeholder-shown)]:scale-90
              peer-[:not(:placeholder-shown)]:translate-x-0.5
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
          >
            name
          </label>
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <div className="relative flex">
          <input
            type="text"
            id="hs-floating-underline-input-email"
            className="peer py-4 px-0 block w-56 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
              focus:pt-6
              focus:outline-none
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2"
            placeholder="********"
            name="email"
            {...register('email')}
          />
          <label
            htmlFor="hs-floating-underline-input-email"
            className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:scale-90
              peer-focus:translate-x-0.5
              peer-focus:-translate-y-1.5
              peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
              peer-[:not(:placeholder-shown)]:scale-90
              peer-[:not(:placeholder-shown)]:translate-x-0.5
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
          >
            email
          </label>
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <div className="relative flex">
          <input
            type="password"
            id="hs-floating-underline-input-password"
            className="peer py-4 px-0 block w-56 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
              focus:pt-6
              focus:outline-none
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2"
            placeholder="********"
            name="password"
            {...register('password')}
          />
          <label
            htmlFor="hs-floating-underline-input-password"
            className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:scale-90
              peer-focus:translate-x-0.5
              peer-focus:-translate-y-1.5
              peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
              peer-[:not(:placeholder-shown)]:scale-90
              peer-[:not(:placeholder-shown)]:translate-x-0.5
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
          >
            password
          </label>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <div className="relative flex">
          <input
            type="text"
            id="hs-floating-underline-input-phone"
            className="peer py-4 px-0 block w-56 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600
              focus:pt-6
              focus:outline-none
              focus:pb-2
              [&:not(:placeholder-shown)]:pt-6
              [&:not(:placeholder-shown)]:pb-2
              autofill:pt-6
              autofill:pb-2"
            placeholder="********"
            {...register('phone')}
            name="phone"
          />
          <label
            htmlFor="hs-floating-underline-input-phone"
            className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:scale-90
              peer-focus:translate-x-0.5
              peer-focus:-translate-y-1.5
              peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
              peer-[:not(:placeholder-shown)]:scale-90
              peer-[:not(:placeholder-shown)]:translate-x-0.5
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
          >
            phone
          </label>
        </div>
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
        <button>送出</button>
      </form>
    </>
  )
}
