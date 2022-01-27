import { filter, some } from 'underscore';
import { Collection } from 'common';
import Selector from './Selector';

export default class Selectors extends Collection {
  modelId(attr) {
    return `${attr.name}_${attr.type || Selector.TYPE_CLASS}`;
  }

  getStyleable({ noFixed } = {}) {
    const selectors = filter(
      this.models,
      item => item.get('active') && !item.get('private')
    );

    return !noFixed || this.hasNonFixed(selectors) ? selectors : [];
  }

  getValid({ noDisabled, noFixed } = {}) {
    const selectors = filter(
      this.models,
      item => !item.get('private')
    ).filter(item => (noDisabled ? item.get('active') : 1));

    return !noFixed || this.hasNonFixed(selectors) ? selectors : [];
  }

  getFullString(collection, opts = {}) {
    const result = [];
    const coll = collection || this;
    coll.forEach(selector => result.push(selector.getFullName(opts)));
    return result.join('').trim();
  }

  hasNonFixed(collection = null) {
    return some(collection || this.models, item => !item.get('fixed'));
  }
}

Selectors.prototype.model = Selector;
