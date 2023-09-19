# expo-template
React native with expo initial template
Use Eslint and Prettier, it is recommended to have these extensions installed. Prettier can be configured to format the code when the file is saved:
vscode -> preferences -> Editor: format on save
Format on save mode: modifications
contais the folder structure for a medium size application as:
  src/
    | assets
    | components
    | context
    | data
    | hooks
    | pages
    | utils


When adding variables in the .env file, you need to declare the variables types in ./src/types/ev.d.ts to work with typescript.