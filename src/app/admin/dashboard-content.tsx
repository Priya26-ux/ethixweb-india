
"use client";

import { useState } from "react";

const enquiries = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    service: "Website Development",
    status: "New",
    date: "Demo",
  },
  {
    id: 2,
    name: "Aisha Verma",
    email: "aisha@example.com",
    service: "Digital Marketing",
    status: "Contacted",
    date: "Demo",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    email: "arjun@example.com",
    service: "UI/UX Design",
    status: "Qualified",
    date: "Demo",
  },
];

export default function DashboardContent() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredEnquiries = enquiries.filter((item) => {
    const matchesSearch =
      `${item.name} ${item.email} ${item.service}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus = status === "All" || item.status === status;

    return matchesSearch && matchesStatus;
  });

  const stats = [
    { label: "Total Enquiries", value: enquiries.length },
    {
      label: "New Leads",
      value: enquiries.filter((e) => e.status === "New").length,
    },
    {
      label: "Qualified",
      value: enquiries.filter((e) => e.status === "Qualified").length,
    },
    {
      label: "Closed",
      value: enquiries.filter((e) => e.status === "Closed").length,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-gray-200 bg-white px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="/" className="text-2xl font-bold">
            <span className="text-red-600">Ethix</span>web
          </a>
          <span className="rounded-full bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
            Admin Dashboard
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div>
          <p className="text-sm text-gray-500">Overview</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">
            Lead Management
          </h1>
          <p className="mt-2 text-gray-500">
            Monitor and organize incoming customer enquiries.
          </p>
        </div>

        <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="mt-4 text-3xl font-bold">{stat.value}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="border-b border-gray-200 p-5 sm:p-6">
            <h2 className="text-lg font-bold">Customer Enquiries</h2>
            <p className="mt-1 text-sm text-gray-500">
              Search and filter your lead list.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email or service"
                className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
              />

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-3"
              >
                <option>All</option>
                <option>New</option>
                <option>Contacted</option>
                <option>Qualified</option>
                <option>Closed</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-5 py-4">Customer</th>
                  <th className="px-5 py-4">Service</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredEnquiries.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <p className="font-medium">{item.name}</p>
                      <p className="mt-1 text-gray-500">{item.email}</p>
                    </td>
                    <td className="px-5 py-4">{item.service}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-500">{item.date}</td>
                  </tr>
                ))}

                {filteredEnquiries.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-5 py-12 text-center text-gray-500">
                      No matching enquiries found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-5 text-xs text-gray-400">
          Sample data for interface preview only. Connect Supabase to display
          real enquiries.
        </p>
      </div>
    </main>
  );
}
