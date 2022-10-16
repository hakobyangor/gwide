/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import { useEffect, useRef, useState } from 'react'
import { Switch } from '@headlessui/react'
import TextInputWithLabel from 'apps/web/components/main/form/TextInputWithLabel'
import { useAuth } from 'apps/web/src/context/auth.context'
import SimpleTextArea from 'apps/web/components/main/form/SimpleTextArea'
import Button from 'apps/web/components/main/Button'
import { useRouter } from 'next/router'
import { useUpdateUserMutation } from 'apps/web/api/user/user.gql.gen'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfilePage() {
  const { user: authUser } = useAuth()

  const [availableToHire, setAvailableToHire] = useState(true)
  const [{ fetching: updateFetching }, updateUser] = useUpdateUserMutation()

  const inputFirstName = useRef(null)
  const inputLastName = useRef(null)
  const inputBio = useRef(null)

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const saveProfile = async (event) => {
    event.preventDefault()
    updateUser({
      data: {
        firstName: inputFirstName.current.value,
        lastName: inputLastName.current.value,
        bio: inputBio.current.value,
        countryId: 3
      }
    })
  }

  return (
    <div>
      <form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
        {/* Profile section */}
        <div>
          <div>
            <h2 className="leading-6 font-medium text-gray-900 text-2xl">Profile</h2>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6 mr-10">
              <div>
                <SimpleTextArea
                  label="About"
                  name="bio"
                  defaultValue={authUser.bio ?? ''}
                  inputRef={inputBio}
                />

                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-6 sm:col-span-6">
                  <TextInputWithLabel
                    name="firstName"
                    label="First Name"
                    defaultValue={authUser.firstName}
                    id="firstName"
                    inputRef={inputFirstName}
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
                  <TextInputWithLabel
                    name="lastName"
                    label="Last Name"
                    defaultValue={authUser.lastName}
                    id="lastName"
                    inputRef={inputLastName}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
              <p className="text-sm font-medium text-gray-700" aria-hidden="true">
                Photo
              </p>
              <div className="mt-1 lg:hidden">
                <div className="flex items-center">
                  <div
                    className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                    aria-hidden="true"
                  >
                    <img className="rounded-full h-full w-full" src={authUser.image} alt="" />
                  </div>
                  <div className="ml-5 rounded-md shadow-sm">
                    <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                      <label
                        htmlFor="mobile-user-photo"
                        className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                      >
                        <span>Change</span>
                        <span className="sr-only"> user photo</span>
                      </label>
                      <input
                        id="mobile-user-photo"
                        name="user-photo"
                        type="file"
                        className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden relative rounded-full overflow-hidden lg:block">
                <img className="relative rounded-full w-40 h-40" src={authUser.image} alt="" />
                <label
                  htmlFor="desktop-user-photo"
                  className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                >
                  <span>Change</span>
                  <span className="sr-only"> user photo</span>
                  <input
                    type="file"
                    id="desktop-user-photo"
                    name="user-photo"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <TextInputWithLabel
                name="url"
                label="URL"
                defaultValue={authUser.lastName}
                id="lastName"
              />
            </div>
          </div>
        </div>

        {/* Privacy section */}
        <div className="pt-6 divide-y mt-6 divide-gray-200">
          <div className="px-4 sm:px-6">
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">Privacy</h2>
              <p className="mt-1 text-sm text-gray-500">
                Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
              </p>
            </div>
            <ul role="list" className="mt-2 divide-y divide-gray-200">
              <Switch.Group as="li" className="py-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <Switch.Label as="p" className="text-sm font-medium text-gray-900" passive>
                    Available to hire
                  </Switch.Label>
                  <Switch.Description className="text-sm text-gray-500">
                    Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
                  </Switch.Description>
                </div>
                <Switch
                  checked={availableToHire}
                  onChange={setAvailableToHire}
                  className={classNames(
                    availableToHire ? 'bg-teal-500' : 'bg-gray-200',
                    'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      availableToHire ? 'translate-x-5' : 'translate-x-0',
                      'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                  />
                </Switch>
              </Switch.Group>
            </ul>
          </div>
          <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
            <Button
              type="primary"
              className="px-5 py-2 mr-0"
              onClick={saveProfile}
              disabled={updateFetching}
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
