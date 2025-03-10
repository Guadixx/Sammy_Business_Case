# Sammy Business Case

## What is the project about?

This is a Single Page Application (SPA) designed to display a list of items. Each item includes relevant information such as its price, and interactive features like "Like" and "Share" buttons. The app allows users to easily browse through the items, like their favorites, and share them with others. It is built with a focus on simplicity and a smooth user experience.

## Technologies used

#### React

#### Typescript

#### Tanstack Query

#### Vitest

#### Testing Library

#### Tailwind CSS

#### Tabler Icons

#### Eslint & Prettier

## Clone Repository

Clone repo to local folder..

`git clone https://github.com/Guadixx/Sammy_Business_Case`

## Install language dependencies

`npm install`

## Run local development server

`npm run dev`

## Things I would like to improve

- One of the things I would have liked to implement is Material UI (MUI) for faster and more consistent UI component styling. However, I decided against it because I wanted to stay as faithful as possible to the original design in the Figma link (https://www.figma.com/design/wKzYmPZ7ww9JCn6wGJ8ZUZ/Frontend-Test?node-id=0-1&p=f&t=KB7WxKtZR7gyMJh7-0), and I was concerned that using MUI could have made it more difficult to perfectly match the design details.
- Another thing I would have liked to implement is the use of conventional commits throughout the project. This would have allowed me to demonstrate my ability to follow consistent, structured commit messages, which are essential in professional environments
- Currently, the "Share" button is quite basic and only provides limited sharing capabilities. In the future, I would like to enhance this feature by integrating more advanced sharing options, such as the ability to directly share items to popular social media platforms like Facebook, Twitter, and WhatsApp. This would provide users with a more seamless and user-friendly experience, allowing them to easily share their favorite items with their networks.
- There’s always room for improving the code structure. Refactoring certain parts to follow best practices more strictly (e.g., modularizing components, enhancing reusability, and improving naming conventions) could make the codebase more maintainable.

## Self-Improved Features

- I added a white circle around the like and share buttons on desktop to improve accessibility and make the buttons more visually prominent and easier to interact with for every user.
- I included a new breakpoint specifically for tablet devices to ensure the app was responsive and provided a smooth user experience across all screen sizes.
- I added a footer to the bottom of the page to provide additional information and improve the overall structure and completeness of the layout.
- The share button was present in the Figma design, and I wanted to remain faithful to it while ensuring it had actual functionality. To achieve this, I implemented a working share button that allows users to interact with it, and I also made sure that the share count is saved in local storage for persistence.

## Challenges faced

- While developing this project, I encountered this challenge with the Flickr API. Initially, I noticed that the API seemed to be returning the same image on every request, regardless of the parameters I passed.
  To investigate the issue, I attempted to fix the problem by explicitly setting the index number of each image in the front. However, the result was always the same, the API continued to return the same image. After further exploration, I realized that this behavior was not due to my code, but rather an issue with the Flickr API itself.
- Another challenge I faced was related to the font family. I wanted to set the Inter font, as it was used in the Figma design. However, despite my attempts, I was unable to get it to work correctly. I tried declaring it as a constant in the Tailwind theme configuration and also to import it from Google Fonts in the index.html. Unfortunately, both approaches did not yield the desired result, and I couldn't apply the font as intended.
