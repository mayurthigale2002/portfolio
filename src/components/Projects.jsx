const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          PROJECTS..!!
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-16"></div>

        {/* ================= CourseWala ================= */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-12 shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-2 transition-all duration-500">

          <h2 className="text-2xl font-bold text-yellow-500 mb-6">
            CourseWala's
          </h2>

          <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <li>
              CourseWala's is an online course platform designed to help students
              explore, enroll, and manage professional and technical courses.
            </li>
            <li>
              Features include course listing, user authentication, enrollment
              system, and responsive UI for better user experience.
            </li>
            <li>
              <span className="font-semibold text-yellow-400">
                Technology Used:
              </span>{" "}
              React, Tailwind CSS, Node.js, Express.js, MongoDB.
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/mayurthigale2002/Online-Learning-Platform"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://onlinelearning-kohl.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Live Project
            </a>
          </div>
        </div>

        {/* ================= CarHub ================= */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-2 transition-all duration-500">

          <h2 className="text-2xl font-bold text-yellow-500 mb-6">
            CarHub
          </h2>

          <ul className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <li>
              CarHub is a modern car listing platform where users can browse,
              search, and explore different cars with detailed specifications.
            </li>
            <li>
              Includes filtering system, responsive design, and smooth user
              interface for better browsing experience.
            </li>
            <li>
              <span className="font-semibold text-yellow-400">
                Technology Used:
              </span>{" "}
              React, Tailwind CSS, API Integration.
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/mayurthigale2002/Car-Dealership-Website"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://car-dealership-website-livid.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Live Project
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
