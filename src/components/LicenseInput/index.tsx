import React, { useEffect, useState } from "react";
import { licenseValidtor } from "../../helpers/validators";
import { TextInput, TextInputProps } from "react-native-paper";
import { LICENSE_REGEX } from "../../constants";

interface LicenseInputProps extends TextInputProps {
  license: string;
  setLicense: (text: string) => void;
  isValid: boolean;
  setIsValid: (val: boolean) => void;
}

const LicenseInput = ({
  license,
  isValid,
  setIsValid,
  setLicense,
  ...rest
}: LicenseInputProps) => {
  const [error, setError] = useState("");
  const handleTextChange = (value: string) => {
    let formattedText = value;
    if (value.length !== license.length - 1) {
      formattedText = formatLicense(value);
    }
    setLicense(formattedText);
    setError(licenseValidtor(formattedText));
  };
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

  useEffect(() => {
    setIsValid(LICENSE_REGEX.test(license));
  }, [license]);

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
