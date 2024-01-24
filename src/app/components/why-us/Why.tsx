import React from 'react';

function Why() {
  return (
    <div className='mt-5 p-4 md:p-10'>
        <h1 className='md:text-4xl text-3xl text-center text-primary '>Why Book With YKSTravel?</h1>
        <div className="grid mt-[3rem] grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div>
                <h5 className=' text-1xl mb-5 font-extrabold text-center text-primary '>Excellence</h5>
                <p className=' text-justify'>
                At YKSTravel, quality and service work in tandem. We go a mile extra to ensure these two hallmarks are met at every phase of your journey. To help achieve these values, we closely monitor client satisfaction and consistently seek new ways to transcend our clients&rsquo; expectations.
                </p>
            </div>
            <div>
                <h5 className=' text-1xl mb-5 font-extrabold text-center text-primary '>Travel Companion</h5>
                <p className=' text-justify'>
                You&apos;re not alone, we are with you. While on your trip, support is never out of range. There is always a YKSTravel consultant on call 24/7 to handle any unexpected situations. We do our best to respond to emails timely during our regular office hours.
               </p>
            </div>
            <div>
                <h5 className=' text-1xl mb-5 font-extrabold text-center text-primary '>Tailored Trips</h5>
                <p className=' text-justify'>
                Our packages can be modified or built entirely from scratch to suit your needs. Our skilled travel experts have the resources at hand to make sure your trip is designed with you in mind. You can contact us with your interests.
               </p>
            </div>
            <div>
                <h5 className=' text-1xl mb-5 font-extrabold text-center text-primary '>Save time and effort</h5>
                <p className=' text-justify'>
                Organizing your own holiday can be a stressful task. Let us do the work for you! By choosing YKSTravel, you can save time and hassle by booking all your travel needs directly with a specialized agency.
                </p>
            </div>
         </div>
    </div>
  );
}

export default Why;
