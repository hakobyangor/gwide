import { Dialog } from '@headlessui/react'
import { CheckIcon, XCircleIcon } from '@heroicons/react/24/outline'
import {
  useCheckResetPasswordHashQuery,
  useResetPasswordMutation,
  useVerifyEmailMutation
} from 'apps/web/api/auth/auth.gql.gen'
import Button from 'apps/web/components/main/Button'
import TextInputWithLabel from 'apps/web/components/main/form/TextInputWithLabel'
import Loader from 'apps/web/components/main/Loader'
import ErrorModalWithOneButton from 'apps/web/components/main/modal/ErrorModalWithOneButton'
import SuccessModalWithOneButton from 'apps/web/components/main/modal/SuccessModalWithOneButton'
import { useFormik } from 'formik'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'

export async function getServerSideProps(context) {
  return {
    props: { hash: context.query.hash }
  }
}

function ConfirmPassword({ hash }) {
  const router = useRouter()
  const [{ error: checkHashError, fetching: checkHashFetching, data: checkHashFetchingData }] =
    useCheckResetPasswordHashQuery({
      variables: { args: { hash } }
    })

  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [
    { error: resetPasswordError, fetching: resetPasswordFetching, data: resetPasswordData },
    resetPassword
  ] = useResetPasswordMutation()

  const signUpValidationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password must be 8 characters long')
      .matches(/\d/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/\W/, 'Password requires a symbol')
      .required('Password is Required'),
    'confirm-password': Yup.string()
      .required('Confirm Password is Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
    validationSchema: signUpValidationSchema
  })

  const submitResetPassword = async (event) => {
    event.preventDefault()
    await resetPassword({ args: { password: formik.values.password, hash } })
  }

  useEffect(() => {
    if (resetPasswordError) {
      setShowErrorModal(true)
    }

    if (resetPasswordData && !resetPasswordError) {
      setShowSuccessModal(true)
    }
  }, [resetPasswordError, resetPasswordData])

  return (
    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 py-16">
      {checkHashFetching && <Loader />}
      {!checkHashFetching && checkHashFetchingData.checkResetPasswordHash === false && (
        <>
          <div>
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gw-error-100">
              <XCircleIcon className="h-12 w-12 text-gw-error-600" aria-hidden="true" />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Password Reset Failed</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Reset Password Hash expired. Please try to reset again.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 max-w-xs mx-auto">
            <Button
              className="w-full px-4 !py-2.5 "
              onClick={() => {
                router.push('/')
              }}
            >
              Go To Home Page
            </Button>
          </div>
        </>
      )}
      {!checkHashFetching && checkHashFetchingData.checkResetPasswordHash === true && (
        <>
          <div className="sm:text-center">
            <h2 className="text-3xl font-extrabold  tracking-tight sm:text-4xl">
              Confirm New Password
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-400">
              Please type your new password and confirm it to be able login.
            </p>
          </div>
          {resetPasswordFetching && <Loader />}
          {!resetPasswordFetching && (
            <form
              action="#"
              className="mt-12 sm:mx-auto sm:max-w-sm"
              onSubmit={submitResetPassword}
            >
              <div className="min-w-0 ">
                <TextInputWithLabel
                  name="password"
                  label="New Password"
                  id="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  defaultValue={formik.values.password}
                  error={
                    formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : false
                  }
                />
              </div>
              <div className="min-w-0 mt-2">
                <TextInputWithLabel
                  name="confirm-password"
                  label="Confirm Password"
                  id="confirm-password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values['confirm-password']}
                  defaultValue={formik.values['confirm-password']}
                  error={
                    formik.touched['confirm-password'] && formik.errors['confirm-password']
                      ? formik.errors['confirm-password']
                      : false
                  }
                />
              </div>
              <div className=" sm:mt-0 ">
                <Button
                  type="submit"
                  className="w-full py-2 mt-4"
                  disabled={
                    (!formik.values.password && !formik.values['confirm-password']) ||
                    formik.errors.password ||
                    formik.errors['confirm-password']
                      ? true
                      : false
                  }
                >
                  Change Password
                </Button>
              </div>
            </form>
          )}

          <SuccessModalWithOneButton
            title={'Password Reset Success'}
            text="Your Password successfully changed, please log in"
            buttonText={'Login'}
            onClose={() => {
              setShowSuccessModal(false)
              router.push('/login')
            }}
            onButtonClick={() => {
              setShowSuccessModal(false)
              router.push('/login')
            }}
            show={showSuccessModal}
            icon={<CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />}
          />

          <ErrorModalWithOneButton
            title={'Password Reset Failed'}
            text={resetPasswordError?.message.replace('[GraphQL] ', '')}
            buttonText={'Go To Home Page'}
            onClose={() => {
              setShowErrorModal(false)
              router.push('/')
            }}
            onButtonClick={() => {
              setShowErrorModal(false)
              router.push('/')
            }}
            show={showErrorModal}
            icon={<XCircleIcon className="h-6 w-6 text-gw-error-600" aria-hidden="true" />}
          />
        </>
      )}
    </div>
  )
}

export default ConfirmPassword
