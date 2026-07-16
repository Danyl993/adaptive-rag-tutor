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
import StudyProgressPanel from "@/components/StudyProgressPanel";
import { getLearnData } from "@/services/learn";
import { getTopicLesson } from "@/services/learnTopic";
import WeakTopicsPanel from "@/components/WeakTopicsPanel";
import {
    getSemesters,
  } from "@/services/semester";
export default function LearnPage() {

  const [subject, setSubject] = useState("");
  const [unit, setUnit] = useState("");

  const [semesters, setSemesters] = useState([]);
  const [currentSemester, setCurrentSemester] = useState("");
  const [lesson, setLesson] = useState("");
  const [loadingLesson, setLoadingLesson] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {

  async function loadData() {

      try {

        await getLearnData();
        await loadSemesters();

      } catch (err) {

        console.error(err);

      }

    }

    loadData();

  }, []);

  const selectedSemester = semesters.find(
    (item) => item.semester === currentSemester
  );

  useEffect(() => {

    if (
      selectedSemester &&
      selectedSemester.subjects.length > 0
    ) {

      setSubject(selectedSemester.subjects[0].name);
      setUnit("U1");

    }

  }, [currentSemester, semesters]);

  const selectedSubject = selectedSemester?.subjects?.find(
    (item) => item.name === subject
  );

  const availableUnits = selectedSubject
    ? Array.from(
        { length: selectedSubject.units },
        (_, index) => `U${index + 1}`
      )
    : [];

  useEffect(() => {
      setLesson("");
      setSelectedTopic("");
    }, [subject, unit]);
    
    async function loadSemesters() {

      try {

        const data = await getSemesters();

        setSemesters(data);

          if (data.length > 0) {

            setCurrentSemester(data[0].semester);

          }

      } catch (err) {

        console.error(err);

      }

    }
  
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

      <Navbar
        semesters={semesters}
        currentSemester={currentSemester}
        onSelectSemester={setCurrentSemester}
      />

      <div className="mb-6 flex gap-4">

        <SubjectSelector
          subjects={selectedSemester?.subjects || []}
          subject={subject}
          setSubject={setSubject}
        />

        <UnitSelector
          units={availableUnits}
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

           <StudyProgressPanel />
            
        </div>

      </div>

    </PageLayout>

  );

}

