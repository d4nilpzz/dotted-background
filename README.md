<div align="center">
  <h1>DottedBackground</h1>
  <a href="https://github.com/d4nilpzz/dotted-background/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-GPL%203.0-blue" /></a>
  <a href="https://discord.d4nilpzz.dev"><img alt="Discord" src="https://img.shields.io/discord/1373385570965000292?label=Discord"></a>
  <br />
  <br />
  <a>Place DottedBackgrounds where you want in your react app with just one component.</a>
  <br />
  <br />
</div>

<img width="940" height="701" alt="{719C4A4E-D305-4770-9AAC-A84FD689A584}" src="https://github.com/user-attachments/assets/612c880d-a75e-48c9-b3d7-e3244234aeec" />

### Component
You can copy directly from here the `DottedBackground.tsx`
```tsx
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
    `<svg 
        width="${spacing}" 
        height="${spacing}" 
        xmlns="http://www.w3.org/2000/svg">
      <circle 
        cx="${spacing / 2}" 
        cy="${spacing / 2}" 
        r="${dotSize}" 
        fill="${dotColor}"/>
    </svg>`
  );

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,${svgPattern}")`,
        backgroundRepeat: "repeat",
      }}
    >
      {children}
    </div>
  );
};
```

### How to use
You just need to place the component and insert some content in, or just define the `hight` & `width`
```tsx
<DottedBackground
  className="w-[680px] h-[200px] flex flex-col items-center justify-center"
>
  <h1 className="text-4xl font-bold text-center">DottedBackground Component</h1>
</DottedBackground>
```
