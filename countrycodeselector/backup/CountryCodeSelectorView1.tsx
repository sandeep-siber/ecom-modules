import React, { useRef, useState } from "react";
import {
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { IProps } from "./CountryCodeSelector";
import { translate } from "@ext/utilities/config.i18n";
import { styles } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { CountryCodeType } from "./CountryCodeSelector.slice";
import configTheme from "../config.theme";

const CountryCodeSelectorView: React.FC<IProps> = ({
  testID,
  selectedCountryCode,
  phoneNumber,
  selectCountryCodeHandler,
  changePhoneNumberHandler,
  toggleDropdownHandler,
  isOpenDropdown,
  transformedCountriesData,
  hideDropdownHandler,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  

  const changeSearchTextHandler = (enteredText: string) => {
    setSearchText(enteredText);
  };

  const clearSearchTextHandler = () => {
    setSearchText("");
  };
  const filteredList = transformedCountriesData.filter((item) => {
    const upperLabel = item?.label.toUpperCase();
    const upperSearchText = "".toUpperCase();

    if (
      upperLabel?.startsWith(upperSearchText) &&
      upperLabel?.includes(upperSearchText)
    ) {
      return item;
    }
  });
  const containerHolder = useRef(null);

  return (
    <>
      <View ref={containerHolder} style={styles.mainContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={toggleDropdownHandler}
            style={styles.countryCodeTogglerContainer}
          >
            <Text style={styles.flag}>{selectedCountryCode?.flag}</Text>

            <Text style={styles.phoneText}> +</Text>
            <Text style={[styles.phoneText, styles.mr8]}>
              {selectedCountryCode?.phone}
            </Text>
            {isOpenDropdown ? (
              <AntDesign name="up" size={16} />
            ) : (
              <AntDesign name="down" size={16} />
            )}
          </TouchableOpacity>

          <View style={styles.seperator}></View>
        </View>
      </View>
      
      <Modal visible={isOpenDropdown} transparent={true}>
        <TouchableOpacity
          style={{ width: "100%", height: "100%" }}
          onPress={() => hideDropdownHandler()}
        >
          <TouchableWithoutFeedback>
            <View style={styles.newDropDown}>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={styles.searchInputText}
                  placeholder={translate(
                    "countrycodeselector.plrFeildSearchCountry"
                  )}
                  placeholderTextColor={configTheme.description}
                  keyboardType="default"
                  onFocus={() => {}}
                  onBlur={() => {}}
                  onChangeText={changeSearchTextHandler}
                  value={searchText}
                />
                <TouchableOpacity onPress={clearSearchTextHandler}>
                  <AntDesign name="close" size={16} style={styles.phoneText} />
                </TouchableOpacity>
              </View>
              <FlatList
                // nestedScrollEnabled
                // style={{ height: 100, maxHeight: 100, zIndex: 9 }}
                // contentContainerStyle={styles.listContainerStyle}
                data={filteredList}
                renderItem={({ item }) => (
                  <Text style={{ height: 40 }}>
                    +{item?.phone} {item?.flag} {item?.code} {item?.label}
                  </Text>
                )}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={EmptyListComp}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default CountryCodeSelectorView;

interface ICountriesListItemProps {
  item: CountryCodeType;
  selectItemHandler: (selectedCountry: CountryCodeType) => void;
}

const CountriesListItem: React.FC<ICountriesListItemProps> = ({
  item,
  selectItemHandler,
}) => {
  const itemPressHandler = () => {
    selectItemHandler(item);
  };
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => {}}>
      <Text style={[styles.flag, styles.mr8]}>{item?.flag}</Text>
      <Text style={[styles.flag, styles.mr8]}>{item?.label}</Text>
      <Text style={[styles.phoneText, styles.mr8]}> +</Text>
      <Text style={[styles.phoneText]}>{item?.phone}</Text>
    </TouchableOpacity>
  );
};

interface ICountriesListProps {
  list: CountryCodeType[];
  onSelectItem: (selectedCountry: CountryCodeType) => void;
}

const CountriesList: React.FC<ICountriesListProps> = ({
  list,
  onSelectItem,
}) => {
  return (
    <View style={styles.dropDownOpenStyle}>
      <View style={styles.searchInputTextContainer}></View>

      {/* <ScrollView style={styles.dropDownOpenStyle}>
        {filteredList.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              alert("Pressed!");
            }}
          >
            <Text style={{ height: 40 }}>Text</Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}
    </View>
  );
};

const EmptyListComp = () => (
  <Text style={styles.emptyItem}>
    {translate("countrycodeselector.textListIsEmpty")}
  </Text>
);
