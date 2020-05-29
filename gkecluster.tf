resource "google_container_cluster" "gke-cluster" {
    name               = "v23ppl"
    network            = "default"
    location           = "southamerica-east1-a"
    initial_node_count = 3
}
