import { useState } from "react";
import { FaEye, FaCalendarAlt } from "react-icons/fa";
import spinner from "../../assets/spinner.svg";
import { format } from "date-fns";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Calendar,
} from "@dtewary/tw-polaris";
import { Link } from "react-router-dom";

// Define the DateRange type
type DateRange =
  | {
      from: Date;
      to?: Date;
    }
  | undefined;

const invoices = [
  {
    id: "INV-2024001",
    date: "Feb 20, 2025",
    amount: "₹15,000",
    status: "Paid",
    customer: "John Doe",
    location: "Mumbai",
  },
  {
    id: "INV-2024002",
    date: "Feb 22, 2025",
    amount: "₹8,750",
    status: "Pending",
    customer: "John Doe",
    location: "Delhi",
  },
  {
    id: "INV-2024003",
    date: "Feb 24, 2025",
    amount: "₹22,400",
    status: "Paid",
    customer: "John Doe",
    location: "Bangalore",
    loading: true,
  },
  {
    id: "INV-2024004",
    date: "Feb 25, 2025",
    amount: "₹12,000",
    status: "Overdue",
    customer: "John Doe",
    location: "Chennai",
  },
];

export default function InvoiceList() {
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>();
  const [selectedCustomer, setSelectedCustomer] = useState("John Doe");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return format(date, "MMM dd, yyyy");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white w-11/12 md:w-[700px] p-4 rounded-lg shadow-md">
        <img
          src="https://dtewary.blr1.digitaloceanspaces.com/logo/dtewary-brand-logo.png"
          alt="logo"
          className="w-28 md:w-32 h-auto mb-3 -ml-2"
        />
        {/* Header */}
        <div className="flex justify-between items-center  mb-3">
          <h2 className="text-lg font-semibold text-gray-900">Invoices</h2>
        </div>
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mb-4">
          {/* Customer Select */}
          <select
            className="w-full p-1.5 border border-gray-300 rounded-md text-sm appearance-none disabled:opacity-50 disabled:bg-neutral-300 disabled:cursor-not-allowed"
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
          >
            <option>John Doe</option>
            <option>Jane Smith</option>
          </select>

          {/* Location Select */}
          <select
            className="w-full p-1.5 border border-gray-300 rounded-md text-sm appearance-none"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option>All Locations</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
            <option>Chennai</option>
          </select>

          {/* Date Range Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center justify-between w-full p-1.5 border border-gray-300 rounded-md text-sm appearance-none truncate">
                <span>
                  {dateRange?.from
                    ? `${formatDate(dateRange.from)} - ${formatDate(dateRange.to)}`
                    : "Select Date Range"}
                </span>
                <FaCalendarAlt className="text-gray-500" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Calendar
                mode="range"
                selected={dateRange}
                //@ts-ignore
                onSelect={setDateRange}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Invoice List */}
        <div className="border rounded-md overflow-hidden">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className={`flex items-center justify-between p-3 border-b hover:bg-gray-100 transition group ${
                selectedInvoice === invoice.id ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedInvoice(invoice.id)}
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 group-hover:text-[#891B3F]">
                  {invoice.id}
                </p>
                <p className="text-xs text-gray-600">{invoice.date}</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-sm font-semibold">{invoice.amount}</p>
                <p
                  className={`text-xs font-medium ${
                    invoice.status === "Paid"
                      ? "text-green-600"
                      : invoice.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  {invoice.status}
                </p>
              </div>
              <div className="flex flex-1 justify-end items-center">
                <button
                  className="bg-[#891B3F] text-white p-2 rounded-md text-xs flex items-center space-x-1 min-w-[80px] justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Viewing Invoice: ${invoice.id}`);
                  }}
                >
                  {invoice.loading ? (
                    <img
                      src={spinner}
                      className="w-4 h-4 inline-block invert"
                      alt="loading"
                    />
                  ) : (
                    <FaEye className="text-white text-xs" />
                  )}
                  <span>{invoice.loading ? "Fetching" : "View"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/"
          className="block text-[#891B3F] text-xs mt-3 font-semibold hover:underline mb-3"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
