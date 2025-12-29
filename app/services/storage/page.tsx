import { Metadata } from "next";
import Link from "next/link";
import {
  PackageSearch,
  Globe2,
  MapPin,
  ClipboardList,
  HelpCircle,
  CheckCircle2,
  Truck,
} from "lucide-react";

// ===== METADATA FOR SEO =====
export const metadata: Metadata = {
  title:
    "Dịch Vụ Ký Gửi Kho Quốc Tế | Cho Mượn Kho & Địa Chỉ Mỹ, Nhật, Hàn - Tiximax",
  description:
    "Ký gửi kho quốc tế tại Mỹ, Nhật, Hàn, Indonesia. Cho mượn địa chỉ, cho mượn kho, gom đơn tiết kiệm. Nhận hàng, kiểm tra, vận chuyển về Việt Nam an toàn.",
  keywords: [
    "ký gửi kho quốc tế",
    "cho mượn kho Mỹ",
    "cho mượn kho Nhật",
    "cho mượn kho Hàn Quốc",
    "cho mượn địa chỉ Mỹ",
    "cho mượn địa chỉ Nhật",
    "kho hàng quốc tế",
    "dịch vụ ký gửi kho",
    "gom hàng quốc tế",
    "Tiximax ký gửi kho",
  ],
  openGraph: {
    title: "Dịch Vụ Ký Gửi Kho Tiximax - Cho Mượn Kho & Địa Chỉ Quốc Tế",
    description:
      "Cho mượn kho, cho mượn địa chỉ tại Mỹ, Nhật, Hàn, Indonesia. Gom đơn tiết kiệm, vận chuyển về Việt Nam",
    url: "https://tiximax.net/services/storage",
    siteName: "Tiximax Logistics",
    images: [
      {
        url: "https://tiximax.net/images/storage-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tiximax Storage Service",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tiximax.net/services/storage",
  },
};

// ===== COMPONENT =====
export default function ServicesStorage() {
  // Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "International Storage & Forwarding Service",
    provider: {
      "@type": "Organization",
      name: "Tiximax Logistics",
      url: "https://tiximax.net",
    },
    description:
      "Dịch vụ ký gửi kho quốc tế, cho mượn kho và địa chỉ tại Mỹ, Nhật, Hàn, Indonesia",
    areaServed: [
      { "@type": "Country", name: "Vietnam" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Japan" },
      { "@type": "Country", name: "South Korea" },
      { "@type": "Country", name: "Indonesia" },
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Ký gửi kho",
        item: "https://tiximax.net/services/storage",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ký gửi kho Tiximax có giới hạn số lượng đơn không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Không. Khách có thể gửi 1 đơn lẻ hoặc hàng chục đơn mỗi tháng, Tiximax đều hỗ trợ.",
        },
      },
      {
        "@type": "Question",
        name: "Thời gian lưu kho tối đa là bao lâu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tùy từng kho và chính sách tại thời điểm sử dụng. Thông thường sẽ có một khoảng thời gian lưu kho với phí cơ bản.",
        },
      },
      {
        "@type": "Question",
        name: "Có được gom nhiều đơn rồi gửi về một lần không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có. Đây chính là ưu điểm của dịch vụ ký gửi kho Tiximax – giúp tiết kiệm đáng kể chi phí vận chuyển quốc tế.",
        },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-white to-amber-50/40">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-amber-900/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/30 via-transparent to-transparent" />

          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 sm:py-20 lg:py-24 relative">
            <div className="space-y-8 text-white">
              {/* Badge */}
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300">
                  TIXIMAX KÝ GỬI KHO
                </span>
              </div>

              {/* H1 - IN HOA, IN ĐẬM */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-center tracking-tight">
                TIXIMAX KÝ GỬI KHO
              </h1>

              {/* Subtitle - Viết thường */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
                Giải pháp cho mượn kho & địa chỉ quốc tế cho khách hàng Việt
              </p>

              {/* Line */}
              <div className="h-[3px] w-24 mx-auto bg-amber-500 rounded-full" />

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-colors"
                >
                  Đăng ký sử dụng ký gửi kho
                </Link>
                <Link
                  href="/tracking"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors"
                >
                  Theo dõi kiện ký gửi
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GIỚI THIỆU DỊCH VỤ */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>
                Dịch vụ <strong>Tiximax ký gửi kho</strong> là giải pháp toàn
                diện cho các khách hàng Việt Nam có nhu cầu tự đặt hàng và vận
                chuyển về nước. Với hệ thống kho tại Nhật Bản, Hàn Quốc,
                Indonesia và Mỹ, khách có thể chủ động mua hàng quốc tế mà vẫn
                đảm bảo có nơi nhận – lưu – gom và gửi về Việt Nam an toàn.
              </p>

              <p>
                Ngày càng nhiều khách Việt chủ động tự đặt hàng từ Mỹ, Nhật, Hàn
                Quốc và Indonesia để hưởng giá tốt, mẫu mã đa dạng và săn ưu đãi
                nội địa không có tại Việt Nam. Tuy nhiên, phần lớn website quốc
                tế lại không hỗ trợ ship về Việt Nam, buộc khách phải có địa chỉ
                nhận hàng trong nước hoặc có kho trung gian để gom kiện trước
                khi gửi về.
              </p>

              <p>
                Trong bối cảnh đó, <strong>Tiximax ký gửi kho</strong> ra đời
                như một giải pháp toàn diện: cho mượn kho, cho mượn địa chỉ quốc
                tế, hỗ trợ nhận – lưu – kiểm – gom – đóng gói – gửi hàng về Việt
                Nam trong cùng một hệ thống đồng bộ. Dịch vụ phù hợp cho cả
                khách cá nhân lẫn các shop kinh doanh online muốn nhập hàng
                nhanh – tiết kiệm – minh bạch.
              </p>

              <p>
                Thông qua ký gửi kho Tiximax, khách dễ dàng dùng địa chỉ kho như
                một địa chỉ nhận hàng bản địa. Khi hàng đến kho, Tiximax kiểm
                tra tình trạng, nhập hệ thống theo mã khách và hỗ trợ khách lựa
                chọn hình thức gửi về Việt Nam — tất cả đều rõ ràng, dễ theo
                dõi. Nhờ vậy, khách có thể tự tin mua hàng từ Amazon, eBay,
                Rakuten, Mercari, Coupang hay Tokopedia mà không phải phụ thuộc
                hoàn toàn vào bên trung gian.
              </p>

              <p>
                Dịch vụ ký gửi kho Tiximax được thiết kế để giải quyết ba bài
                toán lớn của khách Việt:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Không có địa chỉ nhận hàng nội địa ở nước ngoài.</li>
                <li>Không có kho để gom nhiều đơn trước khi gửi về.</li>
                <li>
                  Không biết cách tối ưu phí vận chuyển và xử lý khâu vận chuyển
                  quốc tế.
                </li>
              </ul>
              <p>
                Khi dùng <strong>ký gửi kho quốc tế</strong>, khách được Tiximax
                hỗ trợ:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Địa chỉ kho quốc tế để điền khi đặt hàng online.</li>
                <li>Dịch vụ nhận hàng – lưu kho – cập nhật tình trạng.</li>
                <li>
                  Gom đơn, đóng gói lại, tối ưu kích thước trước khi gửi về Việt
                  Nam.
                </li>
              </ul>
              <p>
                Nhờ đó, khách hàng chủ động hơn trong việc tự mua – tự chọn – tự
                quyết định nơi mua, nhưng vẫn có Tiximax đứng phía sau hỗ trợ
                toàn bộ khâu hậu cần.
              </p>
            </div>
          </div>
        </section>

        {/* KÝ GỬI KHO THEO TUYẾN */}
        <section className="py-16 border-t border-amber-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              KÝ GỬI KHO QUỐC TẾ TẠI MỸ, NHẬT, HÀN, INDONESIA
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>
                Hệ thống ký gửi kho quốc tế của Tiximax hiện tập trung tại bốn
                thị trường lớn, đáp ứng hầu hết nhu cầu mua sắm xuyên biên giới
                của khách Việt:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  <strong>Cho mượn kho Mỹ:</strong> phù hợp với hàng Amazon,
                  eBay, web brand, outlet.
                </li>
                <li>
                  <strong>Cho mượn kho Nhật:</strong> phù hợp hàng nội địa Nhật,
                  đấu giá, Mercari.
                </li>
                <li>
                  <strong>Cho mượn kho Hàn:</strong> phù hợp mỹ phẩm, thời
                  trang, K-pop merch.
                </li>
                <li>
                  <strong>Cho mượn kho Indonesia:</strong> phù hợp thời trang,
                  decor, hàng độc lạ giá tốt.
                </li>
              </ul>
              <p>
                Khách chỉ cần đăng ký tài khoản, nhận mã khách và thông tin kho.
                Mỗi khi đặt hàng, chỉ cần điền cho mượn địa chỉ Mỹ, cho mượn địa
                chỉ Nhật, cho mượn địa chỉ Hàn, cho mượn địa chỉ Indo tương ứng
                với kho Tiximax cung cấp, hàng sẽ tự động được đưa về kho, cập
                nhật lên hệ thống và chờ khách quyết định phương án gửi về Việt
                Nam.
              </p>
            </div>
          </div>
        </section>

        {/* CHO MƯỢN ĐỊA CHỈ VS CHO MƯỢN KHO */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              CHO MƯỢN ĐỊA CHỈ & CHO MƯỢN KHO – KHÁC NHAU THẾ NÀO?
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>Tiximax hỗ trợ cả hai hình thức:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  <strong>Cho mượn địa chỉ Mỹ, Hàn, Nhật, Indo:</strong> Khách
                  dùng địa chỉ này để điền khi thanh toán trên các sàn thương
                  mại điện tử. Mục đích là "vượt qua" giới hạn chỉ ship nội địa
                  của nhiều website.
                </li>
                <li>
                  <strong>Cho mượn kho quốc tế:</strong> Không chỉ là địa chỉ,
                  kho của Tiximax còn nhận hàng – lưu kho – gom nhiều đơn – đóng
                  gói lại – chuẩn bị gửi về Việt Nam, giúp khách tiết kiệm cước
                  và quản lý tất cả đơn từ nhiều sàn trong cùng một nơi.
                </li>
              </ul>
              <p>
                Nhờ kết hợp hai hình thức này, Tiximax mang lại cho khách một
                "bàn đạp" vững chắc để mua hàng quốc tế như người bản xứ.
              </p>
            </div>
          </div>
        </section>

        {/* QUY TRÌNH */}
        <section className="py-16 border-t border-amber-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              QUY TRÌNH SỬ DỤNG DỊCH VỤ TIXIMAX KÝ GỬI KHO
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="space-y-6">
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  BƯỚC 1: ĐĂNG KÝ & NHẬN THÔNG TIN KHO
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Khách liên hệ Tiximax để lấy mã khách và địa chỉ kho tương ứng
                  tại Mỹ, Nhật, Hàn hoặc Indonesia. Thông tin kho được cung cấp
                  đầy đủ để khách điền đúng vào website quốc tế.
                </p>
              </article>

              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  BƯỚC 2: TỰ ĐẶT HÀNG VỀ KHO
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Khách tự order trên các sàn quốc tế và nhập địa chỉ kho
                  Tiximax làm nơi nhận hàng. Các đơn từ nhiều website đều có thể
                  gửi về cùng một kho.
                </p>
              </article>

              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  BƯỚC 3: KHO NHẬN HÀNG & CẬP NHẬT HỆ THỐNG
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Khi hàng đến, kho kiểm tra cơ bản và nhập thông tin lên hệ
                  thống theo mã khách. Khách có thể theo dõi tình trạng từng
                  kiện hàng dễ dàng.
                </p>
              </article>

              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  BƯỚC 4: GOM ĐƠN & ĐÓNG GÓI LẠI
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Tiximax hỗ trợ gom nhiều kiện thành một thùng, loại bớt bao bì
                  và sắp xếp lại để giảm kích thước – tiết kiệm phí vận chuyển
                  quốc tế.
                </p>
              </article>

              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  BƯỚC 5: GỬI HÀNG VỀ VIỆT NAM & GIAO TẬN TAY
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Hàng được đưa vào chuyến bay gần nhất, làm hải quan và giao
                  tận tay hoặc nhận tại kho tùy nhu cầu. Lộ trình được cập nhật
                  liên tục để khách theo dõi.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ĐỐI TƯỢNG PHÙ HỢP */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              AI NÊN SỬ DỤNG DỊCH VỤ TIXIMAX KÝ GỬI KHO?
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>Dịch vụ ký gửi kho Tiximax phù hợp với:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  Khách hàng cá nhân muốn tự mua hàng Mỹ, Nhật, Hàn Quốc và
                  Indonesia mà không qua trung gian.
                </li>
                <li>Chủ shop nhập hàng số lượng nhỏ – vừa nhưng đều đặn.</li>
                <li>
                  Khách cần địa chỉ để tham gia các chương trình chỉ dành cho
                  nội địa.
                </li>
                <li>
                  Khách muốn gom nhiều đơn từ nhiều sàn khác nhau về một kho,
                  rồi gửi về Việt Nam một lần cho tiết kiệm.
                </li>
              </ul>
              <p>
                Việc có một kho quốc tế đứng tên Tiximax nhưng gắn với mã khách
                riêng giúp bạn chủ động trong việc mua hàng, nhưng không phải tự
                lo khâu vận chuyển, lưu kho và xử lý thủ tục.
              </p>
            </div>
          </div>
        </section>

        {/* LỢI ÍCH */}
        <section className="py-16 border-t border-amber-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              LỢI ÍCH KHI SỬ DỤNG TIXIMAX KÝ GỬI KHO
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <ul className="list-disc pl-8 space-y-3 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
              <li>
                Không cần nhờ người quen hoặc dịch vụ trung gian khó kiểm soát —
                tất cả đều được xử lý trực tiếp tại hệ thống ký gửi kho Tiximax,
                đảm bảo rõ ràng và an toàn.
              </li>
              <li>
                Chủ động mua hàng trên mọi sàn quốc tế nhờ việc sử dụng cho mượn
                địa chỉ Mỹ, cho mượn địa chỉ Nhật, cho mượn địa chỉ Hàn hoặc cho
                mượn địa chỉ Indo khi thanh toán.
              </li>
              <li>
                Gom nhiều đơn về một kho → giảm mạnh phí ship quốc tế, đặc biệt
                hiệu quả khi dùng cho mượn kho Mỹ, cho mượn kho Nhật, cho mượn
                kho Hàn hay cho mượn kho Indonesia.
              </li>
              <li>
                Kho kiểm hàng sơ bộ và báo tình trạng rõ ràng, giúp khách yên
                tâm trước khi gửi về Việt Nam.
              </li>
              <li>
                Quy trình minh bạch, cập nhật theo mã khách, hạn chế tối đa thất
                lạc và giúp quản lý đơn hàng dễ dàng hơn trong toàn bộ hệ thống
                ký gửi kho quốc tế.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              CÂU HỎI THƯỜNG GẶP VỀ TIXIMAX KÝ GỬI KHO
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="space-y-4">
              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>
                    Ký gửi kho Tiximax có giới hạn số lượng đơn không?
                  </span>
                  <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Không. Khách có thể gửi 1 đơn lẻ hoặc hàng chục đơn mỗi tháng,
                  Tiximax đều hỗ trợ.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Thời gian lưu kho tối đa là bao lâu?</span>
                  <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Tùy từng kho và chính sách tại thời điểm sử dụng. Thông thường
                  sẽ có một khoảng thời gian lưu kho với phí cơ bản, sau đó nếu
                  ở lâu hơn sẽ phát sinh phí lưu kho với mức rõ ràng.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Có được gom nhiều đơn rồi gửi về một lần không?</span>
                  <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Có. Đây chính là ưu điểm của dịch vụ ký gửi kho Tiximax – giúp
                  tiết kiệm đáng kể chi phí vận chuyển quốc tế.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Tiximax có hỗ trợ chụp ảnh, kiểm sơ hàng không?</span>
                  <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Có. Khách có thể yêu cầu chụp ảnh bên ngoài kiện hàng hoặc
                  kiểm đơn ở mức cơ bản, chi tiết đến đâu sẽ theo gói dịch vụ.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>
                    Cho mượn địa chỉ quốc tế có dùng cho nhiều web khác nhau
                    được không?
                  </span>
                  <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Được. Miễn là hàng ship về đúng kho mà Tiximax cung cấp, khách
                  có thể dùng địa chỉ này cho nhiều website, nhiều đơn khác
                  nhau.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* KẾT LUẬN + CTA */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="h-[3px] w-20 bg-amber-500 rounded-full" />

                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  <strong>Tiximax ký gửi kho</strong> là giải pháp tiện lợi cho
                  khách Việt muốn tự đặt hàng từ Mỹ, Nhật, Hàn Quốc và Indonesia
                  nhưng thiếu địa chỉ nhận hàng quốc tế. Với dịch vụ cho mượn
                  kho – cho mượn địa chỉ và hỗ trợ gom đơn, kiểm hàng, Tiximax
                  giúp bạn mua hàng dễ hơn, tiết kiệm hơn và an toàn hơn. Nếu
                  bạn cần một đơn vị uy tín để ký gửi kho quốc tế hoặc muốn tự
                  order không qua trung gian, Tiximax là lựa chọn đáng tin cậy
                  để đồng hành.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-colors"
                  >
                    Đăng ký ký gửi kho ngay
                  </Link>
                  <Link
                    href="/tracking"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-amber-700 bg-white hover:bg-amber-50 border-2 border-amber-600 transition-colors"
                  >
                    Theo dõi kiện ký gửi của bạn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
