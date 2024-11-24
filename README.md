# Deploy and manage a full-stack application on Kubernetes

<img src="https://github.com/user-attachments/assets/f3119776-2928-4a37-b6dd-b18eb43cc251" alt="newsletter app demo" height="500" align="center" /><br />

This newsletter project demonstrates the deployment and management of a full-stack web application on a Kubernetes cluster, featuring:
- Node.js backend
- MongoDB database
- Nginx frontend
- Docker containerization
- Kubernetes orchestration
- ConfigMaps for environment management
- Persistent Volumes for data storage

Follow along for hands-on experience with deploying, managing, and scaling a complete application on Kubernetes.

## Pre-requisites

**Docker**: Installed and running on the system.

**Minikube** (k8s): Installed and configured on the system.

**Node.js v20.15**: Installed on the system (for the backend &amp; frontend).

**MongoDB**: Installed on the system (for the database).

## To quickly deploy the application, run:

```sh
bash deploy
```

Then, navigate to `http://localhost:8000` from your host browser.

> Make sure to have `/mnt/data` on your local machine. The db seeks that particular location to store and persist clients' data.
