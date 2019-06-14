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
    define(['ApiClient', 'model/RuleChainId', 'model/RuleNodeId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RuleChainId'), require('./RuleNodeId'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.RuleNode = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.RuleChainId, root.ThingsboardRestApi.RuleNodeId);
  }
}(this, function(ApiClient, RuleChainId, RuleNodeId) {
  'use strict';




  /**
   * The RuleNode model module.
   * @module model/RuleNode
   * @version 2.0
   */

  /**
   * Constructs a new <code>RuleNode</code>.
   * @alias module:model/RuleNode
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>RuleNode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuleNode} obj Optional instance to populate.
   * @return {module:model/RuleNode} The populated <code>RuleNode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additionalInfo')) {
        obj['additionalInfo'] = ApiClient.convertToType(data['additionalInfo'], 'String');
      }
      if (data.hasOwnProperty('configuration')) {
        obj['configuration'] = ApiClient.convertToType(data['configuration'], 'String');
      }
      if (data.hasOwnProperty('createdTime')) {
        obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Number');
      }
      if (data.hasOwnProperty('debugMode')) {
        obj['debugMode'] = ApiClient.convertToType(data['debugMode'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = RuleNodeId.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ruleChainId')) {
        obj['ruleChainId'] = RuleChainId.constructFromObject(data['ruleChainId']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} additionalInfo
   */
  exports.prototype['additionalInfo'] = undefined;
  /**
   * @member {String} configuration
   */
  exports.prototype['configuration'] = undefined;
  /**
   * @member {Number} createdTime
   */
  exports.prototype['createdTime'] = undefined;
  /**
   * @member {Boolean} debugMode
   */
  exports.prototype['debugMode'] = undefined;
  /**
   * @member {module:model/RuleNodeId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/RuleChainId} ruleChainId
   */
  exports.prototype['ruleChainId'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));

