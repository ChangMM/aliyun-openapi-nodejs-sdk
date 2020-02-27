
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-12-30';
    super(config);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeAccountPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeAccountPage', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeBankCard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeBankCard', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeBusinessCard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeBusinessCard', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeBusinessLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeBusinessLicense', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   * @param {Integer} MinHeight - minHeight. required.
   * @param {Boolean} OutputProbability - outputProbability. required.
   */
  recognizeCharacter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'MinHeight')) {
      throw new TypeError('parameter "MinHeight" is required');
    }

    if (!hasOwnProperty(params, 'OutputProbability')) {
      throw new TypeError('parameter "OutputProbability" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeCharacter', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   * @param {String} Side - side. required.
   */
  recognizeDriverLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'Side')) {
      throw new TypeError('parameter "Side" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeDriverLicense', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   * @param {String} Side - side. required.
   */
  recognizeDrivingLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'Side')) {
      throw new TypeError('parameter "Side" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeDrivingLicense', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   * @param {String} Side - side. required.
   */
  recognizeIdentityCard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'Side')) {
      throw new TypeError('parameter "Side" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeIdentityCard', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeLicensePlate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeLicensePlate', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeStamp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeStamp', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   * @param {String} OutputFormat - outputFormat. required.
   * @param {Boolean} UseFinanceModel - useFinanceModel. required.
   * @param {Boolean} AssureDirection - assureDirection. required.
   * @param {Boolean} HasLine - hasLine. required.
   * @param {Boolean} SkipDetection - skipDetection. required.
   */
  recognizeTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'OutputFormat')) {
      throw new TypeError('parameter "OutputFormat" is required');
    }

    if (!hasOwnProperty(params, 'UseFinanceModel')) {
      throw new TypeError('parameter "UseFinanceModel" is required');
    }

    if (!hasOwnProperty(params, 'AssureDirection')) {
      throw new TypeError('parameter "AssureDirection" is required');
    }

    if (!hasOwnProperty(params, 'HasLine')) {
      throw new TypeError('parameter "HasLine" is required');
    }

    if (!hasOwnProperty(params, 'SkipDetection')) {
      throw new TypeError('parameter "SkipDetection" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeTable', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeTaxiInvoice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeTaxiInvoice', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeTrainTicket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeTrainTicket', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeVINCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeVINCode', params, options);
  }

}

module.exports = Client;