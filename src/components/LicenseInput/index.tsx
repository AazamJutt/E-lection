import React, { useState } from "react";
import { licenseValidtor } from "../../helpers/validators";
import { TextInput, TextInputProps } from "react-native-paper";

interface LicenseInputProps extends TextInputProps {
  license: string;
  setLicense: (text: string) => void;
}

const LicenseInput = ({ license, setLicense, ...rest }: LicenseInputProps) => {
  const [error, setError] = useState("");

  function handleTextChange(value: string) {
    let formattedText = value;
    if (value.length !== license.length - 1) {
      formattedText = formatLicense(value);
    }
    setLicense(formattedText);
    setError(licenseValidtor(formattedText));
  }
  const formatLicense = (value: string) => {
    const cleanValue = value.toUpperCase().replace(/[^A-Z\d]/g, "");

    const parts: string[] = [];
    let lastIndex = 0;

    [4, 7, 9, 12, 16].forEach((index) => {
      if (cleanValue.length > lastIndex) {
        parts.push(cleanValue.substring(lastIndex, index));
        lastIndex = index;
      }
    });

    return parts.join("-");
  };

  return (
    <TextInput
      {...rest}
      maxLength={17}
      value={license}
      onChangeText={handleTextChange}
      error={!!error}
    />
  );
};

export default LicenseInput;
