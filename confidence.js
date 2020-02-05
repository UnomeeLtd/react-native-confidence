/**
 * @providesModule react-native-confidence
 * @flow
 */
import Confidence from './confidenceLite.js'

var rnconfidence = require('react-native').NativeModules.RNConfidence;

export default class RNConfidence {
  criteria: any;
  store: Confidence;

  constructor(config: any) {
    this.criteria = {
      env: rnconfidence.BUILD_ENV
    };

    this.store = new Confidence(config || {});

    this.getPlist = this._getPlist.bind(this);
    this.getBuildEnv = this._getBuildEnv.bind(this);
    this.get = this._get.bind(this);
    this.meta = this._meta.bind(this);
  }

  _getPlist(): any {
    return rnconfidence.infoPlist;
  }

  _getBuildEnv(): string {
    return rnconfidence.BUILD_ENV;
  }

   _get(key: string, criteria: any = this.criteria): any {
     return this.store.get(key, criteria);
   }

   _meta(key: string, criteria: any = this.criteria): string {
     return this.store.meta(key, criteria);
   }
}
