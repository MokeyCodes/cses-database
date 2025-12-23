interface ParagraphProps {
  children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <div className="border-2 border-gray-800 rounded-lg p-4 bg-white dark:bg-gray-800">
      {children}
    </div>
  );
}