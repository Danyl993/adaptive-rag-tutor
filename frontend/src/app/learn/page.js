"use client";

import { useEffect, useState } from "react";
import { getLearnData } from "@/services/learn";
import PageLayout from "@/components/PageLayout";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";
import UploadPanel from "@/components/UploadPanel";
import ChatPanel from "@/components/ChatPanel";
import TopicsSidebar from "@/components/TopicsSidebar";

export default function LearnPage() {
  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");
  useEffect(() => {
    async function loadData() {
      try {
        const data = await getLearnData();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  }, []);

return (
  <PageLayout>

    <h1 className="text-3xl font-bold">
      Learn Mode
    </h1>

    <div className="mt-6">
      <SubjectSelector
        subject={subject}
        setSubject={setSubject}
      />    
    </div>

    <div className="mt-4">
      <UnitSelector
        unit={unit}
        setUnit={setUnit}
      />
    </div>

    <div className="mt-6">
      <UploadPanel
        subject={subject}
        unit={unit}
      />
    </div>

    <div className="mt-6">
      <ChatPanel
        subject={subject}
        unit={unit}
      />
    </div>

    <div className="mt-6">
      <TopicsSidebar />
    </div>

  </PageLayout>
);
}