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
    define(['ApiClient', 'model/AdminSettingsId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdminSettingsId'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.AdminSettings = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.AdminSettingsId);
  }
}(this, function(ApiClient, AdminSettingsId) {
  'use strict';




  /**
   * The AdminSettings model module.
   * @module model/AdminSettings
   * @version 2.0
   */

  /**
   * Constructs a new <code>AdminSettings</code>.
   * @alias module:model/AdminSettings
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>AdminSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdminSettings} obj Optional instance to populate.
   * @return {module:model/AdminSettings} The populated <code>AdminSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createdTime')) {
        obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = AdminSettingsId.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('jsonValue')) {
        obj['jsonValue'] = ApiClient.convertToType(data['jsonValue'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} createdTime
   */
  exports.prototype['createdTime'] = undefined;
  /**
   * @member {module:model/AdminSettingsId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} jsonValue
   */
  exports.prototype['jsonValue'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;



  return exports;
}));


