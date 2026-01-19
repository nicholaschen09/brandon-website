import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen px-6 pt-24 pb-12 md:px-12 lg:px-24 max-w-3xl mx-auto">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">
          Brandon Wu
        </h1>
        
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          I&apos;m a{' '}
          <Link 
            href="https://uwaterloo.ca/systems-design-engineering/" 
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            Systems Design Engineering
          </Link>{' '}
          student at the <strong>University of Waterloo</strong>, interested in full-stack development, 
          data analysis, and building things that make an impact.
        </p>

        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          I&apos;m passionate about leveraging technology to solve real-world problems. 
          Whether it&apos;s building data pipelines, testing LiDAR systems, or creating 
          full-stack applications, I love diving into complex challenges and learning 
          along the way.
        </p>

        <p className="text-sm text-gray-700 leading-relaxed">
          Previously, I was at{' '}
          <Link 
            href="https://www.loblaw.ca/" 
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            Loblaw Companies Limited
          </Link>{' '}
          as a Full Stack Developer Intern, building solutions that help power one 
          of Canada&apos;s largest retailers.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Experience</h2>
        
        <div className="space-y-4">
          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900 text-sm">Full Stack Developer</h3>
            <p className="text-gray-500 text-xs">Loblaw Companies Limited · Sep 2025 - Dec 2025</p>
          </div>
          
          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900 text-sm">Lidar Test Engineer</h3>
            <p className="text-gray-500 text-xs">Lumotive · Feb 2025 - Apr 2025</p>
          </div>
          
          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900 text-sm">Student Researcher</h3>
            <p className="text-gray-500 text-xs">Science World · Sep 2022 - Apr 2024</p>
            <p className="text-gray-600 text-xs mt-1">
              Published research on aerobic efficiency in the Science World eSTEAMED Journal
            </p>
          </div>
        </div>
      </section>

      {/* Say Hi Section */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Say Hi!</h2>
        
        <ul className="space-y-2 text-sm">
          <li>
            <span className="text-gray-400 mr-2">•</span>
            <Link 
              href="https://github.com/blfwu" 
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              GitHub
            </Link>
          </li>
          <li>
            <span className="text-gray-400 mr-2">•</span>
            <Link 
              href="https://www.linkedin.com/in/blfwu/" 
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <span className="text-gray-400 mr-2">•</span>
            <Link 
              href="mailto:b96wu@uwaterloo.ca"
              className="text-blue-600 hover:text-blue-800"
            >
              Email
            </Link>
          </li>
        </ul>
      </section>

    </main>
  )
}
