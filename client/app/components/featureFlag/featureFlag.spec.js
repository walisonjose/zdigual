import FeatureFlagModule from './featureFlag';
import FeatureFlagController from './featureFlag.controller';
import FeatureFlagComponent from './featureFlag.component';
import FeatureFlagTemplate from './featureFlag.html';

describe('FeatureFlag', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FeatureFlagModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FeatureFlagController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(FeatureFlagTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = FeatureFlagComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(FeatureFlagTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(FeatureFlagController);
    });
  });
});
