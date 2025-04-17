import { useState, ReactNode } from "react";

interface ExpandableSectionProps {
  title: string;
  description: string | string[];
  children: ReactNode;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  description,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section className="w-full py-4">
      <h3
        className="mb-2 cursor-pointer select-none font-semibold"
        onClick={handleToggle}
      >
        {title}
      </h3>
      {paragraphs.map((text, index) => (
        <p key={index} className="mb-2 text-sm opacity-50 last:mb-4">
          {text}
        </p>
      ))}
      {expanded && children}
    </section>
  );
};

export default ExpandableSection;
