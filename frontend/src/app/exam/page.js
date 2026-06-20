"use client";

import { useEffect } from "react";
import { getExamData } from "@/services/exam";
import PageLayout from "@/components/PageLayout";

export default function ExamPage() {
  useEffect(() => {
    async function loadData() {
      try {
        const data = await getExamData();
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
        Exam Mode
      </h1>

      <p className="mt-4">
        Prepare for exams using selected units.
      </p>
    </PageLayout>
  );
}