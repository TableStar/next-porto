import React from "react";

const About = () => {
  const onButtonClick = () => {
    const pdfUrl = "/CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-text-muted">
          <span className="text-accent">$</span> ls about/
        </div>
        <h2 className="text-3xl font-semibold mb-8">
          About <span className="text-accent">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-border p-6 hover:border-blue transition-colors">
            <div className="text-accent mb-2">// Education</div>
            <div className="text-sm">
              I hold a degree in Medical Education and am an alumnus of
              Purwadhika Digital Technology School's Web Development Bootcamp.
            </div>
          </div>
          <div className="border border-border p-6 hover:border-blue transition-colors">
            <div className="text-accent mb-2">// Problem-solving</div>
            <div className="text-sm">
              I approach challenges with a logical and systemic mindset.
            </div>
          </div>
          <div className="border border-border p-6 hover:border-blue transition-colors">
            <div className="text-accent mb-2">// Experience</div>
            <div className="text-sm">
              I have a diverse portfolio of projects.
            </div>
          </div>
          <div className="border border-border p-6 hover:border-blue transition-colors">
            <div className="text-accent mb-2">// Technical Skill</div>
            <div className="text-sm">
              As a Fullstack Web Developer, I specialize in React JS and
              Tailwind CSS. My expertise extends to backend technologies,
              including Express JS for server-side development, SQL databases
              for efficient data management, TypeScript for enhanced code
              quality, and Golang for high-performance applications.
            </div>
          </div>
        </div>
        <button
          onClick={onButtonClick}
          className="mt-8 px-6 py-3 bg-accent hover:bg-accent-hover text-bg font-medium rounded transition-colors"
        >
          Download My Resume
        </button>
      </div>
    </section>
  );
};

export default About;
