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
    define(['ApiClient', 'model/EntityId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntityId'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.EntityRelationInfo = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.EntityId);
  }
}(this, function(ApiClient, EntityId) {
  'use strict';




  /**
   * The EntityRelationInfo model module.
   * @module model/EntityRelationInfo
   * @version 2.0
   */

  /**
   * Constructs a new <code>EntityRelationInfo</code>.
   * @alias module:model/EntityRelationInfo
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>EntityRelationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntityRelationInfo} obj Optional instance to populate.
   * @return {module:model/EntityRelationInfo} The populated <code>EntityRelationInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additionalInfo')) {
        obj['additionalInfo'] = ApiClient.convertToType(data['additionalInfo'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = EntityId.constructFromObject(data['from']);
      }
      if (data.hasOwnProperty('fromName')) {
        obj['fromName'] = ApiClient.convertToType(data['fromName'], 'String');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = EntityId.constructFromObject(data['to']);
      }
      if (data.hasOwnProperty('toName')) {
        obj['toName'] = ApiClient.convertToType(data['toName'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('typeGroup')) {
        obj['typeGroup'] = ApiClient.convertToType(data['typeGroup'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} additionalInfo
   */
  exports.prototype['additionalInfo'] = undefined;
  /**
   * @member {module:model/EntityId} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {String} fromName
   */
  exports.prototype['fromName'] = undefined;
  /**
   * @member {module:model/EntityId} to
   */
  exports.prototype['to'] = undefined;
  /**
   * @member {String} toName
   */
  exports.prototype['toName'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/EntityRelationInfo.TypeGroupEnum} typeGroup
   */
  exports.prototype['typeGroup'] = undefined;


  /**
   * Allowed values for the <code>typeGroup</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeGroupEnum = {
    /**
     * value: "COMMON"
     * @const
     */
    "COMMON": "COMMON",
    /**
     * value: "ALARM"
     * @const
     */
    "ALARM": "ALARM",
    /**
     * value: "DASHBOARD"
     * @const
     */
    "DASHBOARD": "DASHBOARD",
    /**
     * value: "RULE_CHAIN"
     * @const
     */
    "RULE_CHAIN": "RULE_CHAIN",
    /**
     * value: "RULE_NODE"
     * @const
     */
    "RULE_NODE": "RULE_NODE"  };


  return exports;
}));

