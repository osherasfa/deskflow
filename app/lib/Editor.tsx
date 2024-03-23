"use client"; // this registers <Editor> as a Client Component

import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";

import "@blocknote/core/fonts/inter.css";
import {
  BlockNoteView,
  darkDefaultTheme,
  lightDefaultTheme,
  Theme,
  useCreateBlockNote,
} from "@blocknote/react";
import "@blocknote/react/style.css";
 
// Base theme
const lightTheme = {
  colors: {
    editor: {
      text: "#000000",
      background: "#eeeeff",
    },
    menu: {
      text: "#000000",
      background: "#eeeeff",
    },
    tooltip: {
      text: "#000000",
      background: "#eeeeff",
    },
    hovered: {
      text: "#ffffff",
      background: "#cfcfdd",
    },
    selected: {
      text: "#ffffff",
      background: "#b3b3bf",
    },
    disabled: {
      text: "#ffffff",
      background: "#48484b",
    },
    shadow: "#cfcfdd",
    border: "#b3b3bf",
    sideMenu: "#bababa",
    highlights: lightDefaultTheme.colors!.highlights,
  },
  borderRadius: 4,
  fontFamily: "Helvetica Neue, sans-serif",
} satisfies Theme;
 
const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    editor: {
      text: "#ffffff",
      background: "#9b0000",
    },
    sideMenu: "#ffffff",
    highlights: darkDefaultTheme.colors!.highlights,
  },
} satisfies Theme;
 
// The combined "red theme",
// we pass this to BlockNoteView and then the editor will automatically
// switch between lightRedTheme / darkRedTheme based on the system theme
const customTheme = {
  light: lightTheme,
  dark: darkTheme,
};
 
// Our <Editor> component we can reuse later
export default function Editor() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to this demo!",
      },
      {
        type: "paragraph",
        content: "Open up a menu or toolbar to see more of the red theme",
      },
      {
        type: "paragraph",
        content:
          "Toggle light/dark mode in the page footer and see the theme change too",
      },
      {
        type: "paragraph",
      },
    ],
  });
 
  // Renders the editor instance using a React component.
  return <BlockNoteView className="overflow-auto h-full" editor={editor} theme={customTheme} />;
}