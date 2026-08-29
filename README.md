

## 📋 Overview

**nestjs-docker** is a containerized NestJS application that demonstrates best practices for dockerizing a progressive Node.js framework. This project provides a production-ready setup with Docker support, TypeScript, and automated testing capabilities.

### 🎯 Project Features

- **NestJS Framework**: A progressive Node.js framework for building efficient and scalable server-side applications
- **Docker Support**: Full Docker configuration for containerized deployment (5.2% Dockerfile)
- **TypeScript**: Strong typing and modern JavaScript features (80.5% TypeScript)
- **Testing**: Unit tests, E2E tests, and code coverage reporting
- **Development & Production Modes**: Multiple run modes for different environments

### 📊 Tech Stack

- **Primary Language**: TypeScript (80.5%)
- **Supporting Language**: JavaScript (14.3%)
- **Infrastructure**: Docker (5.2%)

---

## 🚀 Getting Started

### Project Setup

```bash
$ npm install
```

### Compile and Run the Project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Run Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Docker Deployment

Build and run the application in a Docker container:

```bash
# Build the Docker image
$ docker build -t nestjs-docker .

# Run the container
$ docker run -p 3000:3000 nestjs-docker
```

---

## 📚 Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Docker Documentation](https://docs.docker.com)
- [NestJS Discord Community](https://discord.gg/G7Qnnhy)
- [NestJS Official Courses](https://courses.nestjs.com/)

---

## 📄 License

This project is MIT licensed - see the LICENSE file for details.
