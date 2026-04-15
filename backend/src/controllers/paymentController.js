import { getRazorpay } from "../config/razorpay.js";
import crypto from "crypto";

// ✅ CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Amount is required",
      });
    }

    const razorpay = getRazorpay(); // ✅ correct way

    const order = await razorpay.orders.create({
      amount: amount * 100, // ₹ to paisa
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    return res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("🔥 FULL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ✅ VERIFY PAYMENT
export const verifyPayment = (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Missing payment details",
      });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      return res.status(200).json({
        success: true,
        message: "Payment verified successfully ✅",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid signature ❌",
      });
    }
  } catch (error) {
    console.error("🔥 Verify Payment Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Verification failed",
    });
  }
};
