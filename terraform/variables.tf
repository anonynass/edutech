variable "location" {
  description = "Azure region"
  type        = string
}

variable "resource_group_name" {
  description = "Resource group name"
  type        = string
}

variable "aks_name" {
  description = "AKS cluster name"
  type        = string
}

variable "acr_name" {
  description = "Azure Container Registry name"
  type        = string
}

variable "node_vm_size" {
  description = "AKS node VM size"
  type        = string
  default     = "Standard_D4ds_v4"
}
