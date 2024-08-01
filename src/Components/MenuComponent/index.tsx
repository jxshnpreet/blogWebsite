import React, { useEffect } from "react";
import styled from "styled-components";
import { Fb, Instagram, Twitter } from "../../../public/icons"; // Adjust icons as needed
import Link from "next/link";

const MenuContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0px; /* Adjust according to your design */
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1000; /* Ensure it appears above other content */
`;

const MenuItem = styled.div`
  padding: 8px;
  cursor: pointer;
`;

const SocialIcons = styled.div`
  margin-top: 10px;
`;

interface MenuComponentProps {
  menuRef: React.RefObject<HTMLDivElement>;
  onOutsideClick?: () => void;
}

const MenuComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  MenuComponentProps
> = ({ menuRef, onOutsideClick }, ref) => {
  // Function to handle click events inside the MenuComponent
  const handleClickInside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
  };

  // Function to handle click on menu items
  const handleMenuItemClick = () => {
    onOutsideClick?.();
  };

  useEffect(() => {
    // Add event listener for click events inside the MenuComponent
    const handleDocumentClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        onOutsideClick?.(); // Call the parent component's function to close the menu
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [menuRef, onOutsideClick]);

  return (
    <MenuContainer ref={ref} onClick={handleClickInside}>
      <div className="d-flex flex-column justify-content-between h-100">
        <div className="d-flex flex-column align-items-center">
          <Link href="/" passHref>
            <MenuItem onClick={handleMenuItemClick}>Home</MenuItem>
          </Link>
          <MenuItem onClick={handleMenuItemClick}>About</MenuItem>
          <MenuItem onClick={handleMenuItemClick}>Contact</MenuItem>
        </div>
        <div>
          <SocialIcons>
            <Fb style={{ marginRight: "5px" }} />
            <Twitter style={{ marginRight: "5px" }} />
            <Instagram />
          </SocialIcons>
        </div>
      </div>
    </MenuContainer>
  );
};

export default React.forwardRef(MenuComponent);
