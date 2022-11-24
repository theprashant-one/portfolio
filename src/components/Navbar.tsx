import { Navbar, Link, Text } from "@nextui-org/react";

export const NavbarComponent = () => {
  const collapseItems = ["About", "Experience", "Work", "Contact"];
  const collapseItemsObj = [
    {
      key: "About",
      href: "#section-2",
    },
    {
      key: "Experience",
      href: "#section-3",
    },
    {
      key: "Work",
      href: "#section-4",
    },
    {
      key: "Contact",
      href: "#section-5",
    },
  ];
  return (
    <Navbar isCompact isBordered variant="static">
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Text b color="inherit" weight={"bold"} size="$2xl">
          P
        </Text>
      </Navbar.Brand>

      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="underline-rounded"
        gap={40}
      >
        <Navbar.Link href="#section-2">About</Navbar.Link>
        <Navbar.Link href="#section-3">Experience</Navbar.Link>
        <Navbar.Link href="#section-4">Work</Navbar.Link>
        <Navbar.Link href="#section-5">Contact</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      ></Navbar.Content>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Collapse>
        {collapseItemsObj.map((item, index) => (
          <Navbar.CollapseItem
            key={item.key}
            activeColor="secondary"
            //   css={{
            //     color: index === collapseItems.length - 1 ? "$error" : "",
            //   }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.href}
            >
              {item.key}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
