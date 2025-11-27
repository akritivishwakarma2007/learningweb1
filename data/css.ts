import { LanguageContent } from '../types';

export const cssContent: LanguageContent = {
  Beginner: {
    introduction: "🟢 Level 1: Beginner. Master the fundamentals of selecting elements and applying styles.",
    topics: [
      {
        id: 'css-beg-sel',
        title: '1. Basic Selectors',
        subTopics: [
          {
            id: 'css-b-sel-1',
            title: 'Type, Class, and ID',
            content: "Selectors are the heart of CSS. They tell the browser which HTML elements to style.\n\n*   **Type Selector**: Selects elements by tag name (e.g., `p`, `div`).\n*   **Class Selector**: Selects elements with a specific class attribute (starts with `.`). Use for groups.\n*   **ID Selector**: Selects a unique element with a specific ID (starts with `#`). Use sparingly.",
            codeExamples: [
              {
                title: "Type Selector",
                code: `p {
  color: blue; /* Styles all <p> tags */
}`
              },
              {
                title: "Class Selector",
                code: `.btn {
  background-color: green; /* Styles all elements with class="btn" */
  color: white;
}`
              },
              {
                title: "ID Selector",
                code: `#header {
  height: 100px; /* Styles the single element with id="header" */
}`
              }
            ],
            exercise: "Create a CSS rule that makes all `<h1>` tags red, and another rule that gives elements with class `.card` a black border."
          },
          {
            id: 'css-b-sel-2',
            title: 'Universal & Grouping',
            content: "*   **Universal Selector (`*`)**: Selects *every* element on the page. Often used for resetting margins.\n*   **Grouping**: Apply the same style to multiple selectors by separating them with commas.",
            codeExamples: [
              {
                title: "Universal Selector",
                code: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`
              },
              {
                title: "Grouping Selectors",
                code: `h1, h2, h3 {
  font-family: 'Arial', sans-serif;
  margin-bottom: 1rem;
}`
              }
            ],
            exercise: "Write a CSS rule that sets the text alignment to center for both `h1` and `p` tags."
          }
        ]
      }
    ]
  },
  Intermediate: {
    introduction: "🔵 Level 2: Intermediate. Target specific elements relative to others using Combinators and Attributes.",
    topics: [
      {
        id: 'css-int-comb',
        title: '1. Combinators',
        subTopics: [
          {
            id: 'css-i-comb-1',
            title: 'Descendant & Child',
            content: "Combinators explain the relationship between the selectors.\n\n*   **Descendant Selector (space)**: Selects all elements that are descendants of a specified element.\n*   **Child Selector (`>`)**: Selects all elements that are *direct* children of a specified element.",
            codeExamples: [
              {
                title: "Descendant (Space)",
                code: `div p {
  /* Selects all <p> inside <div>, however deep */
  color: gray;
}`
              },
              {
                title: "Direct Child (>)",
                code: `ul > li {
  /* Selects only <li> that are direct children of <ul> */
  list-style: none;
}`
              }
            ],
            exercise: "Write a selector to target only the `<span>` tags that are *direct* children of a `.nav-bar` class."
          },
          {
            id: 'css-i-comb-2',
            title: 'Sibling Selectors',
            content: "*   **Adjacent Sibling (`+`)**: Selects an element that is immediately after another specific element.\n*   **General Sibling (`~`)**: Selects all elements that are siblings of a specified element.",
            codeExamples: [
              {
                title: "Adjacent Sibling (+)",
                code: `h1 + p {
  /* Selects only the first <p> strictly after an <h1> */
  font-weight: bold;
}`
              },
              {
                title: "General Sibling (~)",
                code: `h1 ~ p {
  /* Selects ALL <p> tags that follow an <h1> */
  color: #333;
}`
              }
            ],
            exercise: "Use the adjacent sibling selector to add a top margin to a paragraph that directly follows an image."
          }
        ]
      },
      {
        id: 'css-int-attr',
        title: '2. Attribute Selectors',
        subTopics: [
          {
            id: 'css-i-attr-1',
            title: 'Styling by Attribute',
            content: "Select elements based on the presence or value of a given attribute. Extremely useful for form inputs.",
            codeExamples: [
              {
                title: "Presence & Value",
                code: `/* Has 'disabled' attribute */
[disabled] {
  opacity: 0.5;
}

/* Exact value */
input[type="text"] {
  border: 1px solid #ccc;
}`
              },
              {
                title: "Pattern Matching",
                code: `/* Starts with "https" */
a[href^="https"] { color: green; }

/* Ends with ".pdf" */
a[href$=".pdf"] { color: red; }

/* Contains "logo" anywhere */
img[src*="logo"] { border: none; }`
              }
            ],
            exercise: "Style all links that point to a PDF file (ending in .pdf) with a specific icon or color."
          }
        ]
      }
    ]
  },
  Advanced: {
    introduction: "🟣 Level 3: Advanced. Master modern pseudo-classes and control specificity logic.",
    topics: [
      {
        id: 'css-adv-pseudo',
        title: '1. Functional Pseudo-classes',
        subTopics: [
          {
            id: 'css-a-pseudo-1',
            title: ':is() and :where()',
            content: "Modern selectors to group checks and manage specificity.\n*   **:is()**: Takes the specificity of its most specific argument.\n*   **:where()**: Always has 0 specificity (great for resets).",
            codeExamples: [
              {
                title: "Using :is()",
                code: `/* Matches header p, main p, footer p */
:is(header, main, footer) p {
  color: red;
}`
              },
              {
                title: "Using :where()",
                code: `/* Same logic, but specificity remains 0 */
:where(article, section) h2 {
  margin-top: 0;
}`
              }
            ],
            exercise: "Rewrite a verbose group selector `section h1, section h2, section h3` using `:is()`."
          },
          {
            id: 'css-a-pseudo-2',
            title: 'The Parent Selector :has()',
            content: "Known as the 'parent selector', `:has()` selects an element *if* it contains a certain child. This changes the game for CSS logic.",
            codeExamples: [
              {
                title: "Styling Parent",
                code: `/* Styles the card ONLY if it contains an image */
.card:has(img) {
  grid-template-columns: 1fr 1fr;
}

/* Style label if the input inside is checked */
label:has(input:checked) {
  background-color: blue;
  color: white;
}`
              }
            ],
            exercise: "Write a rule that gives a red border to any `form` that contains an `input` with the class `.invalid`."
          },
          {
            id: 'css-a-pseudo-3',
            title: ':not()',
            content: "The negation pseudo-class selects elements that do *not* match a list of selectors.",
            codeExamples: [
              {
                title: "Exclusion",
                code: `/* Select all buttons EXCEPT the disabled ones */
button:not([disabled]) {
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`
              }
            ],
            exercise: "Select all list items `li` except the one with class `.active` and give them a lower opacity."
          }
        ]
      }
    ]
  }
};