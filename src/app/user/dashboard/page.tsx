"use client";
import {
  IconCamera,
  IconKeyboard,
  IconLanguage,
  IconFileText,
  IconCertificate,
} from "@tabler/icons-react";

export default function Dashboard() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-center uppercase">
        Plateful.AI Dashboard
      </h1>

      <div className="stats shadow w-full bg-base-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat">
          <div className="stat-figure text-primary">
            <IconCamera size={40} />
          </div>
          <div className="stat-title">Image Predictions</div>
          <div className="stat-value text-primary">4.2K</div>
          <div className="stat-desc">+15% from last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <IconKeyboard size={40} />
          </div>
          <div className="stat-title">Text Predictions</div>
          <div className="stat-value text-secondary">2.8K</div>
          <div className="stat-desc">+9% from last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-success">
            <IconLanguage size={40} />
          </div>
          <div className="stat-title">Recipes Translated</div>
          <div className="stat-value text-success">1.3K</div>
          <div className="stat-desc">Across 6 languages</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-warning">
            <IconFileText size={40} />
          </div>
          <div className="stat-title">Saved Recipes</div>
          <div className="stat-value text-warning">3.9K</div>
          <div className="stat-desc">+22% saved this week</div>
        </div>

        <div className="stat col-span-1 md:col-span-2 lg:col-span-4">
          <div className="stat-figure text-accent">
            <IconCertificate size={40} />
          </div>
          <div className="stat-title">Model Accuracy</div>
          <div className="stat-value text-accent">92.4%</div>
          <div className="stat-desc">Image & text prediction combined</div>
        </div>
      </div>
    </>
  );
}
