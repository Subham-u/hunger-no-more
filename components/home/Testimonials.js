import React from "react";

export default function Testimonials() {
  return (
    <div>
      <div className="lg:px-20 md:px-6 px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800">
            Hear from our Students
          </h1>
          <p className="text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 ">
            Here is what our students say
          </p>
        </div>
        <div className="w-full lg:flex items-center gap-6 mt-10">
          <div className="lg:w-1/2">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                  alt="commas"
                />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
              The community engagement program has given me invaluable hands-on experience and taught me the importance of giving back. It's been an eye-opening journey that has helped me grow both personally and professionally.
              </p>
            </div>
            
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-16">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                  alt="commas"
                />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
              Participating in this program has been a transformative experience. I've had the opportunity to work with amazing people and make a tangible impact in our community. It's been incredibly rewarding and inspiring.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
