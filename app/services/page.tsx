import Link from "next/link";

import {
  FiGlobe,
  FiServer,
  FiSearch,
  FiShield,
  FiFileText,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";


const services = [
  {
    title: "Web Application Security Testing",
    description:
      "Security assessment of web applications focused on identifying and validating vulnerabilities, insecure configurations, access control weaknesses, and business logic issues.",
    icon: FiGlobe,
  },

  {
    title: "API Security Testing",
    description:
      "Security testing of REST APIs focused on authentication, authorization, object-level access control, input validation, and business logic vulnerabilities.",
    icon: FiServer,
  },

  {
    title: "Vulnerability Assessment",
    description:
      "Structured identification, analysis, and validation of security weaknesses to understand technical risk and support remediation priorities.",
    icon: FiSearch,
  },

  {
    title: "Penetration Testing",
    description:
      "Controlled manual and tool-assisted security testing focused on identifying, validating, and demonstrating exploitable vulnerabilities.",
    icon: FiShield,
  },
];


const process = [
  {
    number: "01",
    title: "Scoping",
    description:
      "Define the application, testing boundaries, objectives, timeline, and rules of engagement.",
  },

  {
    number: "02",
    title: "Assessment",
    description:
      "Perform structured manual and tool-assisted security testing across the agreed assessment scope.",
  },

  {
    number: "03",
    title: "Validation",
    description:
      "Validate identified vulnerabilities, eliminate false positives, and assess realistic security impact.",
  },

  {
    number: "04",
    title: "Reporting",
    description:
      "Provide clear technical findings, supporting evidence, severity assessment, and remediation recommendations.",
  },
];


const deliverables = [
  "Executive summary",
  "Detailed technical findings",
  "Technical impact and supporting evidence",
  "Reproduction steps",
  "Risk-based severity classification",
  "Remediation recommendations",
  "Proof-of-concept details where applicable",
  "Retesting of agreed fixes",
];


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          mx-auto
          max-w-6xl
          px-6
          pb-12
          pt-14
          text-center
        "
      >

        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-cyan-400
          "
        >
          Security Services
        </p>


        <h1
          className="
            mx-auto
            mt-4
            max-w-3xl
            text-4xl
            font-bold
            tracking-tight
            md:text-5xl
          "
        >
          Web & API Security Testing
        </h1>


        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            leading-8
            text-zinc-400
          "
        >
          Practical security assessments focused on identifying,
          validating, and clearly reporting real-world vulnerabilities
          in web applications and APIs.
        </p>


        <Link
          href="/#contact"
          className="
            mt-7
            inline-flex
            items-center
            gap-2
            rounded-lg
            bg-cyan-400
            px-5
            py-2.5
            text-sm
            font-semibold
            text-black
            transition-all
            duration-300
            hover:bg-cyan-300
          "
        >
          Discuss an Assessment

          <FiArrowRight size={15} />
        </Link>

      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        className="
          mx-auto
          max-w-6xl
          px-6
          py-12
        "
      >

        {/* Heading */}

        <div className="mb-10 text-center">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-cyan-400
            "
          >
            Expertise
          </p>


          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Security Assessment Services
          </h2>


          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              leading-7
              text-zinc-400
            "
          >
            Focused security services for identifying, validating,
            and clearly communicating security weaknesses.
          </p>

        </div>


        {/* Service Cards */}

        <div className="grid gap-5 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950/30
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-500/40
                  hover:bg-zinc-950/60
                  md:p-7
                "
              >

                {/* Icon */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-zinc-800
                    bg-black/40
                    text-cyan-400
                    transition-all
                    duration-300
                    group-hover:border-cyan-500/30
                    group-hover:bg-cyan-950/20
                  "
                >
                  <Icon size={21} />
                </div>


                {/* Title */}

                <h3 className="mt-5 text-xl font-semibold text-zinc-100">
                  {service.title}
                </h3>


                {/* Description */}

                <p className="mt-3 leading-7 text-zinc-400">
                  {service.description}
                </p>

              </article>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          TESTING PROCESS
      ====================================================== */}

      <section
        className="
          mx-auto
          max-w-6xl
          px-6
          py-14
        "
      >

        {/* Heading */}

        <div className="mb-10 text-center">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-cyan-400
            "
          >
            Methodology
          </p>


          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Testing Process
          </h2>


          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              leading-7
              text-zinc-400
            "
          >
            A structured security assessment process from initial scoping
            through vulnerability validation and final reporting.
          </p>

        </div>


        {/* Process Steps */}

        <div
          className="
            grid
            gap-4
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {process.map((step) => (
            <article
              key={step.number}
              className="
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950/20
                p-5
                transition-all
                duration-300
                hover:border-zinc-700
                hover:bg-zinc-950/40
              "
            >

              <span
                className="
                  text-xs
                  font-bold
                  tracking-wider
                  text-cyan-400
                "
              >
                {step.number}
              </span>


              <h3 className="mt-3 text-lg font-semibold text-zinc-100">
                {step.title}
              </h3>


              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {step.description}
              </p>

            </article>
          ))}

        </div>

      </section>


      {/* =====================================================
          DELIVERABLES
      ====================================================== */}

      <section
        className="
          mx-auto
          max-w-6xl
          px-6
          py-12
        "
      >

        <div
          className="
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-950/30
            p-6
            md:p-8
          "
        >

          {/* Header */}

          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-zinc-800
                bg-black/30
                text-cyan-400
              "
            >
              <FiFileText size={21} />
            </div>


            <div>

              <h2 className="text-2xl font-bold">
                Deliverables
              </h2>


              <p className="mt-1.5 text-sm text-zinc-400">
                Clear documentation to understand risk and support remediation.
              </p>

            </div>

          </div>


          {/* Deliverable Items */}

          <div
            className="
              mt-7
              grid
              gap-x-12
              gap-y-4
              md:grid-cols-2
            "
          >

            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >

                <FiCheckCircle
                  size={17}
                  className="
                    mt-0.5
                    shrink-0
                    text-cyan-400
                  "
                />


                <span className="text-sm text-zinc-300">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section
        className="
          mx-auto
          max-w-6xl
          px-6
          pb-20
          pt-10
        "
      >

        <div
          className="
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-950/20
            px-6
            py-9
            text-center
            md:px-10
          "
        >

          <h2 className="text-2xl font-bold md:text-3xl">
            Need a Security Assessment?
          </h2>


          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              leading-7
              text-zinc-400
            "
          >
            Get in touch to discuss the application, assessment scope,
            objectives, and testing requirements.
          </p>


          <Link
            href="/#contact"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-cyan-400
              px-5
              py-2.5
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              hover:bg-cyan-300
            "
          >
            Get in Touch

            <FiArrowRight size={16} />
          </Link>

        </div>

      </section>

    </main>
  );
}