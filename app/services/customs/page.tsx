import { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// ===== METADATA FOR SEO =====
export const metadata: Metadata = {
  title: "Dịch Vụ Thông Quan Hộ | Hải Quan Sân Bay Nhanh Chóng - Tiximax",
  description:
    "Dịch vụ thông quan hộ uy tín. Xử lý hải quan đường bay, thủ tục hải quan tại sân bay nhanh chóng, minh bạch chi phí, hỗ trợ đầy đủ giấy tờ.",
  keywords: [
    "thông quan hộ",
    "dịch vụ thông quan",
    "hải quan sân bay",
    "thông quan đường bay",
    "thủ tục hải quan",
    "Tiximax thông quan",
    "dịch vụ hải quan",
    "khai báo hải quan",
  ],
  openGraph: {
    title: "Dịch Vụ Thông Quan Hộ Tiximax - Hải Quan Nhanh & Minh Bạch",
    description: "Thông quan hộ chuyên nghiệp, xử lý nhanh tại sân bay",
    url: "https://tiximax.net/services/customs",
    siteName: "Tiximax Logistics",
    images: [
      {
        url: "https://tiximax.net/images/customs-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tiximax Customs Service",
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
    canonical: "https://tiximax.net/services/customs",
  },
};

// ===== COMPONENT =====
export default function ServicesCustoms() {
  // Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Customs Clearance Service",
    provider: {
      "@type": "Organization",
      name: "Tiximax Logistics",
      url: "https://tiximax.net",
    },
    description:
      "Dịch vụ thông quan hộ, xử lý hải quan đường bay và tại sân bay",
    areaServed: {
      "@type": "Country",
      name: "Vietnam",
    },
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
        name: "Thông quan hộ",
        item: "https://tiximax.net/services/customs",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Thông quan hộ có cần chủ hàng đi cùng không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Không. Khách không cần đến sân bay. Tiximax đại diện ủy quyền xử lý toàn bộ thủ tục, từ nộp tờ khai đến nhận hàng.",
        },
      },
      {
        "@type": "Question",
        name: "Dịch vụ áp dụng cho hàng cá nhân hay thương mại?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tiximax hỗ trợ cả hai, từ hàng nhỏ lẻ đến lô hàng lớn.",
        },
      },
      {
        "@type": "Question",
        name: "Chi phí thông quan được tính thế nào?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chi phí dựa theo loại hàng, mã HS, thuế suất, độ phức tạp của hồ sơ và việc hàng có kiểm hóa hay không. Tiximax cam kết báo giá rõ ràng trước khi tiến hành.",
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
                  TIXIMAX THÔNG QUAN HỘ
                </span>
              </div>

              {/* H1 - IN HOA, IN ĐẬM */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-center tracking-tight">
                TIXIMAX THÔNG QUAN HỘ
              </h1>

              {/* Subtitle - Viết thường */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
                Giải pháp xử lý hải quan nhanh, chính xác & minh bạch
              </p>

              {/* Line */}
              <div className="h-[3px] w-24 mx-auto bg-amber-500 rounded-full" />

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-colors"
                >
                  Liên hệ tư vấn thông quan hộ
                </Link>
                <Link
                  href="/tracking"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors"
                >
                  Tra cứu tình trạng lô hàng
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>
                Trong bối cảnh vận chuyển hàng quốc tế ngày càng phổ biến, thủ
                tục hải quan tại sân bay lại trở thành "nút thắt" lớn khiến
                nhiều khách hàng lo lắng. Chỉ cần sai 1 mã HS, thiếu 1 chữ trong
                hóa đơn hoặc đánh giá nhầm thuế suất, hàng có thể bị giữ lại,
                kiểm hóa kéo dài hoặc phát sinh phí lưu kho cao. Đó là lý do{" "}
                <strong>Tiximax thông quan hộ</strong> ra đời — nhằm giúp khách
                xử lý toàn bộ thủ tục một cách nhanh – chuẩn – minh bạch, đảm
                bảo hàng được giải phóng sớm và hạn chế tối đa phát sinh.
              </p>

              <p>
                Tiximax có kinh nghiệm thực tế tại nhiều kho hàng lớn, am hiểu
                quy định từng nhóm hàng: hàng cá nhân, hàng thương mại, đồ điện
                tử, mỹ phẩm, thực phẩm khô, hàng mẫu, hàng giá trị cao hoặc hàng
                cần chứng từ chuyên ngành. Nhờ quy trình chuẩn hóa và kiểm tra
                kỹ từ đầu, Tiximax giúp mọi hồ sơ "đi mượt", ít khi bị yêu cầu
                bổ sung hoặc kiểm hóa lại. Dịch vụ phù hợp cho khách nhập hàng
                từ Mỹ, Nhật, Hàn Quốc, Indonesia cũng như các shop kinh doanh
                cần thông quan nhanh trong ngày để kịp giao đơn cho khách.
              </p>
            </div>
          </div>
        </section>

        {/* GIỚI THIỆU DỊCH VỤ */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              GIỚI THIỆU VỀ DỊCH VỤ TIXIMAX THÔNG QUAN HỘ
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>
                Dịch vụ thông quan hộ Tiximax được thiết kế đúng tiêu chuẩn hải
                quan, giúp xử lý trọn vẹn mọi yêu cầu từ cơ bản đến phức tạp.
                Không chỉ hỗ trợ khai báo, Tiximax còn tư vấn rõ các rủi ro có
                thể xảy ra, hướng dẫn cách chuẩn bị chứng từ đúng và đảm bảo hồ
                sơ hoàn chỉnh ngay từ bước đầu.
              </p>
              <p>Tiximax hỗ trợ đầy đủ các nghiệp vụ cần thiết:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Kiểm tra chứng từ & xác định mã HS chính xác.</li>
                <li>Tư vấn thuế nhập khẩu – VAT theo từng mặt hàng.</li>
                <li>Khai báo tờ khai trên hệ thống hải quan điện tử.</li>
                <li>Đại diện làm việc với cán bộ hải quan tại sân bay.</li>
                <li>Hỗ trợ kiểm hóa, mở kiện khi được yêu cầu.</li>
                <li>Giải phóng hàng nhanh, hỗ trợ nhận hàng tận nơi.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CÁC DỊCH VỤ THÔNG QUAN */}
        <section className="py-16 border-t border-amber-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              CÁC DỊCH VỤ THÔNG QUAN QUỐC TẾ CỦA TIXIMAX
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
              <p>
                Thời gian xử lý hồ sơ trung bình dao động từ 1–2 ngày, tùy thuộc
                vào loại hàng, mức độ phức tạp và yêu cầu kiểm hóa của từng lô
                hàng. Với những lô hàng đơn giản, Tiximax có thể xử lý trong
                ngày để hạn chế tối đa chi phí lưu kho cho khách.
              </p>
            </div>
          </div>
        </section>

        {/* THÔNG QUAN ĐƯỜNG BAY */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              TIXIMAX THÔNG QUAN ĐƯỜNG BAY
            </h2>
            <p className="text-center text-lg text-gray-600 mt-2 mb-4">
              Xử lý nhanh cho hàng quốc tế
            </p>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>
                Dịch vụ hải quan đường bay được thiết kế cho hàng hóa nhập khẩu
                hoặc xuất khẩu theo đường hàng không. Tiximax làm việc trực tiếp
                với hãng bay, kho sân bay và bộ phận nghiệp vụ nhằm đảm bảo hàng
                được tiếp nhận – kiểm tra – khai báo – giải phóng nhanh chóng.
              </p>
              <p className="font-semibold">Phù hợp với:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Hàng nhập khẩu từ Mỹ, Nhật, Hàn Quốc, Indonesia…</li>
                <li>Hàng số lượng lớn từ shop kinh doanh online.</li>
                <li>Hàng gấp trong ngày, yêu cầu tốc độ cao.</li>
                <li>Hàng điện tử, mỹ phẩm, phụ kiện công nghệ, thời trang.</li>
              </ul>
              <p className="font-semibold">Ưu điểm tuyến đường bay:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Giải phóng hàng nhanh, tránh lưu kho kéo dài.</li>
                <li>Báo giá trước – không phát sinh chi phí mập mờ.</li>
                <li>Quá trình xử lý được cập nhật theo từng bước.</li>
                <li>Phù hợp với các shop nhập hàng liên tục theo lô.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* THÔNG QUAN TẠI SÂN BAY */}
        <section className="py-16 border-t border-amber-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              TIXIMAX THÔNG QUAN TẠI SÂN BAY
            </h2>
            <p className="text-center text-lg text-gray-600 mt-2 mb-4">
              Hỗ trợ trọn gói từ hồ sơ đến nhận hàng
            </p>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>
                Dịch vụ hải quan tại sân bay của Tiximax dành cho khách cần xử
                lý nhanh nhưng không muốn tốn thời gian chờ đợi hay tiếp xúc
                trực tiếp với nhiều bộ phận hải quan. Tiximax thay mặt khách
                chuẩn bị toàn bộ hồ sơ, nộp thuế, làm tờ khai, xử lý các yêu cầu
                phát sinh và nhận hàng trực tiếp trong ngày.
              </p>
              <p className="font-semibold">Phù hợp với:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Hàng cá nhân, người lần đầu nhập khẩu.</li>
                <li>Hàng thương mại yêu cầu chứng từ chuyên nghiệp.</li>
                <li>Hàng dễ bị yêu cầu kiểm tra chuyên ngành.</li>
                <li>Hàng hiệu, hàng công nghệ, hàng giá trị cao.</li>
              </ul>
              <p className="font-semibold">Ưu điểm:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Xử lý hồ sơ đồng bộ, đúng quy định.</li>
                <li>Hạn chế rủi ro sai sót giấy tờ.</li>
                <li>Theo dõi tình trạng xử lý liên tục.</li>
                <li>Hỗ trợ giao hàng tận nơi sau khi thông quan.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HỖ TRỢ THỦ TỤC */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              TIXIMAX HỖ TRỢ ĐẦY ĐỦ THỦ TỤC HẢI QUAN TẠI SÂN BAY
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>
                Thủ tục hải quan tại sân bay thường gây khó khăn cho khách lần
                đầu làm việc vì lượng giấy tờ nhiều, kiểm tra gắt gao và yêu cầu
                thông tin chính xác. Tiximax hỗ trợ hướng dẫn từng bước rõ ràng
                để khách chuẩn bị đúng ngay từ đầu.
              </p>
              <p className="font-semibold">Khách được hướng dẫn cụ thể về:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Bộ chứng từ bắt buộc phải có.</li>
                <li>
                  Danh mục hàng hạn chế – hàng cấm – hàng kiểm tra đặc biệt.
                </li>
                <li>Thuế nhập khẩu, thuế VAT và cách tính.</li>
                <li>Quy trình kiểm hóa, mở kiện khi được yêu cầu.</li>
                <li>Cách xử lý khi hồ sơ bị yêu cầu bổ sung.</li>
              </ul>
              <p>
                Nhờ đó, khách tiết kiệm đáng kể thời gian và tránh rủi ro hàng
                bị giữ lại quá lâu.
              </p>
            </div>
          </div>
        </section>

        {/* LÝ DO ĐƯỢC CHỌN */}
        <section className="py-16 border-t border-amber-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              LÝ DO DỊCH VỤ THÔNG QUAN HỘ CỦA TIXIMAX ĐƯỢC LỰA CHỌN NHIỀU
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>Khách hàng tin tưởng Tiximax bởi những ưu điểm nổi bật:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Xử lý hồ sơ nhanh, chính xác và đúng chuẩn.</li>
                <li>Báo giá rõ ràng, không phát sinh chi phí ẩn.</li>
                <li>Kinh nghiệm thực tế tại sân bay nhiều năm.</li>
                <li>Đại diện khách làm việc trực tiếp với cán bộ hải quan.</li>
                <li>Hỗ trợ nhiều loại hàng khác nhau, kể cả hàng đặc thù.</li>
                <li>
                  Theo dõi toàn bộ quá trình và cập nhật liên tục cho khách.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* QUY TRÌNH */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              QUY TRÌNH TIXIMAX THÔNG QUAN HỘ
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="space-y-6">
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  BƯỚC 1: TIẾP NHẬN THÔNG TIN HÀNG HÓA
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Tiximax nhận thông tin về loại hàng, số lượng, chứng từ… và tư
                  vấn ngay các yêu cầu cần chuẩn bị, rủi ro có thể gặp và hướng
                  xử lý phù hợp.
                </p>
              </article>

              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  BƯỚC 2: KIỂM TRA CHỨNG TỪ & BÁO GIÁ
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Đội ngũ kiểm tra invoice, packing list, mã HS và thuế suất.
                  Sau đó gửi bảng giá chi tiết để khách chốt phương án trước khi
                  tiến hành khai báo.
                </p>
              </article>

              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  BƯỚC 3: CHUẨN BỊ GIẤY TỜ & KHAI BÁO
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Tiximax soạn tờ khai điện tử, nhập dữ liệu lên VNACCS, rà soát
                  lại toàn bộ để đảm bảo hồ sơ chính xác, hạn chế bị yêu cầu bổ
                  sung.
                </p>
              </article>

              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  BƯỚC 4: LÀM VIỆC VỚI HẢI QUAN
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Đại diện khách nộp tờ khai, trao đổi với cán bộ hải quan và
                  trực tiếp hỗ trợ kiểm hóa nếu lô hàng được phân luồng đỏ hoặc
                  yêu cầu mở kiện.
                </p>
              </article>

              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  BƯỚC 5: GIẢI PHÓNG HÀNG & GIAO HÀNG
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Sau khi thông quan, Tiximax nhận hàng tại kho, kiểm tra nhanh
                  và bàn giao theo yêu cầu: giao tận nơi hoặc để khách tự nhận
                  tại sân bay.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-amber-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              CÁC CÂU HỎI THƯỜNG GẶP
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="space-y-4">
              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Thông quan hộ có cần chủ hàng đi cùng không?</span>
                  <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Không. Khách không cần đến sân bay. Tiximax đại diện ủy quyền
                  xử lý toàn bộ thủ tục, từ nộp tờ khai đến nhận hàng.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Dịch vụ áp dụng cho hàng cá nhân hay thương mại?</span>
                  <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Tiximax hỗ trợ cả hai, từ hàng nhỏ lẻ đến lô hàng lớn.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Chi phí thông quan được tính thế nào?</span>
                  <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Chi phí dựa theo loại hàng, mã HS, thuế suất, độ phức tạp của
                  hồ sơ và việc hàng có kiểm hóa hay không. Tiximax cam kết báo
                  giá rõ ràng trước khi tiến hành.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Tiximax có hỗ trợ hàng dễ vỡ không?</span>
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Có, nhưng khách cần thông báo trước để Tiximax tăng cường lớp
                  bảo vệ, đóng gói chống sốc và ghi chú đặc biệt khi khai báo.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Nếu hồ sơ thiếu hoặc sai thì xử lý thế nào?</span>
                  <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Tiximax hỗ trợ bổ sung và cập nhật hồ sơ ngay để tờ khai được
                  duyệt nhanh nhất.
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
                  Nếu bạn đang cần hỗ trợ <strong>Tiximax thông quan hộ</strong>{" "}
                  hoặc muốn sử dụng các dịch vụ như{" "}
                  <strong>Dịch vụ thông quan hộ Tiximax</strong>,{" "}
                  <strong>Thông quan hộ Tiximax</strong>,{" "}
                  <strong>Dịch vụ hải quan đường bay</strong>,{" "}
                  <strong>Dịch vụ hải quan tại sân bay</strong> hay tư vấn
                  chuyên sâu về <strong>Thủ tục hải quan tại sân bay</strong>,
                  Tiximax chính là lựa chọn đáng tin cậy. Với quy trình rõ ràng,
                  chi phí minh bạch, nghiệp vụ chuyên sâu và khả năng xử lý
                  nhanh – chính xác – an toàn, Tiximax cam kết mang đến giải
                  pháp thông quan hiệu quả nhất cho mọi loại hàng hóa của bạn.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-colors"
                  >
                    Nhận tư vấn & báo giá thông quan
                  </Link>
                  <Link
                    href="/tracking"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-amber-700 bg-white hover:bg-amber-50 border-2 border-amber-600 transition-colors"
                  >
                    Theo dõi tình trạng lô hàng
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
