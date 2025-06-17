export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          MedAssist – AI Medical Help for Travellers
        </h1>
        <p className="text-gray-700 mb-4 text-lg">Describe your symptoms below:</p>
        <textarea
          placeholder="e.g. I have stomach pain and feel nauseous."
          className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
          rows={5}
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
          Get AI Medical Advice
        </button>
        <div className="mt-6 p-4 bg-green-100 rounded-md text-green-800">
          <strong className="block mb-1">AI Medical Advice:</strong>
          <p>This is a sample message. If this were real, you'd get instant advice here.</p>
        </div>
      </div>
    </div>
  );
}
