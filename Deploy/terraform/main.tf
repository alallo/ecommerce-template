resource "azurerm_resource_group" "ecommerce_rg" {
  name     = "rg-ecommui-${var.environment}-${var.location_short}-01"
  location = var.location
}

resource "azurerm_storage_account" "ecommerce_storage" {
  name                     = "saecommui${var.environment}${var.location_short}01"
  resource_group_name      = azurerm_resource_group.ecommerce_rg.name
  location                 = azurerm_resource_group.ecommerce_rg.location
  account_tier             = var.storage_tier
  account_replication_type = var.storage_replication_type
  account_kind             = "StorageV2"
  enable_https_traffic_only = true
  static_website {
    index_document = "index.html"
  }
}