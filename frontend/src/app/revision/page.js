"use client";

import { useEffect } from "react";
import { getRevisionData } from "@/services/revision";
import PageLayout from "@/components/PageLayout";

export default function RevisionPage() {
  useEffect(() => {
    async function loadData() {
      try {
        const data = await getRevisionData();
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
        Revision Mode
      </h1>

      <p className="mt-4">
        Revise topics and test your understanding.
      </p>
    </PageLayout>
  );
}