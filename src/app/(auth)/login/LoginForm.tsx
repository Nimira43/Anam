'use client'

import { Button, Card, CardBody, CardHeader } from '@heroui/react'
import { useForm } from 'react-hook-form'
import { GiAbstract065 } from 'react-icons/gi'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid
    }
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Card className='w-2/5 mx-auto'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-2 item-center text-main'>
          <div className='flex flex-row items-center gap-1 mx-auto'>
            <GiAbstract065 size={36} />
            <h1 className='logo-text text-3xl font-bold'>
              Login
            </h1>
          </div>
          <p className='text-main font-normal text-sm'>
            Welcome back to Anam
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <input
              defaultValue=''
              placeholder='Email'
              type='email'
              className={
                `w-full p-3 main-input ${errors.email && 'border-error'}`
              }
              {...register(
                'email',
                {required: 'Email is required.'}
              )}
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
              {...register(
                'password',
                {required: 'Password is required.'}
              )}
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
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}