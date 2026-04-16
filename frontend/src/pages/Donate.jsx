import React, { useState } from "react";
import { Heart, Check, CreditCard, Building2, Smartphone } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { donationOptions } from "../data/mock";
import { useToast } from "../hooks/use-toast";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  // ✅ USER DATA STATE
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const { toast } = useToast();

  // ✅ RECEIPT FUNCTION - FIXED with better error handling
  const generateReceipt = (data) => {
    try {
      console.log("Generating receipt for:", data);

      const receiptHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Donation Receipt - Nanakirasoi Foundation</title>
          <meta charset="UTF-8" />
          <style>
            body {
              font-family: 'Segoe UI', Arial, sans-serif;
              padding: 2rem;
              background-color: #f9fafb;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              margin: 0;
            }
            .receipt-container {
              max-width: 700px;
              width: 100%;
              background: white;
              border-radius: 24px;
              box-shadow: 0 20px 35px -10px rgba(0,0,0,0.1);
              overflow: hidden;
              border: 1px solid #ffe4e0;
            }
            .receipt-header {
              background: linear-gradient(135deg, #f97316, #ea580c);
              padding: 2rem;
              text-align: center;
              color: white;
            }
            .receipt-header h1 {
              margin: 0;
              font-size: 1.8rem;
              font-weight: 700;
            }
            .receipt-header p {
              margin: 0.5rem 0 0;
              opacity: 0.9;
            }
            .receipt-body {
              padding: 2rem;
            }
            .thankyou-message {
              text-align: center;
              font-size: 1.2rem;
              color: #f97316;
              font-weight: 600;
              margin-bottom: 1.5rem;
            }
            .info-row {
              display: flex;
              justify-content: space-between;
              padding: 0.75rem 0;
              border-bottom: 1px dashed #f0e6e0;
            }
            .info-label {
              font-weight: 600;
              color: #4b5563;
            }
            .info-value {
              color: #1f2937;
              font-weight: 500;
            }
            .amount-highlight {
              background-color: #fff7ed;
              border-radius: 16px;
              padding: 1rem;
              margin: 1.5rem 0;
              text-align: center;
              border: 1px solid #ffedd5;
            }
            .amount-highlight span {
              font-size: 2rem;
              font-weight: 800;
              color: #ea580c;
            }
            .footer {
              background-color: #fef2e8;
              padding: 1rem;
              text-align: center;
              font-size: 0.8rem;
              color: #9a6b4a;
            }
            hr {
              border: none;
              border-top: 1px solid #ffe4e0;
              margin: 1rem 0;
            }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <div class="receipt-header">
              <h1>🙏 Nanakirasoi Foundation</h1>
              <p>Official Donation Receipt</p>
            </div>
            <div class="receipt-body">
              <div class="thankyou-message">
                ❤️ Thank you for your kindness!
              </div>
              
              <div class="info-row">
                <div class="info-label">Receipt No.</div>
                <div class="info-value">#NKR-${Date.now().toString().slice(-8)}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Date</div>
                <div class="info-value">${data.date}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Transaction ID</div>
                <div class="info-value">${data.paymentId}</div>
              </div>
              
              <hr />
              
              <div class="info-row">
                <div class="info-label">Donor Name</div>
                <div class="info-value">${data.firstName} ${data.lastName}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Email Address</div>
                <div class="info-value">${data.email}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Phone Number</div>
                <div class="info-value">${data.phone}</div>
              </div>
              
              <div class="amount-highlight">
                <div style="font-size: 0.9rem; margin-bottom: 5px;">Donation Amount</div>
                <span>₹${data.amount}</span>
              </div>
              
              <div class="info-row">
                <div class="info-label">Payment Method</div>
                <div class="info-value">${data.method || "Online Payment (Razorpay)"}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Tax Benefit</div>
                <div class="info-value">80G Certificate Available</div>
              </div>
            </div>
            <div class="footer">
              This is a computer generated receipt.<br />
              Nanakirasoi Foundation | Feeding Hope, One Meal at a Time.
            </div>
          </div>
        </body>
      </html>
    `;

      const blob = new Blob([receiptHTML], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `donation-receipt-${data.paymentId.slice(-6)}.html`;
      document.body.appendChild(a); // Append to body temporarily
      a.click();
      document.body.removeChild(a); // Remove after click
      URL.revokeObjectURL(url);

      console.log("Receipt downloaded successfully");
      return true;
    } catch (error) {
      console.error("Error generating receipt:", error);
      return false;
    }
  };

  const handleDonation = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isProcessing) {
      toast({
        title: "Processing",
        description: "Please wait, payment is being processed...",
      });
      return;
    }

    const amount = customAmount || selectedAmount;

    if (!amount || amount < 50) {
      toast({
        title: "Invalid Amount",
        description: "Minimum donation is ₹50",
      });
      return;
    }

    // ✅ REQUIRED FIELD CHECK
    if (!user.firstName || !user.lastName || !user.email || !user.phone) {
      toast({
        title: "Missing Details",
        description: "Please fill all required fields to continue",
      });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
      });
      return;
    }

    // Phone validation (basic)
    if (user.phone.length < 10) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid 10-digit phone number",
      });
      return;
    }

    setIsProcessing(true);

    try {
      if (!window.Razorpay) {
        toast({
          title: "Error",
          description:
            "Payment gateway not loaded. Please refresh and try again.",
        });
        setIsProcessing(false);
        return;
      }

      // ✅ CREATE ORDER
      const res = await fetch(
        "https://nanakirasoi.onrender.com/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        },
      );

      const data = await res.json();

      if (!data.success) {
        toast({
          title: "Error",
          description: "Unable to initiate payment. Please try again.",
        });
        setIsProcessing(false);
        return;
      }

      const order = data.order;

      // ✅ RAZORPAY OPTIONS
      const options = {
        key: "rzp_live_Skruf3BBCCwjIv",
        amount: order.amount,
        currency: "INR",
        name: "Nanakirasoi Foundation",
        description: "Donation towards nutritious meals",
        order_id: order.id,

        // ✅ PAYMENT SUCCESS HANDLER
        handler: async function (response) {
          try {
            console.log("Payment success response:", response);

            const verifyRes = await fetch(
              "https://nanakirasoi.onrender.com/api/payment/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(response),
              },
            );

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              toast({
                title: "🎉 Payment Successful!",
                description: `Thank you for donating ₹${amount}`,
              });

              const receiptGenerated = generateReceipt({
                ...user,
                amount,
                paymentId: response.razorpay_payment_id,
                date: new Date().toLocaleString(),
                method:
                  paymentMethod === "card"
                    ? "Credit/Debit Card"
                    : paymentMethod === "upi"
                      ? "UPI"
                      : "Net Banking",
              });

              if (receiptGenerated) {
                toast({
                  title: "Receipt Downloaded",
                  description:
                    "Your donation receipt has been saved to your device.",
                });
              }

              setCustomAmount("");
              setSelectedAmount(1000);

              // ✅ ADD THIS LINE HERE
              setTimeout(() => {
                window.location.reload();
              }, 1500);
            } else {
              toast({
                title: "Verification Failed",
                description:
                  "Payment was processed but verification failed. Please contact support.",
              });
            }
          } catch (err) {
            console.error("Verification error:", err);
            toast({
              title: "Verification Error",
              description:
                "Could not verify payment status. Your receipt will be emailed to you.",
            });
          } finally {
            setIsProcessing(false);
          }
        },

        // ✅ PREFILL USER DATA
        prefill: {
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          contact: user.phone,
        },

        theme: {
          color: "#f97316",
        },

        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            toast({
              title: "Payment Cancelled",
              description:
                "You cancelled the payment. Please try again when ready.",
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Donation error:", error);
      toast({
        title: "Something Went Wrong",
        description: "Please check your connection and try again.",
      });
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-orange-600" fill="currentColor" />
              <span className="text-orange-600 text-sm font-semibold">
                Make a Difference
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              What Your Support Makes Possible
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              Every donation helps us bring food, care, and community support to more people.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  ₹50
                </div>
                <div className="text-sm text-gray-600">
                  Helps feed 1 person
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  ₹1,500
                </div>
                <div className="text-sm text-gray-600">
                  Helps provide meals to a family for a week
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  ₹5,000
                </div>
                <div className="text-sm text-gray-600">
                  Contributes toward kitchen operations for a day
                </div>
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
                            setCustomAmount("");
                          }}
                          className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            selectedAmount === option.amount && !customAmount
                              ? "border-orange-600 bg-orange-50 shadow-lg"
                              : "border-gray-200 hover:border-orange-300"
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
                          {selectedAmount === option.amount &&
                            !customAmount && (
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
                      <Label
                        htmlFor="custom-amount"
                        className="text-base font-semibold mb-2"
                      >
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
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            if (e.target.value) setSelectedAmount(null);
                          }}
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
                        {
                          id: "card",
                          label: "Credit/Debit Card",
                          icon: CreditCard,
                        },
                        { id: "upi", label: "UPI", icon: Smartphone },
                        { id: "bank", label: "Net Banking", icon: Building2 },
                      ].map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            paymentMethod === method.id
                              ? "border-orange-600 bg-orange-50"
                              : "border-gray-200 hover:border-orange-300"
                          }`}
                        >
                          <method.icon
                            className={`w-8 h-8 mx-auto mb-2 ${
                              paymentMethod === method.id
                                ? "text-orange-600"
                                : "text-gray-400"
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
                          <Label htmlFor="first-name">
                            First Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="first-name"
                            placeholder="John"
                            className="h-11"
                            value={user.firstName}
                            onChange={(e) =>
                              setUser({ ...user, firstName: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="last-name">
                            Last Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="last-name"
                            placeholder="Doe"
                            className="h-11"
                            value={user.lastName}
                            onChange={(e) =>
                              setUser({ ...user, lastName: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          className="h-11"
                          value={user.email}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="h-11"
                          value={user.phone}
                          onChange={(e) =>
                            setUser({ ...user, phone: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isProcessing}
                    className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                      isProcessing ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                    {isProcessing
                      ? "Processing..."
                      : `Donate ₹${customAmount || selectedAmount}`}
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Your donation is secure and tax-deductible. You'll receive a
                    receipt via email and download immediately after payment.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Direct Bank Transfer
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">Bank Name:</span> Axis Bank
                    </p>
                    <p>
                      <span className="font-semibold">Account Name:</span>{" "}
                      Nana Ki Rasoi Foundation
                    </p>
                    <p>
                      <span className="font-semibold">Account Number:</span>{" "}
                      925010040905885
                    </p>
                    <p>
                      <span className="font-semibold">IFSC Code:</span>{" "}
                      UTIB0004504
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3">UPI Payment</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">UPI ID:</span>{" "}
                      nanakirasoi@upi
                    </p>
                    <p className="mt-4">
                      Scan the QR code or use the UPI ID above to make your
                      contribution directly.
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
                  title: "100% Transparency",
                  description:
                    "Every rupee is accounted for and used directly for our programs",
                },
                {
                  title: "Tax Benefits",
                  description:
                    "Get 80G tax deduction on your donations as per Indian tax laws",
                },
                {
                  title: "Real Impact",
                  description:
                    "See the direct impact of your contribution through regular updates",
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
