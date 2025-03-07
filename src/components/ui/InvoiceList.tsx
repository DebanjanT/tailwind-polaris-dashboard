import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import spinner from "../../assets/spinner.svg";
import { format } from "date-fns";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Calendar,
  Button,
  RadixSelect,
  RadixSelectTrigger,
  RadixSelectValue,
  RadixSelectContent,
  RadixSelectGroup,
  RadixSelectLabel,
  RadixSelectItem,
} from "@dtewary/tw-polaris";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

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

          <RadixSelect>
            <RadixSelectTrigger className="w-full">
              <RadixSelectValue placeholder="Select Customer" />
            </RadixSelectTrigger>
            <RadixSelectContent position="item-aligned" className="w-full">
              <RadixSelectGroup>
                <RadixSelectLabel>Customers</RadixSelectLabel>
                <RadixSelectItem value="j">John Doe</RadixSelectItem>
                <RadixSelectItem value="banana">Bob Marley</RadixSelectItem>
              </RadixSelectGroup>
            </RadixSelectContent>
          </RadixSelect>

          {/* Location Select */}

          <RadixSelect>
            <RadixSelectTrigger className="w-full truncate">
              <RadixSelectValue placeholder="Select Destination" />
            </RadixSelectTrigger>
            <RadixSelectContent position="item-aligned" className="w-full">
              <RadixSelectGroup>
                <RadixSelectLabel>Store Locations</RadixSelectLabel>
                <RadixSelectItem value="all">All Locations</RadixSelectItem>
                <RadixSelectItem value="dlh">Delhi</RadixSelectItem>
                <RadixSelectItem value="pun">Pune</RadixSelectItem>
                <RadixSelectItem value="hdbd">Hydrabad</RadixSelectItem>
              </RadixSelectGroup>
            </RadixSelectContent>
          </RadixSelect>

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
            <PopoverContent className="p-0 rounded-md shadow-shadow-300 border sm:border border-gray-300">
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
                <Button
                  variantType={invoice.loading ? "tertiary" : "primary"}
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Viewing Invoice: ${invoice.id}`);
                  }}
                  disabled={invoice.loading}
                >
                  {invoice.loading ? (
                    <img
                      src={spinner}
                      className="w-4 h-4 inline-block mr-1"
                      alt="loading"
                    />
                  ) : (
                    <Eye className="w-4 h-4 mr-1" />
                  )}
                  <span>{invoice.loading ? "Fetching" : "View"}</span>
                </Button>
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
