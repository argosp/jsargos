/**
 * Thingsboard REST API
 * For instructions how to authorize requests please visit <a href='http://thingsboard.io/docs/reference/rest-api/'>REST API documentation page</a>.
 *
 * OpenAPI spec version: 2.0
 * Contact: info@thingsboard.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.TextPageLink = factory(root.ThingsboardRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TextPageLink model module.
   * @module model/TextPageLink
   * @version 2.0
   */

  /**
   * Constructs a new <code>TextPageLink</code>.
   * @alias module:model/TextPageLink
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>TextPageLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TextPageLink} obj Optional instance to populate.
   * @return {module:model/TextPageLink} The populated <code>TextPageLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('idOffset')) {
        obj['idOffset'] = ApiClient.convertToType(data['idOffset'], 'String');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('textOffset')) {
        obj['textOffset'] = ApiClient.convertToType(data['textOffset'], 'String');
      }
      if (data.hasOwnProperty('textSearch')) {
        obj['textSearch'] = ApiClient.convertToType(data['textSearch'], 'String');
      }
      if (data.hasOwnProperty('textSearchBound')) {
        obj['textSearchBound'] = ApiClient.convertToType(data['textSearchBound'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} idOffset
   */
  exports.prototype['idOffset'] = undefined;
  /**
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {String} textOffset
   */
  exports.prototype['textOffset'] = undefined;
  /**
   * @member {String} textSearch
   */
  exports.prototype['textSearch'] = undefined;
  /**
   * @member {String} textSearchBound
   */
  exports.prototype['textSearchBound'] = undefined;



  return exports;
}));


