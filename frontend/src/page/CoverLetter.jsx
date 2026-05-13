import { useState } from "react";

import API from "../services/api";

const templates = [

  {
    title: "Google Style",
    description:
      "Clean, concise, impact-focused."
  },

  {
    title: "Microsoft Style",
    description:
      "Professional and technical."
  },

  {
    title: "Amazon Style",
    description:
      "Leadership principle focused."
  },

  {
    title: "Startup Style",
    description:
      "Creative and modern."
  }

];



const CoverLetter = () => {

  const [companyName, setCompanyName] = useState("");

  const [jobRole, setJobRole] = useState("");

  const [skills, setSkills] = useState("");

  const [customRequest, setCustomRequest] = useState("");

  const [selectedTemplate, setSelectedTemplate] = useState("");

  const [loading, setLoading] = useState(false);

  const [coverLetter, setCoverLetter] = useState("");



  const handleGenerate = async () => {

    if (
      !companyName ||
      !jobRole
    ) {

      return alert(
        "Please fill required fields"
      );

    }

    try {

      setLoading(true);

      const res = await API.post(
        "/cover-letter/generate",
        {

          companyName,

          jobRole,

          skills,

          customRequest,

          selectedTemplate

        }
      );

      setCoverLetter(
        res.data.coverLetter
      );

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

    <div className="min-h-screen pt-32 px-10 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">

      <h1 className="text-6xl font-black mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

        AI Cover Letter Generator

      </h1>



      <div className="grid lg:grid-cols-3 gap-10">

        {/* Left Form */}

        <div className="lg:col-span-2 bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Generate Custom Cover Letter
          </h2>



          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-4 rounded-xl border mb-5 outline-none"
            onChange={(e) =>
              setCompanyName(e.target.value)
            }
          />


          <input
            type="text"
            placeholder="Job Role"
            className="w-full p-4 rounded-xl border mb-5 outline-none"
            onChange={(e) =>
              setJobRole(e.target.value)
            }
          />


          <textarea
            placeholder="Your Skills"
            className="w-full p-4 rounded-xl border mb-5 h-40 outline-none"
            onChange={(e) =>
              setSkills(e.target.value)
            }
          />


          <textarea
            placeholder="Any Custom Request or Rectification"
            className="w-full p-4 rounded-xl border mb-5 h-32 outline-none"
            onChange={(e) =>
              setCustomRequest(e.target.value)
            }
          />



          {/* Template Selection */}

          <select
            className="w-full p-4 rounded-xl border mb-5 outline-none"
            onChange={(e) =>
              setSelectedTemplate(e.target.value)
            }
          >

            <option value="">
              Select Template
            </option>

            {
              templates.map(
                (template, index) => (

                  <option
                    key={index}
                    value={template.title}
                  >
                    {template.title}
                  </option>

                )
              )
            }

          </select>



          <button
            onClick={handleGenerate}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
          >

            {
              loading
                ? "Generating..."
                : "Generate Cover Letter"
            }

          </button>

        </div>



        {/* Templates Section */}

        <div className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            MNC Templates
          </h2>


          <div className="space-y-5">

            {
              templates.map(
                (template, index) => (

                  <div
                    key={index}
                    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
                  >

                    <h3 className="text-xl font-bold mb-2">
                      {template.title}
                    </h3>

                    <p className="text-gray-600">
                      {template.description}
                    </p>

                  </div>

                )
              )
            }

          </div>

        </div>

      </div>



      {/* Generated Cover Letter */}

      {
        coverLetter && (

          <div className="mt-16 bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-10">

            <h2 className="text-4xl font-bold mb-8">
              Generated Cover Letter
            </h2>


            <div className="bg-gray-100 rounded-2xl p-8 whitespace-pre-wrap leading-8 text-lg">

              {coverLetter}

            </div>

          </div>

        )
      }

    </div>

  );
};

export default CoverLetter;