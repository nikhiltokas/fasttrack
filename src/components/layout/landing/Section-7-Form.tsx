"use client";

import React, { useState } from "react";
import {
  Truck,
  Wrench,
  Clock,
  Phone,
  MapPin,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";
import AnimatedButton from "@/components/ui/Button-Animated";

export default function TruckRepairForm({ id }: { id?: string }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    truckType: "",
    service: "",
    urgency: "normal",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Tire Service (Flat Tire, Blowout)",
    "Battery Jump Start / Replacement",
    "Mobile Diagnostics",
    "Brake Repair / Air Brake Service",
    "Engine Repair / No Start Issues",
    "Electrical Problems",
    "Fuel System Issues / Fuel Leak",
    "Cooling System / Radiator Repair",
    "Alternator / Starter Service",
    "Belt & Hose Replacement",
    "Transmission Issues",
    "Turbo / Exhaust Repair",
    "Oil Change / Fluid Services",
    "DOT Inspection",
    "Towing Service",
    "Lockout Service",
    "Fifth Wheel / Kingpin Repair",
    "Trailer Repair",
    "Mobile Welding",
    "PM (Preventive Maintenance)",
    "Other",
  ];

  const truckTypes = [
    "Semi Truck / Tractor",
    "Box Truck",
    "Dump Truck",
    "Flatbed Truck",
    "Refrigerated Truck",
    "Tow Truck",
    "Delivery Truck",
    "Bus",
    "RV / Motorhome",
    "Heavy Equipment",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-card rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-card-foreground mb-2">
            Service Request Received!
          </h2>
          <p className="text-muted-foreground mb-6">
            Thank you for your request. A mobile technician will contact you
            shortly to confirm details and dispatch to your Indianapolis location.
          </p>
          <AnimatedButton
            onClick={() => setSubmitted(false)}
            variant="primary"
          >
            Submit Another Request
          </AnimatedButton>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className="min-h-screen bg-background px-4 sm:px-6 lg:px-8">
      {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            Request Mobile Repair in Indianapolis
          </span>
          <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-light text-black mb-6 leading-12 md:leading-16 lg:leading-20">
            Need On-Site Service?
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm leading-6 text-gray-600">
            Fill out the form below for fast, reliable mobile truck repair service in Indianapolis.
          </p>
        </div>

      <div className="max-w-7xl mx-auto">
        {/* Form */}
        <div className="bg-card rounded-lg p-8 mt-10 border border-orange-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-card-foreground mb-2">
                  <User className="w-4 h-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-card-foreground mb-2">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-card-foreground mb-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-card-foreground mb-2">
                <MapPin className="w-4 h-4" />
                Current Location / Address *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                placeholder="Mile marker 145, I-80 East or City, State"
              />
            </div>

            {/* Vehicle and Service Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-card-foreground mb-2">
                  <Truck className="w-4 h-4" />
                  Truck / Vehicle Type *
                </label>
                <select
                  name="truckType"
                  value={formData.truckType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all bg-card"
                >
                  <option value="">Select truck type</option>
                  {truckTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-card-foreground mb-2">
                  <Clock className="w-4 h-4" />
                  Service Urgency *
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all bg-card"
                >
                  <option value="emergency">Emergency - ASAP</option>
                  <option value="urgent">Urgent - Within 2 Hours</option>
                  <option value="normal">Normal - Same Day</option>
                  <option value="scheduled">Scheduled Maintenance</option>
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-card-foreground mb-2">
                <Wrench className="w-4 h-4" />
                Service Needed *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all bg-card"
              >
                <option value="">Select service type</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-card-foreground mb-2">
                <MessageSquare className="w-4 h-4" />
                Problem Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all resize-none"
                placeholder="Please describe the issue you're experiencing with your truck..."
              />
            </div>

            {/* Submit Button */}
            <AnimatedButton
              type="submit"
              variant="primary"
              className="w-full"
            >
              Request Emergency Service
            </AnimatedButton>

            <p className="text-xs text-slate-500 text-center mt-4">
              * Required fields. We typically respond within 15-30 minutes for
              emergency requests.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
