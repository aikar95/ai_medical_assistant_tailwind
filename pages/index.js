import ChatInterface from '../components/ChatInterface';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="text-2xl font-bold text-center mt-6">MedAssist: See a Doctor Today</h1>
      <ChatInterface />
    </main>
  );
}
