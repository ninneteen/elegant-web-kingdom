
import { CheckCircle, Code, Layout, TrendingUp, Users, Zap } from "lucide-react";

const features = [
  {
    name: "Fast & Reliable",
    description: "Our solutions are built for speed and reliability, ensuring your business never misses a beat.",
    icon: Zap,
  },
  {
    name: "Modern Technologies",
    description: "We use cutting-edge technologies to deliver modern, scalable solutions for your business needs.",
    icon: Code,
  },
  {
    name: "Beautiful Design",
    description: "Stunning user interfaces that not only look good but also enhance the user experience.",
    icon: Layout,
  },
  {
    name: "Data-Driven",
    description: "Make informed decisions with comprehensive analytics and reporting tools.",
    icon: TrendingUp,
  },
  {
    name: "Team Collaboration",
    description: "Tools designed to improve team productivity and collaboration across your organization.",
    icon: Users,
  },
  {
    name: "24/7 Support",
    description: "Round-the-clock support to ensure your business operations run smoothly at all times.",
    icon: CheckCircle,
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive suite of services and features designed to help your business grow and thrive.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={feature.name} className="pt-6 h-full">
                <div className="h-full flow-root bg-gray-50 rounded-lg px-6 pb-8 transform transition duration-500 hover:scale-105 hover:shadow-lg">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary to-secondary rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
