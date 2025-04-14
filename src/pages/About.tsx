
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "ก่อตั้ง", value: "2018" },
  { label: "พนักงาน", value: "120+" },
  { label: "ลูกค้า", value: "500+" },
  { label: "ประเทศ", value: "12" },
];

const values = [
  {
    name: "นวัตกรรม",
    description: "เราผลักดันขอบเขตอย่างต่อเนื่องเพื่อสร้างโซลูชันล้ำสมัยที่ช่วยให้ลูกค้าของเราอยู่เหนือคู่แข่ง",
  },
  {
    name: "ความเป็นเลิศ",
    description: "เรามุ่งมั่นที่จะส่งมอบคุณภาพที่โดดเด่นในทุกสิ่งที่เราทำ ตั้งแต่การพัฒนาผลิตภัณฑ์ไปจนถึงการบริการลูกค้า",
  },
  {
    name: "ความซื่อสัตย์",
    description: "เราดำเนินงานด้วยความโปร่งใสและซื่อสัตย์ สร้างความไว้วางใจกับลูกค้า พันธมิตร และสมาชิกในทีม",
  },
  {
    name: "ความร่วมมือ",
    description: "เราเชื่อในพลังของการทำงานเป็นทีม ทั้งภายในบริษัทของเราและในการเป็นพันธมิตรกับลูกค้าของเรา",
  },
];

const team = [
  {
    name: "สมชาย สุขสันต์",
    role: "ซีอีโอ & ผู้ก่อตั้ง",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "ลิสา เฉิน",
    role: "ซีทีโอ",
    image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "รุ่งโรจน์ จรัสแสง",
    role: "หัวหน้าฝ่ายออกแบบ",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "มาเรีย การ์เซีย",
    role: "หัวหน้าฝ่ายการตลาด",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">เกี่ยวกับเรา</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              ภารกิจของเราคือการเสริมพลังให้ธุรกิจ
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              เราสร้างโซลูชันนวัตกรรมที่ช่วยให้ธุรกิจเติบโตในยุคดิจิทัล
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                เรื่องราวของเรา
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                ก่อตั้งในปี 2018 บริษัทของเราเริ่มต้นด้วยวิสัยทัศน์ที่เรียบง่าย: ช่วยให้ธุรกิจนำทางในภูมิทัศน์ดิจิทัลที่ซับซ้อน
                สิ่งที่เริ่มต้นจากทีมนักนวัตกรรมที่มีใจรักเล็กๆ ได้เติบโตเป็นบริษัทระดับโลกที่ให้บริการลูกค้าในหลากหลายอุตสาหกรรม
              </p>
              <p className="mt-4 text-lg text-gray-500">
                การเดินทางของเราเต็มไปด้วยการเติบโตอย่างต่อเนื่องและการปรับตัวให้เข้ากับเทคโนโลยีที่เกิดขึ้นใหม่และแนวโน้มของตลาด
                ด้วยความทุ่มเท ความเชี่ยวชาญ และความมุ่งมั่นสู่ความเป็นเลิศ เราได้สร้างตัวเองให้เป็นพันธมิตรที่น่าเชื่อถือสำหรับธุรกิจทั่วโลก
              </p>
              <p className="mt-4 text-lg text-gray-500">
                ในวันนี้ เรายังคงขยายขอบเขต รับมือกับความท้าทายใหม่ๆ และพัฒนาโซลูชันล้ำสมัยที่ขับเคลื่อนความสำเร็จของลูกค้าของเรา
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="การประชุมทีม"
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="พื้นที่สำนักงาน"
                    className="object-cover object-center"
                  />
                </div>
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="การทำงานร่วมกันของทีม"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 sm:pt-24 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              สถิติบริษัท
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              การเติบโตของเราตลอดหลายปีที่ผ่านมาสะท้อนถึงความมุ่งมั่นสู่ความเป็นเลิศ
            </p>
          </div>
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                  <dd className="text-3xl font-extrabold text-primary tracking-tight">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">ค่านิยมของเรา</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              สิ่งที่เรายืนหยัด
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              ค่านิยมหลักของเราเป็นแนวทางในทุกสิ่งที่เราทำ ตั้งแต่วิธีที่เราพัฒนาผลิตภัณฑ์ไปจนถึงวิธีที่เราปฏิสัมพันธ์กับลูกค้าและสมาชิกในทีม
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {values.map((value) => (
                <div key={value.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-primary to-secondary text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{value.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              ทีมผู้นำของเรา
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              พบกับผู้คนที่นำพาบริษัทของเราไปสู่ความสำเร็จ
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
            {team.map((person) => (
              <div key={person.name} className="text-center">
                <div className="space-y-4">
                  <img className="mx-auto h-40 w-40 rounded-full object-cover" src={person.image} alt={person.name} />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-gray-900">{person.name}</h3>
                      <p className="text-primary">{person.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-primary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              ร่วมงานกับเรา
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-white opacity-90">
              เรามองหาบุคลากรที่มีความสามารถเสมอเพื่อเข้าร่วมทีมของเรา
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact">
                <Button variant="secondary" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-white text-primary hover:bg-gray-100">
                  ติดต่อเรา
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
