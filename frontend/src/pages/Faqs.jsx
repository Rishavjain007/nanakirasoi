import React from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Card, CardContent } from "../components/ui/card";
import { faqs } from "../data/mock";

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
              Find answers to common questions about our work, programs, and how
              you can help
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
                  If you couldn’t find what you were looking for, we’d be happy
                  to hear from you.
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
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    Become a Volunteer
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
