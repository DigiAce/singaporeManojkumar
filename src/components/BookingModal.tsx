import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import QRCode from "react-qr-code";
import { v4 as uuidv4 } from "uuid";
import emailjs from "emailjs-com";
import "react-datepicker/dist/react-datepicker.css";

interface BookingModalProps {
  onClose: () => void;
}

const upiID = "karthikkn877@okicici"; // your UPI
const slotLimit = 10;

const generateSlots = () => {
  const hours = [9, 11, 13, 15]; // 2-hour slots
  return hours.map((h) => `${h}:00 - ${h + 2}:00`);
};

const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [amount, setAmount] = useState("100"); // Default ₹100

  const slots = generateSlots();

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // Mon-Fri only
  };

  const sendEmail = (id: string) => {
    const templateParams = {
      to_name: name,
      to_email: email,
      phone,
      booking_date: date?.toDateString(),
      booking_slot: slot,
      booking_id: id,
      amount,
    };

    emailjs.send(
      "your_service_id", // ✅ Replace this
      "your_template_id", // ✅ Replace this
      templateParams,
      "your_user_id" // ✅ Replace this
    );
  };

  const handleBooking = () => {
    if (!name || !email || !phone || !slot || !date || !amount) {
      return alert("Please fill all fields");
    }

    const id = uuidv4();
    setBookingId(id);
    setShowQR(true);

    // Store in Google Sheets/Zapier/etc.
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

    sendEmail(id); // via EmailJS
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

        {/* Date Picker */}
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

        {/* Slot Picker */}
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

        {/* Name / Email / Phone */}
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
        </div>

        {/* Amount */}
        <div className="mb-4">
          <input
            className="border p-2 rounded w-full"
            type="number"
            placeholder="Enter Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min={1}
          />
        </div>

        {/* Booking Button or QR Code */}
        {!showQR ? (
          <button
            onClick={handleBooking}
            className="bg-orange-600 text-white px-4 py-2 rounded w-full"
          >
            Proceed to Payment
          </button>
        ) : (
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

export default BookingModal;
