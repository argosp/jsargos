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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AdminSettings', 'model/AdminSettingsId', 'model/Alarm', 'model/AlarmId', 'model/AlarmInfo', 'model/Asset', 'model/AssetId', 'model/AssetSearchQuery', 'model/AttributesEntityView', 'model/AuditLog', 'model/AuditLogId', 'model/ComponentDescriptor', 'model/ComponentDescriptorId', 'model/Customer', 'model/CustomerId', 'model/Dashboard', 'model/DashboardId', 'model/DashboardInfo', 'model/DeferredResultResponseEntity', 'model/Device', 'model/DeviceCredentials', 'model/DeviceCredentialsId', 'model/DeviceId', 'model/DeviceSearchQuery', 'model/EntityId', 'model/EntityRelation', 'model/EntityRelationInfo', 'model/EntityRelationsQuery', 'model/EntitySubtype', 'model/EntityTypeFilter', 'model/EntityView', 'model/EntityViewId', 'model/EntityViewSearchQuery', 'model/Event', 'model/EventId', 'model/NodeConnectionInfo', 'model/RelationsSearchParameters', 'model/ResponseEntity', 'model/RuleChain', 'model/RuleChainConnectionInfo', 'model/RuleChainId', 'model/RuleChainMetaData', 'model/RuleNode', 'model/RuleNodeId', 'model/ShortCustomerInfo', 'model/TelemetryEntityView', 'model/Tenant', 'model/TenantId', 'model/TextPageDataAsset', 'model/TextPageDataCustomer', 'model/TextPageDataDashboardInfo', 'model/TextPageDataDevice', 'model/TextPageDataEntityView', 'model/TextPageDataRuleChain', 'model/TextPageDataTenant', 'model/TextPageDataUser', 'model/TextPageDataWidgetsBundle', 'model/TextPageLink', 'model/TimePageDataAlarmInfo', 'model/TimePageDataAuditLog', 'model/TimePageDataDashboardInfo', 'model/TimePageDataEvent', 'model/TimePageLink', 'model/UpdateMessage', 'model/User', 'model/UserId', 'model/WidgetType', 'model/WidgetTypeId', 'model/WidgetsBundle', 'model/WidgetsBundleId', 'api/AdminControllerApi', 'api/AlarmControllerApi', 'api/AssetControllerApi', 'api/AuditLogControllerApi', 'api/AuthControllerApi', 'api/ComponentDescriptorControllerApi', 'api/CustomerControllerApi', 'api/DashboardControllerApi', 'api/DeviceApiControllerApi', 'api/DeviceControllerApi', 'api/EntityRelationControllerApi', 'api/EntityViewControllerApi', 'api/EventControllerApi', 'api/RpcControllerApi', 'api/RuleChainControllerApi', 'api/TelemetryControllerApi', 'api/TenantControllerApi', 'api/UserControllerApi', 'api/WidgetTypeControllerApi', 'api/WidgetsBundleControllerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AdminSettings'), require('./model/AdminSettingsId'), require('./model/Alarm'), require('./model/AlarmId'), require('./model/AlarmInfo'), require('./model/Asset'), require('./model/AssetId'), require('./model/AssetSearchQuery'), require('./model/AttributesEntityView'), require('./model/AuditLog'), require('./model/AuditLogId'), require('./model/ComponentDescriptor'), require('./model/ComponentDescriptorId'), require('./model/Customer'), require('./model/CustomerId'), require('./model/Dashboard'), require('./model/DashboardId'), require('./model/DashboardInfo'), require('./model/DeferredResultResponseEntity'), require('./model/Device'), require('./model/DeviceCredentials'), require('./model/DeviceCredentialsId'), require('./model/DeviceId'), require('./model/DeviceSearchQuery'), require('./model/EntityId'), require('./model/EntityRelation'), require('./model/EntityRelationInfo'), require('./model/EntityRelationsQuery'), require('./model/EntitySubtype'), require('./model/EntityTypeFilter'), require('./model/EntityView'), require('./model/EntityViewId'), require('./model/EntityViewSearchQuery'), require('./model/Event'), require('./model/EventId'), require('./model/NodeConnectionInfo'), require('./model/RelationsSearchParameters'), require('./model/ResponseEntity'), require('./model/RuleChain'), require('./model/RuleChainConnectionInfo'), require('./model/RuleChainId'), require('./model/RuleChainMetaData'), require('./model/RuleNode'), require('./model/RuleNodeId'), require('./model/ShortCustomerInfo'), require('./model/TelemetryEntityView'), require('./model/Tenant'), require('./model/TenantId'), require('./model/TextPageDataAsset'), require('./model/TextPageDataCustomer'), require('./model/TextPageDataDashboardInfo'), require('./model/TextPageDataDevice'), require('./model/TextPageDataEntityView'), require('./model/TextPageDataRuleChain'), require('./model/TextPageDataTenant'), require('./model/TextPageDataUser'), require('./model/TextPageDataWidgetsBundle'), require('./model/TextPageLink'), require('./model/TimePageDataAlarmInfo'), require('./model/TimePageDataAuditLog'), require('./model/TimePageDataDashboardInfo'), require('./model/TimePageDataEvent'), require('./model/TimePageLink'), require('./model/UpdateMessage'), require('./model/User'), require('./model/UserId'), require('./model/WidgetType'), require('./model/WidgetTypeId'), require('./model/WidgetsBundle'), require('./model/WidgetsBundleId'), require('./api/AdminControllerApi'), require('./api/AlarmControllerApi'), require('./api/AssetControllerApi'), require('./api/AuditLogControllerApi'), require('./api/AuthControllerApi'), require('./api/ComponentDescriptorControllerApi'), require('./api/CustomerControllerApi'), require('./api/DashboardControllerApi'), require('./api/DeviceApiControllerApi'), require('./api/DeviceControllerApi'), require('./api/EntityRelationControllerApi'), require('./api/EntityViewControllerApi'), require('./api/EventControllerApi'), require('./api/RpcControllerApi'), require('./api/RuleChainControllerApi'), require('./api/TelemetryControllerApi'), require('./api/TenantControllerApi'), require('./api/UserControllerApi'), require('./api/WidgetTypeControllerApi'), require('./api/WidgetsBundleControllerApi'));
  }
}(function(ApiClient, AdminSettings, AdminSettingsId, Alarm, AlarmId, AlarmInfo, Asset, AssetId, AssetSearchQuery, AttributesEntityView, AuditLog, AuditLogId, ComponentDescriptor, ComponentDescriptorId, Customer, CustomerId, Dashboard, DashboardId, DashboardInfo, DeferredResultResponseEntity, Device, DeviceCredentials, DeviceCredentialsId, DeviceId, DeviceSearchQuery, EntityId, EntityRelation, EntityRelationInfo, EntityRelationsQuery, EntitySubtype, EntityTypeFilter, EntityView, EntityViewId, EntityViewSearchQuery, Event, EventId, NodeConnectionInfo, RelationsSearchParameters, ResponseEntity, RuleChain, RuleChainConnectionInfo, RuleChainId, RuleChainMetaData, RuleNode, RuleNodeId, ShortCustomerInfo, TelemetryEntityView, Tenant, TenantId, TextPageDataAsset, TextPageDataCustomer, TextPageDataDashboardInfo, TextPageDataDevice, TextPageDataEntityView, TextPageDataRuleChain, TextPageDataTenant, TextPageDataUser, TextPageDataWidgetsBundle, TextPageLink, TimePageDataAlarmInfo, TimePageDataAuditLog, TimePageDataDashboardInfo, TimePageDataEvent, TimePageLink, UpdateMessage, User, UserId, WidgetType, WidgetTypeId, WidgetsBundle, WidgetsBundleId, AdminControllerApi, AlarmControllerApi, AssetControllerApi, AuditLogControllerApi, AuthControllerApi, ComponentDescriptorControllerApi, CustomerControllerApi, DashboardControllerApi, DeviceApiControllerApi, DeviceControllerApi, EntityRelationControllerApi, EntityViewControllerApi, EventControllerApi, RpcControllerApi, RuleChainControllerApi, TelemetryControllerApi, TenantControllerApi, UserControllerApi, WidgetTypeControllerApi, WidgetsBundleControllerApi) {
  'use strict';

  /**
   * For_instructions_how_to_authorize_requests_please_visit_a_hrefhttpthingsboard_iodocsreferencerest_apiREST_API_documentation_pagea_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ThingsboardRestApi = require('index'); // See note below*.
   * var xxxSvc = new ThingsboardRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ThingsboardRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ThingsboardRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ThingsboardRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AdminSettings model constructor.
     * @property {module:model/AdminSettings}
     */
    AdminSettings: AdminSettings,
    /**
     * The AdminSettingsId model constructor.
     * @property {module:model/AdminSettingsId}
     */
    AdminSettingsId: AdminSettingsId,
    /**
     * The Alarm model constructor.
     * @property {module:model/Alarm}
     */
    Alarm: Alarm,
    /**
     * The AlarmId model constructor.
     * @property {module:model/AlarmId}
     */
    AlarmId: AlarmId,
    /**
     * The AlarmInfo model constructor.
     * @property {module:model/AlarmInfo}
     */
    AlarmInfo: AlarmInfo,
    /**
     * The Asset model constructor.
     * @property {module:model/Asset}
     */
    Asset: Asset,
    /**
     * The AssetId model constructor.
     * @property {module:model/AssetId}
     */
    AssetId: AssetId,
    /**
     * The AssetSearchQuery model constructor.
     * @property {module:model/AssetSearchQuery}
     */
    AssetSearchQuery: AssetSearchQuery,
    /**
     * The AttributesEntityView model constructor.
     * @property {module:model/AttributesEntityView}
     */
    AttributesEntityView: AttributesEntityView,
    /**
     * The AuditLog model constructor.
     * @property {module:model/AuditLog}
     */
    AuditLog: AuditLog,
    /**
     * The AuditLogId model constructor.
     * @property {module:model/AuditLogId}
     */
    AuditLogId: AuditLogId,
    /**
     * The ComponentDescriptor model constructor.
     * @property {module:model/ComponentDescriptor}
     */
    ComponentDescriptor: ComponentDescriptor,
    /**
     * The ComponentDescriptorId model constructor.
     * @property {module:model/ComponentDescriptorId}
     */
    ComponentDescriptorId: ComponentDescriptorId,
    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer: Customer,
    /**
     * The CustomerId model constructor.
     * @property {module:model/CustomerId}
     */
    CustomerId: CustomerId,
    /**
     * The Dashboard model constructor.
     * @property {module:model/Dashboard}
     */
    Dashboard: Dashboard,
    /**
     * The DashboardId model constructor.
     * @property {module:model/DashboardId}
     */
    DashboardId: DashboardId,
    /**
     * The DashboardInfo model constructor.
     * @property {module:model/DashboardInfo}
     */
    DashboardInfo: DashboardInfo,
    /**
     * The DeferredResultResponseEntity model constructor.
     * @property {module:model/DeferredResultResponseEntity}
     */
    DeferredResultResponseEntity: DeferredResultResponseEntity,
    /**
     * The Device model constructor.
     * @property {module:model/Device}
     */
    Device: Device,
    /**
     * The DeviceCredentials model constructor.
     * @property {module:model/DeviceCredentials}
     */
    DeviceCredentials: DeviceCredentials,
    /**
     * The DeviceCredentialsId model constructor.
     * @property {module:model/DeviceCredentialsId}
     */
    DeviceCredentialsId: DeviceCredentialsId,
    /**
     * The DeviceId model constructor.
     * @property {module:model/DeviceId}
     */
    DeviceId: DeviceId,
    /**
     * The DeviceSearchQuery model constructor.
     * @property {module:model/DeviceSearchQuery}
     */
    DeviceSearchQuery: DeviceSearchQuery,
    /**
     * The EntityId model constructor.
     * @property {module:model/EntityId}
     */
    EntityId: EntityId,
    /**
     * The EntityRelation model constructor.
     * @property {module:model/EntityRelation}
     */
    EntityRelation: EntityRelation,
    /**
     * The EntityRelationInfo model constructor.
     * @property {module:model/EntityRelationInfo}
     */
    EntityRelationInfo: EntityRelationInfo,
    /**
     * The EntityRelationsQuery model constructor.
     * @property {module:model/EntityRelationsQuery}
     */
    EntityRelationsQuery: EntityRelationsQuery,
    /**
     * The EntitySubtype model constructor.
     * @property {module:model/EntitySubtype}
     */
    EntitySubtype: EntitySubtype,
    /**
     * The EntityTypeFilter model constructor.
     * @property {module:model/EntityTypeFilter}
     */
    EntityTypeFilter: EntityTypeFilter,
    /**
     * The EntityView model constructor.
     * @property {module:model/EntityView}
     */
    EntityView: EntityView,
    /**
     * The EntityViewId model constructor.
     * @property {module:model/EntityViewId}
     */
    EntityViewId: EntityViewId,
    /**
     * The EntityViewSearchQuery model constructor.
     * @property {module:model/EntityViewSearchQuery}
     */
    EntityViewSearchQuery: EntityViewSearchQuery,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The EventId model constructor.
     * @property {module:model/EventId}
     */
    EventId: EventId,
    /**
     * The NodeConnectionInfo model constructor.
     * @property {module:model/NodeConnectionInfo}
     */
    NodeConnectionInfo: NodeConnectionInfo,
    /**
     * The RelationsSearchParameters model constructor.
     * @property {module:model/RelationsSearchParameters}
     */
    RelationsSearchParameters: RelationsSearchParameters,
    /**
     * The ResponseEntity model constructor.
     * @property {module:model/ResponseEntity}
     */
    ResponseEntity: ResponseEntity,
    /**
     * The RuleChain model constructor.
     * @property {module:model/RuleChain}
     */
    RuleChain: RuleChain,
    /**
     * The RuleChainConnectionInfo model constructor.
     * @property {module:model/RuleChainConnectionInfo}
     */
    RuleChainConnectionInfo: RuleChainConnectionInfo,
    /**
     * The RuleChainId model constructor.
     * @property {module:model/RuleChainId}
     */
    RuleChainId: RuleChainId,
    /**
     * The RuleChainMetaData model constructor.
     * @property {module:model/RuleChainMetaData}
     */
    RuleChainMetaData: RuleChainMetaData,
    /**
     * The RuleNode model constructor.
     * @property {module:model/RuleNode}
     */
    RuleNode: RuleNode,
    /**
     * The RuleNodeId model constructor.
     * @property {module:model/RuleNodeId}
     */
    RuleNodeId: RuleNodeId,
    /**
     * The ShortCustomerInfo model constructor.
     * @property {module:model/ShortCustomerInfo}
     */
    ShortCustomerInfo: ShortCustomerInfo,
    /**
     * The TelemetryEntityView model constructor.
     * @property {module:model/TelemetryEntityView}
     */
    TelemetryEntityView: TelemetryEntityView,
    /**
     * The Tenant model constructor.
     * @property {module:model/Tenant}
     */
    Tenant: Tenant,
    /**
     * The TenantId model constructor.
     * @property {module:model/TenantId}
     */
    TenantId: TenantId,
    /**
     * The TextPageDataAsset model constructor.
     * @property {module:model/TextPageDataAsset}
     */
    TextPageDataAsset: TextPageDataAsset,
    /**
     * The TextPageDataCustomer model constructor.
     * @property {module:model/TextPageDataCustomer}
     */
    TextPageDataCustomer: TextPageDataCustomer,
    /**
     * The TextPageDataDashboardInfo model constructor.
     * @property {module:model/TextPageDataDashboardInfo}
     */
    TextPageDataDashboardInfo: TextPageDataDashboardInfo,
    /**
     * The TextPageDataDevice model constructor.
     * @property {module:model/TextPageDataDevice}
     */
    TextPageDataDevice: TextPageDataDevice,
    /**
     * The TextPageDataEntityView model constructor.
     * @property {module:model/TextPageDataEntityView}
     */
    TextPageDataEntityView: TextPageDataEntityView,
    /**
     * The TextPageDataRuleChain model constructor.
     * @property {module:model/TextPageDataRuleChain}
     */
    TextPageDataRuleChain: TextPageDataRuleChain,
    /**
     * The TextPageDataTenant model constructor.
     * @property {module:model/TextPageDataTenant}
     */
    TextPageDataTenant: TextPageDataTenant,
    /**
     * The TextPageDataUser model constructor.
     * @property {module:model/TextPageDataUser}
     */
    TextPageDataUser: TextPageDataUser,
    /**
     * The TextPageDataWidgetsBundle model constructor.
     * @property {module:model/TextPageDataWidgetsBundle}
     */
    TextPageDataWidgetsBundle: TextPageDataWidgetsBundle,
    /**
     * The TextPageLink model constructor.
     * @property {module:model/TextPageLink}
     */
    TextPageLink: TextPageLink,
    /**
     * The TimePageDataAlarmInfo model constructor.
     * @property {module:model/TimePageDataAlarmInfo}
     */
    TimePageDataAlarmInfo: TimePageDataAlarmInfo,
    /**
     * The TimePageDataAuditLog model constructor.
     * @property {module:model/TimePageDataAuditLog}
     */
    TimePageDataAuditLog: TimePageDataAuditLog,
    /**
     * The TimePageDataDashboardInfo model constructor.
     * @property {module:model/TimePageDataDashboardInfo}
     */
    TimePageDataDashboardInfo: TimePageDataDashboardInfo,
    /**
     * The TimePageDataEvent model constructor.
     * @property {module:model/TimePageDataEvent}
     */
    TimePageDataEvent: TimePageDataEvent,
    /**
     * The TimePageLink model constructor.
     * @property {module:model/TimePageLink}
     */
    TimePageLink: TimePageLink,
    /**
     * The UpdateMessage model constructor.
     * @property {module:model/UpdateMessage}
     */
    UpdateMessage: UpdateMessage,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserId model constructor.
     * @property {module:model/UserId}
     */
    UserId: UserId,
    /**
     * The WidgetType model constructor.
     * @property {module:model/WidgetType}
     */
    WidgetType: WidgetType,
    /**
     * The WidgetTypeId model constructor.
     * @property {module:model/WidgetTypeId}
     */
    WidgetTypeId: WidgetTypeId,
    /**
     * The WidgetsBundle model constructor.
     * @property {module:model/WidgetsBundle}
     */
    WidgetsBundle: WidgetsBundle,
    /**
     * The WidgetsBundleId model constructor.
     * @property {module:model/WidgetsBundleId}
     */
    WidgetsBundleId: WidgetsBundleId,
    /**
     * The AdminControllerApi service constructor.
     * @property {module:api/AdminControllerApi}
     */
    AdminControllerApi: AdminControllerApi,
    /**
     * The AlarmControllerApi service constructor.
     * @property {module:api/AlarmControllerApi}
     */
    AlarmControllerApi: AlarmControllerApi,
    /**
     * The AssetControllerApi service constructor.
     * @property {module:api/AssetControllerApi}
     */
    AssetControllerApi: AssetControllerApi,
    /**
     * The AuditLogControllerApi service constructor.
     * @property {module:api/AuditLogControllerApi}
     */
    AuditLogControllerApi: AuditLogControllerApi,
    /**
     * The AuthControllerApi service constructor.
     * @property {module:api/AuthControllerApi}
     */
    AuthControllerApi: AuthControllerApi,
    /**
     * The ComponentDescriptorControllerApi service constructor.
     * @property {module:api/ComponentDescriptorControllerApi}
     */
    ComponentDescriptorControllerApi: ComponentDescriptorControllerApi,
    /**
     * The CustomerControllerApi service constructor.
     * @property {module:api/CustomerControllerApi}
     */
    CustomerControllerApi: CustomerControllerApi,
    /**
     * The DashboardControllerApi service constructor.
     * @property {module:api/DashboardControllerApi}
     */
    DashboardControllerApi: DashboardControllerApi,
    /**
     * The DeviceApiControllerApi service constructor.
     * @property {module:api/DeviceApiControllerApi}
     */
    DeviceApiControllerApi: DeviceApiControllerApi,
    /**
     * The DeviceControllerApi service constructor.
     * @property {module:api/DeviceControllerApi}
     */
    DeviceControllerApi: DeviceControllerApi,
    /**
     * The EntityRelationControllerApi service constructor.
     * @property {module:api/EntityRelationControllerApi}
     */
    EntityRelationControllerApi: EntityRelationControllerApi,
    /**
     * The EntityViewControllerApi service constructor.
     * @property {module:api/EntityViewControllerApi}
     */
    EntityViewControllerApi: EntityViewControllerApi,
    /**
     * The EventControllerApi service constructor.
     * @property {module:api/EventControllerApi}
     */
    EventControllerApi: EventControllerApi,
    /**
     * The RpcControllerApi service constructor.
     * @property {module:api/RpcControllerApi}
     */
    RpcControllerApi: RpcControllerApi,
    /**
     * The RuleChainControllerApi service constructor.
     * @property {module:api/RuleChainControllerApi}
     */
    RuleChainControllerApi: RuleChainControllerApi,
    /**
     * The TelemetryControllerApi service constructor.
     * @property {module:api/TelemetryControllerApi}
     */
    TelemetryControllerApi: TelemetryControllerApi,
    /**
     * The TenantControllerApi service constructor.
     * @property {module:api/TenantControllerApi}
     */
    TenantControllerApi: TenantControllerApi,
    /**
     * The UserControllerApi service constructor.
     * @property {module:api/UserControllerApi}
     */
    UserControllerApi: UserControllerApi,
    /**
     * The WidgetTypeControllerApi service constructor.
     * @property {module:api/WidgetTypeControllerApi}
     */
    WidgetTypeControllerApi: WidgetTypeControllerApi,
    /**
     * The WidgetsBundleControllerApi service constructor.
     * @property {module:api/WidgetsBundleControllerApi}
     */
    WidgetsBundleControllerApi: WidgetsBundleControllerApi
  };

  return exports;
}));
