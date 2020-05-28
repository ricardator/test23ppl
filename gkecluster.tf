resource "google_container_cluster" "gke-cluster" {
    name               = "nodejsapi-cluster"
    network            = "default"
    location           = "southamerica-east1"
    initial_node_count = 3
}
