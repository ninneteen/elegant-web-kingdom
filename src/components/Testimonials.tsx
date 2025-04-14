
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "การทำงานร่วมกับบริษัทนี้ได้เปลี่ยนแปลงธุรกิจของเรา โซลูชันที่เป็นนวัตกรรมของพวกเขาช่วยให้เราเพิ่มรายได้ 40% ในเวลาเพียงหกเดือน",
    author: {
      name: "สราภา จันทร์สุข",
      role: "ซีอีโอ, เทคสตาร์ท จำกัด",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
  },
  {
    id: 2,
    content: "ทีมส่งมอบผลงานเกินความคาดหวังของเรา ความใส่ใจในรายละเอียดและความมุ่งมั่นในคุณภาพของพวกเขาไม่มีใครเทียบได้ในอุตสาหกรรมนี้",
    author: {
      name: "มนัส ชินวงศ์",
      role: "ซีทีโอ, อินโนเวท โซลูชันส์",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
  },
  {
    id: 3,
    content: "การบริการลูกค้าของพวกเขาโดดเด่นมาก ปัญหาทุกอย่างที่เราพบได้รับการแก้ไขอย่างรวดเร็วและมืออาชีพ",
    author: {
      name: "เอมิกา รักษ์วงศ์",
      role: "ผู้อำนวยการฝ่ายการตลาด, โกลบอล แบรนด์ส",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ลูกค้าของเราพูดอย่างไร
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            อย่าเชื่อเพียงแค่คำพูดของเรา - ฟังจากลูกค้าที่พึงพอใจของเรา
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 relative"
            >
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <div className="mt-4">
                <p className="text-gray-700">{testimonial.content}</p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.author.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
