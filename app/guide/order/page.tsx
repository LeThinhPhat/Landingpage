import { Metadata } from "next";

// ===== METADATA FOR SEO =====
export const metadata: Metadata = {
  title: "Hướng Dẫn Đặt Hàng Quốc Tế | Quy Trình Mua Hộ & Tra Cứu - Tiximax",
  description:
    "Hướng dẫn chi tiết cách đặt hàng quốc tế qua Tiximax. Quy trình 4 bước đơn giản: gửi yêu cầu, nhận báo giá, thanh toán, nhận hàng tận tay.",
  keywords: [
    "hướng dẫn đặt hàng",
    "hướng dẫn mua hàng quốc tế",
    "quy trình đặt hàng Tiximax",
    "cách mua hàng ngoại",
    "hướng dẫn mua hộ",
    "tra cứu đơn hàng",
    "thanh toán đơn hàng",
  ],
  openGraph: {
    title: "Hướng Dẫn Đặt Hàng Quốc Tế Qua Tiximax",
    description: "Quy trình đặt hàng đơn giản 4 bước, minh bạch chi phí",
    url: "https://tiximax.net/guide/order",
    siteName: "Tiximax Logistics",
    images: [
      {
        url: "https://tiximax.net/images/guide-order-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tiximax Order Guide",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tiximax.net/guide/order",
  },
};

// ===== COMPONENT =====
export default function GuideOrder() {
  // Structured Data
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Hướng dẫn đặt hàng quốc tế qua Tiximax",
    description:
      "Quy trình đặt hàng quốc tế đơn giản 4 bước với Tiximax Logistics",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Gửi yêu cầu cho Tiximax",
        text: "Chuẩn bị link sản phẩm và thông tin chi tiết (màu sắc, size, số lượng) rồi gửi qua form website, Messenger, Zalo hoặc hotline.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Tiximax kiểm tra và báo giá",
        text: "Tiximax kiểm tra sản phẩm, tư vấn lựa chọn tốt nhất và gửi báo giá chi tiết bao gồm giá sản phẩm, phí vận chuyển và thuế dự kiến.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Xác nhận và thanh toán",
        text: "Thanh toán qua chuyển khoản ngân hàng trong nước. Không cần thẻ Visa/Mastercard hay thanh toán trực tiếp trên website nước ngoài.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Vận chuyển và giao hàng tận tay",
        text: "Tiximax nhận hàng tại kho nước ngoài, xử lý hải quan, và giao hàng tận địa chỉ. Khách kiểm tra hàng khi nhận.",
      },
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
        name: "Hướng dẫn",
        item: "https://tiximax.net/guide",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hướng dẫn đặt hàng",
        item: "https://tiximax.net/guide/order",
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-white to-amber-50/40">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-amber-900/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/30 via-transparent to-transparent" />

          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24 relative">
            <div className="space-y-6 text-white">
              {/* Badge */}
              <p className="text-xs md:text-sm font-bold tracking-widest text-amber-300 uppercase text-center">
                HƯỚNG DẪN TIXIMAX
              </p>

              {/* H1 - IN HOA */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight text-center">
                HƯỚNG DẪN SỬ DỤNG DỊCH VỤ
              </h1>

              {/* Subtitle */}
              <p className="text-sm md:text-base text-gray-200 max-w-2xl leading-relaxed text-center mx-auto">
                Từng bước đặt hàng, thanh toán và theo dõi đơn với TIXIMAX
                Logistics – quy trình rõ ràng, chi phí minh bạch, dễ hiểu cho cả
                khách lẻ và chủ shop.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* TITLE BANNER */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl p-6 md:p-8 mb-12 -mx-4 md:-mx-8">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 text-center tracking-tight">
                HƯỚNG DẪN ĐẶT HÀNG
              </h2>
            </div>

            {/* GIỚI THIỆU */}
            <section className="mb-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                TIXIMAX LOGISTICS là đơn vị cung cấp dịch vụ logistics trọn gói,
                hỗ trợ mua hộ, vận chuyển và nhập khẩu hàng quốc tế với quy
                trình rõ ràng, chi phí minh bạch, đảm bảo an toàn hàng hóa.
              </p>
            </section>

            {/* QUY TRÌNH */}
            <section className="mb-12">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-8 pb-3 border-b-4 border-yellow-400">
                QUY TRÌNH ĐẶT HÀNG TẠI TIXIMAX
              </h3>

              {/* BƯỚC 1 */}
              <div className="mb-10">
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-6">
                  <h4 className="text-xl md:text-2xl font-black uppercase text-gray-900">
                    BƯỚC 1: GỬI YÊU CẦU CHO TIXIMAX
                  </h4>
                </div>
                <div className="pl-4 md:pl-8 space-y-4">
                  <p className="font-bold text-lg text-gray-900">
                    Bạn chuẩn bị:
                  </p>
                  <ul className="list-disc pl-6 md:pl-8 space-y-3 text-base md:text-lg text-gray-700">
                    <li>
                      Link sản phẩm từ các website nước ngoài (Indonesia, Nhật,
                      Hàn, Mỹ…)
                    </li>
                    <li>
                      Thông tin chi tiết:
                      <ul className="list-circle pl-6 md:pl-8 mt-2 space-y-2">
                        <li>
                          <span className="bg-yellow-200 px-3 py-1 font-semibold rounded">
                            Màu sắc / size / dung tích
                          </span>
                        </li>
                        <li>
                          <span className="bg-yellow-200 px-3 py-1 font-semibold rounded">
                            Số lượng
                          </span>
                        </li>
                        <li>
                          <span className="bg-yellow-200 px-3 py-1 font-semibold rounded">
                            Phiên bản / model cụ thể
                          </span>{" "}
                          (nếu có)
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p className="font-bold text-lg text-gray-900">
                    Sau đó, gửi cho TIXIMAX qua:
                  </p>
                  <ul className="list-disc pl-6 md:pl-8 space-y-2 text-base md:text-lg text-gray-700">
                    <li>Form Nhận báo giá / Gửi yêu cầu trên website</li>
                    <li>Các kênh tư vấn: Messenger, Zalo, hotline</li>
                  </ul>
                </div>
              </div>

              {/* BƯỚC 2 */}
              <div className="mb-10">
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-6">
                  <h4 className="text-xl md:text-2xl font-black uppercase text-gray-900">
                    BƯỚC 2: TIXIMAX KIỂM TRA & BÁO GIÁ
                  </h4>
                </div>
                <div className="pl-4 md:pl-8 space-y-4">
                  <p className="text-base md:text-lg text-gray-700">
                    Sau khi nhận yêu cầu, TIXIMAX sẽ:
                  </p>
                  <ul className="list-disc pl-6 md:pl-8 space-y-3 text-base md:text-lg text-gray-700">
                    <li>
                      Kiểm tra thông tin sản phẩm, độ uy tín của nhà cung cấp
                    </li>
                    <li>
                      Tư vấn nếu có lựa chọn phù hợp hơn (giá tốt hơn, phí ship
                      rẻ hơn, seller uy tín hơn…)
                    </li>
                    <li>
                      Gửi lại báo giá chi tiết, bao gồm:
                      <ul className="list-circle pl-6 md:pl-8 mt-2 space-y-2">
                        <li>
                          <span className="bg-yellow-200 px-3 py-1 font-semibold rounded">
                            Giá sản phẩm gốc
                          </span>
                        </li>
                        <li>
                          <span className="bg-yellow-200 px-3 py-1 font-semibold rounded">
                            Phí vận chuyển quốc tế & nội địa
                          </span>
                        </li>
                        <li>
                          <span className="bg-yellow-200 px-3 py-1 font-semibold rounded">
                            Thuế, phí dự kiến
                          </span>{" "}
                          (nếu có)
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p className="text-base md:text-lg text-gray-700">
                    Bạn chỉ cần xem lại:
                  </p>
                  <ul className="list-disc pl-6 md:pl-8 space-y-2 text-base md:text-lg text-gray-700">
                    <li>Thông tin sản phẩm đã đúng chưa</li>
                    <li>Tổng chi phí</li>
                    <li>Thời gian dự kiến hàng về</li>
                  </ul>
                  <p className="text-base md:text-lg text-gray-700">
                    Nếu đồng ý, bạn xác nhận đặt hàng.
                  </p>
                </div>
              </div>

              {/* BƯỚC 3 */}
              <div className="mb-10">
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-6">
                  <h4 className="text-xl md:text-2xl font-black uppercase text-gray-900">
                    BƯỚC 3: XÁC NHẬN & THANH TOÁN
                  </h4>
                </div>
                <div className="pl-4 md:pl-8">
                  <ul className="list-disc pl-6 md:pl-8 space-y-3 text-base md:text-lg text-gray-700">
                    <li>
                      Bạn có thể thanh toán cho TIXIMAX bằng{" "}
                      <span className="bg-yellow-200 px-3 py-1 font-semibold rounded">
                        chuyển khoản ngân hàng trong nước
                      </span>{" "}
                      hoặc phương thức thanh toán quốc tế
                    </li>
                    <li>
                      Bạn{" "}
                      <span className="bg-yellow-200 px-3 py-1 font-semibold rounded">
                        KHÔNG cần dùng thẻ Visa/Mastercard
                      </span>{" "}
                      hay tự thanh toán trên website nước ngoài
                    </li>
                    <li>Tất cả giao dịch quốc tế sẽ do TIXIMAX thực hiện</li>
                    <li>
                      Sau khi nhận được thanh toán/xác nhận cọc, TIXIMAX sẽ tiến
                      hành mua hàng theo đúng yêu cầu của bạn
                    </li>
                  </ul>
                </div>
              </div>

              {/* BƯỚC 4 */}
              <div className="mb-10">
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-6">
                  <h4 className="text-xl md:text-2xl font-black uppercase text-gray-900">
                    BƯỚC 4: VẬN CHUYỂN & GIAO HÀNG TẬN TAY
                  </h4>
                </div>
                <div className="pl-4 md:pl-8 space-y-4">
                  <p className="text-base md:text-lg text-gray-700">
                    TIXIMAX sẽ:
                  </p>
                  <ul className="list-disc pl-6 md:pl-8 space-y-3 text-base md:text-lg text-gray-700">
                    <li>Nhận hàng tại kho nước ngoài</li>
                    <li>Đóng gói, sắp xếp vận chuyển quốc tế về Việt Nam</li>
                    <li>
                      Thực hiện các thủ tục hải quan, thuế, giấy tờ liên quan
                    </li>
                    <li>
                      Giao cho đơn vị vận chuyển nội địa và ship đến tận địa chỉ
                      bạn cung cấp
                    </li>
                  </ul>
                  <p className="font-bold text-lg text-gray-900">
                    Khi nhận hàng, bạn nên:
                  </p>
                  <ul className="list-disc pl-6 md:pl-8 space-y-2 text-base md:text-lg text-gray-700">
                    <li>
                      <span className="bg-yellow-200 px-3 py-1 font-semibold rounded">
                        Kiểm tra kiện hàng bên ngoài
                      </span>
                    </li>
                    <li>
                      <span className="bg-yellow-200 px-3 py-1 font-semibold rounded">
                        Mở hàng, kiểm tra đúng mẫu, đúng số lượng, đúng phiên
                        bản
                      </span>
                    </li>
                    <li>
                      Nếu có sai sót hoặc hư hỏng, liên hệ ngay TIXIMAX để được
                      hỗ trợ
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* LƯU Ý */}
            <section className="mb-12">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-8 pb-3 border-b-4 border-yellow-400">
                MỘT SỐ LƯU Ý KHI ĐẶT HÀNG QUA TIXIMAX
              </h3>
              <p className="mb-5 text-base md:text-lg text-gray-700">
                Để đơn hàng được xử lý nhanh và chính xác, bạn nên:
              </p>
              <ul className="list-disc pl-6 md:pl-8 space-y-3 text-base md:text-lg text-gray-700">
                <li>Gửi link sản phẩm rõ ràng, hạn chế dùng hình ảnh mơ hồ</li>
                <li>Ghi đầy đủ: màu – size – số lượng – phiên bản</li>
                <li>Yêu cầu báo giá trước khi chốt đơn để nắm rõ chi phí</li>
                <li>
                  Lên kế hoạch nhập hàng sớm trước các dịp sale lớn, lễ Tết… để
                  tránh trễ tiến độ
                </li>
                <li>
                  Ưu tiên chọn sản phẩm từ nhà cung cấp uy tín, có nhiều đánh
                  giá tốt
                </li>
              </ul>
            </section>

            {/* ƯU ĐIỂM */}
            <section>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-8 pb-3 border-b-4 border-yellow-400">
                VÌ SAO NÊN ĐẶT HÀNG QUA TIXIMAX?
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-6 py-3 bg-yellow-50">
                  <h4 className="font-black text-lg md:text-xl uppercase text-gray-900 mb-2">
                    TẤT CẢ CÁC CHI PHÍ ĐỀU RÕ RÀNG
                  </h4>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Giá hàng, phí mua hộ, phí vận chuyển quốc tế, thuế/phí… đều
                    được thể hiện rõ trong báo giá. Không chi phí ẩn, không phát
                    sinh mập mờ.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-3 bg-yellow-50">
                  <h4 className="font-black text-lg md:text-xl uppercase text-gray-900 mb-2">
                    LỘ TRÌNH MINH BẠCH
                  </h4>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    TIXIMAX thiết kế lộ trình vận chuyển rõ ràng, thời gian cam
                    kết theo từng thị trường, giúp bạn chủ động kế hoạch kinh
                    doanh.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-3 bg-yellow-50">
                  <h4 className="font-black text-lg md:text-xl uppercase text-gray-900 mb-2">
                    QUY TRÌNH ĐƠN GIẢN
                  </h4>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Gửi yêu cầu – nhận báo giá – xác nhận & thanh toán – nhận
                    hàng. Bạn không cần hiểu quá sâu về thủ tục logistics,
                    TIXIMAX đã làm thay bạn.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6 py-3 bg-yellow-50">
                  <h4 className="font-black text-lg md:text-xl uppercase text-gray-900 mb-2">
                    HỖ TRỢ TẬN TÂM
                  </h4>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Đội ngũ TIXIMAX luôn sẵn sàng tư vấn về sản phẩm, seller,
                    cách tối ưu chi phí, lựa chọn phương án vận chuyển phù hợp
                    với từng loại hàng.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
