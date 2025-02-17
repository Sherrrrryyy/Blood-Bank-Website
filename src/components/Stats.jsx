import React from 'react'

const Stats = () => {
  return (
    <>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold text-red-700 sm:text-4xl">Our Trusted Blood Donors</h2>

    <p className="mt-4 text-gray-500 sm:text-xl">
    Our trusted blood donors are real-life heroes, saving lives with every donation. Their generosity ensures a steady blood supply for those in urgent need. Join them today!
    </p>
  </div>

  <dl
    className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
  >
    <div className="flex flex-col px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Blood Donations</dt>

      <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">120+</dd>
    </div>

    <div className="flex flex-col px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Lives Saved</dt>

      <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">80+</dd>
    </div>

    <div className="flex flex-col px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Registered Donors</dt>

      <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">50+</dd>
    </div>

    <div className="flex flex-col px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Blood Units Available</dt>

      <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">9</dd>
    </div>
  </dl>
</div>
    </>
  )
}

export default Stats
