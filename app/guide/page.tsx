"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import { Search, PackageSearch, ArrowRight } from "lucide-react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface Guide {
  icon: ReactNode;
  title: string;
  desc: string;
  steps: string[];
  image: string;
  link: string;
}

export default function GuidePage() {
  const guides: Guide[] = [
    {
      icon: <PackageSearch className="w-6 h-6" />,
      title: "Hướng dẫn Đặt hàng",
      desc: "Quy trình đặt hàng tại Tiximax giúp bạn mua hộ hoặc vận chuyển hàng quốc tế dễ dàng và nhanh chóng.",
      steps: [
        "Tìm sản phẩm và gửi link yêu cầu trên website Tiximax.",
        "Nhận báo giá chi tiết bao gồm toàn bộ chi phí.",
        "Xác nhận đơn và thanh toán.",
        "Theo dõi trạng thái đơn hàng realtime trên hệ thống.",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1000&fit=crop",
      link: "/guide/order",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Hướng dẫn Tra cứu & Theo dõi đơn hàng",
      desc: "Kiểm tra hành trình đơn hàng từ nước ngoài về Việt Nam, trạng thái kho, hải quan và giao nội địa.",
      steps: [
        "Nhập mã đơn trên trang Tra cứu đơn hàng.",
        "Xem trạng thái chi tiết từng chặng vận chuyển.",
        "Nhận thông báo tự động qua SMS hoặc hệ thống.",
        "Liên hệ hỗ trợ nếu có vấn đề phát sinh.",
      ],
      image:
        "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&h=1000&fit=crop",
      link: "/guide/tracking",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-amber-50/40">
      {/* HEADER */}
      <section className="relative overflow-hidden mb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/25 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 py-16 lg:py-24">
          <div className="space-y-5 text-white">
            <p className="text-xs font-semibold tracking-[0.25em] text-amber-300 uppercase">
              Hướng dẫn Tiximax
            </p>
            <h1 className="text-3xl lg:text-5xl font-black">
              Hướng dẫn sử dụng Tiximax
            </h1>
            <p className="text-gray-200 max-w-2xl">
              Cách đặt hàng, theo dõi đơn và sử dụng hệ thống Tiximax hiệu quả.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {guides.map((guide, index) => (
            <AnimatedSection key={guide.title} delay={index * 120}>
              <Link
                href={guide.link}
                className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                aria-label={guide.title}
              >
                {/* Image */}
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

                  <div className="absolute top-6 left-6">
                    <div className="bg-yellow-400 text-gray-900 p-3.5 rounded-xl shadow-lg">
                      {guide.icon}
                    </div>
                  </div>

                  <div className="absolute bottom-0 p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {guide.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <p className="text-gray-700 text-lg mb-8">{guide.desc}</p>

                  <h3 className="font-bold mb-4 border-b-2 border-yellow-400 pb-2">
                    Các bước thực hiện:
                  </h3>

                  <ol className="space-y-4 mb-8">
                    {guide.steps.map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 font-semibold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>

                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-semibold px-7 py-3.5 rounded-xl">
                    Xem hướng dẫn chi tiết
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}
