# Full Stack On-Premise Deployment 🚀

This repository contains a **Full-Stack Application** with **Frontend**, **Backend**, **Reverse Proxy using Nginx**, and **Kubernetes** for orchestration. It uses **Docker** for containerization, **Horizontal Pod Autoscaling (HPA)** for scaling, and is deployed on an **on-premise Ubuntu server**.

---

## 🚀 Tech Stack

- **Frontend**: HTML + Nginx 🎨
- **Backend**: Node.js ⚙️
- **Containerization**: Docker 🐋
- **Orchestration**: Kubernetes (Minikube) 🛠️
- **Reverse Proxy**: Nginx 🌐
- **Auto Scaling**: Horizontal Pod Autoscaler (HPA) 📈
- **Infrastructure**: On-Premise Ubuntu Server 💻

---

## 🏗 Architecture Overview

### 1. **Frontend and Backend Architecture**

- The **Frontend** is built with **HTML** and served by an **Nginx** server. The frontend provides the user interface, allowing users to interact with the backend.
- The **Backend** is built with **Node.js**, serving RESTful API endpoints to process requests. It is designed to handle business logic, interact with databases, and process data.
- Both the **Frontend** and **Backend** are packaged as Docker containers, ensuring consistency across development, testing, and production environments.

### 2. **Containerization and Deployment**

- Each service (**Frontend**, **Backend**, and **Nginx**) is containerized using **Docker**, making the system portable and consistent across different environments.
- These containers are deployed on a **Kubernetes** cluster (using **Minikube** for local setups) to enable scalability, fault tolerance, and easier management of resources.

### 3. **Kubernetes Orchestration**

- **Kubernetes** (with **Minikube** for local environments) is used to manage the deployment, scaling, and networking of the application’s components.
- The **Backend** and **Frontend** services are deployed as **Pods** in Kubernetes, ensuring high availability and fault tolerance.
- Kubernetes **Deployments** are defined to control the rollout of changes and ensure that the desired number of pods are always running.

### 4. **Reverse Proxy with Nginx**

- An **Nginx** container is used as a reverse proxy to route traffic between the frontend and backend services.
  - Requests to the root (`/`) are forwarded to the **Frontend** service.
  - Requests to `/api/` are routed to the **Backend** service.
- This ensures that users access the application through a single point, making it easier to manage and secure the application.

### 5. **Scaling and Resource Management with HPA**

- **Horizontal Pod Autoscaler (HPA)** is configured for both the **Frontend** and **Backend** services to automatically scale the application based on CPU utilization.
  - **HPA** monitors the resource usage and automatically adjusts the number of pods to handle varying load conditions, ensuring efficient resource usage without manual intervention.

### 6. **On-Premise Infrastructure**

- The application is deployed on an **on-premise Ubuntu Server**, providing full control over the hardware and network configuration.
- This setup ensures that the entire application stack runs within a private network, offering better security and performance compared to public cloud-based solutions.

---
