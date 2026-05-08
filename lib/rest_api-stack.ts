import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { join } from "path";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { AttributeType, Billing, TableV2 } from "aws-cdk-lib/aws-dynamodb";

export class RestApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //setting up the dynamodb table
    const employeesTable = new TableV2(this, "empTable", {
      partitionKey: {
        name: "id",
        type: AttributeType.STRING,
      },
      billing: Billing.onDemand(),
    });

    //setting up the Lambda
    const emplLambda = new NodejsFunction(this, "emplLambda", {
      runtime: Runtime.NODEJS_20_X,
      handler: "handler",
      entry: join(__dirname, "..", "services", "handler.ts"),
      environment: {
        TABLE_NAME: employeesTable.tableName,
      },
    });

    //granting lambda permission to read and write to dynamodb
    employeesTable.grantReadWriteData(emplLambda);

    //Creating api gateway
    const api = new RestApi(this, "empAPI");
    const emplResource = api.root.addResource("empl");

    //Creating lambda integration
    const emplLambdaIntegration = new LambdaIntegration(emplLambda);

    //Adding get anf post method
    emplResource.addMethod("GET", emplLambdaIntegration);
    emplResource.addMethod("POST", emplLambdaIntegration);
  }
}
