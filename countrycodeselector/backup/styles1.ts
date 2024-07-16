import { StyleSheet } from "react-native";
import configTheme from "../config.theme";
import { height, width } from "@ext/utilities/Dimentions";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: configTheme.white,
    width: width(90),
    // position: "relative",
    // zIndex: 0,

    // alignSelf: "center",
    borderWidth: 1,
    borderRadius: width(3),
    paddingHorizontal: width(4),

    flexDirection: "row",
    alignItems: "center",
    height: height(8),
    maxHeight: height(8),
    minHeight: height(8),
    alignSelf: "center",
  },

  countryCodeTogglerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: configTheme.white,
  },

  flag: {
    fontSize: 20,
    fontWeight: "600",
    opacity: 1,
  },

  phoneText: {
    fontSize: 16,
    fontWeight: "600",
    opacity: 1,
    marginHorizontal: width(0.25),
  },

  mr8: {
    marginRight: width(1),
  },

  seperator: {
    width: width(1),
    height: height(3),
    borderRightWidth: 1,
    borderRightColor: configTheme.black,
    marginHorizontal: width(1),
  },

  phoneNumberInputText: {
    // width: "60%",
    // color: configTheme.text,
    // fontSize: 16,
    // fontWeight: "600",
    // backgroundColor: configTheme.white,
  },
  dropDownOpenStyle: {
    borderWidth: 2,
    borderColor: "yellow",
    maxHeight: 100,
    // position: "absolute",
    width: width(90),
    top: height(8),
    height: height(80),
  },
  listContainerStyle: {
    height: 100,
    zIndex: 9,
    // marginTop: height(8),
  },
  dropdown: {
    // position: "absolute",
    // // top: height(7),
    // left: -1,
    // // zIndex: 100,
    // width: width(90),
    // // borderWidth: 1,
    // // borderTopWidth: 0,
    // // borderBottomLeftRadius: width(3),
    // // borderBottomRightRadius: width(3),
    // height: 100,
    // top: height(8),
    // flex: 1,
    // // borderColor: configTheme.black,
    // paddingVertical: width(2),
    // paddingHorizontal: width(4),
    // backgroundColor: configTheme.white,
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height(0.5),
  },

  searchInputTextContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: configTheme.description,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 4,
  },

  searchInputText: {
    width: width(80),
    color: configTheme.text,
    fontSize: 16,
    fontWeight: "600",
    backgroundColor: configTheme.white,
    height: 40,
  },
  emptyItem: {
    fontSize: 16,
    color: configTheme.black,
    fontWeight: "700",
    alignSelf: "center",
    margin: height(4),
  },
  newDropDown: {
    flex: 1,
    display: "flex",
    backgroundColor: "grey",
    alignSelf: "center",
    width: width(90),
    flexWrap: "wrap",
    height: height(30),
    maxHeight: height(30),
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
