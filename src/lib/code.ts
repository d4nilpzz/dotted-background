export const html_code = `
import React, { ReactNode } from "react";

interface DottedBackgroundProps {
  children?: ReactNode;
  className?: string;
  dotColor?: string;
  dotSize?: number;
  spacing?: number;
}

export const DottedBackground: React.FC<DottedBackgroundProps> = ({
  children,
  className = "",
  dotColor = "#CCCCCC10",
  dotSize = 1,
  spacing = 10,
}) => {
  const svgPattern = encodeURIComponent(
    \`<svg 
        width="\${spacing}" 
        height="\${spacing}" 
        xmlns="http://www.w3.org/2000/svg">
      <circle 
        cx="\${spacing / 2}" 
        cy="\${spacing / 2}" 
        r="\${dotSize}" 
        fill="\${dotColor}"/>
    </svg>\`
  );

  return (
    <div
      className={\`relative overflow-hidden \${className}\`}
      style={{
        backgroundImage: \`url("data:image/svg+xml,\${svgPattern}")\`,
        backgroundRepeat: "repeat",
      }}
    >
      {children}
    </div>
  );
};
`;
