
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2020-03-20';
    super(config);
  }

  /**
   * @param {Boolean} Async - async. optional. default: true.
   * @param {String} JobId - jobId. required.
   */
  getAsyncJobResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    options.method = 'POST';
    return this.request('GetAsyncJobResult', params, options);
  }

  /**
   * @param {String} VideoUrl - videoUrl. required.
   * @param {Boolean} Async - async. optional. default: true.
   */
  segmentVideoBody(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VideoUrl')) {
      throw new TypeError('parameter "VideoUrl" is required');
    }

    options.method = 'POST';
    return this.request('SegmentVideoBody', params, options);
  }

}

module.exports = Client;
