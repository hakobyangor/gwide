import { Dialog } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useVerifyEmailMutation } from 'apps/web/api/auth/auth.gql.gen'
import Button from 'apps/web/components/main/Button'
import { Router, useRouter } from 'next/router'
import React, { useEffect } from 'react'

export async function getServerSideProps(context) {
  return {
    props: { hash: context.query.hash }
  }
}

function VerifyEmail({ hash }) {
  const [{ error, fetching: verifyFetching }, verifyFunction] = useVerifyEmailMutation()

  const router = useRouter()
  useEffect(() => {
    verifyFunction({ args: { hash } })
  }, [hash, verifyFunction])

  return (
    <>
      {!verifyFetching && (
        <div className="max-w-md mx-auto py-32">
          {/* success case */}
          {!error && (
            <>
              <div>
                <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gw-success-100">
                  <CheckIcon className="h-12 w-12 text-gw-success-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Successfully Verified
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Congratulations!!! You successfully verified your account, please login to
                      start useing gwide
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 max-w-xs mx-auto">
                <Button
                  className="w-full px-4 !py-2.5 "
                  onClick={() => {
                    router.push('/login')
                  }}
                >
                  Log In
                </Button>
              </div>
            </>
          )}
          {/* invalid hash case */}
          {error && error.message === '[GraphQL] Invalid or expired hash' && (
            <>
              <div>
                <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gw-error-100">
                  <CheckIcon className="h-12 w-12 text-gw-error-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Verification Failed
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your verification link has been expired. Please contact support or sign up
                      with a new e-mail address
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
          {/* error case */}
          {error && error.message !== '[GraphQL] Invalid or expired hash' && (
            <>
              <div>
                <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gw-error-100">
                  <CheckIcon className="h-12 w-12 text-gw-error-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Verification Failed
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      There has been a problem with the verification
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
        </div>
      )}
    </>
  )
}

export default VerifyEmail
