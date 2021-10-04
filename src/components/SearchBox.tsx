import React, { ChangeEvent } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useGoogleMapsScript, Libraries } from "use-google-maps-script";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

interface ISearchBoxProps {
  onSelectAddress: (
    address: string,
    latitude: number | null,
    longitude: number | null
  ) => void;
  defaultValue: string;
}

const libraries: Libraries = ["places"];

const SearchBox = ({ onSelectAddress, defaultValue }: ISearchBoxProps) => {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: "AIzaSyDGI5VO_gI08wXWos33Co8pjVAuuntDXDo" ?? "",
    libraries,
  });

  if (!isLoaded) return null;
  if (loadError) return <div>Error loading</div>;

  return (
    <SearchInput
      onSelectAddress={onSelectAddress}
      defaultValue={defaultValue}
    />
  );
};

export default SearchBox;

export const SearchInput = ({
  onSelectAddress,
  defaultValue,
}: ISearchBoxProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 500, defaultValue });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      onSelectAddress("", null, null);
    }
    console.log(e.target.value);
  };

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      console.log("result", results[0])
      onSelectAddress(address, lat, lng);
    } catch (error) {
      console.error(`😱 Error:`, error);
    }
  };

  return (
    <Combobox openOnFocus onSelect={handleSelect}>
      <ComboboxInput
        id="search"
        value={value}
        onChange={handleChange}
        disabled={!ready}
        placeholder="Type your address..."
        className="rounded-2xl w-full p-2"
        autoComplete="off"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => {
              return <ComboboxOption key={place_id} value={description} />;
            })}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
