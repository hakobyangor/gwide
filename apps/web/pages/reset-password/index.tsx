import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { useResetPasswordEmailMutation } from 'apps/web/api/auth/auth.gql.gen'
import Button from 'apps/web/components/main/Button'
import TextInputWithLabel from 'apps/web/components/main/form/TextInputWithLabel'
import Loader from 'apps/web/components/main/Loader'
import SuccessModalWithOneButton from 'apps/web/components/main/modal/SuccessModalWithOneButton'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export async function getServerSideProps(context) {
  return {
    props: { hash: context.query.hash ?? '' }
  }
}

function ResetPasswordEmail({ hash }) {
  const [
    {
      error: resetPasswordEmailError,
      fetching: resetPasswordEmailFetching,
      data: resetPasswordEmailData
    },
    resetPasswordEmail
  ] = useResetPasswordEmailMutation()

  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
    validate: (values) => {
      const errors = {
        email: ''
      }

      if (!values.email) {
        errors.email = 'Email Required'
      } else if (!/^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }

      return errors
    }
  })

  const submitReset = async (event) => {
    event.preventDefault()
    resetPasswordEmail({ args: { email: formik.values.email } })

    //await login({ args: { email: formik.values.email, password: formik.values.password } })
  }

  useEffect(() => {
    if (resetPasswordEmailData || resetPasswordEmailError) {
      setShowModal(true)
    }
  }, [resetPasswordEmailData, resetPasswordEmailError])

  return (
    <>
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 py-16">
        <>
          {resetPasswordEmailFetching && <Loader />}
          {!resetPasswordEmailFetching && (
            <>
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold  tracking-tight sm:text-4xl">
                  Forgot password?
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-400">
                  If You forgot your password please provide email, we will send password reset link
                  to your email
                </p>
              </div>
              <form
                action="#"
                className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
                onSubmit={submitReset}
              >
                <div className="min-w-0 flex-1">
                  <TextInputWithLabel
                    name="email"
                    label=""
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    defaultValue={formik.values.email}
                    error={
                      formik.touched.email && formik.errors.email ? formik.errors.email : false
                    }
                  />
                </div>
                <div className=" sm:mt-0 sm:ml-3">
                  <Button
                    type="submit"
                    className="w-full py-2 mt-1"
                    disabled={!formik.values.email || formik.errors.email ? true : false}
                  >
                    Send Email
                  </Button>
                </div>
              </form>
              <SuccessModalWithOneButton
                title={'Reset Password Confirmation'}
                text="If the e-mail is registered in the system, we will send you an e-mail with the reset link"
                buttonText={'Go To Home Page'}
                onClose={() => {
                  setShowModal(false)
                  router.push('/')
                }}
                onButtonClick={() => {
                  setShowModal(false)
                  router.push('/')
                }}
                show={showModal}
                icon={<EnvelopeIcon className="h-6 w-6 text-green-600" aria-hidden="true" />}
              />
            </>
          )}
        </>
      </div>
    </>
  )
}

export default ResetPasswordEmail
