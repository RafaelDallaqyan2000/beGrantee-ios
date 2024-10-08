import {Text, View} from 'react-native';
import {TransactionDetails} from '../../ServiceHistoryItem/CardItem/TransactionDetails';
import {transactionHistoryItemStyle} from '../../ServiceHistoryItem/transactionHistoryItemStyle';
import {PopUp} from '../../../components';

interface THDetailsType {
  data: any;
  show: boolean;
  setShow: (e: boolean) => any;
}
export function THDetailsPopUp({data, show, setShow}: THDetailsType) {
  return (
    <PopUp
      open={show}
      close={() => setShow(false)}
      closeStyle={{top: 26, right: 20}}
      containerStyle={{
        paddingHorizontal: 30,
        paddingVertical: 60,
      }}>
      <View style={{justifyContent: 'center'}}>
        {data?.transactions?.map((el: any) => {
          return (
            <>
              <TransactionDetails card={el} />
              <View
                style={[
                  transactionHistoryItemStyle.lineBottomChild,
                  {
                    height: data.transactions.length === 1 ? 0 : 1,
                    marginBottom: data.transactions.length === 1 ? 0 : 12,
                  },
                ]}
              />
            </>
          );
        })}
        <View style={transactionHistoryItemStyle.itemTotalContainer}>
          <Text style={transactionHistoryItemStyle.itemTotalAmount}>
            Total(AMD)
          </Text>
          <Text style={transactionHistoryItemStyle.itemTotalAmount}>
            {data.total}
          </Text>
        </View>
      </View>
    </PopUp>
  );
}
