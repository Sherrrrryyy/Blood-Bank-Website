import React from 'react'

const Hero = () => {
  return (
    <>
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Blood donor is equal to
        <strong className="font-extrabold mt-3 text-red-700 sm:block"> A Lifesaver </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      "Donate blood, save lives. A small act today can be a lifesaver tomorrow. Keep the blood bank stocked, you never know who might need it, even you!"
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded-sm bg-red-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-3 focus:outline-hidden sm:w-auto"
          href="/DonationForm"
        >
         Donate Now
        </a>
        <a
          className="block w-full rounded-sm border border-red-700 px-12 py-3 text-sm font-medium text-red-700 hover:bg-gray-50 shadow-sm focus:ring-3 focus:outline-hidden sm:w-auto"
          href="/DonationForm"
        >
         Request Now
        </a>

     
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Hero
