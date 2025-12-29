import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Globe2,
  Plane,
  Package,
  Truck,
  ShieldCheck,
  Clock,
  Users2,
  Warehouse,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// ===== METADATA FOR SEO =====
export const metadata: Metadata = {
  title: "Dịch Vụ Logistics | Mua Hộ, Vận Chuyển, Đấu Giá Quốc Tế - Tiximax",
  description:
    "Dịch vụ logistics chuyên nghiệp: Mua hộ, đấu giá, vận chuyển, thông quan và ký gửi kho từ Nhật, Hàn, Mỹ, Indonesia về Việt Nam. Minh bạch chi phí, giao hàng toàn quốc.",
  keywords: [
    "dịch vụ logistics",
    "mua hộ hàng Nhật",
    "vận chuyển quốc tế",
    "đấu giá Yahoo Auction",
    "đấu giá eBay",
    "thông quan hàng hóa",
    "ký gửi kho quốc tế",
    "mua hộ hàng Hàn",
    "mua hộ hàng Mỹ",
    "vận chuyển Indonesia",
    "fulfillment Việt Nam",
  ],
  openGraph: {
    title: "Dịch Vụ Logistics Tiximax - Giải Pháp Toàn Diện",
    description:
      "Mua hộ, đấu giá, vận chuyển từ Nhật, Hàn, Mỹ, Indonesia về Việt Nam với quy trình minh bạch",
    url: "https://tiximax.net/services",
    siteName: "Tiximax Logistics",
    images: [
      {
        url: "https://tiximax.net/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tiximax Logistics Services",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dịch Vụ Logistics Tiximax",
    description: "Giải pháp logistics đường bay toàn diện",
    images: ["https://tiximax.net/images/services-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tiximax.net/services",
  },
};

// ===== DATA CONSTANTS =====
const topServices = [
  {
    icon: <Truck className="w-8 h-8 text-amber-600" />,
    title: "GIAO HÀNG TOÀN QUỐC",
    desc: "Tiximax đảm bảo giao hàng an toàn, hiệu quả đến mọi tỉnh thành Việt Nam. Chúng tôi hợp tác với các đơn vị vận chuyển hàng đầu để tối ưu tốc độ và chất lượng dịch vụ. Mọi đơn hàng đều được theo dõi minh bạch từ kho quốc tế đến tận tay bạn, với cam kết trách nhiệm và sự tử tế trong mọi khâu.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
    title: "CHĂM SÓC ĐƠN HÀNG",
    desc: "Đội ngũ chuyên viên Tiximax tận tâm hỗ trợ bạn 24/7. Chúng tôi không chỉ giải quyết vấn đề mà còn đồng hành cùng khách hàng tìm kiếm giải pháp tối ưu nhất. Mọi thắc mắc về báo giá, thủ tục hải quan hay trạng thái đơn hàng đều được phản hồi nhanh chóng và chính xác.",
  },
  {
    icon: <Warehouse className="w-8 h-8 text-amber-600" />,
    title: "KHO HÀNG QUỐC TẾ",
    desc: "Tiximax cung cấp hệ thống kho hàng quốc tế hiện đại tại Mỹ, Nhật, Hàn, và Indonesia. Kho được trang bị để gom hàng, kiểm đếm và đóng gói chuẩn quốc tế, đảm bảo hàng hóa luôn được bảo quản an toàn. Dịch vụ ký gửi kho chuyên nghiệp giúp bạn tiết kiệm chi phí vận chuyển.",
  },
];

const services = [
  {
    icon: <Globe2 className="w-7 h-7 text-amber-400" />,
    title: "DỊCH VỤ VẬN CHUYỂN",
    desc: "Vận chuyển từ Nhật Bản, Hàn Quốc, Indonesia và Mỹ về Việt Nam.",
    features: ["Minh bạch chi phí.", "Kho hàng tại nhiều quốc gia."],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
    link: "/services/shipping",
  },
  {
    icon: <Plane className="w-7 h-7 text-amber-400" />,
    title: "DỊCH VỤ ĐẤU GIÁ",
    desc: "Đấu giá Yahoo Auction và eBay theo yêu cầu của khách hàng.",
    features: ["Tỷ lệ đấu giá thắng cao.", "Minh bạch chi phí."],
    image:
      "https://i.pinimg.com/736x/74/28/e6/7428e6b80ecd09bb6590d7ae175d5400.jpg",
    link: "/services/auction",
  },
  {
    icon: <Package className="w-7 h-7 text-amber-400" />,
    title: "DỊCH VỤ MUA HỘ",
    desc: "Mua hộ hàng Nhật, Indonesia, Hàn, Mỹ và vận chuyển về Việt Nam theo yêu cầu.",
    features: [
      "Kiểm tra mã JAN/SKU",
      "Ảnh chụp & cân đo chi tiết",
      "Tối ưu thể tích giảm cước",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    link: "/services/purchase",
  },
  {
    icon: <Truck className="w-7 h-7 text-amber-400" />,
    title: "DỊCH VỤ THÔNG QUAN HỘ",
    desc: "Thông quan hộ từ nước ngoài về Việt Nam, dịch vụ nhanh chóng, thủ tục đơn giản, minh bạch, giải pháp tối ưu nhất.",
    features: [
      "Hỗ trợ thủ tục nhập khẩu",
      "Giao nhận 63 tỉnh thành",
      "Minh bạch chi phí.",
    ],
    image:
      "https://i.pinimg.com/736x/74/28/e6/7428e6b80ecd09bb6590d7ae175d5400.jpg",
    link: "/services/customs",
  },
  {
    icon: <Package className="w-7 h-7 text-amber-400" />,
    title: "DỊCH VỤ KÝ GỬI KHO",
    desc: "Kho ngoại quan tại Nhật, Hàn, Mỹ và Indonesia hỗ trợ nhận hàng, lưu kho cho khách hàng có nhu cầu.",
    features: [
      "Kiểm tra mã JAN/SKU",
      "Ảnh chụp & cân đo chi tiết",
      "Tối ưu thể tích giảm cước",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    link: "/services/storage",
  },
];

const orderSteps = [
  {
    icon: ShieldCheck,
    title: "GỬI YÊU CẦU",
    desc: "Khách hàng gửi yêu cầu mua hộ, vận chuyển hoặc đấu giá qua website hoặc fanpage Tiximax. Hãy cung cấp chi tiết về sản phẩm để chúng tôi xử lý yêu cầu nhanh chóng và chính xác nhất.",
  },
  {
    icon: Clock,
    title: "NHẬN BÁO GIÁ",
    desc: "Chuyên viên Tiximax sẽ gửi báo giá chi tiết, minh bạch và tối ưu nhất qua email/tin nhắn. Báo giá bao gồm mọi chi phí trọn gói, không phát sinh, đảm bảo bạn nắm rõ thông tin trước khi quyết định.",
  },
  {
    icon: Users2,
    title: "XÁC NHẬN THANH TOÁN",
    desc: "Sau khi đồng ý với báo giá, khách hàng tiến hành xác nhận đơn hàng và thanh toán. Hệ thống Tiximax bắt đầu thực hiện các bước mua hàng và logistics ngay lập tức, đảm bảo tiến độ.",
  },
  {
    icon: Package,
    title: "NHẬN HÀNG TẬN TAY",
    desc: "Khách có thể theo dõi đơn hàng qua hệ thống tracking hoặc qua sự hỗ trợ của nhân viên Tiximax. Chúng tôi sẽ giao hàng tận nơi, đảm bảo đúng, đủ và chính xác.",
  },
];

// ===== MAIN COMPONENT =====
export default function ServiceList() {
  // Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "International Logistics Services",
    provider: {
      "@type": "Organization",
      name: "Tiximax Logistics",
      url: "https://tiximax.net",
    },
    areaServed: [
      { "@type": "Country", name: "Vietnam" },
      { "@type": "Country", name: "Japan" },
      { "@type": "Country", name: "South Korea" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Indonesia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dịch vụ Logistics",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dịch vụ vận chuyển quốc tế",
            description:
              "Vận chuyển từ Nhật Bản, Hàn Quốc, Indonesia và Mỹ về Việt Nam",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dịch vụ đấu giá",
            description: "Đấu giá Yahoo Auction và eBay theo yêu cầu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dịch vụ mua hộ",
            description: "Mua hộ hàng Nhật, Hàn, Mỹ, Indonesia về Việt Nam",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dịch vụ thông quan",
            description: "Thông quan hộ từ nước ngoài về Việt Nam",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dịch vụ ký gửi kho",
            description: "Kho ngoại quan tại Nhật, Hàn, Mỹ và Indonesia",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "https://tiximax.net",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dịch vụ",
        item: "https://tiximax.net/services",
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Quy trình xử lý đơn hàng tại Tiximax",
    description:
      "Hướng dẫn chi tiết quy trình đặt hàng và nhận hàng từ Tiximax",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Gửi yêu cầu",
        text: "Khách hàng gửi yêu cầu mua hộ, vận chuyển hoặc đấu giá qua website hoặc fanpage Tiximax",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Nhận báo giá",
        text: "Chuyên viên Tiximax sẽ gửi báo giá chi tiết, minh bạch qua email/tin nhắn",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Xác nhận thanh toán",
        text: "Khách hàng xác nhận đơn hàng và thanh toán",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Nhận hàng tận tay",
        text: "Theo dõi đơn hàng và nhận hàng tận nơi",
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-white to-amber-50/40">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/25 via-transparent to-transparent" />
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-16 lg:py-24 relative">
            <div className="space-y-5 text-white">
              <p className="text-sm md:text-base font-semibold tracking-[0.25em] text-amber-300 uppercase">
                Tiximax Logistics
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                Dịch vụ Tiximax – Giải pháp logistics đường bay toàn diện
              </h1>
              <p className="text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed">
                Mua hộ, đấu giá, vận chuyển, thông quan và ký gửi kho từ Nhật,
                Hàn, Mỹ, Indonesia về Việt Nam với quy trình minh bạch và tối ưu
                chi phí cho khách hàng.
              </p>
            </div>
          </div>
        </section>

        {/* ================= TOP SERVICES ================= */}
        <section className="bg-gray-50 py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="text-center mb-14">
              <p className="text-sm md:text-base font-semibold tracking-[0.25em] text-amber-600 uppercase">
                Tiximax
              </p>
              <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-gray-900">
                Dịch vụ vận chuyển & mua hộ quốc tế
              </h2>
              <div className="mt-5 mx-auto h-[3px] w-20 bg-amber-500 rounded-full" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {topServices.map((s) => (
                <article
                  key={s.title}
                  className="bg-white rounded-2xl shadow-sm border border-amber-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                >
                  {/* Icon Section */}
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 px-8 py-6 flex justify-center border-b border-amber-200/50">
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      {s.icon}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="px-8 py-7 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide text-gray-900 mb-5 text-center">
                      {s.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
                      {s.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SERVICES LIST ================= */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="text-center mb-14">
              <p className="text-sm md:text-base font-semibold tracking-wider text-amber-600 uppercase">
                Chi tiết dịch vụ
              </p>
              <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-gray-900">
                Giải pháp Logistics chuyên nghiệp
              </h2>
              <div className="mt-5 mx-auto h-[3px] w-20 bg-amber-500 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <Link
                    href={s.link}
                    className="block rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full group"
                  >
                    {/* Image Section */}
                    <div className="relative h-48 lg:h-56 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        itemProp="image"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-lg shadow-md">
                          {s.icon}
                          <span
                            className="text-base font-bold text-gray-900 tracking-wide"
                            itemProp="name"
                          >
                            {s.title}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col">
                      {/* Description */}
                      <p
                        className="text-base md:text-lg text-gray-600 leading-relaxed mb-5"
                        itemProp="description"
                      >
                        {s.desc}
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mb-5" />

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-3">
                          Ưu điểm nổi bật
                        </h4>
                        <ul className="space-y-3">
                          {s.features.map((f) => (
                            <li key={f} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                              <span className="text-base text-gray-700 leading-snug">
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-6 pt-5 border-t border-gray-100">
                        <div className="flex items-center justify-between text-amber-600 group-hover:text-amber-700 transition-colors">
                          <span className="text-base font-semibold">
                            Xem chi tiết
                          </span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ORDER STEPS ================= */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="text-center mb-14">
              <p className="text-sm md:text-base font-semibold tracking-wider text-amber-600 uppercase">
                Quy trình hoạt động
              </p>
              <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-gray-900">
                Quy trình xử lý đơn hàng tại Tiximax
              </h2>
              <div className="mt-5 mx-auto h-[3px] w-20 bg-amber-500 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {orderSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.title}
                    className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Number Badge */}
                    <div className="bg-gradient-to-b from-yellow-400 to-amber-500 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white/90 text-base font-bold">
                          Bước {index + 1}
                        </span>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-7 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg md:text-xl text-gray-900 tracking-wide mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
