type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      skype: {
        span: string;
        placeholder: string;
      };
      discord: {
        span: string;
        placeholder: string;
      };
      telegram: {
        span: string;
        placeholder: string;
      };
      
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: " \"The world is in my two hands and on the keyboard.\"",
    fullName: "Julian Carol",
    email: "juliancarol711@gmail.com",
  },
  hero: {
    name: "Julian Carol",
    p: ["6+years experience of Blockchain Expert", "8+ years experience of Web Developer", "3 years experience of AI Developer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      skype: {
        span: "Skype",
        placeholder: "live:.cid.674bcfb2e704887",
      },
      discord: {
        span: "Discord",
        placeholder: "live:.cid.674bcfb2e704887",
      },
      telegram: {
        span: "Telegram",
        placeholder: "@devcat12",
      }
      
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `A Full Stack web developer with 8 years of experience and participation in numerous projects with expertise in Blockchain & Web Development. 
      I'm a skilled software developer with experience in language such as Typescript, JavaScript, 
      Python, PHP and expertise in frameworks like Blockchain, Next, Node.js, Shopify, WordPress and
      Three.js. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
