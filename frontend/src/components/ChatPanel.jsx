import Message from "./Message";
import ChatInput from "./ChatInput";

export default function ChatPanel() {
  return (
    <div className="border border-gray-800 rounded p-4 h-full">
      <h2 className="font-bold mb-4">
        Chat
      </h2>

      <Message text="Welcome to Adaptive RAG Tutor." />

      <div className="mt-4 p-3 bg-gray-900 rounded">
        <h3 className="font-bold mb-2">
          Retrieved Context
        </h3>

        <p>
          Relevant study material will appear here.
        </p>
      </div>

      <ChatInput />
    </div>
  );
}