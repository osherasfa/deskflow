"use client"; // this registers <Editor> as a Client Component

import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";

import "@blocknote/core/fonts/inter.css";
import {
  BlockNoteView,
  lightDefaultTheme,
  Theme,
  useCreateBlockNote,
} from "@blocknote/react";
import "@blocknote/react/style.css";
 
const customTheme = {
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
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Blocks:",
            styles: { bold: true },
          },
        ],
      },
      {
        type: "paragraph",
        content: "Paragraph",
      },
      {
        type: "heading",
        content: "Heading",
      },
      {
        type: "bulletListItem",
        content: "Bullet List Item",
      },
      {
        type: "numberedListItem",
        content: "Numbered List Item",
      },
      {
        type: "image",
        props: {
          url: "https://images.unsplash.com/photo-1682695798522-6e208131916d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      },
      {
        type: "table",
        content: {
          type: "tableContent",
          rows: [
            {
              cells: ["Table Cell", "Table Cell", "Table Cell"],
            },
            {
              cells: ["Table Cell", "Table Cell", "Table Cell"],
            },
            {
              cells: ["Table Cell", "Table Cell", "Table Cell"],
            },
          ],
        },
      },
      {
        type: "paragraph",
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Inline Content:",
            styles: { bold: true },
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Styled Text",
            styles: {
              bold: true,
              italic: true,
              textColor: "red",
              backgroundColor: "blue",
            },
          },
          {
            type: "text",
            text: " ",
            styles: {},
          },
          {
            type: "link",
            content: "Link",
            href: "https://www.blocknotejs.org",
          },
        ],
      },
      {
        type: "paragraph",
      },
    ],
  });
 
  // Renders the editor instance using a React component.
  return <BlockNoteView className="overflow-auto h-full" editor={editor} theme={customTheme} editable={true} />;
}