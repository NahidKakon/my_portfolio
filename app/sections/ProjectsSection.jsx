import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/dataBase';
import Link from 'next/link';



function ProjectsSection() {
  return (
    <section
      id="projects"
      className="my-[3rem] max-w-6xl mx-auto md:my-[6rem]"
    >
      <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
        My Projects
      </h2>
      
      <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
        {' '}
        <b>Explore my personal projects, showcasing my expertise in AI compatibility, design and development.</b>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
       
        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
         <Link
         href="https://nahidkakon.github.io/ai-performance-wear/" className="button"> AI Product & Video Campaign
         
         </Link>
        </Button>

        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
         <Link
         href="https://nahidkakon.github.io/Videomarquee/" className="button"> AI Realistic Social Media Lipsync Video
         
         </Link>
        </Button>
        
        
        <Button className="text-black bg-orange-400
        bg-orange-4500 border margin-top: 10px hover:bg-orange-600 hover:border-orange-400">
         <Link
          href="https://youtu.be/l2DYDWuoMjw" className="button"> AI Lipsync video for Kids</Link>
        </Button>

        <Button className="text-black bg-orange-400
        bg-orange-4500 border margin-top: 10px hover:bg-orange-600 hover:border-orange-400">
         <Link
          href="https://youtu.be/ojzsB7S3-Jw" className="button"> AI & VFX Animation</Link>
        </Button>
       
    
        <Button className="text-black bg-orange-400
        bg-orange-4500 border margin-top: 10px hover:bg-orange-600 hover:border-orange-400">
         <Link
          href="https://youtube.com/live/ycPmknKjX_c?feature=share" className="button"> AI Animated music video for toddlers</Link>
        </Button>

                <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
        
      <Link
       href="https://test1-ten-wheat.vercel.app/" className="button">Nature blog
    
        </Link>
        </Button>

      <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
        <Link
         href="https://tic-tac-toe-game-nu-khaki.vercel.app/" className="button"> Tic-Tac-Toe- game
         </Link>
        </Button>
{/*         <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
         <Link
         href="https://expense-tracker-three-nu-60.vercel.app/" className="button"> Expence Tracker (under Construction)
         
         </Link>
        </Button> */}

          <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
         <Link
         href="https://stylized-rosy.vercel.app/" className="button"> AI Stylized 3D environment portfolio
         
         </Link>
        </Button>

        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
         <Link
         href="https://www.youtube.com/channel/UCM70vCUQPvM17Q_8f0I-I8Q/" className="button"> Youtube channel
         
         </Link>
        </Button>

          <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
         <Link
         href="https://nahidkakon.github.io/type-to-speak/" className="button"> Type to speak app with language and voice selection
         
         </Link>
        </Button>

        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
         <Link
         href="https://nahidkakon.github.io/Speak-App/" className="button"> Type to speak app for Bengali speakers
         
         </Link>
        </Button>



      </div>    
       <br/>    
{/*   <br/>    <br/>    <br/>    <br/>    <br/>  */}
      
      <div className="flex justify-center"> 
        
        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
        <Link
          href="https://dataentry-esg.vercel.app/" className="button">ESG data entry forms
         </Link>
        </Button>        
        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
         <Link
         href="https://story1.vercel.app/" className="button"> Kids story book with AI image
         </Link>
        </Button>
        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
        <Link
         href="https://calculator-ru88.vercel.app/" className="button"> Calculator
         </Link>
        </Button>
        <Button className="text-black bg-orange-400
        bg-orange-4500 border hover:bg-orange-600 hover:border-orange-400">
         <Link
         href="https://nahid-six.vercel.app/" className="button"> Animation
         
         </Link>
        </Button>

         </div>
      {/* <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            altText={project.altText}
            title={project.title} */}
          {/* />
        ))}
      </div> */}
    </section>
  );
}

export default ProjectsSection;
