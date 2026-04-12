import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { contactInfo } from "../data/mock";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description:
        "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Have a question, want to volunteer, or looking to partner with us?
              We’d be glad to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Call Us
                  </h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="text-gray-600 text-xs mt-1">
                    Mon-Sat: 9AM - 6PM
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Email Us
                  </h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm break-all"
                  >
                    {contactInfo.email}
                  </a>
                  <p className="text-gray-600 text-xs mt-1">
                    We'll respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Working Hours
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Monday - Saturday: 10AM - 6PM</p>
                    <p className="text-gray-500">Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-2xl">
                <CardContent className="p-8 md:p-12">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you as soon
                      as possible
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-base font-semibold"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="h-12 mt-2"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-base font-semibold"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john.doe@example.com"
                          required
                          className="h-12 mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-base font-semibold"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="h-12 mt-2"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="subject"
                          className="text-base font-semibold"
                        >
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                          className="h-12 mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-base font-semibold"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        required
                        rows={6}
                        className="mt-2 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold text-lg">
                  Map Location
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
