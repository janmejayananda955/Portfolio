import { skills } from "./data/Data.jsx";
const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen overflow-hidden scroll-mt-20 gap-6 p-4 py-20 text-white sm:px-6 md:p-12 lg:m-0"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h4 className="text-center mb-4">TECHNICAL EXPERTISE</h4>
        <div className="absolute z-0 w-40 h-40 sm:h-60 left-20 top-20 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 "></div>
        <div className="absolute z-0 w-40 h-40 sm:h-60 right-20 bottom-96 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 "></div>
        <div className="absolute z-0 w-40 h-40 sm:h-60 left-30 bottom-0 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 "></div>
        <h2 className="text-3xl font-bold text-center mb-4 z-10">
          Skills &<span className="text-blue-600 "> Technologies</span>
        </h2>
        <p className="text-center mb-10 max-w-2xl mx-auto font-light">
          A comprehensive toolkit for building mordern, scalable web
          applications from concept to development
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, data]) => (
            <div
              key={category}
              className="mb-8 text-white rounded-lg  bg-white/5 backdrop-blur-sm p-6 relative z-10 max-h-max"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <div className="flex flex-row gap-3 sm:gap-5 text-[1.2rem] mb-4 items-center">
                <span className=" rounded-2xl bg-white w-14 h-10 sm:w-10 sm:h-10 flex justify-center items-center">
                  {data.catagoryicon}
                </span>
                <div>
                  <span className="font-bold">{category}</span>
                  <h3 className="text-[.9rem]">{data.description}</h3>
                </div>
                <div className="absolute z-0 w-40 h-40 sm:h-60 right-20 sm:hidden bg-[#cd3cf5] rounded-full blur-3xl opacity-50 "></div>
              </div>
              <div className="grid md:grid-cols-1 gap-2.5 " data-aos="fade-up" data-aos-duration="100 ">
                {data.items.map((skill) => (
                  <div key={skill.id} className="flex items-center gap-2">
                    {skill.icon}
                    <div className="w-full">
                      <div className="flex justify-between text-sm font-medium">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className={`${skill.color} h-2 rounded-full`}
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
         


    </section>
  );
};

export default Skills;
