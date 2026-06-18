"use client";

import { useEffect } from "react";
import { getLearnData } from "@/services/learn";
import PageLayout from "@/components/PageLayout";

export default function LearnPage() {
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

      <p className="mt-4">
        Study topics using uploaded materials.
      </p>
    </PageLayout>
  );
}