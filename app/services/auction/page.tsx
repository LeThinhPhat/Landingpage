import { Metadata } from "next";
import Link from "next/link";
import { Gavel, Globe2, PackageSearch, MessageSquare } from "lucide-react";

// ===== METADATA FOR SEO =====
export const metadata: Metadata = {
  title:
    "Dịch Vụ Đấu Giá Yahoo Auction & eBay | Đấu Giá Hộ Hàng Quốc Tế - Tiximax",
  description:
    "Dịch vụ đấu giá hộ Yahoo Auction, eBay uy tín. Đấu giá hàng Nhật, Mỹ, Hàn về Việt Nam. Minh bạch chi phí, kiểm hàng kỹ, vận chuyển an toàn.",
  keywords: [
    "đấu giá hộ yahoo auction",
    "đấu giá hộ ebay",
    "dịch vụ đấu giá hàng quốc tế",
    "đấu giá hàng Nhật",
    "đấu giá hàng Mỹ",
    "đấu giá hàng ngoại ship về Việt Nam",
    "đấu giá hộ uy tín",
    "dịch vụ đấu giá Tiximax",
  ],
  openGraph: {
    title: "Dịch Vụ Đấu Giá Tiximax - Yahoo Auction & eBay",
    description: "Đấu giá hộ hàng quốc tế uy tín, ship về Việt Nam an toàn",
    url: "https://tiximax.net/services/auction",
    siteName: "Tiximax Logistics",
    images: [
      {
        url: "https://tiximax.net/images/auction-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tiximax Auction Service",
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
    canonical: "https://tiximax.net/services/auction",
  },
};

// ===== COMPONENT =====
export default function ServiceAuction() {
  // Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Auction Service",
    provider: {
      "@type": "Organization",
      name: "Tiximax Logistics",
      url: "https://tiximax.net",
    },
    description:
      "Dịch vụ đấu giá hộ Yahoo Auction và eBay, vận chuyển về Việt Nam",
    areaServed: [
      { "@type": "Country", name: "Vietnam" },
      { "@type": "Country", name: "Japan" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "South Korea" },
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
        name: "Dịch vụ đấu giá",
        item: "https://tiximax.net/services/auction",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Nếu đấu giá không thành công thì sao?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bạn sẽ được hoàn 100% số tiền đã đặt cọc hoặc chuyển sang phiên đấu giá tiếp theo nếu có nhu cầu.",
        },
      },
      {
        "@type": "Question",
        name: "Chi phí vận chuyển và thuế được tính thế nào?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tổng chi phí gồm: giá hàng trúng đấu giá + phí dịch vụ đấu giá hộ + phí nội địa + phí vận chuyển về Việt Nam + thuế nhập khẩu (nếu áp dụng).",
        },
      },
      {
        "@type": "Question",
        name: "Hàng về Việt Nam mất bao lâu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Khoảng 10 – 18 ngày làm việc tùy từng mặt hàng và phương thức vận chuyển được chọn.",
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
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/30 via-transparent to-transparent" />

          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 relative">
            <div className="space-y-8 text-white">
              {/* Badge */}
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300">
                  DỊCH VỤ ĐẤU GIÁ TIXIMAX
                </span>
              </div>

              {/* H1 - IN HOA, IN ĐẬM */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-center tracking-tight">
                DỊCH VỤ ĐẤU GIÁ TIXIMAX
              </h1>

              {/* Subtitle - Viết thường */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
                Dịch vụ đấu giá hàng quốc tế uy tín, đấu giá hàng ngoại ship về
                Việt Nam
              </p>

              {/* Line dưới H1 */}
              <div className="h-[3px] w-24 mx-auto bg-amber-500 rounded-full" />

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-colors"
                >
                  Đăng nhập để đấu giá
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors"
                >
                  Liên hệ tư vấn nhanh
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
                Dịch vụ đấu giá Tiximax hỗ trợ người dùng Việt tham gia đấu giá
                trên các sàn thương mại điện tử lớn như{" "}
                <strong>Yahoo Auction</strong> và <strong>eBay</strong> – hai
                nền tảng nổi tiếng với lượng sản phẩm khổng lồ được cập nhật mỗi
                ngày và mức độ cạnh tranh đa dạng. Với quy trình minh bạch, đội
                ngũ giàu kinh nghiệm cùng khả năng xử lý các tuyến vận chuyển từ
                Nhật, Mỹ, Hàn và Indonesia về Việt Nam, Tiximax mang đến cơ hội
                sở hữu nhiều mặt hàng chất lượng: từ đồ điện tử, đồng hồ, máy
                ảnh, đồ hiệu cho đến các sản phẩm sưu tầm đặc trưng.
              </p>

              <p>
                Dịch vụ được thiết kế trọn gói từ việc tìm sản phẩm, tư vấn mức
                giá hợp lý, đặt bid theo yêu cầu đến kiểm hàng và vận chuyển về
                Việt Nam. Kể cả khi khách chưa từng đấu giá hàng Nhật, Mỹ, không
                biết ngoại ngữ hay không có tài khoản nội địa,{" "}
                <strong>Dịch Vụ Đấu Giá Tiximax</strong> vẫn hỗ trợ đầy đủ và
                đảm bảo giao dịch an toàn.
              </p>
            </div>
          </div>
        </section>

        {/* GIỚI THIỆU DỊCH VỤ */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/* Title - IN HOA */}
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              GIỚI THIỆU DỊCH VỤ ĐẤU GIÁ TIXIMAX
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            {/* Content - Viết thường */}
            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>
                Tiximax là đơn vị hỗ trợ đấu giá hộ trên Yahoo Auction và eBay,
                đồng thời vận hành hệ thống vận chuyển quốc tế chuyên 4 tuyến
                chính: Nhật – Việt, Mỹ – Việt, Hàn – Việt và Indonesia – Việt.
                Với kinh nghiệm nhiều năm theo dõi thị trường quốc tế và hiểu
                cách vận hành của từng sàn, Dịch vụ đấu giá Tiximax giúp khách
                hàng tham gia đấu giá dễ dàng hơn, hạn chế rủi ro khi giao dịch
                xuyên biên giới và tối ưu được chi phí khi mua hàng quốc tế.
              </p>
              <p>
                Điểm mạnh của Tiximax nằm ở khả năng phân tích phiên đấu giá,
                đánh giá uy tín người bán, xử lý thanh toán nội địa và hỗ trợ
                kiểm hàng trước khi vận chuyển. Tất cả thông tin, chi phí và quá
                trình làm việc đều được cập nhật rõ ràng để khách hàng nắm được
                toàn bộ tình trạng đơn hàng từ lúc gửi yêu cầu đến khi nhận sản
                phẩm tại Việt Nam.
              </p>
            </div>
          </div>
        </section>

        {/* ĐỘI NGŨ */}
        <section className="py-16 border-t border-amber-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              GIỚI THIỆU VỀ ĐỘI NGŨ TIXIMAX
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>
                Tiximax sở hữu đội ngũ nhân sự tại Nhật và Mỹ phụ trách đặt bid,
                thanh toán nội địa và kiểm hàng trước khi xuất kho. Bộ phận
                logistics hỗ trợ đóng gói, gom hàng và xử lý các thủ tục vận
                chuyển về Việt Nam.
              </p>
              <p>
                Sau khi thắng đấu giá, mỗi sản phẩm đều được kiểm tra kỹ lưỡng
                và chụp ảnh/video theo yêu cầu để khách xác nhận tình trạng hàng
                hóa. Với những khách cần đấu giá hàng ngoại ship về Việt Nam
                hoặc muốn mua các sản phẩm có độ rủi ro cao, Tiximax đặc biệt
                chú trọng minh bạch thông tin nhằm đảm bảo quyền lợi tối đa.
              </p>
            </div>
          </div>
        </section>

        {/* TẠI SAO ĐƯỢC YÊU THÍCH */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              TẠI SAO DỊCH VỤ ĐẤU GIÁ TIXIMAX ĐƯỢC YÊU THÍCH?
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>Dịch vụ của Tiximax phù hợp cho những khách hàng muốn:</p>
              <ul className="list-disc pl-8 space-y-3">
                <li>Săn hàng nội địa với giá tốt.</li>
                <li>Tìm kiếm đồ hiếm, đồ cổ, đồ second-hand chất lượng cao.</li>
                <li>
                  Giảm rủi ro khi tự đấu giá hoặc tự xử lý thanh toán quốc tế.
                </li>
                <li>Mua các sản phẩm không bán ở Việt Nam.</li>
                <li>Nhận hỗ trợ kiểm hàng – đóng gói – vận chuyển an toàn.</li>
              </ul>
              <p>
                Tiximax giúp khách hàng tối ưu chi phí và tăng tỉ lệ thắng, đặc
                biệt ở các phiên đấu giá cạnh tranh hoặc các đợt giảm giá lớn
                của từng quốc gia. Đội ngũ sẽ canh phiên sát thời điểm chốt để
                tăng tỉ lệ thắng.
              </p>
            </div>
          </div>
        </section>

        {/* CÁC DỊCH VỤ CHÍNH */}
        <section className="py-16 border-t border-amber-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              CÁC DỊCH VỤ ĐẤU GIÁ TIXIMAX CUNG CẤP
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="space-y-6">
              {/* Yahoo Auction */}
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  ĐẤU GIÁ YAHOO AUCTION
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-3">
                  <p>
                    Yahoo Auction là nền tảng đấu giá lớn và phổ biến, tập trung
                    nhiều sản phẩm nội địa chất lượng: đồ điện tử, máy ảnh, đồng
                    hồ, linh kiện, hàng hiệu second-hand, figure anime, đồ cổ và
                    hàng sưu tầm hiếm.
                  </p>
                  <p className="font-semibold">Tiximax hỗ trợ:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Đặt bid theo yêu cầu.</li>
                    <li>Tư vấn mức giá tối ưu.</li>
                    <li>Đánh giá độ uy tín seller.</li>
                    <li>Theo dõi thời gian thực.</li>
                    <li>Thanh toán nội địa và gom hàng tại kho.</li>
                  </ul>
                  <p>
                    Phù hợp cho khách muốn đấu giá hộ Yahoo Auction hoặc tìm
                    những mặt hàng nội địa khó mua tại Việt Nam.
                  </p>
                </div>
              </article>

              {/* eBay */}
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  ĐẤU GIÁ EBAY QUỐC TẾ
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-3">
                  <p>
                    eBay là sàn đấu giá lớn toàn cầu với nhiều sản phẩm từ Mỹ,
                    Anh, Đức, Úc… Bao gồm hàng brand-new, second-hand, đồ sưu
                    tầm vintage, linh kiện hiếm và nhiều sản phẩm ngoại nhập khó
                    tìm.
                  </p>
                  <p className="font-semibold">
                    Ưu điểm khi đấu giá eBay qua Tiximax:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Hỗ trợ phân tích lịch sử giá.</li>
                    <li>Đánh giá uy tín seller quốc tế.</li>
                    <li>Tối ưu thời điểm đặt bid.</li>
                    <li>Gom hàng đa quốc gia.</li>
                    <li>Vận chuyển về Việt Nam qua tuyến Mỹ – Việt.</li>
                  </ul>
                  <p>
                    Phù hợp cho khách muốn đấu giá hộ eBay quốc tế hoặc săn deal
                    hàng Mỹ – Âu chính hãng.
                  </p>
                </div>
              </article>

              {/* Đấu giá hàng ngoại */}
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  ĐẤU GIÁ HÀNG NGOẠI SHIP VỀ VIỆT NAM
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-3">
                  <p>
                    Tiximax hỗ trợ vận chuyển từ 4 tuyến chính: Nhật, Mỹ,
                    Indonesia và Hàn Quốc về Việt Nam, với hai hình thức:
                  </p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>Tuyến nhanh: khoảng 3 – 7 ngày.</li>
                    <li>
                      Tuyến tiết kiệm: phù hợp đơn hàng số lượng lớn hoặc ít
                      gấp.
                    </li>
                  </ul>
                  <p>
                    Tất cả hàng hóa đều được kiểm tra tình trạng tại kho trước
                    khi đóng gói, đảm bảo hạn chế tối đa hư hỏng trong quá trình
                    vận chuyển quốc tế.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* QUY TRÌNH */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              QUY TRÌNH ĐẤU GIÁ HỘ TẠI TIXIMAX
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <ol className="list-decimal pl-8 space-y-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
              <li>
                <strong>Bước 1: Gửi link sản phẩm hoặc mô tả chi tiết</strong> –
                Chỉ cần cung cấp link hoặc mô tả ngắn về sản phẩm bạn cần đấu
                giá, Tiximax sẽ nhanh chóng tìm đúng phiên đấu giá uy tín và phù
                hợp nhất. Bạn không cần hiểu cách vận hành của từng sàn –
                Tiximax hỗ trợ toàn bộ.
              </li>
              <li>
                <strong>Bước 2: Nhận báo giá chi tiết</strong> – Tiximax gửi
                bảng báo giá đầy đủ gồm giá dự kiến để thắng phiên, phí dịch vụ,
                phí nội địa và phí vận chuyển quốc tế. Tất cả được phân tách rõ
                ràng để bạn dễ dàng kiểm soát chi phí trước khi quyết định tham
                gia.
              </li>
              <li>
                <strong>Bước 3: Đấu giá – đàm phán giá tốt</strong> – Tiximax
                thay bạn đặt bid theo mức giá mong muốn, theo dõi phiên theo
                thời gian thực và tối ưu chiến lược đặt giá để tăng khả năng
                thắng đấu giá trong những giây cuối cùng.
              </li>
              <li>
                <strong>Bước 4: Chốt đơn – thanh toán</strong> – Khi phiên đấu
                giá kết thúc và bạn thắng giá, Tiximax tiến hành thanh toán nội
                địa và cập nhật chi tiết tình trạng đơn hàng. Mọi thông tin đều
                được báo lại rõ ràng để bạn dễ theo dõi.
              </li>
              <li>
                <strong>Bước 5: Vận chuyển về Việt Nam</strong> – Sản phẩm được
                vận chuyển về Việt Nam bằng tuyến nhanh hoặc tiết kiệm tùy nhu
                cầu. Tiximax hỗ trợ khai báo hải quan, cập nhật hành trình liên
                tục và giao tận tay khách hàng. Bạn có thể theo dõi đơn hàng dễ
                dàng từ lúc xuất kho nước ngoài cho đến khi nhận tại nhà.
              </li>
            </ol>
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
                  <span>Nếu đấu giá không thành công thì sao?</span>
                  <MessageSquare className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Bạn sẽ được hoàn 100% số tiền đã đặt cọc hoặc chuyển sang
                  phiên đấu giá tiếp theo nếu có nhu cầu.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Chi phí vận chuyển và thuế được tính thế nào?</span>
                  <MessageSquare className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Tổng chi phí gồm: giá hàng trúng đấu giá + phí dịch vụ đấu giá
                  hộ + phí nội địa + phí vận chuyển về Việt Nam + thuế nhập khẩu
                  (nếu áp dụng theo mặt hàng). Tất cả được báo rõ ràng trước khi
                  đặt cọc.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Có được kiểm tra hàng khi nhận không?</span>
                  <MessageSquare className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Có. Bạn được kiểm tra ngoại quan trước khi nhận. Nếu phát hiện
                  hàng sai mô tả hoặc không đúng đơn hàng, Tiximax sẽ hỗ trợ
                  khiếu nại hoặc xử lý đổi trả (nếu shop cho phép).
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Hàng về Việt Nam mất bao lâu?</span>
                  <MessageSquare className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Khoảng 10 – 18 ngày làm việc tùy từng mặt hàng và phương thức
                  vận chuyển được chọn. Tiximax cung cấp mã theo dõi để khách
                  kiểm tra hành trình đơn hàng.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Có hợp đồng hay cam kết nào không?</span>
                  <MessageSquare className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Tiximax gửi biên nhận giao dịch và hợp đồng dịch vụ qua
                  email/Zalo trước khi tiến hành thanh toán hoặc đặt cọc.
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
                  Dịch vụ đấu giá Tiximax là lựa chọn đáng tin cậy cho khách
                  hàng muốn sở hữu hàng ngoại chất lượng với mức giá hợp lý và
                  quy trình minh bạch. Nhờ khả năng hỗ trợ đa quốc gia, kiểm
                  hàng kỹ lưỡng và vận chuyển linh hoạt,{" "}
                  <strong>Dịch Vụ Đấu Giá Tiximax</strong> giúp khách hàng tiếp
                  cận kho hàng quốc tế dễ dàng và an toàn hơn. Nếu bạn đang quan
                  tâm <strong>đấu giá hộ Yahoo Auction</strong>,{" "}
                  <strong>đấu giá hộ eBay quốc tế</strong>,{" "}
                  <strong>dịch vụ đấu giá hàng quốc tế uy tín</strong> hoặc{" "}
                  <strong>đấu giá hàng ngoại ship về Việt Nam</strong>, hãy liên
                  hệ Tiximax để được tư vấn và báo giá chi tiết.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mt-4">
                  <Link
                    href="/signin"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-colors"
                  >
                    Đăng nhập để bắt đầu đấu giá
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-amber-700 bg-white hover:bg-amber-50 border-2 border-amber-600 transition-colors"
                  >
                    Nhận tư vấn & báo giá
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
