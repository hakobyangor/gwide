import Link from 'next/link'
import React from 'react'

function CardBgImage({ name, id, link }) {
  return (
    <Link href={link} passHref>
      <div
        className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover hover:cursor-pointer "
        style={{ backgroundPosition: '50%' }}
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
      >
        <img
          alt={name}
          // Todo change img src
          src={`https://mdbootstrap.com/img/new/standard/city/00${id}.jpg`}
          className="w-full transition duration-300 ease-linear align-middle "
        />
        <>
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: 'rgba((0, 0, 0, 0.3)' }}
          >
            <div className="flex justify-start items-end h-full">
              <h5 className="text-lg font-bold text-white m-6">{name}</h5>
            </div>
          </div>
          <div className="hover-overlay">
            <div
              className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
              style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}
            ></div>
          </div>
        </>
      </div>
    </Link>
  )
}

export default CardBgImage
