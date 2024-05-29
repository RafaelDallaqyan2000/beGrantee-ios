import {HttpTransportType, HubConnectionBuilder} from '@microsoft/signalr';
export let signal = new HubConnectionBuilder()
  .withUrl('http://staging-service.begrantee.com/api/transactionHub', {
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets,
  })
  .withAutomaticReconnect()
  .build();

  //https://service-api.begrantee.com/api/transactionHub