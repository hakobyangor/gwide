import { Combobox } from '@headlessui/react'
import {
  ArrowPathIcon,
  CheckIcon,
  GlobeAsiaAustraliaIcon,
  GlobeEuropeAfricaIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { useGetCitiesQuery } from 'apps/web/api/country/country.gql.gen'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function HomeSearchBlock() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const [{ data: getCitiesData, fetching: citiesFetching }] = useGetCitiesQuery()

  const filteredCities =
    query === ''
      ? getCitiesData?.getCities
      : getCitiesData?.getCities.filter((cities) => {
          return (
            cities.name.toLowerCase().includes(query.toLowerCase()) ||
            cities.country.name.toLowerCase().includes(query.toLowerCase())
          )
        })

  return (
    <div className="relative mb-8">
      <div className=" mx-auto ">
        <div className="relative shadow-xl ">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-gw-primary-700 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 max-w-4xl m-auto">
            <div>
              <div className="mt-1 flex rounded-md shadow-sm px-20">
                <div className="sm:flex w-full">
                  <div className="min-w-0 flex-1">
                    <Combobox as="div" value="">
                      <div className="relative mt-1">
                        <div className="absolute inset-y-1  pl-4 flex items-center pointer-events-none">
                          <MagnifyingGlassIcon
                            className="h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <Combobox.Input
                          className="w-full rounded-md border border-gray-300 bg-white py-3 pl-12 pr-10 shadow-sm  focus:outline-none sm:text-sm"
                          onChange={(event) => setQuery(event.target.value)}
                          placeholder="Search City"
                          // displayValue={(city) => (city ? city.name : '')}
                        />

                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {filteredCities?.length === 0 && query !== '' && (
                            <Combobox.Option
                              key="no-result"
                              value="no-result"
                              className="relative flex  select-none py-2 pl-3 pr-9 border-b-2 border-gray-100"
                            >
                              No Cities found
                            </Combobox.Option>
                          )}
                          {filteredCities?.length > 0 &&
                            filteredCities.map((city) => (
                              <Combobox.Option
                                key={city.id}
                                value={city}
                                onClick={(event) => {
                                  router.push(`/tours/country/${city.country.id}?city=${city.id}`)
                                }}
                                className={({ active }) =>
                                  classNames(
                                    'relative flex cursor-pointer select-none py-2 pl-3 pr-9 border-b-2 border-gray-100',
                                    active ? 'bg-gw-primary-600 text-white' : 'text-gray-900'
                                  )
                                }
                              >
                                {({ active, selected }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        ' truncate flex items-center text-lg',
                                        selected && 'font-semibold'
                                      )}
                                    >
                                      <span
                                        className={classNames(
                                          ' p-3 mr-3 text-gw-primary-500',
                                          active ? ' text-gw-primary-200' : ''
                                        )}
                                      >
                                        <GlobeAsiaAustraliaIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>

                                      {city.name}
                                    </span>
                                    <span
                                      className={classNames(
                                        ' truncate  ml-5 text-sm flex items-center',
                                        active ? ' text-gray-200' : 'text-gray-400'
                                      )}
                                    >
                                      {city.country.name}
                                    </span>

                                    {selected && (
                                      <span
                                        className={classNames(
                                          'absolute inset-y-0 right-0 flex items-center pr-4',
                                          active ? 'text-white' : 'text-gw-primary-600'
                                        )}
                                      >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                    )}
                                  </>
                                )}
                              </Combobox.Option>
                            ))}
                        </Combobox.Options>
                      </div>
                    </Combobox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSearchBlock
