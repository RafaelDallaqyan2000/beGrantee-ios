import {Text, View} from 'react-native';
import {transactionHistoryItemStyle} from './transactionHistoryItemStyle';
import {formatDate} from '../../helpers/formatDate';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useCallback, useState} from 'react';
import {THDetailsPopUp} from '../TransactionHistory/Components/THDetailsPopUp';
import { useTranslation } from 'react-i18next';

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
  statusColor: string;
  transactions: any;
  serviceName?: string;
  createdUtcDate: string;
}

interface HistoryItemsProps {
  data: HistoryDataProps;
}

export function ServiceHistoryItem({data}: HistoryItemsProps) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const {t} = useTranslation();

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
        <Text style={transactionHistoryItemStyle.title}>{t("Date | Time")}</Text>
        <Text style={transactionHistoryItemStyle.value}>
          {formatDate(data?.createdUtcDate)}
        </Text>
      </View>
      <View style={transactionHistoryItemStyle.flex}>
        <Text style={transactionHistoryItemStyle.title}>{t("Status")}</Text>
        <Text
          style={[
            transactionHistoryItemStyle.status,
            {color: data.statusColor ?? "orange"},
          ]}>
          {data?.status}
        </Text>
      </View>
      <View style={transactionHistoryItemStyle.flex}>
        <Text style={transactionHistoryItemStyle.title}>{t("Service")} </Text>
        <Text style={transactionHistoryItemStyle.value}>
          {data?.serviceName}
        </Text>
      </View>
      <View
        style={[
          transactionHistoryItemStyle.flex,
          transactionHistoryItemStyle.totalContainer,
        ]}>
        <Text style={transactionHistoryItemStyle.total}>{t("Total(AMD)")}</Text>
        <Text style={transactionHistoryItemStyle.total}>{data?.total}</Text>
      </View>
      <View style={transactionHistoryItemStyle.detailsContainer}>
        <TouchableOpacity
          onPress={handlePressDetails}
          style={transactionHistoryItemStyle.detailsTouchableContainer}>
          <Text style={transactionHistoryItemStyle.details}>{t("Details")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
