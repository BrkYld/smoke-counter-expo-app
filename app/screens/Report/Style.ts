/* eslint-disable no-mixed-operators */
import { StyleSheet } from 'react-native';
import { GlobalStyle } from '../../constants/GlobalStyle';

export const Style = StyleSheet.create({
  tableRowTitle: {
    fontSize: GlobalStyle.width * 12 / 375,
    fontWeight: '700',
    fontFamily: 'RobotoRegular',
    color: GlobalStyle.color.text
  },
  tableRowDescription: {
    fontSize: GlobalStyle.width * 13 / 375,
    fontWeight: '400',
    fontFamily: 'RobotoRegular',
    color: GlobalStyle.color.text
  },
  productDescriptionText: {
    fontSize: GlobalStyle.width * 12 / 375,
    fontWeight: '400',
    fontFamily: 'RobotoRegular',
    color: GlobalStyle.color.text
  },
  dailyListContainer: {
    flex: 1,
    height: GlobalStyle.height * 241 / 657,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  dailyListWrapper: {
    flex: 345,
    backgroundColor: GlobalStyle.color.white,
    height: GlobalStyle.height * 226 / 657,
    borderRadius: 20,
    flexDirection: 'row'
  },
  dailyListItem: {
    flex: 323,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dailyListTitle: {
    flex: 23,
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyle.color.tabInactive,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dailyDateText: {
    color: GlobalStyle.color.tabInactive,
    fontSize: GlobalStyle.width * 12 / 375,
    fontFamily: 'RobotoRegular',
    fontWeight: '500'
  },
  productTableHeader: {
    flex: 17,
    flexDirection: 'row',
    borderBottomColor: GlobalStyle.color.tabInactive,
    borderBottomWidth: 1,
    backgroundColor: GlobalStyle.color.input
  },
  descriptionRowContainer: { flexDirection: 'row' },
  descriptionRowTitle: { flex: 0.4, flexDirection: 'row', justifyContent: 'space-between' },
  descriptionRowTitleText: { fontFamily: 'RobotoRegular', fontSize: GlobalStyle.height * 8 / 657, fontWeight: '700' },
  descriptionRowDescription: { flex: 0.9, flexDirection: 'row' },
  descriptionRowDescriptionText: { fontFamily: 'RobotoRegular', fontSize: GlobalStyle.height * 8 / 657, fontWeight: '400' },
  dailyDetailContainer: { height: GlobalStyle.height * 160 / 657, width: GlobalStyle.width * 0.9, justifyContent: 'flex-start' },
  dailyDetailWrapper: { height: GlobalStyle.height * 150 / 657, width: GlobalStyle.width * 0.9, backgroundColor: GlobalStyle.color.white, borderRadius: 16, alignItems: 'center' },
  dailyDetailTitle: {
    flex: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    width: GlobalStyle.width * 0.8,
    alignItems: 'flex-end',
    borderBottomColor: GlobalStyle.color.tabInactive
  },
  dailyDetailPeriodText: {
    color: GlobalStyle.color.tabInactive,
    fontSize: GlobalStyle.width * 14 / 375,
    fontFamily: 'RobotoRegular',
    fontWeight: '700'
  },
  dailyDetailContentContainer: { flex: 180, backgroundColor: 'white', justifyContent: 'space-evenly' },
  dailyDetailContentItem: { width: GlobalStyle.width * 0.8, flexDirection: 'row', alignItems: 'center' },
  dailyDetailContentTitle: { flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', flex: 1 },
  dailyDetailContentDescriptionText: {
    color: GlobalStyle.color.text,
    fontSize: GlobalStyle.width * 14 / 375,
    fontFamily: 'RobotoRegular',
    fontWeight: '500'
  },
  monthlyAmountContainer: {
    flex: 165,
    borderRadius: 16,
    backgroundColor: GlobalStyle.color.secondary,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  monthlyText: {
    color: GlobalStyle.color.secondaryLight,
    fontSize: GlobalStyle.height * 10 / 657,
    fontFamily: 'RobotoRegular',
    fontWeight: '500'
  },
  currentPaymentText: {
    color: GlobalStyle.color.white,
    fontFamily: 'RobotoRegular',
    fontWeight: '700',
    fontSize: GlobalStyle.height * 16 / 657
  },
  totalAmountContainer: {
    flex: 200,
    borderRadius: 16,
    backgroundColor: GlobalStyle.color.white,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  totalAmountText: {
    color: GlobalStyle.color.tabInactive,
    fontSize: GlobalStyle.height * 10 / 657,
    fontFamily: 'RobotoRegular',
    fontWeight: '500'
  },
  totalPaymentText: {
    color: GlobalStyle.color.text,
    fontFamily: 'RobotoRegular',
    fontWeight: '700',
    fontSize: GlobalStyle.height * 16 / 657
  },
  tableText: {
    fontFamily: 'RobotoMedium',
    color: GlobalStyle.color.text,
    fontSize: 8,
  },
  headerContainer: {
    flex: 1,
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: GlobalStyle.width,
    backgroundColor: GlobalStyle.color.zebraGrey,
    borderBottomWidth: 1,
    borderColor: GlobalStyle.color.tabInactive,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tableHeaderText: {
    fontFamily: 'RobotoMedium',
    color: GlobalStyle.color.text,
    fontSize: 8,
  },
});
