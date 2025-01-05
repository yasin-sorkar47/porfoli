export default function Skills() {
  const skills = [
    { name: "JavaScript", percentage: 95 },
    { name: "React", percentage: 90 },
    { name: "Node.js", percentage: 50 },
  ];

  const handleDownload = async () => {
    try {
      const response = await fetch("/my-rsume.pdf");
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Your-CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading the CV:", error);
    }
  };

  return (
    <section id="skill" className="py-16 bg-white px-6 sm:px-10 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Left Section */}
        <div>
          <ul className="flex items-center mb-4">
            <li className="bg-orange-500 w-3 h-3 rounded-full mr-3"></li>
            <li className="text-orange-500 uppercase text-sm font-bold">
              Special Skills
            </li>
          </ul>
          <h2 className="text-3xl sm:text-4xl font-semibold my-4">
            How Experienced
          </h2>
          <h2 className="text-3xl sm:text-4xl font-semibold my-4">
            I Am in This Field!
          </h2>
          <button
            onClick={handleDownload}
            className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-3xl hover:bg-orange-600 transition"
          >
            Get My Resume
          </button>
        </div>

        {/* Right Section */}
        <div>
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-medium">{skill.name}</h4>
              <div className="relative w-full bg-gray-200 h-4 rounded-full overflow-hidden mt-2">
                <div
                  className="absolute top-0 left-0 h-full bg-orange-500"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{skill.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
