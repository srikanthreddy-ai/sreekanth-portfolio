import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';

export type Skill = {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'soft';
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  githubLink?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type Social = {
  name: string;
  url: string;
  icon: React.ComponentType;
};

export const portfolioData = {
  name: "Sreekanth Polireddy",
  title: "Lead Software Engineer || AI Specialist || Cloud Engineer",
  location: "Bangalore, India",
  email: "sirisrikanth94@gmail.com",
  summary: "Passionate lead software engineer with 8+ years of experience building scalable applications and leading high-performing engineering teams.",
  about: "I specialize in architecting and developing robust, scalable applications that solve complex business problems. With expertise in both frontend and backend technologies, I bridge the gap between user experience and system functionality. Throughout my career, I've led teams that delivered impactful solutions across various industries including travel, fintech, healthcare, and e-commerce.",
  
  skills: [
    { name: "JavaScript/TypeScript", level: 5, category: "frontend" },
    { name: "React.js", level: 5, category: "frontend" },
    { name: "Node.js", level: 4, category: "backend" },
    { name: "Python", level: 4, category: "backend" },
    { name: "AWS", level: 4, category: "devops" },
    { name: "GraphQL", level: 4, category: "backend" },
    { name: "Docker", level: 4, category: "devops" },
    { name: "CI/CD", level: 4, category: "devops" },
    { name: "System Design", level: 5, category: "tools" },
    { name: "Database Design", level: 4, category: "backend" },
    { name: "UI/UX Principles", level: 3, category: "frontend" },
    { name: "Team Leadership", level: 5, category: "soft" },
    { name: "Project Management", level: 4, category: "soft" },
    { name: "Vue.js", level: 3, category: "frontend" },
    { name: "Go", level: 3, category: "backend" },
    { name: "Kubernetes", level: 3, category: "devops" },
  ] as Skill[],
  
  projects: [
    {
      title: "Enterprise Payment Platform",
      description: "Led the development of a scalable payment processing platform handling $2M daily transactions with 99.99% uptime and complex compliance requirements.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://example.com/payment-platform",
      githubLink: "https://github.com/alexparker/payment-platform"
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Architected and implemented a real-time analytics dashboard for healthcare providers, processing patient data from multiple sources with stringent privacy controls.",
      technologies: ["TypeScript", "React", "D3.js", "Python", "MongoDB"],
      imageUrl: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://example.com/healthcare-analytics"
    },
    {
      title: "E-commerce Microservices Platform",
      description: "Redesigned a monolithic e-commerce system into a microservices architecture, improving performance by 40% and enabling the team to deploy 3x more frequently.",
      technologies: ["Node.js", "Docker", "Kubernetes", "Kafka", "PostgreSQL"],
      imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubLink: "https://github.com/alexparker/ecommerce-platform"
    },
    {
      title: "AI-Powered Content Recommendation Engine",
      description: "Built a content recommendation system using machine learning algorithms that increased user engagement by 27% and session duration by 35%.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "AWS"],
      imageUrl: "https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://example.com/recommendation-engine"
    },
  ] as Project[],
  
  experience: [
    {
      company: "Eligarf Technologies Pvt Ltd",
      role: "Lead Software Engineer",
      period: "2023 - Present",
      description: "Guided and developed serverless applications to integrate legacy systems across Belgium, the Netherlands, and the UK, delivering scalable and efficient travel solutions.",
      achievements: [
        "Redesigned the architecture of our flagship product, improving scalability and reducing AWS costs by 30%",
        "Implemented CI/CD pipelines that decreased deployment time from days to hours",
        "Mentored junior developers, with 4 being promoted to senior roles"
      ]
    },
    {
      company: "Gyro IT Solutions",
      role: "Lead Software Engineer",
      period: "2019 - 2023",
      description: "Developed healthcare applications focused on data analytics and patient management.",
      achievements: [
        "Led the development of a HIPAA-compliant patient data platform used by 20+ healthcare providers",
        "Optimized database queries, reducing load times by 60%",
        "Introduced TypeScript and testing practices, decreasing production bugs by 45%"
      ]
    },
    {
      company: "TopScore Sports",
      role: "Software Engineer",
      period: "2018 - 2019",
      description: "Built e-commerce solutions for small to medium businesses.",
      achievements: [
        "Developed a custom shopping cart system processing $500K in monthly transactions",
        "Created a responsive, mobile-first design that increased mobile conversions by 25%",
        "Implemented automated inventory management, saving clients 10+ hours weekly"
      ]
    }
  ] as Experience[],
  
  testimonials: [
    {
      quote: "It was an absolute pleasure working with Sreekanth, he was one among the very few who was quick to understand the existing system (a complex one) and started working on enhancements within a month time into the project. Sreekanth came with strong problem-solving skills and is a good team player, which helped him to move into the Lead role. He understood the needs of the business and worked closely to achieve set goals. Happy to recommend Sreekanth to anyone looking for a developer having good knowledge of Python, NodeJS and MongoDB.",
      author: "Ragahavendra Raghukumar",
      role: "Manager",
      company: "Nightnigales || Medwell Ventures Pvt Ltd"
    },
    {
      quote: "Sreekanth worked with me for a healthcare client for more than 18 months. This healthcare system was on a full stack technology including mobile apps. Sreekanth was a key player in mobilization, KT and up to stabilizing this environment. He is very hardworking with a zeal to learn and can be relied upon always.",
      author: "Chetan Bannur",
      role: "Manager",
      company: "GyroIT Solutions"
    },
    {
      quote: "Sreekanth and I worked together on several projects, and I was lucky to call him my coworker. He consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed assignments on time.   Sreekanth knows what’s important to our company and our customers. Not only that, but he’s always open about his progress and never fails to answer our questions when they come up. We continue to work with him for ongoing projects and recommend anyone else to do the same",
      author: "Nihal Jha",
      role: "Business Head",
      company: "Nightingales"
    }
  ] as Testimonial[],
  
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/srikanthreddy-ai",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sreekanth-reddy-ai/",
      icon: Linkedin
    },
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com/alexparker",
    //   icon: Twitter
    // },
    {
      name: "Email",
      url: "mailto:sirisrikanth94@gmail.com",
      icon: Mail
    }
  ] as Social[]
};