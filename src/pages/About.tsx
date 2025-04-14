
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Founded", value: "2018" },
  { label: "Employees", value: "120+" },
  { label: "Clients", value: "500+" },
  { label: "Countries", value: "12" },
];

const values = [
  {
    name: "Innovation",
    description: "We constantly push the boundaries to create cutting-edge solutions that keep our clients ahead of the curve.",
  },
  {
    name: "Excellence",
    description: "We are committed to delivering exceptional quality in everything we do, from product development to customer service.",
  },
  {
    name: "Integrity",
    description: "We operate with transparency and honesty, building trust with our clients, partners, and team members.",
  },
  {
    name: "Collaboration",
    description: "We believe in the power of teamwork, both within our company and in partnership with our clients.",
  },
];

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lisa Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Robert Johnson",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Maria Garcia",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">About Us</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our mission is to empower businesses
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We create innovative solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Founded in 2018, our company began with a simple vision: to help businesses navigate the complex digital landscape. 
                What started as a small team of passionate innovators has grown into a global company serving clients across various industries.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Our journey has been marked by continuous growth and adaptation to emerging technologies and market trends. 
                Through dedication, expertise, and a commitment to excellence, we have established ourselves as a trusted partner for businesses worldwide.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Today, we continue to expand our horizons, embrace new challenges, and develop cutting-edge solutions that drive our clients' success.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Team meeting"
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Office space"
                    className="object-cover object-center"
                  />
                </div>
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Team collaboration"
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
              Company Statistics
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our growth over the years reflects our commitment to excellence.
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
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What we stand for
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our core values guide everything we do, from how we develop products to how we interact with our clients and team members.
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
              Our Leadership Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Meet the people who lead our company to success.
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
              Join Our Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-white opacity-90">
              We're always looking for talented individuals to join our team.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact">
                <Button variant="secondary" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-white text-primary hover:bg-gray-100">
                  Contact Us
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
