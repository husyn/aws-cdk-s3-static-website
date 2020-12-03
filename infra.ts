#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { WebsiteStack } from './website-stack';

import config from './config.json';

const app = new cdk.App();
new WebsiteStack(app, 'WebsiteStack', {
    stackName: `${config.PROJECT_NAME}-Stack`    
});
