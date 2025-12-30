"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ Đổi đúng path theo project bạn (asset hoặc assets)
import BannerWebsite from "@/public/assets/BannerWebsite.png";

const PromotionPage = () => {
  return (
    <section className="bg-gray-50 py-20">
      {/* <div className="container mx-auto px-6"> */}
      <div className=" mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-gray-600 text-sm md:text-base font-semibold uppercase tracking-wider mb-3">
            Ưu đãi tháng này
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            KHUYẾN MÃI TIXIMAX
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-24 h-0.5 bg-gray-300" />
            <div className="w-3 h-3 bg-yellow-400 rotate-45" />
            <div className="w-24 h-0.5 bg-gray-300" />
          </div>
        </div>

        {/* ✅ Chỉ giữ lại Card/Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-200 shadow-2xl border-2 border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16 items-center">
            <div className="space-y-6 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm md:text-base font-bold text-yellow-700">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Tuần lễ khuyến mãi Tiximax
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Ưu đãi đỉnh cao cho mọi tuyến vận chuyển
              </h1>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Giảm sâu cước quốc tế, nội địa siêu rẻ, ưu đãi tài chính & combo
                cho doanh nghiệp. Săn mã nhanh tay – số lượng có hạn!
              </p>

              <div className="flex gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-gray-900 px-6 md:px-8 py-3 md:py-4 text-base font-bold text-white hover:bg-gray-800 transition shadow-lg"
                >
                  Xem ưu đãi ngay
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border-2 border-gray-900 px-6 md:px-8 py-3 md:py-4 text-base font-bold text-gray-900 hover:bg-gray-900 hover:text-white transition"
                >
                  Tư vấn gói phù hợp
                </Link>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src={BannerWebsite}
                alt="Promo"
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionPage;
