const services = [
  {
    title: "Web Application Security",
    description:
      "Security testing for modern web applications to identify and validate vulnerabilities.",
  },
  {
    title: "API Security Assessment",
    description:
      "Assessment of REST APIs for authentication, authorization, input validation, and business logic issues.",
  },
  {
    title: "Vulnerability Verification",
    description:
      "Independent verification and validation of reported security vulnerabilities.",
  },
  {
    title: "Security Consultation",
    description:
      "Guidance on secure development practices and responsible vulnerability disclosure.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Services</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-400"
            >
              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}