import Path from 'path';

export default {
  port: 80,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, './public/bin/')
    }
  }
};
