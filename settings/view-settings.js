import HapiReactViews from 'hapi-react-views';
import Path from 'path';

export default {
  engines: {
    js: HapiReactViews
  },
  compileOptions: {
    renderMethod: 'renderToString',
    layoutPath: Path.join(__dirname, './../server/views/'),
    layout: 'layout-template.jsx',
  },
  relativeTo: Path.resolve(__dirname, './../src/'),
  // path: 'views'
};
