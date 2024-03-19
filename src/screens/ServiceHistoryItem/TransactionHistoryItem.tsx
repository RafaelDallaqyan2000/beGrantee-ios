import {Text, View} from 'react-native';
import {transactionHistoryItemStyle} from './transactionHistoryItemStyle';
import {formatDate} from '../../helpers/formatDate';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useCallback, useState} from 'react';
import {THDetailsPopUp} from '../TransactionHistory/Components/THDetailsPopUp';

type ColorType = {
  Rejected: string;
  Accepted: string;
  Cancelled: string;
  Pending: string;
  Default: string;
};

export interface HistoryDataProps {
  insertedDate: string;
  partnerName: string;
  total: string | number;
  status: keyof ColorType;
  transactions: any;
  serviceName?: string;
  createdUtcDate: string;
}

interface HistoryItemsProps {
  data: HistoryDataProps;
}

const colorWithStatus: ColorType = {
  Rejected: '#FF6565',
  Accepted: '#7ACD91',
  Cancelled: '#FFC37E',
  Pending: '#ED9F44',
  Default: '#ED9F44',
};

export function ServiceHistoryItem({data}: HistoryItemsProps) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handlePressDetails = useCallback(() => {
    setShowMoreInfo(true);
  }, [data]);

  return (
    <View style={transactionHistoryItemStyle.container}>
      <THDetailsPopUp
        data={data}
        show={showMoreInfo}
        setShow={setShowMoreInfo}
      />

      <View style={transactionHistoryItemStyle.flex}>
        <Text style={transactionHistoryItemStyle.title}>Date | Time</Text>
        <Text style={transactionHistoryItemStyle.value}>
          {formatDate(data?.createdUtcDate)}
        </Text>
      </View>
      <View style={transactionHistoryItemStyle.flex}>
        <Text style={transactionHistoryItemStyle.title}>Status</Text>
        <Text
          style={[
            transactionHistoryItemStyle.status,
            {color: colorWithStatus[data?.status] || colorWithStatus.Default},
          ]}>
          {data?.status}
        </Text>
      </View>
      <View style={transactionHistoryItemStyle.flex}>
        <Text style={transactionHistoryItemStyle.title}>Service </Text>
        <Text style={transactionHistoryItemStyle.value}>
          {data?.serviceName}
        </Text>
      </View>
      <View
        style={[
          transactionHistoryItemStyle.flex,
          transactionHistoryItemStyle.totalContainer,
        ]}>
        <Text style={transactionHistoryItemStyle.total}>Total(AMD)</Text>
        <Text style={transactionHistoryItemStyle.total}>{data?.total}</Text>
      </View>
      <View style={transactionHistoryItemStyle.detailsContainer}>
        <TouchableOpacity onPress={handlePressDetails}>
          <Text style={transactionHistoryItemStyle.details}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
