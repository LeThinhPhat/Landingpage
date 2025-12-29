"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { User, ChevronDown, Menu, X, Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const guideRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  // Click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      )
        setIsMobileMenuOpen(false);
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      )
        setIsServicesOpen(false);
      if (guideRef.current && !guideRef.current.contains(e.target as Node))
        setIsGuideOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ESC to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsServicesOpen(false);
        setIsGuideOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsGuideOpen(false);
  };

  const handleTrackingClick = () => {
    closeAllMenus();
    router.push("/tracking");
  };

  const isActive = (path: string) =>
    pathname === path || pathname?.startsWith(path + "/")
      ? "text-orange-600 font-semibold"
      : "text-gray-700";

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LEFT: LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-black">T</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">
                Tixi<span className="text-yellow-500">Logistics</span>
              </span>
            </Link>
          </div>

          {/* CENTER: NAV (desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-lg font-medium hover:text-orange-600 transition-colors whitespace-nowrap ${isActive(
                "/"
              )}`}
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className={`text-lg font-medium hover:text-orange-600 transition-colors whitespace-nowrap ${isActive(
                "/about"
              )}`}
            >
              Về chúng tôi
            </Link>

            {/* Services - Split Link and Dropdown */}
            <div
              className="relative flex items-center gap-1"
              ref={servicesRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`text-lg font-medium hover:text-orange-600 transition-colors whitespace-nowrap ${isActive(
                  "/services"
                )}`}
              >
                Dịch vụ
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                }}
                className="p-1 hover:bg-orange-50 rounded transition-colors"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-label="Mở menu dịch vụ"
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform text-gray-600 hover:text-orange-600 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-64">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    <Link
                      href="/services/auction"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-5 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Dịch vụ đấu giá
                    </Link>
                    <Link
                      href="/services/storage"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-5 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Dịch vụ ký gửi kho
                    </Link>
                    <Link
                      href="/services/purchase"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-5 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Dịch vụ mua hộ
                    </Link>
                    <Link
                      href="/services/customs"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-5 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Dịch vụ thông quan hộ
                    </Link>
                    <Link
                      href="/services/shipping"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-5 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Dịch vụ vận chuyển
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Guide - Split Link and Dropdown */}
            <div
              className="relative flex items-center gap-1"
              ref={guideRef}
              onMouseEnter={() => setIsGuideOpen(true)}
              onMouseLeave={() => setIsGuideOpen(false)}
            >
              <Link
                href="/guide"
                className={`text-lg font-medium hover:text-orange-600 transition-colors whitespace-nowrap ${isActive(
                  "/guide"
                )}`}
              >
                Hướng dẫn
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsGuideOpen(!isGuideOpen);
                }}
                className="p-1 hover:bg-orange-50 rounded transition-colors"
                aria-expanded={isGuideOpen}
                aria-haspopup="true"
                aria-label="Mở menu hướng dẫn"
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform text-gray-600 hover:text-orange-600 ${
                    isGuideOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isGuideOpen && (
                <div className="absolute left-0 top-full pt-2 w-64">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    <Link
                      href="/guide/order"
                      onClick={() => setIsGuideOpen(false)}
                      className="block px-5 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Hướng dẫn đặt hàng
                    </Link>
                    <Link
                      href="/guide/tracking"
                      onClick={() => setIsGuideOpen(false)}
                      className="block px-5 py-3 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      Hướng dẫn tra cứu đơn
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/news"
              className={`text-lg font-medium hover:text-orange-600 transition-colors whitespace-nowrap ${isActive(
                "/news"
              )}`}
            >
              Tin tức
            </Link>
            <Link
              href="/contact"
              className={`text-lg font-medium hover:text-orange-600 transition-colors whitespace-nowrap ${isActive(
                "/contact"
              )}`}
            >
              Liên hệ
            </Link>
          </nav>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Auth Buttons Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/signin"
                className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-xl text-base font-semibold hover:bg-gray-200 transition whitespace-nowrap"
              >
                Đăng nhập
              </Link>
              <Link
                href="/signup"
                className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-white px-5 py-2.5 rounded-xl text-base font-semibold hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 shadow-md hover:shadow-lg transition whitespace-nowrap"
              >
                Đăng ký
              </Link>
            </div>

            {/* Tracking Button */}
            <button
              onClick={handleTrackingClick}
              className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all whitespace-nowrap"
            >
              <Search size={18} />
              <span>Theo dõi đơn</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-gray-600 hover:text-amber-500 hover:bg-amber-50 rounded-xl transition"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-white border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Tracking Button - Mobile */}
            <button
              onClick={handleTrackingClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-bold shadow-md mb-4 transition-all"
            >
              <Search size={20} />
              <span>Theo dõi đơn hàng</span>
            </button>

            {/* Mobile Navigation */}
            <nav className="space-y-1">
              <Link
                href="/"
                onClick={closeAllMenus}
                className={`block px-4 py-3 text-base font-medium rounded-xl hover:bg-orange-50 hover:text-orange-600 transition ${isActive(
                  "/"
                )}`}
              >
                Trang chủ
              </Link>
              <Link
                href="/about"
                onClick={closeAllMenus}
                className={`block px-4 py-3 text-base font-medium rounded-xl hover:bg-orange-50 hover:text-orange-600 transition ${isActive(
                  "/about"
                )}`}
              >
                Về Tiximax
              </Link>

              {/* Services Mobile */}
              <div>
                <div className="flex items-center">
                  <Link
                    href="/services"
                    onClick={closeAllMenus}
                    className={`flex-1 px-4 py-3 text-base font-medium rounded-xl hover:bg-orange-50 hover:text-orange-600 transition ${isActive(
                      "/services"
                    )}`}
                  >
                    Dịch vụ
                  </Link>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="p-3 hover:bg-orange-50 rounded-xl transition"
                    aria-label="Toggle services menu"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {isServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/services/auction"
                      onClick={closeAllMenus}
                      className="block px-4 py-2 text-base text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition"
                    >
                      Dịch vụ đấu giá
                    </Link>
                    <Link
                      href="/services/storage"
                      onClick={closeAllMenus}
                      className="block px-4 py-2 text-base text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition"
                    >
                      Dịch vụ ký gửi kho
                    </Link>
                    <Link
                      href="/services/purchase"
                      onClick={closeAllMenus}
                      className="block px-4 py-2 text-base text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition"
                    >
                      Dịch vụ mua hộ
                    </Link>
                    <Link
                      href="/services/customs"
                      onClick={closeAllMenus}
                      className="block px-4 py-2 text-base text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition"
                    >
                      Dịch vụ thông quan hộ
                    </Link>
                    <Link
                      href="/services/shipping"
                      onClick={closeAllMenus}
                      className="block px-4 py-2 text-base text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition"
                    >
                      Dịch vụ vận chuyển
                    </Link>
                  </div>
                )}
              </div>

              {/* Guide Mobile */}
              <div>
                <div className="flex items-center">
                  <Link
                    href="/guide"
                    onClick={closeAllMenus}
                    className={`flex-1 px-4 py-3 text-base font-medium rounded-xl hover:bg-orange-50 hover:text-orange-600 transition ${isActive(
                      "/guide"
                    )}`}
                  >
                    Hướng dẫn
                  </Link>
                  <button
                    onClick={() => setIsGuideOpen(!isGuideOpen)}
                    className="p-3 hover:bg-orange-50 rounded-xl transition"
                    aria-label="Toggle guide menu"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isGuideOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {isGuideOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/guide/order"
                      onClick={closeAllMenus}
                      className="block px-4 py-2 text-base text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition"
                    >
                      Hướng dẫn đặt hàng
                    </Link>
                    <Link
                      href="/guide/tracking"
                      onClick={closeAllMenus}
                      className="block px-4 py-2 text-base text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition"
                    >
                      Hướng dẫn tra cứu đơn
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/news"
                onClick={closeAllMenus}
                className={`block px-4 py-3 text-base font-medium rounded-xl hover:bg-orange-50 hover:text-orange-600 transition ${isActive(
                  "/news"
                )}`}
              >
                Tin tức
              </Link>
              <Link
                href="/contact"
                onClick={closeAllMenus}
                className={`block px-4 py-3 text-base font-medium rounded-xl hover:bg-orange-50 hover:text-orange-600 transition ${isActive(
                  "/contact"
                )}`}
              >
                Liên hệ
              </Link>
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <Link
                href="/signin"
                onClick={closeAllMenus}
                className="block text-center bg-gray-100 text-gray-700 px-5 py-3 rounded-xl text-base font-bold hover:bg-gray-200 transition"
              >
                Đăng nhập
              </Link>
              <Link
                href="/signup"
                onClick={closeAllMenus}
                className="block text-center bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-white px-5 py-3 rounded-xl text-base font-bold hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 shadow-md transition"
              >
                Đăng ký ngay
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
