import { module, test } from 'qunit';
import { setupRenderingTest } from 'movies-list-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | common/suggestion-group/suggestion-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Common::SuggestionGroup::SuggestionItem />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Common::SuggestionGroup::SuggestionItem>
        template block text
      </Common::SuggestionGroup::SuggestionItem>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
