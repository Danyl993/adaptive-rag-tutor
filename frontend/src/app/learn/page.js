"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getLearnData } from "@/services/learn";
import { getTopicLesson } from "@/services/learnTopic";
import PageLayout from "@/components/PageLayout";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";
import UploadPanel from "@/components/UploadPanel";
import ChatPanel from "@/components/ChatPanel";
import TopicsSidebar from "@/components/TopicsSidebar";
import HistoryPanel from "@/components/HistoryPanel";

export default function LearnPage() {

  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");
  const [lesson, setLesson] = useState("");
  const [loadingLesson, setLoadingLesson] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

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

  async function handleTopicSelect(topic) {

    setSelectedTopic(topic);

    try {

      setLoadingLesson(true);

      const data = await getTopicLesson(
        subject,
        unit,
        topic
      );

      setLesson(data.lesson);

    } catch (err) {

      console.error(err);

      setLesson(
        "Failed to load lesson."
      );

    } finally {

      setLoadingLesson(false);

    }

  }
  return (

    <PageLayout>
      <Navbar />
      

      <div className="grid grid-cols-12 gap-6">

        {/* Left Sidebar */}

        <div className="col-span-3 space-y-6">

          <SubjectSelector
            subject={subject}
            setSubject={setSubject}
          />

          <UnitSelector
            unit={unit}
            setUnit={setUnit}
          />

          <TopicsSidebar
            subject={subject}
            unit={unit}
            onTopicSelect={handleTopicSelect}
          />

        </div>

        {/* Center */}

        <div className="col-span-6">

          <ChatPanel
            subject={subject}
            unit={unit}
            lesson={
              loadingLesson
                ? "Generating lesson..."
                : lesson
            }
            selectedTopic={selectedTopic}
          />

        </div>

        {/* Right Sidebar */}

        <div className="col-span-3 space-y-6">

          <UploadPanel
            subject={subject}
            unit={unit}
          />

          <HistoryPanel />

        </div>

      </div>

    </PageLayout>

  );

}