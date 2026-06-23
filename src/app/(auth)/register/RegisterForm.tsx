'use client'

import { registerSchema, RegisterSchema } from '@/lib/schemas/registerSchema'
import { Button, Card, CardBody, CardHeader } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { GiAbstract065 } from 'react-icons/gi'

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid
    }
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched'
  })

  const onSubmit = (data: RegisterSchema) => {
    console.log(data)
  }

  return (
    <Card className='w-2/5 mx-auto'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-2 item-center text-main'>
          <div className='flex flex-row items-center gap-1 mx-auto'>
            <GiAbstract065 size={36} />
            <h1 className='logo-text text-3xl font-bold'>
              Register
            </h1>
          </div>
          <p className='text-main font-normal text-sm'>
            Welcome to Anam
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <input
              defaultValue=''
              placeholder='Name'
              type='text'
              className={
                `w-full p-3 main-input ${errors.name && 'border-error'}`
              }
              {...register('name')}
            />
            {errors.name && (
              <p className='text-error text-sm'>
                {String(errors.name.message)}
              </p>
            )}
            <input
              defaultValue=''
              placeholder='Email'
              type='email'
              className={
                `w-full p-3 main-input ${errors.email && 'border-error'}`
              }
              {...register('email')}
            />
            {errors.email && (
              <p className='text-error text-sm'>
                {String(errors.email.message)}
              </p>
            )}
            <input
              defaultValue=''
              placeholder='Password'
              type='password'
              className={
                `w-full p-3 main-input ${errors.password && 'border-error'}`
              }
              {...register('password')}
            />
            {errors.password && (
              <p className='text-error text-sm'>
                {String(errors.password.message)}
              </p>
            )}
            <Button
              isDisabled={!isValid}
              className='main-btn w-full transitioning p-6'
              type='submit'
            >
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}