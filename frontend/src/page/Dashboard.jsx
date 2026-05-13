import { useState } from "react";

import API from "../services/api";

const Dashboard = () => {

  const [file, setFile] = useState(null);

  const [jobDescription, setJobDescription] = useState("");

  const [analysis, setAnalysis] = useState(null);

  const [loading, setLoading] = useState(false);



  const handleUpload = async () => {

    if (!file) {
      return alert("Please select PDF");
    }

    if (!jobDescription) {
      return alert("Please enter job description");
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("resume", file);

      formData.append(
        "jobDescription",
        jobDescription
      );


      const res = await API.post(
        "/resume/upload",
        formData
      );

      alert(res.data.message);

      setAnalysis(res.data.resume);

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message
      );

    } finally {

      setLoading(false);

    }

  };


  return (

  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white px-6 pt-36 pb-10">

    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      

      <div className="text-center mb-16 relative z-10">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          ATS Resume Analyzer
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Upload your resume and analyze it with AI
        </p>

      </div>



      {/* Upload Section */}

      <div className="backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl p-10 rounded-3xl max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-6 text-white">
          Upload Resume
        </h2>


        {/* Job Description */}

        <textarea
          placeholder="Paste Job Description Here..."
          className="w-full bg-black/30 border border-gray-700 text-white placeholder-gray-400 p-5 rounded-2xl mb-6 h-44 outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
          onChange={(e) =>
            setJobDescription(e.target.value)
          }
        />



        {/* File Upload */}

        <div className="mb-6">

          <input
            type="file"
            accept=".pdf"
            className="w-full text-sm text-gray-300
            file:mr-4 file:py-3 file:px-6
            file:rounded-xl file:border-0
            file:text-sm file:font-semibold
            file:bg-cyan-500 file:text-white
            hover:file:bg-cyan-600
            cursor-pointer"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />

        </div>



        {/* Button */}

        <button
          onClick={handleUpload}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] hover:shadow-cyan-500/30 transition-all duration-300"
        >

          {
            loading
              ? "Analyzing..."
              : "Analyze Resume"
          }

        </button>

      </div>



      {/* Analysis Result */}

      {
        analysis && (

          <div className="mt-14 backdrop-blur-lg bg-white/10 border border-white/10 shadow-2xl p-10 rounded-3xl">

            <h2 className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Resume Analysis Report
            </h2>



            {/* ATS Score */}

            <div className="mb-12">

              <div className="flex items-center justify-between mb-4">

                <h3 className="text-3xl font-bold">
                  ATS Score
                </h3>

                <span className="text-2xl font-bold text-cyan-400">
                  {analysis.atsScore}%
                </span>

              </div>

              <div className="w-full bg-gray-700 rounded-full h-8 overflow-hidden">

                <div
                  className="bg-gradient-to-r from-green-400 to-cyan-500 h-8 rounded-full text-white flex items-center justify-center font-bold transition-all duration-700"
                  style={{
                    width: `${analysis.atsScore}%`
                  }}
                >

                  {analysis.atsScore}%

                </div>

              </div>

            </div>



            {/* Matched Skills */}

            <div className="mb-12">

              <h3 className="text-3xl font-bold mb-6 text-green-400">
                Matched Skills
              </h3>

              <div className="flex flex-wrap gap-4">

                {
                  analysis.matchedSkills.map(
                    (skill, index) => (

                      <span
                        key={index}
                        className="bg-green-500/20 border border-green-400/20 text-green-300 px-5 py-3 rounded-full font-medium shadow-md hover:scale-105 transition-all duration-300"
                      >
                        {skill}
                      </span>

                    )
                  )
                }

              </div>

            </div>



            {/* Missing Skills */}

            <div className="mb-12">

              <h3 className="text-3xl font-bold mb-6 text-red-400">
                Missing Skills
              </h3>

              <div className="flex flex-wrap gap-4">

                {
                  analysis.missingSkills.map(
                    (skill, index) => (

                      <span
                        key={index}
                        className="bg-red-500/20 border border-red-400/20 text-red-300 px-5 py-3 rounded-full font-medium shadow-md hover:scale-105 transition-all duration-300"
                      >
                        {skill}
                      </span>

                    )
                  )
                }

              </div>

            </div>



            {/* Suggestions */}

            <div className="mb-12">

              <h3 className="text-3xl font-bold mb-6 text-yellow-400">
                Suggestions
              </h3>

              <ul className="space-y-4">

                {
                  analysis.suggestions.map(
                    (item, index) => (

                      <li
                        key={index}
                        className="bg-black/20 border border-white/10 rounded-2xl p-5 text-lg leading-8 hover:bg-black/30 transition-all duration-300"
                      >
                        {item}
                      </li>

                    )
                  )
                }

              </ul>

            </div>



            {/* AI Feedback */}

            <div className="mt-12">

              <h3 className="text-3xl font-bold mb-6 text-cyan-400">
                AI Feedback
              </h3>

              <div className="bg-black/30 border border-white/10 p-8 rounded-3xl whitespace-pre-wrap leading-9 text-lg text-gray-200 shadow-inner">

                {analysis.aiFeedback}

              </div>

            </div>

          </div>

        )
      }

    </div>

  </div>

);
};

export default Dashboard;