export default function ChatInput() {
  return (
    <div className="mt-4 flex gap-2">
      <input
        type="text"
        placeholder="Ask a question..."
        className="flex-1 bg-gray-800 p-2 rounded"
      />

      <button className="bg-blue-600 px-4 rounded">
        Send
      </button>
    </div>
  );
}