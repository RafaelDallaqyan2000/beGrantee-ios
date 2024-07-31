import {HttpTransportType, HubConnectionBuilder} from '@microsoft/signalr';
export let signal = new HubConnectionBuilder()
  .withUrl('http://45.133.104.210:50012/api/transactionHub', {
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets,
  })
  .withAutomaticReconnect()
  .build();


//http://staging-service.begrantee.com/api/transactionHub
//https://service-api.begrantee.com/api/transactionHub