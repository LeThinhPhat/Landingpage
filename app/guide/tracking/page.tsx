// components/TrackingOrderCustomer.tsx
"use client";

import { useState } from "react";
import { Search, Package, Phone } from "lucide-react";

export default function TrackingOrderCustomer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/tracking?phone=${phoneNumber}`);
      // const data = await response.json();

      // Mock data for demonstration
      setTimeout(() => {
        setOrders([
          {
            id: "TXM001234",
            status: "Đang vận chuyển",
            date: "2024-12-20",
            description: "Hàng đang trên đường về Việt Nam",
          },
        ]);
        setIsSearching(false);
      }, 1000);
    } catch (error) {
      console.error("Error tracking order:", error);
      setIsSearching(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Package className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Tra cứu đơn hàng
          </h2>
          <p className="text-amber-50 text-sm md:text-base">
            Nhập số điện thoại để xem tất cả đơn hàng của bạn
          </p>
        </div>
      </div>

      {/* Search Form */}
      <div className="p-8 md:p-12">
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="phone"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                Số điện thoại đã đặt hàng
              </label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Ví dụ: 0901234567"
                className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSearching || !phoneNumber}
              className="w-full bg-amber-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
            >
              {isSearching ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                  Đang tra cứu...
                </>
              ) : (
                <>
                  <Search className="w-6 h-6" />
                  Tra cứu đơn hàng
                </>
              )}
            </button>
          </div>
        </form>

        {/* Results */}
        {orders.length > 0 && (
          <div className="mt-12 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Kết quả tra cứu ({orders.length} đơn hàng)
            </h3>
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border-2 border-amber-200 rounded-xl p-6 hover:border-amber-400 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Mã đơn hàng</p>
                      <p className="text-lg font-bold text-gray-900">
                        {order.id}
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-lg text-sm font-semibold">
                      {order.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">{order.description}</p>
                    <p className="text-gray-500">Cập nhật: {order.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Help Text */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <h4 className="font-semibold text-gray-900 mb-2">
              💡 Lưu ý khi tra cứu
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Nhập đúng số điện thoại đã đăng ký khi đặt hàng</li>
              <li>• Kiểm tra kỹ định dạng số điện thoại (không có dấu cách)</li>
              <li>
                • Nếu không tìm thấy đơn, vui lòng liên hệ:{" "}
                <strong>090 183 42 83</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
