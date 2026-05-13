import { Canvas } from "@react-three/fiber";

import {
  Float,
  Environment,
  Sphere,
  MeshDistortMaterial
} from "@react-three/drei";

import { motion } from "framer-motion";

const LuxurySphere = () => {

  return (

    <Float
      speed={2}
      rotationIntensity={1.2}
      floatIntensity={2}
    >

      <Sphere args={[1, 128, 128]} scale={2.8}>

        <MeshDistortMaterial
          color="#00d9ff"
          distort={0.35}
          speed={2}
          roughness={0}
          metalness={1}
        />

      </Sphere>

    </Float>

  );

};

const Home = () => {

  return (

    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative h-screen w-full">

        {/* 3D Background */}

        <div className="absolute inset-0 z-0">

          <Canvas camera={{ position: [0, 0, 5] }}>

            <ambientLight intensity={1.5} />

            <directionalLight
              position={[2, 2, 5]}
              intensity={3}
            />

            <Environment preset="city" />

            <LuxurySphere />

          </Canvas>

        </div>



        {/* Gradient Overlay */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10" />



        {/* Content */}

        <div className="relative z-20 h-full flex flex-col justify-center px-10 md:px-24">

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[10px] text-gray-400 mb-6 text-sm"
          >

            AI Powered Resume Intelligence

          </motion.p>



          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl font-extrabold leading-tight max-w-5xl"
          >

            Build a Resume
            <br />

            That Gets
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Selected
            </span>

          </motion.h1>



          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-lg md:text-xl mt-8 max-w-2xl leading-9"
          >

            Analyze your resume with AI,
            improve ATS score,
            discover missing skills,
            and optimize for your dream job.

          </motion.p>



          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-6 mt-12"
          >

            <button className="px-10 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-all duration-300">

              Start Analysis

            </button>



            <button className="px-10 py-4 rounded-full border border-white/30 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300">

              Explore

            </button>

          </motion.div>

        </div>



        {/* Scroll Indicator */}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">

          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent animate-pulse" />

        </div>

      </section>



      {/* SECOND SECTION */}

      <section className="min-h-screen flex flex-col justify-center px-10 md:px-24 bg-gradient-to-b from-black to-gray-950">

        <p className="uppercase tracking-[8px] text-gray-500 mb-6">

          Precision AI Technology

        </p>



        <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">

          Crafted for
          <span className="text-cyan-400">
            {" "}Modern Hiring
          </span>

        </h2>



        <p className="text-gray-400 text-xl mt-10 leading-10 max-w-3xl">

          Experience intelligent resume analysis
          powered by advanced AI models that
          understand recruiter expectations,
          ATS systems, and job requirements.

        </p>

      </section>



      {/* THIRD SECTION */}

      <section className="min-h-screen grid md:grid-cols-2">

        <div className="flex items-center justify-center p-16 bg-black">

          <div>

            <p className="uppercase tracking-[8px] text-gray-500 mb-6">

              ATS Optimization

            </p>



            <h2 className="text-5xl font-bold leading-tight">

              Increase Your
              <br />
              Interview Chances

            </h2>



            <p className="text-gray-400 text-lg leading-9 mt-8">

              Discover what recruiters actually
              look for and optimize your resume
              for higher visibility.

            </p>

          </div>

        </div>



        <div className="relative overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="AI"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-[3000ms]"
          />

          <div className="absolute inset-0 bg-black/30" />

        </div>

      </section>

    </div>

  );

};

export default Home;