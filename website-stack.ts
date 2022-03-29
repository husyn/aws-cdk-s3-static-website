import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

import config from './config.json';

export class WebsiteStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3Bucket_staticwebsite:s3.Bucket = new s3.Bucket(this, 'static-website-bucket', {
      bucketName: `${config.PROJECT_NAME}-bucket`,
      publicReadAccess: true,      
      websiteIndexDocument: config.WEBSITE.WEBSITE_INDEX_PAGE,
      websiteErrorDocument: config.WEBSITE.WEBSITE_ERROR_PAGE      
    });

    
    
    new cdk.CfnOutput(this, 'Bucket Name', { 
      value: s3Bucket_staticwebsite.bucketName,
      exportName: "sample-s3-bucket" //Export name to reference this in other stack
     });
    new cdk.CfnOutput(this, "URL", {value: s3Bucket_staticwebsite.bucketWebsiteUrl});
  }
}
