
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <Features />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                เราช่วยให้ธุรกิจเติบโต
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                โซลูชันเฉพาะทางของเราออกแบบมาเพื่อช่วยให้ธุรกิจของคุณก้าวไปสู่ความสำเร็จใหม่ๆ
                ด้วยทีมงานที่ทุ่มเทและเทคโนโลยีที่ทันสมัย เราให้เครื่องมือที่คุณต้องการ
                เพื่อความสำเร็จในตลาดที่มีการแข่งขันสูงในปัจจุบัน
              </p>
              <div className="mt-8 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">เพิ่มรายได้</h3>
                    <p className="mt-2 text-base text-gray-500">ลูกค้าของเราพบว่ารายได้เพิ่มขึ้นโดยเฉลี่ย 30% ภายในปีแรก</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">ปรับปรุงประสิทธิภาพ</h3>
                    <p className="mt-2 text-base text-gray-500">ปรับการดำเนินงานให้มีประสิทธิภาพและลดต้นทุนด้วยโซลูชันที่มีประสิทธิภาพของเรา</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:ml-8 lg:relative">
              <div className="relative mx-auto lg:mx-0 w-full rounded-lg shadow-lg overflow-hidden lg:max-w-md">
                <img
                  className="w-full object-cover h-96"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="การประชุมทีม"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              พร้อมที่จะเริ่มต้นหรือยัง?
            </h2>
            <p className="mt-4 text-xl text-white opacity-90">
              เข้าร่วมกับลูกค้าที่พึงพอใจหลายพันรายที่กำลังพัฒนาธุรกิจกับเรา
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact">
                <Button variant="secondary" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-white text-primary hover:bg-gray-100">
                  ติดต่อเรา
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
