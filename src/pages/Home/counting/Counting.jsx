export default function Counting() {
  const stats = [
    { label: "Happy Clients", count: 300 },
    { label: "Heavy Clients", count: 300 },
    { label: "Projects Complete", count: 600 },
    { label: "Years of Experience", count: 10 },
  ];
  return (
    <section className=" bg-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-4xl font-bold text-orange-500">
              {stat.count}+
            </h3>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
