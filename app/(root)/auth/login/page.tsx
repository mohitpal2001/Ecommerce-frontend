'use client'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Logo from '@/public/assets/images/logo-black.png'
import Image from 'next/image'
import { useForm, } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { zSchema } from '@/lib/zodSchema'
import BuutonLoading from '@/components/Application/ButtonLoading'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const LoginPage = () => {

  const formSchema = zSchema.pick({ email: true,password: true })

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
      <form onSubmit={form.handleSubmit(handleLoginSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmai.com" type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLoginSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="**********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <BuutonLoading type="submit" text="Login" loading={false} />
        </div>
      </form>
    </Form>
        </CardContent>
    </Card>
  )
}

export default LoginPage