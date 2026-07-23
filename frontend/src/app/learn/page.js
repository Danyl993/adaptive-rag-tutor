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

      <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

        <Navbar
          semesters={semesters}
          currentSemester={currentSemester}
          onSelectSemester={setCurrentSemester}
        />

      </div>

      <div className="grid grid-cols-12 gap-6 mb-6">

        <div className="col-span-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

            <h2 className="mb-2 text-xl font-bold">
              Quick Actions
            </h2>

            <p className="mb-5 text-sm text-slate-400">
              Learn Mode
            </p>

            <div className="flex flex-col gap-3">

              <button
                className="rounded-xl border border-green-500 bg-green-600/20 px-4 py-3 text-left font-medium text-green-300"
              >
                📖 Continue Learning
              </button>

              <button
                className="rounded-xl border border-cyan-500 bg-cyan-600/20 px-4 py-3 text-left font-medium text-cyan-300"
              >
                📂 Upload Notes
              </button>

            </div>

          </div>

        </div>

        <div className="col-span-9">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

            <div className="mb-10 flex flex-wrap gap-8">
              <button className="rounded-xl border border-green-500 bg-green-600/20 px-7 py-3 text-lg font-semibold text-green-300">
                Learn
              </button>

              <button className="rounded-xl border border-slate-700 bg-slate-800 px-7 py-3 text-lg font-semibold text-slate-300">
                Exam
              </button>

              <button className="rounded-xl border border-slate-700 bg-slate-800 px-7 py-3 text-lg font-semibold text-slate-300">
                Revision
              </button>

              <button className="rounded-xl border border-slate-700 bg-slate-800 px-7 py-3 text-lg font-semibold text-slate-300">
                MCQ
              </button>

              <button className="rounded-xl border border-slate-700 bg-slate-800 px-7 py-3 text-lg font-semibold text-slate-300">
                Q&A
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-8">

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

          </div>

        </div>

      </div>

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 h-full">
            <TopicsSidebar
              subject={subject}
              unit={unit}
              onTopicSelect={handleTopicSelect}
            />
          </div>
        </div>

        <div className="col-span-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 h-full">
            <ChatPanel
              subject={subject}
              unit={unit}
              lesson={loadingLesson ? "Generating lesson..." : lesson}
              selectedTopic={selectedTopic}
            />
          </div>
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <UploadPanel subject={subject} unit={unit} />
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <WeakTopicsPanel />
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <StudyProgressPanel />
          </div>
        </div>

      </div>

    </PageLayout>

  );

}

