"use client"
import React from 'react'
import MobileApp from "@/components/MobileApp";
import Website from "@/components/Website";

export default function Home() {
  return (
    <div>
      <div>
        <Website />
      </div>
      <div>
        <MobileApp />
      </div>
    </div>
  );
}
