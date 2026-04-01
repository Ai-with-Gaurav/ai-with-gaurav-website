interface SuggestedRepliesProps {
  onSelect: (message: string) => void;
}

const suggestions = [
  "What services do you offer?",
  "How much does a chatbot cost?",
  "Tell me about your RAG systems",
  "I want to book a consultation",
];

export default function SuggestedReplies({ onSelect }: SuggestedRepliesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          onClick={() => onSelect(suggestion)}
          className="rounded-full border border-dark-500 bg-dark-700 px-3 py-1.5 text-xs text-text-muted transition-colors hover:border-primary hover:text-primary cursor-pointer"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}
