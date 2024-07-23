import styled from "styled-components";

export const RedHatDisplay = styled.p`
  font-family: "Red Hat Display", sans-serif;
  font-optical-sizing: auto;
  font-style:  ${(props) => props.fontStyle || "normal"};
  /* Style properties based on props */
  font-weight: ${(props) => props.varweight || "300"}; /* Replace with default weight */
  color: ${(props) => props.color || "#000000"};
  background-color: ${(props) => props.backgcolor || 'none'};
  font-size: ${(props) => props.fontSize || "20px"};
  padding: ${(props) => props.varpadding || "0px "};
  display: ${(props) => props.display || "block"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  justify-content: ${(props) => props.justify || "none"};
  line-height: ${(props) => props.lineHeight || "1em"};
  text-align: ${(props) => props.textalign || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  margin: ${(props) => props.margin || "0px"};
  max-width: ${(props) => props.maxWidth || "auto"};
  width: ${(props) => props.width || "auto"};
  &:hover and :active {
    font-weight: ${(props) => props.hoverweight || props.varweight || "300"}; /* Replace with default weight */
    color: ${(props) => props.colorHover || props.color || "#000000"};
  }
  /* Media query for smaller screens */
  @media (max-width: 1000px) {
    font-size: ${(props) => props.fontSizeMobile || props.fontSize || "16px"}; /* Use fontSizeMobile or fallback to fontSize */
  }
  @media (max-width: 800px) {
    font-size: ${(props) => props.fontSizeMobile600 || props.fontSizeMobile || props.fontSize || "16px"}; /* Use fontSizeMobile or fallback to fontSize */
    line-height: ${(props) => props.movilLineHeight || props.lineHeight || "1em"};
    width: ${(props) => props.widthMovil || props.width};
    padding: ${(props) => props.MovilPadd || props.varpadding};
    text-align: ${(props) => props.textAlignMovil || props.textalign };
  }
  @media (max-width: 500px) {
    font-size: ${(props) => props.smFontSize || props.fontSizeMobile600 || props.fontSizeMobile || props.fontSize || "16px"}; /* Use fontSizeMobile or fallback to fontSize */
    line-height: ${(props) => props.smlineHeight || props.movilLineHeight || props.lineHeight || "1em"};
    width: ${(props) => props.smWidth || props.widthMovil || props.width};
    padding: ${(props) => props.smPadding || props.MovilPadd || props.varpadding};
    text-align: ${(props) => props.smTextAlign || props.textAlignMovil || props.textalign };
    color: ${(props) => props.colorMovil || props.color || "#000000"};
    margin: ${(props) => props.smMargin || props.margin || "0px"};

  }
`;

export const Btn = styled.button`
  background-color: ${(props) => props.backgcolor || "#3D12E1"};
  color: ${(props) => props.varcolor || "#FFFFFF"};
  padding: ${(props) => props.varpadding || "11px 17px"};
  margin: ${(props) => props.varmargin || "0px"};
  font-size: ${(props) => props.varfontsize || "16px"};
  font-family: ${(props) => props.varfontfamily || "Red Hat Display"};
  font-weight: ${(props) => props.varweight || "600"};
  min-width: ${(props) => props.varminwidth || "auto"};
  border-radius: ${(props) => props.borderRadius || "32px"};
  border: ${(props) => props.border || "none"};
  display: ${(props) => props.display || "flex"};
  align-items: center;
  justify-content: center;
  grid-gap: ${(props) => props.vargridgap || "none"};
  box-shadow: 0px 8px 8px rgba(119, 33, 107, 0.2);
  width: ${(props) => props.varwidth || "auto"};
  max-width: ${(props) => props.varmaxwidth || "auto"};
  cursor: pointer;
  :hover {
    transform: translateY(-5%);
  }
  @media (max-width: 900px) {
    margin: ${(props) => props.varmarginMovil || props.varmargin || "0px"};
    font-size: ${(props) => props.fontSizeMobile || props.varfontsize || "16px"};
    display: ${(props) => props.displayMovil || props.display || "flex"};
    padding: ${(props) => props.mdPadd || props.varpadding || "11px 17px"};

  }
  @media (max-width: 500px) {
    margin: ${(props) => props.smMargin || props.varmarginMovil || props.varmargin || "0px"};
    font-size: ${(props) => props.smFontSize || props.fontSizeMobile || props.varfontsize || "16px"};
    padding: ${(props) => props.smPadd || props.mdPadd || props.varpadding || "11px 17px"};
    width: ${(props) => props.smWidth || props.varwidth || "auto"};
  }
`;
export const Gridwrapper = styled.div`
  width: ${(props) => props.width || "auto"}; 
  max-width: ${(props) => props.maxwidth || "auto"};
  display: grid;
  grid-template-columns: ${(props) => props.gridtemplatecolumns || "auto" };
  grid-gap: ${(props) => props.gridgap || "0%"};
  margin: ${(props) => props.margin || "0px"};
  align-items: ${(props) => props.alignItems || "center"};
  padding: ${(props) => props.padding || '0px'};
  justify-content: ${(props) => props.justifyContent || 'center'};

  @media (max-width: 1000px) {
    grid-template-columns: ${(props) => props.gridtemplatecolumnsMd || props.gridtemplatecolumns};
    width: ${(props) => props.mdWidth || props.width}; 
    grid-gap: 20px;
    padding: ${(props) => props.mdpadding || props.padding || '0px'};

  }
  @media (max-width: 800px) {
    grid-template-columns: ${(props) => props.gridtemplatecolumnsSm || props.gridtemplatecolumnsMd || props.gridtemplatecolumns};
    width: ${(props) =>  props.movilWidth || props.mdWidth || props.width}; 
    margin: ${(props) => props.marginMovil || props.margin};
    grid-gap: ${(props) => props.gridgapTablet || props.gridgap};
    padding: ${(props) => props.paddingSm || props.mdpadding || props.padding || '0px'};
  }
  @media (max-width: 500px) {
    grid-template-columns: ${(props) => props.gridtemplatecolumnsSsm || props.gridtemplatecolumnsSm || props.gridtemplatecolumnsMd || props.gridtemplatecolumns};
    width: ${(props) =>  props.movilsmWidth || props.movilWidth || props.mdWidth || props.width}; 
    margin: ${(props) => props.marginSm || props.marginMovil || props.margin};
    grid-gap: ${(props) => props.gridgapMovil || props.gridgapTablet || props.gridgap};
  }
`;

export const Griditem = styled.div`
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth || "auto"};
  min-height: ${(props) => props.varminheight || "auto"};
  background-color: ${(props) => props.backgcolor || "none"};
  border-radius: ${(props) => props.borderRadius || "none"};
  box-shadow: ${(props) => props.shadow || 'none'};
  padding: ${(props) => props.padd || '0px'};
  display: ${(props) => props.display || 'block'};
  flex-direction: ${(props) => props.fdirection || 'column'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};

  @media (max-width: 1000px) {
    min-height: ${(props) => props.tabletHeight || props.varminheight};
  }
  @media (max-width: 668px) {
    min-height: ${(props) => props.movilHeight || props.varminheight};
    display: ${(props) => props.displayMovil || props.display };
  }
`;
export const ContentBox = styled.div`
  width: ${(props) => props.varwidth || "auto"};
  max-width: ${(props) => props.varmaxwidth || "auto"};
  margin: ${(props) => props.margin || "0px"};
  min-height: ${(props) => props.varminheight || "auto"};
  padding: ${(props) => props.varpadding || "0px"};
  display: ${(props) => props.display || 'block'};
  flex-direction: ${(props) => props.fdirection || 'column'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  @media (max-width: 900px) {
    max-width: ${(props) => props.maxwidhtMovil || props.varmaxwidth};
    padding: ${(props) => props.varpaddingm || "0px"};
  }
  @media (max-width: 700px) {
    padding: ${(props) => props.Movilpadding || props.varpadding};
  }
  @media (max-width: 400px) {
    min-height: ${(props) => props.smMinHeight || props.varminheight };
  }
`;