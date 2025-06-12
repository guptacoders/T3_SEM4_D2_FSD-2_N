import React, { useState } from 'react'
import axios from 'axios'

const AX3 = () => {
  const [projects, setProjects] = useState([])

  function fetchPost() {
    axios.get('/Projects.json')
      .then((response) => { setProjects(response.data) })
      .catch((error) => { console.log(error) })
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Project List</h1>

      <div className="flex justify-center mb-8">
        <button
          onClick={fetchPost}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold shadow-lg"
        >
          Click To Show
        </button>
      </div>

      <ul className="space-y-6">
        {projects.map((project, index) => (
          <li
            key={index}
            className="p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AX3
