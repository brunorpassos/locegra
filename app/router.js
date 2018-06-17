import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('institutional', {path: '/'});
  this.route('portal', {path: '/portal-informativo'}, function() {
    this.route('engineering_evaluation', {path: 'eng-de-avaliacoes'});
  });
});

export default Router;
