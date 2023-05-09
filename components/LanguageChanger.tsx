import {
  useRadio,
  useRadioGroup,
  HStack,
  Box,
  UseRadioProps,
} from "@chakra-ui/react";
import i18n from "../i18n";

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
  const options = [
    { value: "zh-TW", label: "繁中" },
    { value: "ja", label: "日本語" },
    { value: "cn-TW", label: "简中" },
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "language",
    defaultValue: "zh-TW",
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
