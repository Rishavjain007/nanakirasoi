import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Card, CardContent } from '../components/ui/card';
import { faqs } from '../data/mock';

const Faqs = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                Frequently Asked Questions
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Got Questions? We've Got Answers
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Find answers to common questions about our work, programs, and how you can help
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={`item-${faq.id}`}
                      className="border border-orange-100 rounded-lg px-6 hover:border-orange-300 transition-colors duration-200"
                    >
                      <AccordionTrigger className="text-left hover:no-underline hover:text-orange-600 transition-colors duration-200 py-5">
                        <span className="text-base font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-5 pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl bg-gradient-to-br from-orange-50 to-orange-100/50">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <HelpCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Can't find the answer you're looking for? Our team is here to help. Reach out
                  to us and we'll get back to you as soon as possible.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Contact Us
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
              <p className="text-gray-600">Quick links to learn more about our work</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'About Us',
                  description: 'Learn about our mission, vision, and the story behind Nanakirasoi',
                  link: '/about',
                },
                {
                  title: 'Our Programs',
                  description: 'Discover the various programs we run to fight hunger',
                  link: '/programs',
                },
                {
                  title: 'Get Involved',
                  description: 'Find out how you can contribute as a volunteer or donor',
                  link: '/contact',
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="text-orange-600 hover:text-orange-700 font-semibold text-sm inline-flex items-center group"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Your support can change lives. Join us in our mission to eliminate hunger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Donate Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;