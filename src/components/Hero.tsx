
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fadeUp">
                <span className="block xl:inline">โซลูชันนวัตกรรมสำหรับ</span>{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary xl:inline delay-200 animate-fadeUp">
                  ธุรกิจของคุณ
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 delay-300 animate-fadeUp">
                เราช่วยให้ธุรกิจเติบโตในยุคดิจิทัลด้วยโซลูชันเทคโนโลยีล้ำสมัย กลยุทธ์นวัตกรรม และบริการที่เป็นเลิศ
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start delay-400 animate-fadeUp">
                <div className="rounded-md shadow">
                  <Link to="/contact">
                    <Button className="w-full flex items-center justify-center px-8 py-3 md:py-4 md:text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      เริ่มต้นใช้งาน
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/about">
                    <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 md:py-4 md:text-lg">
                      เรียนรู้เพิ่มเติม
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="ทีมงานทำงานกับโซลูชันธุรกิจ"
        />
      </div>
    </div>
  );
};

export default Hero;
