export default function Home() {
  // Example content data
  const features = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Next.js provides fast server rendering and optimized production builds.',
    },
    {
      icon: '🛠️',
      title: 'Easy Development',
      description: 'Develop with ease using Next.js and Tailwind CSS for styling.',
    },
    {
      icon: '📚',
      title: 'Interactive Learning',
      description: 'Learn and practice Next.js with interactive quizzes.',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold">Welcome to My Next.js Starter Template</h1>
        <p className="text-gray-600">This is the home page of your starter template.</p>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex space-x-2">
              <span className="text-2xl">{feature.icon}</span>
              <div>
                <h2 className="text-lg font-semibold">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}