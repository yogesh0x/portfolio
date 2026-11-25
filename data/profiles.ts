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
      "Independent security research and responsible vulnerability disclosure across authorized bug bounty programs.",
    button: "View Intigriti Profile",
  },

  {
    name: "HackerOne",
    icon: SiHackerone,
    url: "https://hackerone.com/mr_yogii",
    subtitle: "Active • 2022 — Present",
    description:
      "Security research focused on discovering, validating, and responsibly reporting vulnerabilities in authorized programs.",
    button: "View HackerOne Profile",
  },

  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/yogesh0x",
    subtitle: "Security Projects & Open Source",
    description:
      "Security tools, automation projects, development experiments, and other open-source work.",
    button: "View GitHub",
  },

  {
    name: "Medium",
    icon: SiMedium,
    url: "https://medium.com/@mr_yogii",
    subtitle: "Security Research & Write-ups",
    description:
      "Technical articles and practical notes from bug bounty hunting, security research, and penetration testing.",
    button: "Read Articles",
  },
];
