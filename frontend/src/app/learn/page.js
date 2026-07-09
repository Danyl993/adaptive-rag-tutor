"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import NavigationSidebar from "@/components/NavigationSidebar";
import PageLayout from "@/components/PageLayout";
import SubjectSelector from "@/components/SubjectSelector";
import UnitSelector from "@/components/UnitSelector";
import TopicsSidebar from "@/components/TopicsSidebar";
import ChatPanel from "@/components/ChatPanel";
import UploadPanel from "@/components/UploadPanel";

import { getLearnData } from "@/services/learn";
import { getTopicLesson } from "@/services/learnTopic";
import WeakTopicsPanel from "@/components/WeakTopicsPanel";

export default function LearnPage() {

  const [subject, setSubject] = useState("OS");
  const [unit, setUnit] = useState("U1");
  const [lesson, setLesson] = useState("");
  const [loadingLesson, setLoadingLesson] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {

    async function loadData() {

      try {

        await getLearnData();

      } catch (err) {

        console.error(err);

      }

    }

    loadData();

  }, []);
  useEffect(() => {
      setLesson("");
      setSelectedTopic("");
    }, [subject, unit]);
    
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

      setLesson("Failed to load lesson.");

    } finally {

      setLoadingLesson(false);

    }

  }

  return (

    <PageLayout>

      <Navbar />

      <div className="mb-6 flex gap-4">

        <SubjectSelector
          subject={subject}
          setSubject={setSubject}
        />

        <UnitSelector
          unit={unit}
          setUnit={setUnit}
        />

      </div>

      <div className="grid grid-cols-12 gap-6">

        {/* Study Tools */}

        <div className="col-span-2">

          <NavigationSidebar />

        </div>

        {/* Topics */}

        <div className="col-span-3">

          <TopicsSidebar
            subject={subject}
            unit={unit}
            onTopicSelect={handleTopicSelect}
          />

        </div>

        {/* Chat */}

        <div className="col-span-5">

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

        {/* Upload */}

        <div className="col-span-2">

          <UploadPanel
            subject={subject}
            unit={unit}
          />

          <WeakTopicsPanel />

        </div>

      </div>

    </PageLayout>

  );

}

