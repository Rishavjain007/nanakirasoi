import React, { useState } from 'react';
import { Heart, Check, CreditCard, Building2, Smartphone } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { donationOptions } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const { toast } = useToast();

  const handleDonation = (e) => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;
    toast({
      title: "Thank You!",
      description: `Your donation of ₹${amount} will help feed many families. This is a demo - actual payment processing will be integrated.`,
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-orange-600" fill="currentColor" />
              <span className="text-orange-600 text-sm font-semibold">Make a Difference</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Support Feeds Hope
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              Every contribution, big or small, helps us serve nutritious meals to those in need
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">₹50</div>
                <div className="text-sm text-gray-600">Feeds 1 person for a day</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">₹1,000</div>
                <div className="text-sm text-gray-600">Provides meals for a family for a week</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">₹5,000</div>
                <div className="text-sm text-gray-600">Supports a community kitchen for a day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-2xl border-none">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleDonation}>
                  {/* Amount Selection */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Choose Donation Amount
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {donationOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(option.amount);
                            setCustomAmount('');
                          }}
                          className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            selectedAmount === option.amount && !customAmount
                              ? 'border-orange-600 bg-orange-50 shadow-lg'
                              : 'border-gray-200 hover:border-orange-300'
                          }`}
                        >
                          {option.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-orange-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                                Popular
                              </span>
                            </div>
                          )}
                          <div className="text-2xl font-bold text-gray-900 mb-2">
                            ₹{option.amount}
                          </div>
                          <div className="text-xs text-gray-600 leading-tight">
                            {option.impact}
                          </div>
                          {selectedAmount === option.amount && !customAmount && (
                            <div className="absolute top-3 right-3">
                              <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Custom Amount */}
                    <div>
                      <Label htmlFor="custom-amount" className="text-base font-semibold mb-2">
                        Or Enter Custom Amount
                      </Label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                          ₹
                        </span>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="pl-8 h-12 text-lg"
                          min="50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Select Payment Method
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                        { id: 'upi', label: 'UPI', icon: Smartphone },
                        { id: 'bank', label: 'Net Banking', icon: Building2 },
                      ].map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            paymentMethod === method.id
                              ? 'border-orange-600 bg-orange-50'
                              : 'border-gray-200 hover:border-orange-300'
                          }`}
                        >
                          <method.icon
                            className={`w-8 h-8 mx-auto mb-2 ${
                              paymentMethod === method.id
                                ? 'text-orange-600'
                                : 'text-gray-400'
                            }`}
                          />
                          <div className="text-sm font-semibold text-gray-900">
                            {method.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Your Information
                    </h3>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="John" className="h-11" />
                        </div>
                        <div>
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Doe" className="h-11" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          className="h-11"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="h-11"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                    Donate ₹{customAmount || selectedAmount}
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Your donation is secure and tax-deductible. You'll receive a receipt via email.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Direct Bank Transfer</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">Bank Name:</span> HDFC Bank
                    </p>
                    <p>
                      <span className="font-semibold">Account Name:</span> Nanakirasoi Foundation
                    </p>
                    <p>
                      <span className="font-semibold">Account Number:</span> 1234567890123456
                    </p>
                    <p>
                      <span className="font-semibold">IFSC Code:</span> HDFC0001234
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3">UPI Payment</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">UPI ID:</span> nanakirasoi@upi
                    </p>
                    <p className="mt-4">
                      Scan the QR code or use the UPI ID above to make your contribution directly.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Please share payment screenshot at donations@nanakirasoi.org for receipt
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Why Donate to Nanakirasoi?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: '100% Transparency',
                  description: 'Every rupee is accounted for and used directly for our programs',
                },
                {
                  title: 'Tax Benefits',
                  description: 'Get 80G tax deduction on your donations as per Indian tax laws',
                },
                {
                  title: 'Real Impact',
                  description: 'See the direct impact of your contribution through regular updates',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;