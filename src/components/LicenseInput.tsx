import React, { useState } from "react";
import { licenseValidtor } from "../helpers/validators";
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
      formattedText = formatText(value);
    }
    setLicense(formattedText);
    setError(licenseValidtor(formattedText));
  }

  const formatText = (value: string) => {
    const cleanValue = value.toUpperCase().replace(/[^A-Z\d]/g, "");
    const firstPart = cleanValue.substring(0, 4);
    const secondPart = cleanValue.substring(4, 7);
    const thirdPart = cleanValue.substring(7, 9);
    const fourthPart = cleanValue.substring(9, 12);
    const fifthPart = cleanValue.substring(12);

    return `${firstPart}-${secondPart ? `${secondPart}-` : ""}${
      thirdPart ? `${thirdPart}-` : ""
    }${fourthPart ? `${fourthPart}-` : ""}${fifthPart}`;
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
