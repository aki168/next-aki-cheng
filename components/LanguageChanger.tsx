import {
  useRadio,
  useRadioGroup,
  HStack,
  Box,
  UseRadioProps,
} from "@chakra-ui/react";
import { I18nContext } from "react-i18next";
import { useContext } from "react";

interface Props extends UseRadioProps { label: string }

const RadioCard = (props: Props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="sm"
        boxShadow="sm"
        opacity={"85%"}
        _checked={{
          bg: "teal.400",
          color: "white",
          borderColor: "teal.400",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={1}
        py={1}
      >
        {props.label}
      </Box>
    </Box>
  );
};

export const LanguageChanger = () => {
  const { i18n }  = useContext(I18nContext);
  const options = [
    { value: "zh-TW", label: "繁中" },
    { value: "ja", label: "日本語" },
    { value: "en", label: "English"}
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "language",
    defaultValue: i18n.language,
    onChange: (option) => {
      i18n.changeLanguage(option);
    },
  });

  const group = getRootProps();
  return (
    <HStack {...group}>
      {options.map(({value, label}) => {
        const radio = getRadioProps({ value });
        return <RadioCard key={value} label={label} {...radio} />;
      })}
    </HStack>
  );
};
