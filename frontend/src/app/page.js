"use client";

import { useState } from "react";

import API from "@/services/api";
import NavigationSidebar from "@/components/NavigationSidebar";
import ModeSelector from "@/components/ModeSelector";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";
import Navbar from "@/components/Navbar";

export default function Home() {

  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");

  async function testBackend() {

    try {

      const res = await API.get("/");

      alert(JSON.stringify(res.data));

    } catch {

      alert("Backend connection failed");

    }

  }

  return (

    <main className="min-h-screen px-8 py-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

          <Navbar />

          <div className="mt-6">
            <ModeSelector />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">

            <SubjectSelector
              subject={subject}
              setSubject={setSubject}
            />

            <UnitSelector
              unit={unit}
              setUnit={setUnit}
            />

          </div>

        </div>

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-3">

            <NavigationSidebar />

          </div>

          <div className="col-span-9">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">

              <h2 className="text-3xl font-bold">
                Welcome 👋
              </h2>

              <p className="mt-3 text-slate-400">
                Select a mode from the left sidebar to start studying.
              </p>

              <button
                onClick={testBackend}
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-500"
              >
                Test Backend
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}