import { Metadata } from "next";
import Image from "next/image";
import {
  Globe2,
  ShieldCheck,
  Users2,
  Trophy,
  Rocket,
  Heart,
  Target,
  TrendingUp,
  Award,
  Sparkles,
  Handshake,
  Clock,
  CheckCircle2,
} from "lucide-react";

// Import images - ĐẢM BẢO các file này tồn tại trong thư mục
import CEOPIC from "@/public/assets/CEOPIC.png";
import DUNGLE from "@/public/assets/DUNGLE.jpg";
import DUCLE from "@/public/assets/DUCLE.jpg";

// ===== METADATA FOR SEO =====
export const metadata: Metadata = {
  title: "Về Tiximax | Tầm Nhìn, Sứ Mệnh & Giá Trị Cốt Lõi",
  description:
    "Tiximax - Mạng lưới logistics toàn cầu kết nối 20+ quốc gia. Tìm hiểu tầm nhìn, sứ mệnh, 6 giá trị cốt lõi và đội ngũ lãnh đạo của chúng tôi.",
  keywords: [
    "Tiximax",
    "logistics Việt Nam",
    "vận chuyển quốc tế",
    "công ty logistics",
    "vận chuyển Nhật Việt",
    "vận chuyển Hàn Việt",
    "vận chuyển Mỹ Việt",
    "vận chuyển Indonesia Việt",
    "fulfillment Việt Nam",
  ],
  openGraph: {
    title: "Về Tiximax Logistics - Kết Nối Việt Nam Với Thế Giới",
    description:
      "Công ty logistics quốc tế với tầm nhìn toàn cầu, sứ mệnh kết nối và giá trị cốt lõi tử tế là nền tảng",
    url: "https://tiximax.net/about",
    siteName: "Tiximax Logistics",
    images: [
      {
        url: "https://tiximax.net/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tiximax Logistics - Đội Ngũ Lãnh Đạo",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Về Tiximax Logistics",
    description: "Mạng lưới logistics toàn cầu - Kết nối, Phát triển, Phụng sự",
    images: ["https://tiximax.net/images/about-twitter.jpg"],
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
    canonical: "https://tiximax.net/about",
  },
};

// ===== DATA CONSTANTS =====
const coreValues = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Tử Tế Là Nền Tảng",
    desc: "Xây dựng niềm tin và sự trung thực trong ngành logistics",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Phát Triển Con Người",
    desc: "Mỗi thử thách là bài học rèn luyện ý chí",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Tôn Trọng & Trao Quyền",
    desc: "Thúc đẩy sáng tạo và phát huy năng lực cá nhân",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Lãnh Đạo Bằng Trái Tim",
    desc: "Đặt lợi ích nhân viên và khách hàng lên trên",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Cân Bằng Con Người & Lợi Nhuận",
    desc: "Đảm bảo sự thịnh vượng đi cùng nhân văn",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Văn Hóa Học Hỏi",
    desc: "Chìa khóa để thích ứng và đổi mới liên tục",
  },
];

const milestones = [
  {
    year: "2022",
    title: "THÀNH LẬP CÔNG TY TIXIMAX",
    detail:
      "Công ty Tiximax ra đời, bắt đầu với lĩnh vực xây dựng và thương mại điện tử quốc tế.",
  },
  {
    year: "2023-2024",
    title: "HOẠT ĐỘNG TẠI ĐÀ NẴNG",
    detail:
      "Hoạt động tại trụ sở Đà Nẵng, bắt đầu phát triển tuyến Indonesia - Việt Nam.",
  },
  {
    year: "2025",
    title: "MỞ VĂN PHÒNG TẠI HỒ CHÍ MINH",
    detail:
      "Mở văn phòng tại Hồ Chí Minh, phát triển thêm các tuyến Nhật - Việt, Hàn - Việt, Mỹ - Việt.",
  },
];

const leaders = [
  {
    name: "Nguyễn Ngọc Hoàng Anh",
    role: "CEO & Founder của Tiximax",
    bio: "Email: hoanganh@tiximax.net",
    initials: "HA",
    image: CEOPIC,
  },
  {
    name: "Lê Trung Dũng",
    role: "Giám đốc Kinh doanh Tiximax",
    bio: "Email: dung.le@tiximax.net",
    initials: "DL",
    image: DUCLE,
  },
  {
    name: "Trần Minh Đức",
    role: "Giám đốc phát triển thị trường Tiximax",
    bio: "Email: ductm@tiximax.net",
    initials: "DT",
    image: DUNGLE,
  },
];

const customerCommitments = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Trung thực & Minh bạch",
    desc: "Tuyệt đối về chi phí, dịch vụ",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Nhanh chóng & Hiệu quả",
    desc: "Xuyên biên giới, giảm thiểu rủi ro",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Đồng hành & Thấu hiểu",
    desc: "Tìm giải pháp tối ưu cho từng nhu cầu",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Giá trị vượt trội",
    desc: "Giúp khách hàng phát triển kinh doanh bền vững",
  },
];

const employeeCommitments = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Môi trường tử tế & hạnh phúc",
    desc: "Nơi làm việc đầy tôn trọng và nhân văn",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Cơ hội phát triển toàn diện",
    desc: "Rèn luyện kỹ năng, nâng cao năng lực",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Trao quyền & tin tưởng",
    desc: "Để mỗi cá nhân phát huy năng lực",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Chia sẻ thành quả",
    desc: "Thành công của công ty là thành công của tập thể",
  },
];

// ===== MAIN COMPONENT =====
export default function AboutUs() {
  // Structured Data cho Google
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tiximax Logistics",
    alternateName: "Tiximax",
    url: "https://tiximax.net",
    logo: "https://tiximax.net/logo.png",
    image: "https://tiximax.net/images/office.jpg",
    description:
      "Công ty logistics quốc tế chuyên vận chuyển từ Nhật, Hàn, Mỹ, Indonesia về Việt Nam",
    foundingDate: "2022",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Đà Nẵng",
        addressCountry: "VN",
      },
    },
    founder: [
      {
        "@type": "Person",
        name: "Nguyễn Ngọc Hoàng Anh",
        jobTitle: "CEO & Founder",
        email: "hoanganh@tiximax.net",
      },
    ],
    employee: [
      {
        "@type": "Person",
        name: "Lê Trung Dũng",
        jobTitle: "Giám đốc Kinh doanh",
        email: "dung.le@tiximax.net",
      },
      {
        "@type": "Person",
        name: "Trần Minh Đức",
        jobTitle: "Giám đốc phát triển thị trường",
        email: "ductm@tiximax.net",
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Đà Nẵng",
        addressCountry: "VN",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Hồ Chí Minh",
        addressCountry: "VN",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@tiximax.net",
      availableLanguage: ["Vietnamese", "English"],
    },
    areaServed: [
      { "@type": "Country", name: "Vietnam" },
      { "@type": "Country", name: "Japan" },
      { "@type": "Country", name: "South Korea" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Indonesia" },
    ],
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
        name: "Về Tiximax",
        item: "https://tiximax.net/about",
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-white to-amber-50/30">
        {/* Hero - Simple Text Only */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600/20 via-transparent to-transparent" />
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24 relative">
            <div className="space-y-6 text-white">
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                VỀ TIXIMAX
              </h1>

              <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
                <p>
                  Tiximax ra đời với sứ mệnh trở thành cầu nối thương mại toàn
                  cầu, giúp khách hàng và doanh nghiệp Việt Nam vươn ra thế giới
                  thông qua dịch vụ logistics, thanh toán và fulfillment. Chúng
                  tôi tin rằng một doanh nghiệp chỉ có thể phát triển bền vững
                  khi xây dựng trên nền tảng văn hóa và giá trị cốt lõi vững
                  chắc.
                </p>

                <p>
                  Giá trị cốt lõi không phải là những khẩu hiệu để treo trên
                  tường, mà là kim chỉ nam cho mọi hành động, là cách chúng ta
                  ứng xử với khách hàng, đồng nghiệp và xã hội.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision - List Style */}
        <section id="vision" className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <article className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl p-6 lg:p-12">
              {/* Title Section */}
              <div className="-mx-6 lg:-mx-12 mb-8 lg:mb-12">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-300 rounded-xl p-6 lg:p-8">
                  <div className="flex items-center justify-center gap-3">
                    <Globe2 className="w-8 h-8 text-gray-900" />
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center">
                      TẦM NHÌN TIXIMAX
                    </h2>
                  </div>
                </div>
              </div>

              {/* Intro */}
              <div className="mb-8 lg:mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Tầm nhìn của Tiximax là trở thành một{" "}
                  <strong className="bg-amber-100 px-2 py-1 rounded">
                    Mạng lưới Toàn cầu
                  </strong>{" "}
                  lớn mạnh trong 5-10 năm tới, với sự hiện diện tại hơn 20 quốc
                  gia, đóng vai trò cầu nối thương mại cho hàng triệu cá nhân và
                  doanh nghiệp nhỏ trên khắp thế giới.
                </p>
              </div>

              {/* Vision Points */}
              <div className="space-y-6 lg:space-y-8">
                <div className="border-l-4 border-amber-500 pl-6 py-3">
                  <h3 className="font-bold text-xl lg:text-2xl text-gray-900 mb-3 flex items-center gap-3">
                    <Globe2 className="w-6 h-6 text-amber-600" />
                    Mạng lưới Toàn cầu
                  </h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    Tiximax sẽ hiện diện tại hơn{" "}
                    <strong className="bg-amber-100 px-2 py-1 rounded">
                      20 quốc gia
                    </strong>
                    , đóng vai trò cầu nối thương mại cho hàng triệu cá nhân và
                    doanh nghiệp nhỏ trên khắp thế giới.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-3">
                  <h3 className="font-bold text-xl lg:text-2xl text-gray-900 mb-3 flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-yellow-600" />
                    Công ty Công nghệ Logistics
                  </h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    Tiximax cam kết là một công ty công nghệ logistics tiên
                    phong, nơi khách hàng có thể{" "}
                    <strong className="bg-yellow-100 px-2 py-1 rounded">
                      mua hàng, thanh toán và vận chuyển xuyên quốc gia
                    </strong>{" "}
                    chỉ với vài thao tác, với khả năng theo dõi đơn hàng toàn
                    cầu dễ dàng, minh bạch.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-3">
                  <h3 className="font-bold text-xl lg:text-2xl text-gray-900 mb-3 flex items-center gap-3">
                    <Heart className="w-6 h-6 text-orange-600" />
                    Doanh nghiệp Tử tế và Hạnh phúc
                  </h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    Tiximax hướng đến là một doanh nghiệp tử tế và hạnh phúc –
                    là nơi{" "}
                    <strong className="bg-orange-100 px-2 py-1 rounded">
                      nhân viên tự hào
                    </strong>
                    , là{" "}
                    <strong className="bg-orange-100 px-2 py-1 rounded">
                      đối tác đáng tin cậy
                    </strong>{" "}
                    của khách hàng, và mang tinh thần trách nhiệm, chính trực
                    của Việt Nam vươn ra thế giới.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Mission - List Style */}
        <section id="mission" className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <article className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl p-6 lg:p-12">
              {/* Title Section */}
              <div className="-mx-6 lg:-mx-12 mb-8 lg:mb-12">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-300 rounded-xl p-6 lg:p-8">
                  <div className="flex items-center justify-center gap-3">
                    <Rocket className="w-8 h-8 text-gray-900" />
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center">
                      SỨ MỆNH TIXIMAX
                    </h2>
                  </div>
                </div>
              </div>

              {/* Intro */}
              <div className="mb-8 lg:mb-12">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center font-semibold">
                  Giúp con người, đặc biệt là người Việt Nam, dễ dàng kết nối
                  với thế giới
                </p>
              </div>

              {/* Mission Pillars Header */}
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-amber-400">
                  BA TRỤ CỘT SỨ MỆNH
                </h3>
              </div>

              {/* Pillar 1 */}
              <div className="mb-8 lg:mb-10">
                <div className="bg-amber-100 border-l-4 border-amber-500 p-6 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white flex-shrink-0">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl lg:text-2xl font-bold text-gray-900">
                      Tiếp cận thế giới dễ dàng hơn
                    </h4>
                  </div>
                </div>
                <div className="pl-6 lg:pl-8">
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
                    Xóa bỏ rào cản thanh toán và logistics, giúp việc mua bán
                    xuyên biên giới trở nên:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 text-base lg:text-lg text-gray-700">
                    <li>
                      <strong className="bg-amber-100 px-2 py-1 rounded">
                        Đơn giản
                      </strong>{" "}
                      - Quy trình rõ ràng, dễ hiểu
                    </li>
                    <li>
                      <strong className="bg-amber-100 px-2 py-1 rounded">
                        Nhanh chóng
                      </strong>{" "}
                      - Thời gian vận chuyển tối ưu
                    </li>
                    <li>
                      <strong className="bg-amber-100 px-2 py-1 rounded">
                        Tiết kiệm
                      </strong>{" "}
                      - Chi phí hợp lý cho mọi khách hàng
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="mb-8 lg:mb-10">
                <div className="bg-amber-100 border-l-4 border-amber-500 p-6 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white flex-shrink-0">
                      <Users2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl lg:text-2xl font-bold text-gray-900">
                      Xây dựng nơi làm việc tử tế và hạnh phúc
                    </h4>
                  </div>
                </div>
                <div className="pl-6 lg:pl-8">
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
                    Tạo môi trường để nhân viên được:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 text-base lg:text-lg text-gray-700">
                    <li>
                      <strong className="bg-amber-100 px-2 py-1 rounded">
                        Trân trọng
                      </strong>{" "}
                      - Được tôn trọng và đánh giá đúng
                    </li>
                    <li>
                      <strong className="bg-amber-100 px-2 py-1 rounded">
                        Rèn luyện
                      </strong>{" "}
                      - Cơ hội học hỏi và phát triển
                    </li>
                    <li>
                      <strong className="bg-amber-100 px-2 py-1 rounded">
                        Phát triển
                      </strong>{" "}
                      - Môi trường tử tế, trách nhiệm
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="mb-8 lg:mb-10">
                <div className="bg-amber-100 border-l-4 border-amber-500 p-6 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white flex-shrink-0">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl lg:text-2xl font-bold text-gray-900">
                      Đóng góp giá trị cho xã hội
                    </h4>
                  </div>
                </div>
                <div className="pl-6 lg:pl-8">
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
                    Sử dụng lợi nhuận để tái đầu tư vào:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 text-base lg:text-lg text-gray-700">
                    <li>
                      <strong className="bg-amber-100 px-2 py-1 rounded">
                        Con người
                      </strong>{" "}
                      - Đào tạo và phát triển nhân sự
                    </li>
                    <li>
                      <strong className="bg-amber-100 px-2 py-1 rounded">
                        Công nghệ
                      </strong>{" "}
                      - Nâng cao chất lượng dịch vụ
                    </li>
                    <li>
                      <strong className="bg-amber-100 px-2 py-1 rounded">
                        Cộng đồng
                      </strong>{" "}
                      - Các hoạt động phụng sự xã hội
                    </li>
                  </ul>
                </div>
              </div>

              {/* Motto */}
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 p-6 text-center">
                <p className="text-xl lg:text-2xl font-bold text-gray-900">
                  <span className="text-amber-600">Kết nối</span> –{" "}
                  <span className="text-yellow-600">Phát triển</span> –{" "}
                  <span className="text-orange-600">Phụng sự</span>
                </p>
                <p className="text-base lg:text-lg text-gray-600 mt-2 font-medium">
                  với sự tử tế là nền tảng
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Core Values - List Style */}
        <section id="core-values" className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <article className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl p-6 lg:p-12">
              {/* Title Section */}
              <div className="-mx-6 lg:-mx-12 mb-8 lg:mb-12">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-300 rounded-xl p-6 lg:p-8">
                  <div className="flex items-center justify-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-gray-900" />
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center">
                      GIÁ TRỊ CỐT LÕI
                    </h2>
                  </div>
                </div>
              </div>

              {/* Intro */}
              <div className="mb-8 lg:mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Giá trị cốt lõi của Tiximax xoay quanh nguyên tắc{" "}
                  <strong className="bg-amber-100 px-2 py-1 rounded">
                    Tử Tế Là Nền Tảng
                  </strong>
                  , giúp xây dựng niềm tin và sự trung thực trong ngành
                  logistics.
                </p>
              </div>

              {/* Core Values Header */}
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-amber-400">
                  SÁU GIÁ TRỊ CỐT LÕI CỦA TIXIMAX
                </h3>
              </div>

              {/* Values List */}
              <div className="space-y-6">
                {coreValues.map((value, idx) => (
                  <div
                    key={value.title}
                    className="border-l-4 border-amber-500 pl-6 py-3 hover:bg-amber-50/50 transition-colors rounded-r-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-gray-900 mb-2">
                          {idx + 1}. {value.title}
                        </h4>
                        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="mt-8 lg:mt-12 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-amber-700">Lưu ý:</strong> Giá trị cốt
                  lõi không phải là những khẩu hiệu để treo trên tường, mà là
                  kim chỉ nam cho mọi hành động, là cách chúng ta ứng xử với
                  khách hàng, đồng nghiệp và xã hội.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Commitments - REDESIGNED */}
        <section
          id="commitments"
          className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-amber-50/30"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
                <Handshake className="w-5 h-5" />
                <span className="font-semibold text-sm uppercase tracking-wider">
                  Cam Kết Của Chúng Tôi
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Trách nhiệm với từng đối tượng
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Chúng tôi cam kết mang lại giá trị tốt nhất cho khách hàng và
                môi trường làm việc tuyệt vời cho nhân viên
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Customer Commitments */}
              <article className="group relative bg-white rounded-2xl overflow-hidden border-2 border-amber-400 hover:border-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-500/0 group-hover:from-amber-400/5 group-hover:to-amber-500/10 transition-all duration-500 pointer-events-none" />

                {/* Header */}
                <div className="relative bg-gradient-to-r from-amber-400 to-amber-500 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Users2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-black text-black tracking-tight">
                        Đối với Khách hàng
                      </h3>
                      <p className="text-amber-50 text-sm font-medium mt-1">
                        Cam kết chất lượng dịch vụ
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <div className="space-y-5">
                    {customerCommitments.map((commitment, idx) => (
                      <div
                        key={commitment.title}
                        className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-amber-50 transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover/item:scale-110 group-hover/item:shadow-lg transition-all duration-300">
                          {commitment.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">
                              {idx + 1}
                            </span>
                            <h4 className="font-bold text-gray-900 text-lg">
                              {commitment.title}
                            </h4>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {commitment.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </article>

              {/* Employee Commitments */}
              <article className="group relative bg-white rounded-2xl overflow-hidden border-2 border-amber-400 hover:border-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-500/0 group-hover:from-yellow-400/5 group-hover:to-yellow-500/10 transition-all duration-500 pointer-events-none" />

                {/* Header */}
                <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-black text-black tracking-tight">
                        Đối với Nhân viên
                      </h3>
                      <p className="text-yellow-50 text-sm font-medium mt-1">
                        Cam kết môi trường làm việc
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <div className="space-y-5">
                    {employeeCommitments.map((commitment, idx) => (
                      <div
                        key={commitment.title}
                        className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-yellow-50 transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover/item:scale-110 group-hover/item:shadow-lg transition-all duration-300">
                          {commitment.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-xs font-bold">
                              {idx + 1}
                            </span>
                            <h4 className="font-bold text-gray-900 text-lg">
                              {commitment.title}
                            </h4>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {commitment.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </article>
            </div>

            {/* Bottom CTA or decorative element */}
            <div className="mt-12">
              <div className="relative overflow-hidden border-2 border-gray-900 rounded-2xl p-8 lg:p-10 bg-gradient-to-br from-white to-amber-50 shadow-xl hover:shadow-2xl transition-shadow">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #000 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <div className="inline-block mb-3">
                      <div className="h-1.5 w-20 bg-gradient-to-r from-amber-400 to-yellow-500 mb-3 rounded-full" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-2 tracking-tight">
                      Cam kết của chúng tôi là hành động
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg">
                      Không chỉ là lời hứa, mà là trách nhiệm với từng khách
                      hàng và nhân viên
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 border-2 border-white flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 border-2 border-white flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-white flex items-center justify-center">
                        <Handshake className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
                <Clock className="w-5 h-5" />
                <span className="font-semibold text-sm uppercase tracking-wider">
                  Hành Trình Phát Triển
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Cột mốc quan trọng
              </h2>
              <p className="text-lg text-gray-600">
                Những bước đi quan trọng định hình năng lực vận hành của
                Tiximax.
              </p>
            </div>
            <div className="relative pl-6 md:pl-10">
              <div className="absolute left-2 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 to-yellow-500 rounded-full" />
              <ul className="space-y-8">
                {milestones.map((m, i) => (
                  <li key={m.year} className="relative">
                    <div className="ml-6 md:ml-10">
                      <div className="absolute -left-6 md:-left-10 w-10 h-10 rounded-full bg-white border-2 border-amber-400 flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-5 h-5 text-amber-600" />
                      </div>
                      <article className="rounded-2xl bg-white border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <time className="text-sm font-bold text-amber-600 mb-2 block">
                          {m.year}
                        </time>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {m.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {m.detail}
                        </p>
                      </article>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership - REDESIGNED */}
        <section
          id="leadership"
          className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-amber-50/30"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold text-sm uppercase tracking-wider">
                  Ban Lãnh Đạo
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Đội ngũ lãnh đạo
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Những người dẫn dắt Tiximax phát triển bền vững và khác biệt.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, idx) => (
                <article
                  key={leader.name}
                  className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-900 hover:border-amber-400 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-500/0 group-hover:from-amber-400/5 group-hover:to-amber-500/10 transition-all duration-500 z-10 pointer-events-none" />

                  {/* Image Container */}
                  <div className="relative h-96 overflow-hidden">
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-amber-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <Image
                      src={leader.image}
                      alt={`${leader.name} - ${leader.role}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      itemProp="image"
                    />

                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                    {/* Name on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-1 flex-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" />
                      </div>
                      <h3
                        className="font-black text-white text-2xl mb-2 tracking-tight"
                        itemProp="name"
                      >
                        {leader.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 z-10">
                    {/* Role Badge */}
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-amber-500/20 px-4 py-2 rounded-full border border-amber-400/50">
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span
                          className="text-sm font-bold text-gray-800"
                          itemProp="jobTitle"
                        >
                          {leader.role}
                        </span>
                      </div>
                    </div>

                    {/* Email with icon */}
                    <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200 group-hover:border-amber-400 transition-colors">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <svg
                          className="w-5 h-5 text-amber-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 font-medium mb-1">
                          Liên hệ
                        </p>

                        <a
                          href={`mailto:${leader.bio.replace("Email: ", "")}`}
                          itemProp="email"
                          className="text-sm font-semibold text-gray-900 hover:text-amber-600 transition-colors truncate block"
                        >
                          {leader.bio.replace("Email: ", "")}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bottom indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </article>
              ))}
            </div>

            {/* Bottom decorative section */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 text-gray-600">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
                <span className="text-sm font-medium">
                  Đội ngũ chuyên nghiệp, tận tâm
                </span>
                <div className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
