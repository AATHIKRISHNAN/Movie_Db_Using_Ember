'use strict';

define("movies-list-app/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f

  // This file exists to provide wrappers around ember-qunit's / ember-mocha's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.
  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options); // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }

  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options); // Additional setup for rendering tests can be done here.
  }

  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options); // Additional setup for unit tests can be done here.
  }
});
define("movies-list-app/tests/integration/components/header-test", ["@ember/template-factory", "qunit", "movies-list-app/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"movies-list-app/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | header', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Header />
      */
      {
        "id": "pPFAosp3",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"header\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Header>
              template block text
            </Header>
          
      */
      {
        "id": "FuPkuOr6",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"header\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("movies-list-app/tests/integration/components/suggestion-list-test", ["@ember/template-factory", "qunit", "movies-list-app/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"movies-list-app/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | suggestion-list', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <SuggestionList />
      */
      {
        "id": "vZNmGA0n",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"suggestion-list\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <SuggestionList>
              template block text
            </SuggestionList>
          
      */
      {
        "id": "4JNyf0Gi",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"suggestion-list\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("movies-list-app/tests/integration/helpers/startswith-test", ["@ember/template-factory", "qunit", "movies-list-app/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"movies-list-app/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Helper | startswith', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{startswith this.inputValue}}
      */
      {
        "id": "vyh2xarx",
        "block": "[[[1,[28,[35,0],[[30,0,[\"inputValue\"]]],null]]],[],false,[\"startswith\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('1234');
    });
  });
});
define("movies-list-app/tests/test-helper", ["movies-list-app/app", "movies-list-app/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"movies-list-app/app",0,"movies-list-app/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("movies-list-app/tests/unit/routes/search-result-test", ["qunit", "movies-list-app/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"movies-list-app/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | search-result', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:search-result');
      assert.ok(route);
    });
  });
});
define('movies-list-app/config/environment', [], function() {
  var prefix = 'movies-list-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('movies-list-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
