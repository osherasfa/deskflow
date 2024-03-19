'use client'

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
const lightCustomTheme = {
  ...lightDefaultTheme,
  colors: {
    editor: {
      text: "#222222",
      background: "#eeeeff",
    },
    menu: {
      text: "#ffffff",
      background: "#eeeeff",
    },
  },
} satisfies Theme;
 
// The theme for dark mode,
const darkCustomTheme = {
  ...darkDefaultTheme,
  ...lightCustomTheme,
  colors: {
    editor: {
      text: "#222222",
      background: "#eeeeff",
    },
    menu: {
      text: "#ffffff",
      background: "#eeeeff",
    },
  }
} satisfies Theme;
 
const customTheme = {
  light: lightCustomTheme,
  dark: darkCustomTheme,
};

const FilePage = () => {
  const editor = useCreateBlockNote();//className="p-10"
 
  return (
    <div className="my-10 p-5 h-full bg-red-500">
      {/* <BlockNoteView editor={editor}  /> */}
      hey
    </div>
  );
}
 
export default FilePage;


 
