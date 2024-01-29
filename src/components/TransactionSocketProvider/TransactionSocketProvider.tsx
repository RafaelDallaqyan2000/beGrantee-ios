import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {signal} from '../../SignalR/SignalR';
import {HubConnectionState} from '@microsoft/signalr';

interface TransactionSocketProviderProps {
  children?: React.ReactNode;
}

export function TransactionSocketProvider({
  children,
}: TransactionSocketProviderProps) {
  const [servicePayment, setServicePayment] = useState();

  // const handleAcceptCancelPayment = useCallback(
  //   isAccept => {
  //     if (!signal) return;
  //     signal
  //       .invoke('AcceptServicePayment', {
  //         isAccept: isAccept,
  //         servicePaymentData: servicePayment,
  //       })
  //       .catch(e => console.log(e));
  //     setServicePayment({});
  //   },
  //   [signal, servicePayment],
  // );
  const AcceptServicePayment = (paymentData: any) => {
    setServicePayment(paymentData);
  };

  useEffect(
    (() => {
      (async () => {
        try {
          if (signal.state !== HubConnectionState.Connected) {
            signal.on('AcceptServicePayment', AcceptServicePayment);
            await signal.start();
          }
        } catch (e) {
          console.log(e);
        }
      })();
      return async () => {
        if (signal.state !== HubConnectionState.Disconnected) {
          await signal.stop();
        }
      };
    }) as never,
    [],
  );
  return <>{children}</>;
}
