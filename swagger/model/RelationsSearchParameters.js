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
    root.ThingsboardRestApi.RelationsSearchParameters = factory(root.ThingsboardRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RelationsSearchParameters model module.
   * @module model/RelationsSearchParameters
   * @version 2.0
   */

  /**
   * Constructs a new <code>RelationsSearchParameters</code>.
   * @alias module:model/RelationsSearchParameters
   * @class
   * @param rootId {String} 
   * @param rootType {module:model/RelationsSearchParameters.RootTypeEnum} 
   * @param direction {module:model/RelationsSearchParameters.DirectionEnum} 
   * @param relationTypeGroup {module:model/RelationsSearchParameters.RelationTypeGroupEnum} 
   * @param maxLevel {Number} 
   */
  var exports = function(rootId, rootType, direction, relationTypeGroup, maxLevel) {
    var _this = this;

    _this['rootId'] = rootId;
    _this['rootType'] = rootType;
    _this['direction'] = direction;
    _this['relationTypeGroup'] = relationTypeGroup;
    _this['maxLevel'] = maxLevel;
  };

  /**
   * Constructs a <code>RelationsSearchParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RelationsSearchParameters} obj Optional instance to populate.
   * @return {module:model/RelationsSearchParameters} The populated <code>RelationsSearchParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rootId')) {
        obj['rootId'] = ApiClient.convertToType(data['rootId'], 'String');
      }
      if (data.hasOwnProperty('rootType')) {
        obj['rootType'] = ApiClient.convertToType(data['rootType'], 'String');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('relationTypeGroup')) {
        obj['relationTypeGroup'] = ApiClient.convertToType(data['relationTypeGroup'], 'String');
      }
      if (data.hasOwnProperty('maxLevel')) {
        obj['maxLevel'] = ApiClient.convertToType(data['maxLevel'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} rootId
   */
  exports.prototype['rootId'] = undefined;
  /**
   * @member {module:model/RelationsSearchParameters.RootTypeEnum} rootType
   */
  exports.prototype['rootType'] = undefined;
  /**
   * @member {module:model/RelationsSearchParameters.DirectionEnum} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * @member {module:model/RelationsSearchParameters.RelationTypeGroupEnum} relationTypeGroup
   */
  exports.prototype['relationTypeGroup'] = undefined;
  /**
   * @member {Number} maxLevel
   */
  exports.prototype['maxLevel'] = undefined;


  /**
   * Allowed values for the <code>rootType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RootTypeEnum = {
    /**
     * value: "TENANT"
     * @const
     */
    "TENANT": "TENANT",
    /**
     * value: "CUSTOMER"
     * @const
     */
    "CUSTOMER": "CUSTOMER",
    /**
     * value: "USER"
     * @const
     */
    "USER": "USER",
    /**
     * value: "DASHBOARD"
     * @const
     */
    "DASHBOARD": "DASHBOARD",
    /**
     * value: "ASSET"
     * @const
     */
    "ASSET": "ASSET",
    /**
     * value: "DEVICE"
     * @const
     */
    "DEVICE": "DEVICE",
    /**
     * value: "ALARM"
     * @const
     */
    "ALARM": "ALARM",
    /**
     * value: "RULE_CHAIN"
     * @const
     */
    "RULE_CHAIN": "RULE_CHAIN",
    /**
     * value: "RULE_NODE"
     * @const
     */
    "RULE_NODE": "RULE_NODE",
    /**
     * value: "ENTITY_VIEW"
     * @const
     */
    "ENTITY_VIEW": "ENTITY_VIEW",
    /**
     * value: "WIDGETS_BUNDLE"
     * @const
     */
    "WIDGETS_BUNDLE": "WIDGETS_BUNDLE",
    /**
     * value: "WIDGET_TYPE"
     * @const
     */
    "WIDGET_TYPE": "WIDGET_TYPE"  };

  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "FROM"
     * @const
     */
    "FROM": "FROM",
    /**
     * value: "TO"
     * @const
     */
    "TO": "TO"  };

  /**
   * Allowed values for the <code>relationTypeGroup</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RelationTypeGroupEnum = {
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


