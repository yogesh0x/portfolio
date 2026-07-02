import {
  SiGithub,
  SiHackerone,
  SiIntigriti,
  SiMedium,
} from "react-icons/si";

export const profiles = [
  {
    name: "Intigriti",
    icon: SiIntigriti,
    url: "https://app.intigriti.com/profile/mr_yogii",
    subtitle: "Active • 2021 — Present",
    description:
      "Reporting security vulnerabilities through responsible disclosure programs focused on web and API security.",
    button: "View Intigriti Profile",
  },
  {
    name: "HackerOne",
    icon: SiHackerone,
    url: "https://hackerone.com/mr_yogii",
    subtitle: "Active • 2022 — Present",
    description:
      "Participating in public and private bug bounty programs with a focus on impactful vulnerability research.",
    button: "View HackerOne Profile",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/yogesh0x",
    subtitle: "Security Projects & Open Source",
    description:
      "Open-source security tools, automation projects, and development experiments.",
    button: "View GitHub",
  },

  {
    name: "Medium",
    icon: SiMedium,
    url: "https://medium.com/@mr-yogii",
    subtitle: "Security Research & Write-ups",
    description:
      "Technical write-ups on bug bounty, penetration testing, API security, and offensive security.",
    button: "Read Articles",
  },
];