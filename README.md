# ServerlessRestApiWithCDK

A serverless REST API built and deployed to AWS using the **AWS Cloud Development Kit (CDK)** with **TypeScript**. This project provisions all required cloud infrastructure as code and wires up Lambda-backed API endpoints with a DynamoDB data store — no servers to manage.

---

## Architecture Overview

```
Client
  │
  ▼
Amazon API Gateway (REST API)
  │
  ▼
AWS Lambda (TypeScript handlers)
  │
  ▼
Amazon DynamoDB (NoSQL data store)
```

All infrastructure is defined in code using **AWS CDK v2** and deployed via CloudFormation.

---

## Tech Stack

| Layer                  | Technology              |
| ---------------------- | ----------------------- |
| Infrastructure as Code | AWS CDK v2 (TypeScript) |
| Runtime                | AWS Lambda              |
| API                    | Amazon API Gateway      |
| Database               | Amazon DynamoDB         |
| Language               | TypeScript 5.x          |
| Bundler                | esbuild                 |
| Testing                | Jest                    |

---

## Project Structure

```
ServerlessRestApiWithCDK/
├── bin/                  # CDK app entry point
├── lib/                  # CDK stack definition (infrastructure)
├── services/             # Lambda function handlers (business logic)
├── test/                 # Jest unit tests
├── cdk.json              # CDK toolkit configuration
├── package.json          # Node.js dependencies and scripts
└── tsconfig.json         # TypeScript compiler config
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [AWS CLI](https://aws.amazon.com/cli/) configured with appropriate credentials
- [AWS CDK Toolkit](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html) installed globally

```bash
npm install -g aws-cdk
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Bootstrap your AWS environment (first time only)

```bash
npx cdk bootstrap
```

### 3. Build the project

```bash
npm run build
```

### 4. Deploy to AWS

```bash
npx cdk deploy
```

After deployment, the CDK will output the API Gateway endpoint URL.

---

## Available Scripts

| Command           | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm run build`   | Compile TypeScript to JavaScript                    |
| `npm run watch`   | Watch for changes and recompile                     |
| `npm run test`    | Run Jest unit tests                                 |
| `npx cdk deploy`  | Deploy the stack to your AWS account/region         |
| `npx cdk diff`    | Compare the deployed stack with current local state |
| `npx cdk synth`   | Emit the synthesized CloudFormation template        |
| `npx cdk destroy` | Tear down all provisioned AWS resources             |

---

## Key Dependencies

- [`aws-cdk-lib`](https://docs.aws.amazon.com/cdk/api/v2/) — AWS CDK core constructs
- [`@aws-sdk/client-dynamodb`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/) — DynamoDB client for Lambda handlers
- [`@aws-sdk/util-dynamodb`](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_util_dynamodb.html) — DynamoDB marshalling utilities
- [`esbuild`](https://esbuild.github.io/) — Fast TypeScript/JS bundler for Lambda packages
- [`constructs`](https://constructs.dev/) — CDK programming model base library

---

## Running Tests

```bash
npm run test
```

Tests are written with [Jest](https://jestjs.io/) and [ts-jest](https://kulshekhar.github.io/ts-jest/).

---

## Useful Resources

- [AWS CDK v2 Documentation](https://docs.aws.amazon.com/cdk/v2/guide/home.html)
- [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [Amazon DynamoDB Developer Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [Amazon API Gateway REST API](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-rest-api.html)

---

## 📄 License

This project is open source. See the repository for details.
