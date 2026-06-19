import Message from "./Message";
import ChatInput from "./ChatInput";

export default function ChatPanel() {
  return (
    <div className="border border-gray-800 rounded p-4 h-full">
      <h2 className="font-bold mb-4">
        Chat
      </h2>

      <Message text="Welcome to Adaptive RAG Tutor." />

      <ChatInput />
    </div>
  );
}