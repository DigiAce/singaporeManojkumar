import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Check, Star, Clock, Users, Trophy, ArrowRight } from "lucide-react";
import DatePicker from "react-datepicker";
import QRCode from "react-qr-code";
import { v4 as uuidv4 } from "uuid";
import "react-datepicker/dist/react-datepicker.css";

gsap.registerPlugin(ScrollTrigger);

// BookingModal Component
const BookingModal = ({
  onClose,
  defaultAmount,
}: {
  onClose: () => void;
  defaultAmount: string;
}) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [amount, setAmount] = useState(defaultAmount);

  const upiID = "karthikkn877@okicici";

  const generateSlots = () => {
    const hours = [9, 11, 13, 15];
    return hours.map((h) => `${h}:00 - ${h + 2}:00`);
  };

  const slots = generateSlots();

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day >= 1 && day <= 5;
  };

  const handleBooking = () => {
    if (!name || !email || !phone || !slot || !date || !amount) {
      alert("Please fill all fields");
      return;
    }

    const id = uuidv4();
    setBookingId(id);
    setShowQR(true);

    fetch("https://hooks.zapier.com/hooks/catch/your_webhook_url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        date: date.toDateString(),
        slot,
        id,
        amount,
      }),
    });
  };

  const upiURL = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(
    name
  )}&am=${amount}&cu=INR&tn=Booking%20ID:%20${bookingId}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          ❌
        </button>
        <h2 className="text-xl font-bold mb-4">Book Your Slot</h2>

        <div className="mb-4">
          <label className="block font-semibold">Select Date:</label>
          <DatePicker
            selected={date}
            onChange={(d) => setDate(d)}
            filterDate={isWeekday}
            minDate={new Date()}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Select Slot:</label>
          <div className="grid grid-cols-2 gap-2">
            {slots.map((s) => (
              <button
                key={s}
                onClick={() => setSlot(s)}
                className={`p-2 border rounded ${
                  slot === s ? "bg-orange-600 text-white" : ""
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <input
            className="border p-2 rounded w-full mb-2"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border p-2 rounded w-full mb-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border p-2 rounded w-full mb-2"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="border p-2 rounded w-full"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {!showQR && (
          <button
            onClick={handleBooking}
            className="bg-orange-600 text-white px-4 py-2 rounded w-full"
          >
            Proceed to Payment
          </button>
        )}

        {showQR && (
          <div className="mt-4 text-center">
            <p className="mb-2">Scan to Pay ₹{amount}</p>
            <div className="bg-white p-4 inline-block rounded">
              <QRCode value={upiURL} />
            </div>
            <p className="text-xs mt-2">Booking ID: {bookingId}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Pricing Component
const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const defaultAmount = "297";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, pricingRef);

    return () => ctx.revert();
  }, []);

  const features = [
    "Complete 4-module curriculum (12+ hours)",
    "Monthly live Q&A sessions with Manoj",
    "Private Tamil creators community access",
    "Lifetime updates and new content",
    "Mobile + desktop editing masterclass",
    "Platform-specific growth strategies",
    "Monetization and brand deal templates",
    "24/7 community support",
    "Bonus: Content calendar templates",
    "Bonus: Viral hashtag research guide",
  ];

  return (
    <section
      ref={pricingRef}
      className="py-20 bg-gradient-to-br from-slate-50 to-orange-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pricing-content text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Transform Your Content{" "}
            <span className="text-orange-600">Today</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join the exclusive Tamil Content Creator Masterclass and start
            building your empire today.
          </p>
        </div>

        <div className="pricing-content max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-2 rounded-bl-lg font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Tamil Content Creator Masterclass
                </h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-orange-600">
                    ₹{defaultAmount}
                  </span>
                  <span className="text-lg text-slate-500 line-through ml-2">
                    ₹497
                  </span>
                </div>
                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full inline-block font-semibold">
                  Early Bird Special - 40% OFF
                </div>
              </div>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
                className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              >
                Enroll Now - Limited Time
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <p className="text-center text-sm text-slate-500 mt-4">
                30-day money-back guarantee
              </p>
            </div>
            {/* Right Content */}
            <div className="space-y-8">
              {/* Content Blocks */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Instant Access</h4>
                    <p className="text-slate-600">Start learning immediately</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Get immediate access to all modules and start implementing
                  strategies within minutes of enrollment.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Community Support
                    </h4>
                    <p className="text-slate-600">Join 1,000+ Tamil creators</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Connect with fellow Tamil creators, share experiences, and get
                  support from our thriving community.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Proven Results</h4>
                    <p className="text-slate-600">Success-tested strategies</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Learn from strategies that have helped creators gain millions
                  of followers and build successful brands.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-content text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-8 text-white max-w-2xl mx-auto">
            <Star className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Don't Miss This Opportunity
            </h3>
            <p className="text-lg opacity-90 mb-6">
              The early bird price ends in 48 hours. Join now and save ₹200 on
              your journey to Tamil content success!
            </p>
            <div className="text-3xl font-bold mb-4">Next price: ₹497</div>
          </div>
        </div>
      </div>

      {showModal && (
        <BookingModal
          onClose={() => setShowModal(false)}
          defaultAmount={defaultAmount}
        />
      )}
    </section>
  );
};

export default Pricing;
