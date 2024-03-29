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
    define(['ApiClient', 'model/DeviceCredentialsId', 'model/DeviceId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceCredentialsId'), require('./DeviceId'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.DeviceCredentials = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.DeviceCredentialsId, root.ThingsboardRestApi.DeviceId);
  }
}(this, function(ApiClient, DeviceCredentialsId, DeviceId) {
  'use strict';




  /**
   * The DeviceCredentials model module.
   * @module model/DeviceCredentials
   * @version 2.0
   */

  /**
   * Constructs a new <code>DeviceCredentials</code>.
   * @alias module:model/DeviceCredentials
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>DeviceCredentials</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceCredentials} obj Optional instance to populate.
   * @return {module:model/DeviceCredentials} The populated <code>DeviceCredentials</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createdTime')) {
        obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Number');
      }
      if (data.hasOwnProperty('credentialsId')) {
        obj['credentialsId'] = ApiClient.convertToType(data['credentialsId'], 'String');
      }
      if (data.hasOwnProperty('credentialsType')) {
        obj['credentialsType'] = ApiClient.convertToType(data['credentialsType'], 'String');
      }
      if (data.hasOwnProperty('credentialsValue')) {
        obj['credentialsValue'] = ApiClient.convertToType(data['credentialsValue'], 'String');
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = DeviceId.constructFromObject(data['deviceId']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = DeviceCredentialsId.constructFromObject(data['id']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} createdTime
   */
  exports.prototype['createdTime'] = undefined;
  /**
   * @member {String} credentialsId
   */
  exports.prototype['credentialsId'] = undefined;
  /**
   * @member {module:model/DeviceCredentials.CredentialsTypeEnum} credentialsType
   */
  exports.prototype['credentialsType'] = undefined;
  /**
   * @member {String} credentialsValue
   */
  exports.prototype['credentialsValue'] = undefined;
  /**
   * @member {module:model/DeviceId} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * @member {module:model/DeviceCredentialsId} id
   */
  exports.prototype['id'] = undefined;


  /**
   * Allowed values for the <code>credentialsType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CredentialsTypeEnum = {
    /**
     * value: "ACCESS_TOKEN"
     * @const
     */
    "ACCESS_TOKEN": "ACCESS_TOKEN",
    /**
     * value: "X509_CERTIFICATE"
     * @const
     */
    "X509_CERTIFICATE": "X509_CERTIFICATE"  };


  return exports;
}));


