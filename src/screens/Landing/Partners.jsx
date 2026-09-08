import React from "react";
import Partner from "../../components/Partner";
import { partnerBenefits } from "../../data";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Partners = () => {
  const half = Math.ceil(partnerBenefits.length / 2);
  const col1 = partnerBenefits.slice(0, half);
  const col2 = partnerBenefits.slice(half);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "Since partnering with Caremed Connect, we've increased our facility utilization by 35% and generated significant new revenue streams.",
      author: "Dr. Sarah Johnson",
      position: "Medical Director, City Health Clinic",
    },
    {
      id: 2,
      quote:
        "The platform is incredibly easy to use and has helped us fill appointment slots that would otherwise remain empty.",
      author: "Michael Chen",
      position: "Operations Manager, Precision Diagnostics",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full min-h-[70vh] flex items-center bg-gradient-to-br from-[#fff5f5] via-white to-[#e6f0ff] py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-70"></div>

        <div className="w-[90%] mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6 text-gray-800">
              Partner With <span className="text-customBlue">Us</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Are you a clinic, diagnostic center, or hospital with available
              capacity? Caremed Connect helps you generate new revenue by making
              your idle time bookable by individuals, employers, and payers.
            </p>

            <div className="flex justify-center mb-12">
              <Link to={"/contact-us"}>
                <Button
                  title={"Book Your Slot Now"}
                  className="bg-customBlue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-customBlue mb-2">
                  35%+
                </div>
                <p className="text-gray-600">
                  Average increase in facility utilization
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-customBlue mb-2">
                  500+
                </div>
                <p className="text-gray-600">Healthcare partners nationwide</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-customBlue mb-2">
                  24/7
                </div>
                <p className="text-gray-600">Support for our partner network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 bg-white">
        <div className="w-[90%] mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-800 mb-4">
              Benefits of Partnership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our network of healthcare providers and unlock new growth
              opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16 text-left">
            <div className="space-y-6">
              {col1.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <Partner text={item} />
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {col2.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <Partner text={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="italic text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              "Partner with us and let your empty slots serve more lives."
            </p>

            <Link to={"/contact-us"}>
              <Button
                title={"Become a Partner Today"}
                className="bg-customBlue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 border border-customBlue"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="w-[90%] mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Partners Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="text-customBlue text-5xl mb-4">"</div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-customBlue to-blue-600">
        <div className="w-[90%] mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Maximize Your Facility's Potential?
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of healthcare providers already benefiting from our
            platform
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
        
            <Link to={"/contact-us"}>
              <Button
                title={"Contact Our Team"}
                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-customBlue transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
