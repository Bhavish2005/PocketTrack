"use client";
import HeroSection from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Home() {
    useEffect(() => { AOS.init(); }, []);
    return (
  
    <div className="mt-40">
     <HeroSection/>
     <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16" />
  <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index}  data-aos="fade-up"
    data-aos-delay={index * 100} className="text-center bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-blue-400">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-cyan-400 to-blue-700 mb-2 drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16" />
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Smartest Way to Manage, Grow, and Secure Your Money
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card className="p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-600 border border-transparent" key={index} data-aos="fade-up"
    data-aos-delay={index * 100}>
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
     <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16" />
      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-black-700 drop-shadow-lg">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index}   data-aos="fade-up"
    data-aos-delay={index * 100} className="group text-center bg-white rounded-2xl shadow-lg p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50 border border-transparent hover:border-blue-400">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700 group-hover:text-blue-900 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
     <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16" />
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} data-aos="zoom-in"
          data-aos-delay={index * 150} className="p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-600 border border-transparent">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
  {/* <div className="absolute inset-0 pointer-events-none"> */}
    {/* <div className="w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl absolute -top-32 -left-32"></div>
    <div className="w-72 h-72 bg-cyan-300 opacity-20 rounded-full blur-2xl absolute bottom-0 right-0"></div> */}
  {/* </div> */}
  <div className="container mx-auto px-4 text-center relative z-10">
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-6 drop-shadow-lg">
      Ready to Unlock Your Financial Potential?
    </h2>
    <p className="text-blue-600 mb-10 max-w-2xl mx-auto text-lg md:text-xl">
      Join thousands of users who are already managing their finances smarter with PockeTrack
    </p>
    <Link href="/dashboard">
      <Button
        size="lg"
        className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-bounce"
      >
        Start Free Trial
      </Button>
    </Link>
  </div>
</section>
    </div>
  );  
}
