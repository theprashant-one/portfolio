//@ts-nocheck
import { Button, Spacer, Text } from "@nextui-org/react";

const HeartIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={filled ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SectionOne = () => {
  return (
    <div style={{ minHeight: "calc(100vh - 76px)" }}>
      <Text
        h4
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Hi, my name is
      </Text>
      <Text
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",

          "@xsMax": {
            fontSize: "70px",
          },
          fontSize: "80px",
        }}
        weight="bold"
      >
        Prashant Kumar
      </Text>

      <Text
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
          "@xsMax": {
            fontSize: "70px",
          },
          fontSize: "80px",
        }}
        weight="bold"
      >
        I build things for the web.
      </Text>

      <Text size={30}>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </Text>
      <Spacer x={3} />
      <Button shadow color="secondary">
        Resume
      </Button>
      <Spacer x={3} />
      <div
        style={{ display: "flex", justifyContent: "flex-start", columnGap: 10 }}
      >
        <Button
          auto
          color="error"
          icon={<HeartIcon fill="currentColor" filled />}
        />
        <Button
          color="error"
          icon={<HeartIcon fill="currentColor" filled />}
          auto
        />
        <Button
          auto
          color="error"
          icon={<HeartIcon fill="currentColor" filled />}
        />
      </div>
    </div>
  );
};

export default SectionOne;
