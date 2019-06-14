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
    define(['ApiClient', 'model/EntityId', 'model/EventId', 'model/TenantId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntityId'), require('./EventId'), require('./TenantId'));
  } else {
    // Browser globals (root is window)
    if (!root.ThingsboardRestApi) {
      root.ThingsboardRestApi = {};
    }
    root.ThingsboardRestApi.Event = factory(root.ThingsboardRestApi.ApiClient, root.ThingsboardRestApi.EntityId, root.ThingsboardRestApi.EventId, root.ThingsboardRestApi.TenantId);
  }
}(this, function(ApiClient, EntityId, EventId, TenantId) {
  'use strict';




  /**
   * The Event model module.
   * @module model/Event
   * @version 2.0
   */

  /**
   * Constructs a new <code>Event</code>.
   * @alias module:model/Event
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('createdTime')) {
        obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Number');
      }
      if (data.hasOwnProperty('entityId')) {
        obj['entityId'] = EntityId.constructFromObject(data['entityId']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = EventId.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('tenantId')) {
        obj['tenantId'] = TenantId.constructFromObject(data['tenantId']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * @member {Number} createdTime
   */
  exports.prototype['createdTime'] = undefined;
  /**
   * @member {module:model/EntityId} entityId
   */
  exports.prototype['entityId'] = undefined;
  /**
   * @member {module:model/EventId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/TenantId} tenantId
   */
  exports.prototype['tenantId'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} uid
   */
  exports.prototype['uid'] = undefined;



  return exports;
}));


