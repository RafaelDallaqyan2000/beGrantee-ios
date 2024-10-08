import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {transactionHistoryStyle} from './transactionHistoryStyle';
import {
  HistoryDataProps,
  ServiceHistoryItem,
} from '../ServiceHistoryItem/TransactionHistoryItem';
import {useQuery} from '@tanstack/react-query';
import {QueryRoute} from '../../react-query/query-routes';
import {getTransactionHistory} from '../../services';
import React, {useCallback, useContext, useState} from 'react';
import {AuthContext} from '../../../App';
import {useFocusEffect} from '@react-navigation/native';
import {notificationStyles} from '../NotificationScreen/notificationStyles';
import {NotifyIcon} from '../../icons';
import {LoadingTransactionsScreen} from '../../LoadingScreens';
import {ErrorScreen} from '../../components';

export function TransactionHistory() {
  const {token}: any = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [showEmptyScreen, setShowEmptyScreen] = useState(false);
  const [errorScreen, setShowErrorScreen] = useState(false);

  const {
    data: transactions,
    isLoading: loadingTransactions,
    refetch: reloadTransactions,
  } = useQuery({
    queryKey: [QueryRoute.transactionHistory],
    initialData: [],
    queryFn: () => getTransactionHistory({token}),
    onSuccess: data => {
      if (!data.length) {
        setShowEmptyScreen(true);
      } else {
        setShowEmptyScreen(false);
      }
      setLoading(false);
      setShowErrorScreen(false);
    },
    onError: error => {
      console.log(error, 'error from /api/transaction/history');
      setShowErrorScreen(true);
      setLoading(false);
    },
  });

  useFocusEffect(
    useCallback(() => {
      reloadTransactions();
    }, []),
  );

  if (loading) {
    return (
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <LoadingTransactionsScreen />
      </ScrollView>
    );
  }

  if (errorScreen) {
    return (
      <ErrorScreen
        marginTop={210}
        loadingScreen={loadingTransactions}
        refresh={reloadTransactions}
      />
    );
  }

  if (showEmptyScreen) {
    return (
      <ScrollView
        style={{backgroundColor: '#F8F8F9'}}
        refreshControl={
          <RefreshControl
            refreshing={loadingTransactions}
            onRefresh={reloadTransactions}
            progressBackgroundColor={'#FFF'}
            colors={['#3875F6', '']}
          />
        }>
        <View style={{alignItems: 'center'}}>
          <Text style={notificationStyles.ifNotNotification}>Transaction</Text>
          <NotifyIcon />
          <Text style={notificationStyles.emptyNotificationText}>
            OOOPS! It’s Empty
          </Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={{backgroundColor: '#FFF', paddingTop: 40}}>
      <Text style={transactionHistoryStyle.title}>Transaction</Text>
      <ScrollView
        style={transactionHistoryStyle.screen}
        refreshControl={
          <RefreshControl
            refreshing={loadingTransactions}
            onRefresh={reloadTransactions}
            progressBackgroundColor={'#FFF'}
            colors={['#3875F6', '']}
          />
        }>
        <View>
          {transactions?.map((data: HistoryDataProps) => (
            <ServiceHistoryItem data={data} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
