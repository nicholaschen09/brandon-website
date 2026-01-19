import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12 lg:px-24 max-w-3xl mx-auto">
      {/* Navigation */}
      <nav className="flex gap-6 mb-16 text-sm">
        <Link href="/" className="font-medium text-gray-900">Home</Link>
        <Link href="#experience" className="text-gray-500 hover:text-gray-900">Experience</Link>
        <Link href="#projects" className="text-gray-500 hover:text-gray-900">Projects</Link>
      </nav>

      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
          Brandon Wu
        </h1>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
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

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I&apos;m passionate about leveraging technology to solve real-world problems. 
          Whether it&apos;s building data pipelines, testing LiDAR systems, or creating 
          full-stack applications, I love diving into complex challenges and learning 
          along the way.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
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
      <section id="experience" className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Experience</h2>
        
        <div className="space-y-6">
          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900">Full Stack Developer</h3>
            <p className="text-gray-500 text-sm">Loblaw Companies Limited · Sep 2025 - Dec 2025</p>
          </div>
          
          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900">Lidar Test Engineer</h3>
            <p className="text-gray-500 text-sm">Lumotive · Feb 2025 - Apr 2025</p>
          </div>
          
          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-medium text-gray-900">Student Researcher</h3>
            <p className="text-gray-500 text-sm">Science World · Sep 2022 - Apr 2024</p>
            <p className="text-gray-600 text-sm mt-1">
              Published research on aerobic efficiency in the Science World eSTEAMED Journal
            </p>
          </div>
        </div>
      </section>

      {/* Say Hi Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Say Hi!</h2>
        
        <ul className="space-y-3">
          <li>
            <span className="text-gray-400 mr-2">•</span>
            <Link 
              href="https://github.com/brandonwu" 
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              GitHub
            </Link>
          </li>
          <li>
            <span className="text-gray-400 mr-2">•</span>
            <Link 
              href="https://www.linkedin.com/in/brandon-wu/" 
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <span className="text-gray-400 mr-2">•</span>
            <Link 
              href="mailto:brandon@example.com"
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
