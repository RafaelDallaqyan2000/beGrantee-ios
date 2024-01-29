import {HttpTransportType, HubConnectionBuilder} from '@microsoft/signalr';
export let signal = new HubConnectionBuilder()
  .withUrl('https://staging-service.begrantee.com/api/transactionHub', {
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets,
  })
  .withAutomaticReconnect()
  .build();
