import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import {Bucket} from '@aws-cdk/aws-s3';

import config from './config.json';

export class WebsiteStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3Bucket_documents_datasource:Bucket = new s3.Bucket(this, 'static-website-bucket', {
      bucketName: `${config.PROJECT_NAME}-bucket`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      websiteIndexDocument: config.WEBSITE.WEBSITE_INDEX_PAGE,
      websiteErrorDocument: config.WEBSITE.WEBSITE_ERROR_PAGE
    });
    
    new cdk.CfnOutput(this, 'Bucket', { value: s3Bucket_documents_datasource.bucketName });
  }
}
