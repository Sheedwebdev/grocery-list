export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a React component with index.js',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.jsx',
        templateFile: 'plop-templates/Component.jsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.js',
        template: "export { default } from './{{name}}';"
      }
    ]
  });
}
