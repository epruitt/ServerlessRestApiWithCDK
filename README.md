# ServerlessRestApiWithCDK

A serverless REST API built and deployed using the **AWS Cloud Development Kit (CDK)** with TypeScript. This project demonstrates how to define, provision, and manage cloud infrastructure as code using CDK constructs, with Lambda functions as the compute layer and DynamoDB as the data store.

---

## 🏗️ Architecture Overview

This project provisions a fully serverless REST API on AWS using the following services:

- **AWS API Gateway** — exposes RESTful HTTP endpoints
- **AWS Lambda** — handles request processing (written in TypeScript)
- **Amazon DynamoDB** — provides a scalable NoSQL data store
- **AWS CDK** — defines all infrastructure as TypeScript code

---

## 📁 Project Structure

```
ServerlessRestApiWithCDK/
├── bin/                  # CDK app entry point
├── lib/                  # CDK stack definitions (infrastructure)
├── services/             # Lambda function handlers (business logic)
├── test/                 # Unit tests (Jest)
├── cdk.json              # CDK toolkit configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── jest.config.js        # Jest test configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [AWS CLI](https://aws.amazon.com/cli/) configured with credentials
- [AWS CDK CLI](https://docs.aws.amazon.com/cdk/latest/guide/cli.html) installed globally

```bash
npm install -g aws-cdk
```

### Installation

```bash
git clone https://github.com/epruitt/ServerlessRestApiWithCDK.git
cd ServerlessRestApiWithCDK
npm install
```

---

## 🛠️ Useful Commands

| Command           | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm run build`   | Compile TypeScript to JavaScript                    |
| `npm run watch`   | Watch for changes and recompile                     |
| `npm run test`    | Run Jest unit tests                                 |
| `npx cdk synth`   | Emit the synthesized CloudFormation template        |
| `npx cdk diff`    | Compare deployed stack with current local state     |
| `npx cdk deploy`  | Deploy the stack to your default AWS account/region |
| `npx cdk destroy` | Tear down all deployed resources                    |

---

## 🧪 Testing

Unit tests are written with [Jest](https://jestjs.io/) and [ts-jest](https://kulshekhar.github.io/ts-jest/).

```bash
npm run test
```

---

## 📦 Key Dependencies

| Package                    | Purpose                                          |
| -------------------------- | ------------------------------------------------ |
| `aws-cdk-lib`              | Core CDK library for defining AWS infrastructure |
| `constructs`               | Base building blocks for CDK stacks              |
| `@aws-sdk/client-dynamodb` | AWS SDK v3 DynamoDB client                       |
| `@aws-sdk/util-dynamodb`   | DynamoDB marshalling utilities                   |
| `esbuild`                  | Fast bundler for Lambda function code            |
| `typescript`               | TypeScript compiler                              |

---

## ☁️ Deployment

Before deploying for the first time, bootstrap your AWS environment:

```bash
npx cdk bootstrap
```

Then deploy:

```bash
npx cdk deploy
```

CDK will synthesize a CloudFormation template and provision all resources in your configured AWS account and region.

---

## 📄 License

This project is open source. See the repository for details.
