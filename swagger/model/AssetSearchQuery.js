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
    define(['ApiClient', 'model/RelationsSearchParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RelationsSearchParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.AssetSearchQuery = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.RelationsSearchParameters);
  }
}(this, function(ApiClient, RelationsSearchParameters) {
  'use strict';




  /**
   * The AssetSearchQuery model module.
   * @module model/AssetSearchQuery
   * @version 2.0
   */

  /**
   * Constructs a new <code>AssetSearchQuery</code>.
   * @alias module:model/AssetSearchQuery
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AssetSearchQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetSearchQuery} obj Optional instance to populate.
   * @return {module:model/AssetSearchQuery} The populated <code>AssetSearchQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assetTypes')) {
        obj['assetTypes'] = ApiClient.convertToType(data['assetTypes'], ['String']);
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = RelationsSearchParameters.constructFromObject(data['parameters']);
      }
      if (data.hasOwnProperty('relationType')) {
        obj['relationType'] = ApiClient.convertToType(data['relationType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} assetTypes
   */
  exports.prototype['assetTypes'] = undefined;
  /**
   * @member {module:model/RelationsSearchParameters} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * @member {String} relationType
   */
  exports.prototype['relationType'] = undefined;



  return exports;
}));


