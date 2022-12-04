import { useRouter } from 'next/router'
import Button from '../main/Button'

export default function HomeBecomeAGuideBlock() {
  const router = useRouter()
  return (
    <div className="bg-gray-800 rounded-md">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center relative">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            id="newsletter-headline"
          >
            Want to become an experience provider?
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <Button
              className="absolute bottom-16 right-8 px-10 py-3"
              onClick={() => router.push('/sign-up')}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
