"use client";

import dynamic from "next/dynamic";

// Dynamically import analytics with no SSR to reduce initial bundle
const Analytics = dynamic(
    () => import("@vercel/analytics/next").then((mod) => mod.Analytics),
    { ssr: false }
);

const SpeedInsights = dynamic(
    () => import("@vercel/speed-insights/next").then((mod) => mod.SpeedInsights),
    { ssr: false }
);

export function AnalyticsWrapper() {
    return (
        <>
            <Analytics />
            <SpeedInsights />
        </>
    );
}
