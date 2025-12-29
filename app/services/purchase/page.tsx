import { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingBag,
  ShieldCheck,
  DollarSign,
  HelpCircle,
  Truck,
  CheckCircle2,
} from "lucide-react";

// ===== METADATA FOR SEO =====
export const metadata: Metadata = {
  title:
    "Dịch Vụ Mua Hộ Hàng Quốc Tế | Mua Hộ Nhật, Mỹ, Hàn, Indonesia - Tiximax",
  description:
    "Dịch vụ mua hộ hàng quốc tế uy tín. Mua hộ hàng Nhật, Mỹ, Hàn Quốc, Indonesia về Việt Nam. Minh bạch chi phí, kiểm hàng kỹ, giao tận tay.",
  keywords: [
    "dịch vụ mua hộ",
    "mua hộ hàng Nhật",
    "mua hộ hàng Mỹ",
    "mua hộ hàng Hàn Quốc",
    "mua hộ hàng Indonesia",
    "Tiximax mua hộ",
    "mua hàng quốc tế",
    "order hàng ngoại",
    "mua hộ uy tín",
  ],
  openGraph: {
    title: "Dịch Vụ Mua Hộ Tiximax - Mua Hộ Hàng Quốc Tế Uy Tín",
    description:
      "Mua hộ hàng Nhật, Mỹ, Hàn, Indonesia. Minh bạch chi phí, giao tận tay",
    url: "https://tiximax.net/services/purchase",
    siteName: "Tiximax Logistics",
    images: [
      {
        url: "https://tiximax.net/images/purchase-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tiximax Purchase Service",
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
    canonical: "https://tiximax.net/services/purchase",
  },
};

// ===== COMPONENT =====
export default function ServicesPurchase() {
  // Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "International Shopping & Purchase Service",
    provider: {
      "@type": "Organization",
      name: "Tiximax Logistics",
      url: "https://tiximax.net",
      telephone: "0901834283",
    },
    description:
      "Dịch vụ mua hộ hàng quốc tế từ Nhật, Mỹ, Hàn Quốc, Indonesia về Việt Nam",
    areaServed: [
      { "@type": "Country", name: "Vietnam" },
      { "@type": "Country", name: "Japan" },
      { "@type": "Country", name: "United States" },
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
        name: "Dịch vụ mua hộ",
        item: "https://tiximax.net/services/purchase",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Tiximax có nhận order 1 - 2 món lẻ không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có. Tiximax nhận order lẻ từ 1 sản phẩm, không yêu cầu số lượng lớn.",
        },
      },
      {
        "@type": "Question",
        name: "Phí mua hộ được tính cụ thể như thế nào?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tổng = Giá hàng + Phí mua hộ + Phí vận chuyển nội địa + Phí vận chuyển quốc tế + Thuế/khai báo + Phí bảo hiểm (tuỳ chọn).",
        },
      },
      {
        "@type": "Question",
        name: "TIXIMAX có hỗ trợ COD không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có. Với sản phẩm giao về Việt Nam, Tiximax hỗ trợ giao COD tận tay khách.",
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
                  DỊCH VỤ MUA HỘ TIXIMAX
                </span>
              </div>

              {/* H1 - IN HOA, IN ĐẬM */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-center tracking-tight">
                TIXIMAX MUA HỘ
              </h1>

              {/* Subtitle - Viết thường */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
                Dịch vụ mua hộ hàng quốc tế minh bạch, an toàn, tối ưu cho bạn
              </p>

              {/* Line */}
              <div className="h-[3px] w-24 mx-auto bg-amber-500 rounded-full" />

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-colors"
                >
                  Liên hệ tư vấn mua hộ
                </Link>
                <Link
                  href="/tracking"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors"
                >
                  Tra cứu đơn hàng
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
                Tiximax là đơn vị cung cấp dịch vụ mua hộ chuyên tuyến giữa Việt
                Nam và các thị trường lớn: Nhật, Indonesia, Hàn Quốc, Mỹ. Am
                hiểu sàn thương mại địa phương, có tài khoản mua hàng, đội ngũ
                chúng tôi tự tin có thể làm hài lòng bạn với kinh nghiệm xử lý
                thủ tục xuất nhập khẩu đã tích lũy.
              </p>
              <p>
                Dịch vụ <strong>Tiximax mua hộ</strong> tập trung vào: tìm đúng
                link sản phẩm, mua theo yêu cầu, gom hàng tại kho, vận chuyển
                quốc tế và giao tận tay khách hàng. Với thế mạnh là minh bạch
                báo giá, tư vấn chi tiết, có tùy chọn gói bảo hiểm hàng hóa,
                Tiximax sẽ giúp bạn giảm rủi ro khi dùng dịch vụ mua hộ.
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
                Đội ngũ chúng tôi gồm nhân viên mua hàng địa phương, nhân sự
                kiểm hàng, và bộ phận logistics quốc tế. Họ có kinh nghiệm làm
                việc trực tiếp trên nhiều sàn như Rakuten, Mercari, Tokopedia,
                Coupang, Amazon,...
              </p>
              <p>
                Cam kết kiểm tra tình trạng trước khi xuất kho, báo cáo bằng
                ảnh/video khi mua thành công, Tiximax đảm bảo sự minh bạch trong
                từng bước. Nếu bạn cần <strong>tiximax mua hàng nhật</strong>,
                mua hàng Hàn Quốc hay Mỹ, đội ngũ sẽ tư vấn chi tiết về bảo hành
                và các chi phí cụ thể trước khi chốt đơn.
              </p>
            </div>
          </div>
        </section>

        {/* TẠI SAO ĐƯỢC YÊU THÍCH */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              TẠI SAO DỊCH VỤ TIXIMAX MUA HỘ ĐƯỢC YÊU THÍCH?
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>Tiximax là lựa chọn được yêu thích của những người muốn:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Săn hàng giá tốt, tìm kiếm mẫu mã nội địa độc đáo.</li>
                <li>
                  Mua đồ trên các sàn thương mại điện tử vào các ngày sale lớn.
                </li>
                <li>Tránh các thủ tục phức tạp khi mua hàng quốc tế.</li>
                <li>Sở hữu các mặt hàng không kinh doanh tại Việt Nam.</li>
              </ul>
              <p>
                Tiximax sẽ xử lý toàn bộ các quy trình: tìm link, đặt hàng bằng
                tài khoản nội địa, gom hàng và vận chuyển. Khi bạn muốn Tiximax
                mua hàng Nhật, Hàn, Mỹ,… vào các mùa sale như Black Friday,
                Tiximax sẽ theo dõi mã khuyến mãi, tối ưu chi phí ship để bạn
                hưởng lợi.
              </p>
            </div>
          </div>
        </section>

        {/* CÁC DỊCH VỤ MUA HỘ */}
        <section className="py-16 border-t border-amber-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              KHÁM PHÁ CÁC DỊCH VỤ MUA HỘ TIXIMAX CUNG CẤP
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5 mb-8">
              <p>
                Tiximax cung cấp gói dịch vụ linh hoạt theo tuyến và theo nhu
                cầu khách:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Mua hộ lẻ (1–2 món) hoặc đơn hàng số lượng lớn.</li>
                <li>Săn sale (Black Friday, Cyber Monday).</li>
                <li>
                  Mua hộ theo yêu cầu: kiểm hàng, chụp ảnh/video, đóng gói kỹ.
                </li>
              </ul>
              <p>
                Để tìm hiểu cụ thể thông tin dịch vụ, hãy tiếp tục xem chi tiết
                từng tuyến mua hộ dưới đây.
              </p>
            </div>

            <div className="space-y-6">
              {/* Nhật */}
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  TIXIMAX MUA HỘ HÀNG NHẬT
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-3">
                  <p>
                    Tiximax hỗ trợ mua trên Rakuten, Mercari, Amazon Nhật và các
                    chợ nội địa. Đặc điểm: nhiều mặt hàng độc đáo, hàng
                    second-hand chất lượng, và phiên bản Nhật của một số sản
                    phẩm.
                  </p>
                  <p>
                    Tiximax có tài khoản mua hàng, kinh nghiệm đấu giá, và quy
                    trình kiểm hàng tại kho Nhật. Báo giá bao gồm: giá gốc, phí
                    mua hộ, phí gom hàng, phí vận chuyển quốc tế và VAT dự kiến
                    nếu có. Chính sách minh bạch giúp khách yên tâm khi order
                    hàng Nhật.
                  </p>
                </div>
              </article>

              {/* Indonesia */}
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  MUA HỘ HÀNG INDONESIA TIXIMAX
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-3">
                  <p>
                    Tiximax mua hộ trên Tokopedia, Shopee Indonesia, Lazada
                    Indonesia và nhiều sàn địa phương. Ưu thế: tiếp cận hàng nội
                    địa Indonesia, đồ gia dụng, nội thất và phụ kiện độc đáo.
                  </p>
                  <p>
                    Tiximax hỗ trợ gửi hai chiều Indonesia ↔ Việt Nam, xử lý
                    đóng gói chuyên cho hàng dễ vỡ và cồng kềnh. Khi bạn cần{" "}
                    <strong>tiximax mua hàng Indonesia</strong>, đội sẽ báo rõ
                    chi phí vận chuyển nội địa, phí xuất khẩu và phí nhập khẩu
                    về VN để bạn so sánh tổng chi phí.
                  </p>
                </div>
              </article>

              {/* Hàn Quốc */}
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  TIXIMAX MUA HỘ HÀNG HÀN QUỐC
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-3">
                  <p>
                    Tiximax mua hàng trên Coupang, Gmarket, Amazon Hàn; chuyên
                    săn sale mỹ phẩm, quần áo và giày. Dịch vụ hỗ trợ kiểm mã
                    hàng, so sánh nhà bán, và hướng dẫn chọn size chuẩn khi mua
                    thời trang.
                  </p>
                  <p>
                    Với hàng mỹ phẩm, Tiximax lưu ý chính sách hạn sử dụng và
                    thành phần. Đây là lựa chọn phù hợp nếu bạn muốn nhập số
                    lượng nhỏ hoặc mua lẻ.
                  </p>
                </div>
              </article>

              {/* Mỹ */}
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  TIXIMAX MUA HỘ HÀNG MỸ
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-3">
                  <p>
                    Tiximax hỗ trợ mua trên Amazon Mỹ, eBay và theo dõi sự kiện
                    sale lớn (Black Friday, Cyber Monday). Ưu điểm: tiếp cận
                    hàng giá tốt, hàng brand chính hãng.
                  </p>
                  <p>
                    Tiximax xử lý: mua hộ, kiểm hàng, gom nhiều đơn nhỏ để tối
                    ưu chi phí vận chuyển và khai báo hải quan. Khi mua hàng Mỹ,
                    lưu ý phí ship nội Mỹ, phí ship quốc tế, và chính sách trả
                    hàng của nhà bán.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* LÝ DO NÊN CHỌN */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              TẠI SAO NÊN CHỌN DỊCH VỤ TIXIMAX MUA HỘ?
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>
                Sau đây là những ưu điểm nổi bật của dịch vụ mua hộ Tiximax:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  <strong>Kinh nghiệm chuyên tuyến:</strong> xử lý hiệu quả Nhật
                  - Việt, Indonesia - Việt, Hàn - Việt, Mỹ - Việt.
                </li>
                <li>
                  <strong>Phạm vi sàn đa dạng:</strong> Tokopedia, Shopee ID,
                  Rakuten, Mercari, Coupang, Amazon, eBay.
                </li>
                <li>
                  <strong>Hỗ trợ tận tình:</strong> tư vấn sản phẩm, kiểm tra
                  mẫu mã, kích thước và chính sách bảo hành trước khi mua.
                </li>
                <li>
                  <strong>Minh bạch báo giá:</strong> tách rõ giá hàng, phí mua
                  hộ, phí vận chuyển và thuế dự kiến.
                </li>
                <li>
                  <strong>Chính sách bảo hiểm & hậu mãi:</strong> tùy chọn mua
                  bảo hiểm, quy trình khiếu nại rõ ràng.
                </li>
              </ul>
              <p>
                Những yếu tố này tối thiểu hóa rủi ro cho khách hàng cá nhân và
                doanh nghiệp nhập hàng, giúp bạn biết chính xác{" "}
                <strong>tiximax mua hàng hộ</strong> có hữu ích hay không.
              </p>
            </div>
          </div>
        </section>

        {/* QUY TRÌNH CHUNG */}
        <section className="py-16 border-t border-amber-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              QUY TRÌNH MUA HỘ QUỐC TẾ CỦA TIXIMAX
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-5">
              <p>
                Quy trình chuẩn gồm:{" "}
                <strong>
                  gửi link sản phẩm → nhận báo giá chi tiết → thanh toán đặt cọc
                  → Tiximax mua hộ và gom hàng tại kho nước ngoài → vận chuyển
                  về VN → giao hàng tận tay và hỗ trợ hậu mãi.
                </strong>
              </p>
              <p>
                Thời gian dòng hàng sẽ tùy tuyến. Ví dụ tuyến Nhật thường 3 - 7
                ngày sau khi xuất kho; tuyến Mỹ/Indonesia có thể lâu hơn. Mỗi
                bước có biên nhận rõ ràng để bảo vệ quyền lợi khách hàng.
              </p>
            </div>
          </div>
        </section>

        {/* CÁC BƯỚC CHI TIẾT */}
        <section className="py-16 border-t border-amber-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              CÁC BƯỚC CHI TIẾT TRONG DỊCH VỤ TIXIMAX MUA HỘ
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <div className="space-y-6">
              {/* Gửi link */}
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  GỬI LINK SẢN PHẨM
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-2">
                  <p>
                    Gửi link trực tiếp từ sàn hoặc chụp ảnh sản phẩm kèm mô tả
                    (màu, size, mã SKU). Nếu bạn không biết cách lấy link,
                    Tiximax hướng dẫn chi tiết cách copy link trên từng sàn.
                  </p>
                  <p>
                    Lưu ý cung cấp thông tin bổ sung: số lượng, yêu cầu đóng
                    gói, ưu tiên nhà bán có rating cao.
                  </p>
                </div>
              </article>

              {/* Báo giá */}
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  NHẬN BÁO GIÁ CHI TIẾT
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-2">
                  <p>
                    Tiximax sẽ gửi báo giá phân tách: giá sản phẩm, phí mua hộ,
                    phí vận chuyển nội địa, phí vận chuyển quốc tế, thuế/hải
                    quan ước tính, phí bảo hiểm (nếu có).
                  </p>
                  <p>
                    Yêu cầu báo giá bằng văn bản (Zalo) để làm căn cứ thanh
                    toán. Bạn nên so sánh ít nhất 2 báo giá trước khi đồng ý.
                  </p>
                </div>
              </article>

              {/* Thanh toán */}
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  THANH TOÁN ĐƠN HÀNG
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-2">
                  <p>
                    Khi xác nhận, khách thanh toán đặt cọc theo tỉ lệ thỏa thuận
                    (thường 30–70%). Tiximax cung cấp hợp đồng dịch vụ, biên lai
                    đặt cọc và lịch mua hàng.
                  </p>
                  <p>
                    Thanh toán phần còn lại khi hàng về hoặc theo điều khoản đã
                    ký.
                  </p>
                </div>
              </article>

              {/* Gom & vận chuyển */}
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  GOM VÀ VẬN CHUYỂN HÀNG VỀ VIỆT NAM
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-2">
                  <p>
                    Hàng sẽ được gom tại kho nước ngoài, kiểm hàng trước khi
                    xuất. Tiximax tổ chức các chuyến gom định kỳ (ví dụ tuyến
                    Nhật 3 chuyến/tuần).
                  </p>
                  <p>
                    Hàng về Việt Nam sẽ qua thủ tục hải quan, sau đó khách hàng
                    sẽ nhận thông báo mã vận đơn và lịch giao cụ thể. Thời gian
                    nhận hàng sẽ phụ thuộc tuyến và thủ tục hải quan. Tiximax
                    cập nhật tiến độ liên tục để bạn nắm được thông tin đơn
                    hàng.
                  </p>
                </div>
              </article>

              {/* Giao hàng & hậu mãi */}
              <article className="border border-amber-200 rounded-2xl p-6 bg-amber-50 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold uppercase text-gray-900 text-center">
                  GIAO TẬN TAY VÀ HẬU MÃI
                </h3>
                <div className="mt-3 h-[2px] w-16 mx-auto bg-amber-500 rounded-full" />
                <div className="mt-4 text-base sm:text-lg text-gray-700 space-y-2">
                  <p>
                    Hàng đặt về sẽ được Tiximax giao tận nhà (hoặc bạn có thể
                    chọn tự đến lấy). Khách kiểm tra ngay khi nhận. Nếu phát
                    hiện hư hỏng hoặc sai mô tả, bạn có thể mở khiếu nại theo
                    chính sách bảo hiểm/hoàn tiền.
                  </p>
                  <p>
                    Để được hỗ trợ tốt nhất, bạn có thể lựa chọn gói bảo hiểm
                    hàng hóa của Tiximax. Và đừng quên lưu giữ ảnh/video làm
                    chứng từ khi cần khiếu nại.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-amber-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-center tracking-tight">
              NHỮNG CÂU HỎI THƯỜNG GẶP VỀ DỊCH VỤ MUA HỘ HÀNG TIXIMAX
            </h2>
            <div className="mt-4 mb-10 h-[3px] w-20 mx-auto bg-amber-500 rounded-full" />

            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Phần FAQ này sẽ giải đáp các thắc mắc phổ biến: order lẻ, cách
              tính phí, chính sách hoàn/đền, mặt hàng bị từ chối, hỗ trợ COD cho
              khách hàng quan tâm.
            </p>

            <div className="space-y-4">
              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Tiximax có nhận order 1 - 2 món lẻ không?</span>
                  <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Có. Tiximax nhận order lẻ từ 1 sản phẩm, không yêu cầu số
                  lượng lớn. Tuy nhiên phí tối thiểu có thể áp dụng cho các đơn
                  quá nhỏ để bù chi phí vận hành. Để đảm bảo quyền lợi, bạn nên
                  hỏi rõ phí tối thiểu trước khi nhờ Tiximax mua hộ hàng hóa.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Phí mua hộ được tính cụ thể như thế nào?</span>
                  <DollarSign className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <div className="mt-3 text-base sm:text-lg text-gray-700 space-y-2">
                  <p>Tiximax có bảng phí theo tuyến. Công thức cơ bản:</p>
                  <p>
                    <strong>
                      Tổng = Giá hàng + Phí mua hộ (phần trăm hoặc cố định) +
                      Phí vận chuyển nội địa + Phí vận chuyển quốc tế +
                      Thuế/khai báo + Phí bảo hiểm (tuỳ chọn).
                    </strong>
                  </p>
                  <p>
                    Để được tư vấn cụ thể, hãy liên hệ hotline{" "}
                    <strong>0901 834 283</strong> và nhận báo giá từ nhân viên
                    của Tiximax.
                  </p>
                </div>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Chính sách mua hộ của Tiximax như thế nào?</span>
                  <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Tiximax áp dụng chính sách bảo hiểm và hoàn tiền tùy trường
                  hợp: hư hỏng trong vận chuyển, sai sản phẩm do nhà bán, hoặc
                  hàng bị giữ hải quan do thiếu chứng từ (tùy nguyên nhân). Chi
                  tiết điều kiện sẽ được tư vấn rõ ràng trong quá trình trao đổi
                  với nhân viên của chúng tôi.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>Những mặt hàng nào bị từ chối mua hộ tại Tiximax?</span>
                  <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Các mặt hàng bị cấm theo quy định của Nhà nước Việt Nam và
                  nước xuất xứ sẽ không được Tiximax mua hộ. Ví dụ: hàng cấm
                  xuất nhập khẩu, vũ khí, chất dễ cháy/nổ, thuốc lá lậu, chất
                  cấm. Hãy liên hệ Tiximax để hỏi thêm nếu sản phẩm bạn quan tâm
                  có nghi vấn.
                </p>
              </details>

              <details className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer text-base sm:text-lg font-semibold text-gray-900">
                  <span>TIXIMAX có hỗ trợ COD không?</span>
                  <Truck className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
                  Có. Với sản phẩm giao về Việt Nam, Tiximax hỗ trợ giao COD tận
                  tay khách nếu quy trình vận chuyển và thanh toán nội bộ cho
                  phép. Liên hệ trước để xác nhận điều kiện COD cho đơn hàng cụ
                  thể.
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
                  <strong>TIXIMAX mua hộ</strong> là lựa chọn tốt nếu bạn muốn
                  mua hàng quốc tế mà không phải xử lý rào cản kỹ thuật và thủ
                  tục. Điểm mạnh nằm ở kinh nghiệm chuyên tuyến, minh bạch báo
                  giá và hậu mãi. Trước khi đặt cọc, hãy yêu cầu báo giá chi
                  tiết, hợp đồng dịch vụ và hình ảnh/biên nhận mua hàng. Nếu bạn
                  đang tìm mua hàng Nhật, Indonesia, hàng Hàn Quốc hay Mỹ, liên
                  hệ Tiximax ngay để nhận báo giá miễn phí!
                </p>

                <div className="flex flex-wrap gap-4 justify-center mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-colors"
                  >
                    Nhận tư vấn & báo giá mua hộ
                  </Link>
                  <Link
                    href="/tracking"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-amber-700 bg-white hover:bg-amber-50 border-2 border-amber-600 transition-colors"
                  >
                    Theo dõi đơn mua hộ
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
