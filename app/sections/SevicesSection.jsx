import ServicesCard from '../components/ServicesCard';
import { services } from '../utils/dataBase';

function SevicesSection() {
  return (
    <section
      className="max-w-6xl mx-auto md:my-[6rem]"
      id="services"
    >
      <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
        Services
      </h2>

      <div className="mb-4 lg:mb-8 mx-auto max-w-[36rem] text-black/60 space-y-4">
        <p>
          Are you looking for engaging AI-generated images, animated videos,
          creative visual content, or AI-powered workflows for your next project?
        </p>

        <p>
          I help bring creative ideas to life using AI tools, animation
          techniques, and technology-driven workflows. My focus is on creating
          visually appealing content that captures attention, communicates
          ideas effectively, and meets the needs of each project.
        </p>

        <p>
          🚀 <strong>What I Can Help You With</strong>
        </p>

        <p>
          🎬 <strong>AI Video Creation &amp; Animation</strong>
          <br />
          • AI-generated animated videos and music videos
          <br />
          • Children's and toddler-friendly animated content
          <br />
          • AI-assisted storytelling and visual sequences
          <br />
          • Short-form videos for YouTube and social media
          <br />
          • Creative video concepts and scene development
        </p>

        <p>
          🎨 <strong>AI Image Generation &amp; Visual Design</strong>
          <br />
          • AI-generated images and illustrations
          <br />
          • Character concepts and visual assets
          <br />
          • Creative backgrounds, scenes, and compositions
          <br />
          • Consistent visual styles for video projects
        </p>

        <p>
          ✨ <strong>AI Animation, VFX &amp; 3D Visuals</strong>
          <br />
          • AI-assisted animation and visual effects workflows
          <br />
          • Animated scenes and visual enhancements
          <br />
          • 3D modelling and AI-assisted 3D workflows, tailored to project requirements
        </p>

        <p>
          📊 <strong>Video Metadata &amp; YouTube Optimisation</strong>
          <br />
          • Video titles, descriptions, and relevant keywords
          <br />
          • Metadata organisation and content optimisation
          <br />
          • YouTube content packaging and discoverability support
        </p>

        <p>
          💻 <strong>AI-Assisted Programming &amp; Automation</strong>
          <br />
          • Using AI tools to assist with coding and scripting
          <br />
          • Developing and refining small programs and workflows
          <br />
          • Troubleshooting, code improvement, and task automation, depending on project requirements
        </p>

        <p>
          🎵 <strong>Real-World Creative Experience</strong>
        </p>

        <p>
          I run a YouTube channel featuring AI-animated music videos for
          toddlers. My channel has grown to approximately 1,200 subscribers,
          with one video reaching around 17,000 views and several others
          achieving between 5,000 and 11,000 views.

          
        </p>

        <p>
          This experience has helped me develop practical knowledge of
          AI-assisted content creation, animated video production,
          audience-focused creative work, and the process of publishing and
          presenting videos for an online audience.
        </p>

        <p>
          💼 <strong>A Professional Approach to Every Project</strong>
        </p>

        <p>
          Alongside my creative and technology-focused work, I hold an MSc in
          Textile Technology and bring many years of professional industry
          experience, including managerial responsibilities and decision-making.
        </p>

        <p>
          My professional background has strengthened my ability to understand
          requirements, solve problems, manage priorities, maintain quality
          standards, and approach projects with a structured, results-oriented
          mindset.
        </p>

        <p>
          I combine creativity with a practical approach to deliver work that
          aligns with your brief, objectives, and expectations.
        </p>

        <p>
          🤝 <strong>Let's Work Together</strong>
        </p>

        <p>
          Whether you need AI-generated visuals, animated music videos,
          creative content for YouTube, video metadata, 3D-related work, or
          AI-assisted programming support, I am ready to discuss your
          requirements and explore how I can help.
        </p>

        <p>
          Send me a message about your project, your goals, and the style you
          have in mind. Let's turn your ideas into engaging visual content.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            imgSrc={service.imgSrc}
            altText={service.altText}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default SevicesSection;



// import ServicesCard from '../components/ServicesCard';
// import { services } from '../utils/dataBase';
// import Image from 'next/image';



// function SevicesSection() {
//   return (
//     <section className="max-w-6xl mx-auto md:my-[6rem]" id="services">
//       <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
//         Services
//       </h2>
//       <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
//         {' '}
        
// <p>Are you looking for engaging AI-generated images, animated videos, creative visual content, or AI-powered workflows for your next project?</p>

// <p>I help bring creative ideas to life using AI tools, animation techniques, and technology-driven workflows. My focus is on creating visually appealing content that captures attention, communicates ideas effectively, and meets the needs of each project.</p>

// <p>🚀 <strong>What I Can Help You With</strong></p>

// <p>🎬 <strong>AI Video Creation &amp; Animation</strong><br>
// • AI-generated animated videos and music videos<br>
// • Children's and toddler-friendly animated content<br>
// • AI-assisted storytelling and visual sequences<br>
// • Short-form videos for YouTube and social media<br>
// • Creative video concepts and scene development</p>

// <p>🎨 <strong>AI Image Generation &amp; Visual Design</strong><br>
// • AI-generated images and illustrations<br>
// • Character concepts and visual assets<br>
// • Creative backgrounds, scenes, and compositions<br>
// • Consistent visual styles for video projects</p>

// <p>✨ <strong>AI Animation, VFX &amp; 3D Visuals</strong><br>
// • AI-assisted animation and visual effects workflows<br>
// • Animated scenes and visual enhancements<br>
// • 3D modelling and AI-assisted 3D workflows, tailored to project requirements</p>

// <p>📊 <strong>Video Metadata &amp; YouTube Optimisation</strong><br>
// • Video titles, descriptions, and relevant keywords<br>
// • Metadata organisation and content optimisation<br>
// • YouTube content packaging and discoverability support</p>

// <p>💻 <strong>AI-Assisted Programming &amp; Automation</strong><br>
// • Using AI tools to assist with coding and scripting<br>
// • Developing and refining small programs and workflows<br>
// • Troubleshooting, code improvement, and task automation, depending on project requirements</p>

// <p>🎵 <strong>Real-World Creative Experience</strong></p>

// <p>I run a YouTube channel featuring AI-animated music videos for toddlers. My channel has grown to approximately 1,200 subscribers, with one video reaching around 19,000 views and several others achieving between 5,000 and 12,000 views.</p>

// <p>This experience has helped me develop practical knowledge of AI-assisted content creation, animated video production, audience-focused creative work, and the process of publishing and presenting videos for an online audience.</p>

// <p>💼 <strong>A Professional Approach to Every Project</strong></p>

// <p>Alongside my creative and technology-focused work, I hold an MSc in Textile Technology and bring many years of professional industry experience, including managerial responsibilities and decision-making.</p>

// <p>My professional background has strengthened my ability to understand requirements, solve problems, manage priorities, maintain quality standards, and approach projects with a structured, results-oriented mindset.</p>

// <p>I combine creativity with a practical approach to deliver work that aligns with your brief, objectives, and expectations.</p>

// <p>🤝 <strong>Let's Work Together</strong></p>

// <p>Whether you need AI-generated visuals, animated music videos, creative content for YouTube, video metadata, 3D-related work, or AI-assisted programming support, I am ready to discuss your requirements and explore how I can help.</p>

// <p>Send me a message about your project, your goals, and the style you have in mind. Let's turn your ideas into engaging visual content.</p>

//       </p>

//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//         {services.map((service, index) => (
//           <ServicesCard
//             key={index}
//             imgSrc={service.imgSrc}
//             altText={service.altText}
//             title={service.title}
//             description={service.description}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default SevicesSection;
