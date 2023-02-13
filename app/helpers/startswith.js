import { helper } from '@ember/component/helper';

export default helper(function startswith([str, substr]) {
  return str.startsWith(substr);
});
