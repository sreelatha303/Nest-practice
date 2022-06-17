import { Injectable } from '@nestjs/common';
// const { google } = require('googleapis')
// const Compute = require('@google-cloud/compute')

// const container = google.container('v1')
// const compute = new Compute.InstancesClient();

// const projectId = 'brooklyn-hospital-dev'
// const zone = 'us-east4-a'
// const nodePoolId = 'default-pool'
// const clusterId = 'tbh-dev'
@Injectable()
export class AppService {
  getHello(): any {
    //const res = this.getNodePoolSize();
    //return res;
    return "Hello World!";
  }
  // authorize() {
  //   const auth = new google.auth.GoogleAuth({
  //     scopes: [ 'https://www.googleapis.com/auth/cloud-platform' ],
  //   })
  //   return auth.getClient()
  // }
  
  // getNodePoolSize = async () => {
  //   const auth = await this.authorize()
  //   const clusterName = `projects/${projectId}/zones/${zone}/clusters/${clusterId}`
  //   const request = { name: clusterName, auth }
  //   const response = await container.projects.locations.clusters.get(request)
  //   const nodePool = response.data.nodePools.find(({ name }) => name === nodePoolId)
  //   const igName = nodePool.instanceGroupUrls[0].match(/.*\/instanceGroupManagers\/([a-z0-9-]*)$/)[1]
  //   const instanceGroup = await compute.zone(zone).instanceGroup(igName).get()
  //   console.log("test",instanceGroup[1 /* 0 is config, 1 is instance */].size)
  //   return instanceGroup[1 /* 0 is config, 1 is instance */].size
  // }
}
