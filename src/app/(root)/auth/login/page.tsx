'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/src/components/ui/card'
import React from 'react'
import Logo from '@/public/assets/images/logo-black.png'
import Image from 'next/image'
import { useForm, } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { zSchema } from '@/src/lib/zodSchema'
import BuutonLoading from '@/src/components/Application/ButtonLoading'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import Link from 'next/link'
import { WEBSITE_REGISTER } from '@/src/routes/WebsiteRoute'


const LoginPage = () => {
  const [loading,setLoading] = useState(false)
  const [typePassword,settypePassword]=useState(true);

  const formSchema = zSchema.pick({ email: true }).extend({
    password: z.string().min(1, { message: "Password is required" } ),
  })

   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  const handleLoginSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <Card className='w-[400px]'>
        <CardContent>
            <div className='flex justify-center'>
                <Image src={Logo.src} width={Logo.width} height={Logo.height} alt='logo' className='max-w-[150px]'/>
            </div>
            <div className='text-center' >
               <h1 className='font-bold text-3xl'>Login Into Account</h1>
               <p>Login into your account by filling out the form below. </p>
            </div>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLoginSubmit)} className="space-y-8 mt-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmai.com" type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
            <Form  {...form} >
      <form onSubmit={form.handleSubmit(handleLoginSubmit)} className="space-y-8 mt-4 relative">
        <FormField
          
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className='realtive'>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="**********" type={typePassword?"password":"********"} {...field} />
              </FormControl>
              <button className='absolute top-8 right-1.5' type='button' onClick={()=>{
               settypePassword(!typePassword)
              }}>{
               typePassword?<FaRegEyeSlash/>:<FaRegEye/>
              }
              </button>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <BuutonLoading className="w-full" type="submit" text="Login" loading={loading} />
        </div>
        <div className='text-center'>
          <div className='flex justify-center items-center gap-1'>
            <p>Don't have account?</p>
            <Link href={WEBSITE_REGISTER} className='text-primary underline' >Create account</Link>
          </div>
           <div className='mt-3'>
               <Link href="" className='text-primary underline' >forgot password</Link>
           </div>
        </div>
      </form>
    </Form>
        </CardContent>
    </Card>
  )
}

export default LoginPage